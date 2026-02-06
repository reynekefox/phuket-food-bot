import { Telegraf } from 'telegraf';
import { handleStart, handleBackToMenu, handleLanguageSelect } from './handlers/start.js';
import { handleLocation, handleDelivery, handlePayment, handleGallery, handleContact } from './handlers/menu.js';
import { handleOrderConfirm, handleOrderCancel, handleOrderShipped } from './handlers/order.js';
import { t, Language } from './i18n/index.js';

export const createBot = (token: string) => {
    const bot = new Telegraf(token);

    // Commands
    bot.start(handleStart);

    // Language selection
    bot.action('lang_ru', (ctx) => handleLanguageSelect(ctx, 'ru'));
    bot.action('lang_en', (ctx) => handleLanguageSelect(ctx, 'en'));

    // Menu callbacks
    bot.action('location', handleLocation);
    bot.action('delivery', handleDelivery);
    bot.action('payment', handlePayment);
    bot.action('gallery', handleGallery);
    bot.action('contact', handleContact);
    bot.action('back_to_menu', handleBackToMenu);

    // Order management callbacks
    bot.action(/confirm_order_(.+)/, async (ctx) => {
        const orderId = ctx.match[1];
        await handleOrderConfirm(ctx, orderId);
    });

    bot.action(/cancel_order_(.+)/, async (ctx) => {
        const orderId = ctx.match[1];
        await handleOrderCancel(ctx, orderId);
    });

    bot.action(/shipped_order_(.+)/, async (ctx) => {
        const orderId = ctx.match[1];
        await handleOrderShipped(ctx, orderId);
    });

    // Handle web app data (orders from Mini App)
    bot.on('web_app_data', async (ctx) => {
        try {
            const rawData = ctx.webAppData?.data;
            const data = JSON.parse(typeof rawData === 'string' ? rawData : '{}');
            console.log('Received order from Mini App:', data);

            const userId = ctx.from?.id;
            const message = userId ? t(userId, 'orderReceived') : '✅ Order received!';
            await ctx.reply(message);
        } catch (error) {
            console.error('Error processing web app data:', error);
            const userId = ctx.from?.id;
            const message = userId ? t(userId, 'orderError') : '❌ Error processing order.';
            await ctx.reply(message);
        }
    });

    return bot;
};
