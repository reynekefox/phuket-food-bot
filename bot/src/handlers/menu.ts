import { Context } from 'telegraf';
import { backKeyboard } from '../keyboards/main.js';

const LOCATION_MESSAGE = `
📍 *Наша локация*

🏠 Адрес: Phuket Town, Thalang Road 123
📞 Телефон: +66 XX XXX XXXX

🕐 Время работы:
Пн-Вс: 10:00 - 22:00
`;

const DELIVERY_MESSAGE = `
🚚 *Информация о доставке*

⏱ Время доставки: 30-60 минут
📦 Минимальный заказ: 500 ฿
🆓 Бесплатная доставка от 1000 ฿

*Зоны доставки:*
• Phuket Town - 50 ฿
• Patong - 100 ฿
• Kata/Karon - 100 ฿
• Rawai/Chalong - 80 ฿
`;

const PAYMENT_MESSAGE = `
💳 *Способы оплаты*

• 💵 Наличные курьеру
• 💳 Банковская карта
• 📱 PromptPay
• 🏦 Банковский перевод

Оплата при получении или онлайн!
`;

export const handleLocation = async (ctx: Context) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(LOCATION_MESSAGE, {
        parse_mode: 'Markdown',
        ...backKeyboard(),
    });
};

export const handleDelivery = async (ctx: Context) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(DELIVERY_MESSAGE, {
        parse_mode: 'Markdown',
        ...backKeyboard(),
    });
};

export const handlePayment = async (ctx: Context) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(PAYMENT_MESSAGE, {
        parse_mode: 'Markdown',
        ...backKeyboard(),
    });
};
