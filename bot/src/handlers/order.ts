import { Telegraf, Context } from 'telegraf';
import { Order } from '../types/index.js';
import { orderStatusKeyboard } from '../keyboards/main.js';

export const sendOrderNotification = async (bot: Telegraf<Context>, order: Order) => {
    const adminChatId = process.env.ADMIN_CHAT_ID;

    if (!adminChatId) {
        console.error('ADMIN_CHAT_ID not set');
        return;
    }

    const itemsList = order.items
        .map((item) => `• ${item.dish.name} x${item.quantity} - ${item.dish.price * item.quantity} ฿`)
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
`;

    await bot.telegram.sendMessage(adminChatId, message, {
        parse_mode: 'Markdown',
        ...orderStatusKeyboard(order.id || 'unknown'),
    });
};

export const sendOrderConfirmation = async (bot: Telegraf<Context>, chatId: number, order: Order) => {
    const itemsList = order.items
        .map((item) => `• ${item.dish.name} x${item.quantity}`)
        .join('\n');

    const message = `
✅ *Ваш заказ размещён!*

📦 Заказ #${order.id}

*Состав:*
${itemsList}

💰 Итого: ${order.totalPrice} ฿

Ожидайте подтверждения! Курьер свяжется с вами.
`;

    await bot.telegram.sendMessage(chatId, message, { parse_mode: 'Markdown' });
};

export const sendOrderShipped = async (bot: Telegraf<Context>, chatId: number) => {
    const message = `
🚚 *Ваш заказ отправлен!*

Ожидайте, курьер с Вами свяжется! 📞
`;

    await bot.telegram.sendMessage(chatId, message, { parse_mode: 'Markdown' });
};

export const handleOrderConfirm = async (ctx: Context, orderId: string) => {
    await ctx.answerCbQuery('Заказ подтверждён ✅');
    await ctx.editMessageReplyMarkup(undefined);
    // TODO: Update order status in database and notify customer
};

export const handleOrderCancel = async (ctx: Context, orderId: string) => {
    await ctx.answerCbQuery('Заказ отменён ❌');
    await ctx.editMessageReplyMarkup(undefined);
    // TODO: Update order status in database and notify customer
};

export const handleOrderShipped = async (ctx: Context, orderId: string) => {
    await ctx.answerCbQuery('Статус обновлён: Отправлен 🚚');
    await ctx.editMessageReplyMarkup(undefined);
    // TODO: Update order status and send notification to customer
};
