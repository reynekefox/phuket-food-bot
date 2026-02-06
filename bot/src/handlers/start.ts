import { Context } from 'telegraf';
import { languageKeyboard, mainKeyboard } from '../keyboards/main.js';
import { t, setUserLanguage, translations, Language } from '../i18n/index.js';

export const handleStart = async (ctx: Context) => {
    // Show language selection first
    await ctx.replyWithMarkdown(
        translations.ru.selectLanguage,
        languageKeyboard()
    );
};

export const handleLanguageSelect = async (ctx: Context, lang: Language) => {
    const userId = ctx.from?.id;
    if (!userId) return;

    setUserLanguage(userId, lang);

    await ctx.answerCbQuery();
    await ctx.editMessageText(t(userId, 'welcome'), {
        parse_mode: 'Markdown',
        ...mainKeyboard(userId),
    });
};

export const handleBackToMenu = async (ctx: Context) => {
    const userId = ctx.from?.id;
    if (!userId) return;

    await ctx.answerCbQuery();
    await ctx.editMessageText(t(userId, 'welcome'), {
        parse_mode: 'Markdown',
        ...mainKeyboard(userId),
    });
};
