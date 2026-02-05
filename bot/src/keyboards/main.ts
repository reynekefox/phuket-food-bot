import { Markup } from 'telegraf';

export const mainKeyboard = () => {
    return Markup.inlineKeyboard([
        [Markup.button.webApp('🍽 Меню', process.env.WEBAPP_URL || 'https://example.com')],
        [
            Markup.button.callback('📍 Локация', 'location'),
            Markup.button.callback('🚚 Доставка', 'delivery'),
        ],
        [
            Markup.button.url('📷 Instagram', 'https://instagram.com/your_account'),
            Markup.button.callback('💳 Оплата', 'payment'),
        ],
    ]);
};

export const backKeyboard = () => {
    return Markup.inlineKeyboard([
        [Markup.button.callback('« Назад в меню', 'back_to_menu')],
    ]);
};

export const orderStatusKeyboard = (orderId: string) => {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('✅ Подтвердить', `confirm_order_${orderId}`),
            Markup.button.callback('❌ Отменить', `cancel_order_${orderId}`),
        ],
        [Markup.button.callback('🚚 Отправлен', `shipped_order_${orderId}`)],
    ]);
};
