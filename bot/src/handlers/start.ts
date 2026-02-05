import { Context } from 'telegraf';
import { mainKeyboard } from '../keyboards/main.js';

const WELCOME_MESSAGE = `
🍜 *Добро пожаловать в Phuket Food Delivery!*

Мы доставляем вкусную тайскую еду прямо к вашей двери.

*Что умеет этот бот:*
🍽 Просмотр меню с фото и ценами
🛒 Удобная корзина покупок
📍 Информация о локации и доставке
💳 Различные способы оплаты

Нажмите *Меню* чтобы выбрать блюда!
`;

export const handleStart = async (ctx: Context) => {
    await ctx.replyWithMarkdown(WELCOME_MESSAGE, mainKeyboard());
};

export const handleBackToMenu = async (ctx: Context) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(WELCOME_MESSAGE, {
        parse_mode: 'Markdown',
        ...mainKeyboard(),
    });
};
