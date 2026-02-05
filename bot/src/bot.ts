import { Telegraf } from 'telegraf';
import { handleStart, handleBackToMenu } from './handlers/start.js';
import { handleLocation, handleDelivery, handlePayment } from './handlers/menu.js';
import { handleOrderConfirm, handleOrderCancel, handleOrderShipped } from './handlers/order.js';

export const createBot = (token: string) => {
    const bot = new Telegraf(token);

    // Commands
    bot.start(handleStart);

    // Menu callbacks
    bot.action('location', handleLocation);
    bot.action('delivery', handleDelivery);
    bot.action('payment', handlePayment);
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
            const data = JSON.parse(ctx.webAppData?.data || '{}');
            console.log('Received order from Mini App:', data);

            // Order will be processed via API server
            await ctx.reply('✅ Данные получены! Обрабатываем ваш заказ...');
        } catch (error) {
            console.error('Error processing web app data:', error);
            await ctx.reply('❌ Ошибка обработки данных. Попробуйте снова.');
        }
    });

    return bot;
};
