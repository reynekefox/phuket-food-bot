import { Router } from 'express';
import { orders, dishes, Order } from '../db/schema.js';

const router = Router();

// Create new order
router.post('/orders', async (req, res) => {
    try {
        const { items, customerPhone, customerAddress, comment, telegramUserId, telegramUsername } = req.body;

        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'Order must contain at least one item' });
        }

        if (!customerPhone || !customerAddress) {
            return res.status(400).json({ error: 'Phone and address are required' });
        }

        // Calculate total price
        let totalPrice = 0;
        for (const item of items) {
            const dish = dishes.find((d) => d.id === item.dishId);
            if (dish) {
                totalPrice += dish.price * item.quantity;
            }
        }

        // Generate order ID
        const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

        const order: Order = {
            id: orderId,
            items,
            customerPhone,
            customerAddress,
            comment,
            telegramUserId,
            telegramUsername,
            totalPrice,
            status: 'pending',
            createdAt: new Date(),
        };

        // Save order (in-memory for demo, use database in production)
        orders.push(order);

        // Send notification to Telegram admin
        await sendTelegramNotification(order);

        res.json({
            success: true,
            orderId: order.id,
            totalPrice: order.totalPrice,
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
});

// Get order by ID
router.get('/orders/:id', (req, res) => {
    const order = orders.find((o) => o.id === req.params.id);

    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
});

// Update order status
router.patch('/orders/:id/status', (req, res) => {
    const { status } = req.body;
    const order = orders.find((o) => o.id === req.params.id);

    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }

    order.status = status;
    res.json(order);
});

// Send Telegram notification
async function sendTelegramNotification(order: Order) {
    const botToken = process.env.BOT_TOKEN;
    const adminChatId = process.env.ADMIN_CHAT_ID;

    if (!botToken || !adminChatId) {
        console.log('Bot token or admin chat ID not configured, skipping notification');
        return;
    }

    const itemsList = order.items
        .map((item) => {
            const dish = dishes.find((d) => d.id === item.dishId);
            return dish ? `• ${dish.name} x${item.quantity} - ${dish.price * item.quantity} ฿` : '';
        })
        .filter(Boolean)
        .join('\n');

    const message = `
🆕 *Новый заказ!*

📦 *Заказ #${order.id}*

*Состав заказа:*
${itemsList}

💰 *Итого: ${order.totalPrice} ฿*

👤 *Клиент:*
📱 Телефон: ${order.customerPhone}
📍 Адрес: ${order.customerAddress}
${order.comment ? `💬 Комментарий: ${order.comment}` : ''}
${order.telegramUsername ? `👤 Telegram: @${order.telegramUsername}` : ''}
`.trim();

    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: adminChatId,
                text: message,
                parse_mode: 'Markdown',
            }),
        });

        if (!response.ok) {
            console.error('Failed to send Telegram notification:', await response.text());
        }
    } catch (error) {
        console.error('Error sending Telegram notification:', error);
    }
}

export default router;
