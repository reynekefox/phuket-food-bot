import { Context } from 'telegraf';
import { backKeyboard } from '../keyboards/main.js';
import { t } from '../i18n/index.js';

export const handleLocation = async (ctx: Context) => {
    const userId = ctx.from?.id;
    if (!userId) return;

    await ctx.answerCbQuery();
    await ctx.editMessageText(t(userId, 'location'), {
        parse_mode: 'Markdown',
        ...backKeyboard(userId),
    });
};

export const handleDelivery = async (ctx: Context) => {
    const userId = ctx.from?.id;
    if (!userId) return;

    await ctx.answerCbQuery();
    await ctx.editMessageText(t(userId, 'delivery'), {
        parse_mode: 'Markdown',
        ...backKeyboard(userId),
    });
};

export const handlePayment = async (ctx: Context) => {
    const userId = ctx.from?.id;
    if (!userId) return;

    await ctx.answerCbQuery();
    await ctx.editMessageText(t(userId, 'payment'), {
        parse_mode: 'Markdown',
        ...backKeyboard(userId),
    });
};

export const handleGallery = async (ctx: Context) => {
    const userId = ctx.from?.id;
    if (!userId) return;

    await ctx.answerCbQuery();
    // For now, just show a placeholder - you can add gallery photos later
    await ctx.editMessageText('🖼 *Галерея / Gallery*\n\nФотографии интерьера скоро будут добавлены!\nInterior photos coming soon!', {
        parse_mode: 'Markdown',
        ...backKeyboard(userId),
    });
};

export const handleContact = async (ctx: Context) => {
    const userId = ctx.from?.id;
    if (!userId) return;

    await ctx.answerCbQuery();
    await ctx.editMessageText('💬 *Связаться с менеджером / Contact Manager*\n\nНапишите нам: @nestcafe\\_phuket\nContact us: @nestcafe\\_phuket', {
        parse_mode: 'Markdown',
        ...backKeyboard(userId),
    });
};
