console.log('Starting bot...');
import 'dotenv/config';
console.log('Loaded dotenv, BOT_TOKEN:', process.env.BOT_TOKEN ? 'SET' : 'NOT SET');
import { createBot } from './bot.js';
console.log('Loaded bot module');

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
    console.error('❌ BOT_TOKEN is not defined in .env file');
    process.exit(1);
}

const bot = createBot(BOT_TOKEN);

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

// Start bot
bot.launch()
    .then(() => {
        console.log('🤖 Phuket Food Bot started successfully!');
        console.log('📱 Send /start to the bot to test');
    })
    .catch((error) => {
        console.error('❌ Failed to start bot:', error);
        process.exit(1);
    });

export { bot };
