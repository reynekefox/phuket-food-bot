import { Markup } from 'telegraf';
import { getButtons, Language } from '../i18n/index.js';

export const languageKeyboard = () => {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('🇷🇺 Русский', 'lang_ru'),
            Markup.button.callback('🇬🇧 English', 'lang_en'),
        ],
    ]);
};

export const mainKeyboard = (userId: number) => {
    const buttons = getButtons(userId);
    return Markup.inlineKeyboard([
        [Markup.button.webApp(buttons.menu, process.env.WEBAPP_URL || 'https://example.com')],
        [
            Markup.button.callback(buttons.location, 'location'),
            Markup.button.callback(buttons.delivery, 'delivery'),
        ],
        [
            Markup.button.callback(buttons.gallery, 'gallery'),
            Markup.button.callback(buttons.payment, 'payment'),
        ],
        [
            Markup.button.url(buttons.instagram, 'https://www.instagram.com/nestcafe_phuket?igsh=MW5iMmhiNXBmMm4yeA=='),
            Markup.button.callback(buttons.contact, 'contact'),
        ],
    ]);
};

export const backKeyboard = (userId: number) => {
    const buttons = getButtons(userId);
    return Markup.inlineKeyboard([
        [Markup.button.callback(buttons.back, 'back_to_menu')],
    ]);
};

export const orderStatusKeyboard = (orderId: string) => {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback('✅ Confirm', `confirm_order_${orderId}`),
            Markup.button.callback('❌ Cancel', `cancel_order_${orderId}`),
        ],
        [Markup.button.callback('🚚 Shipped', `shipped_order_${orderId}`)],
    ]);
};
