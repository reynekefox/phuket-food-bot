# Phuket Food Delivery Bot 🍜

Telegram бот для доставки еды с Mini App для просмотра меню и оформления заказов.

## Структура проекта

```
Phuket_Bot/
├── bot/          # Telegram Bot (Node.js + Telegraf)
├── webapp/       # Mini App (React + Vite)
├── server/       # API Server (Express)
└── README.md
```

## Быстрый старт

### 1. Установка зависимостей

```bash
# Bot
cd bot && npm install

# Web App
cd ../webapp && npm install

# Server
cd ../server && npm install
```

### 2. Настройка

1. Создайте бота через [@BotFather](https://t.me/BotFather) и получите токен
2. Скопируйте `.env.example` в `.env` в каждой папке:

```bash
cd bot && cp .env.example .env
cd ../server && cp .env.example .env
```

3. Заполните переменные:
   - `BOT_TOKEN` - токен от BotFather
   - `ADMIN_CHAT_ID` - ваш Telegram ID (узнать: @userinfobot)
   - `WEBAPP_URL` - URL развёрнутого веб-приложения

### 3. Запуск для разработки

В трёх терминалах:

```bash
# Terminal 1 - Server
cd server && npm run dev

# Terminal 2 - Web App
cd webapp && npm run dev

# Terminal 3 - Bot
cd bot && npm run dev
```

### 4. Настройка Mini App

1. В @BotFather отправьте `/mybots`
2. Выберите вашего бота → Bot Settings → Menu Button
3. Установите URL вашего веб-приложения

## Deployment

### Railway / Vercel

1. Разверните `webapp/` на Vercel или Netlify
2. Разверните `server/` и `bot/` на Railway

### VPS

```bash
# Сборка
cd webapp && npm run build
cd ../server && npm run build
cd ../bot && npm run build

# Запуск с PM2
pm2 start server/dist/index.js --name phuket-server
pm2 start bot/dist/index.js --name phuket-bot
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Список категорий |
| GET | `/api/dishes` | Все блюда |
| GET | `/api/dishes?category=id` | Блюда категории |
| POST | `/api/orders` | Создать заказ |
| GET | `/api/orders/:id` | Получить заказ |

## Функционал

### Бот
- ✅ Команда /start с приветствием
- ✅ Кнопки: Локация, Доставка, Оплата, Instagram
- ✅ Кнопка "Меню" открывает Mini App
- ✅ Уведомления о новых заказах для админа
- ✅ Управление статусом заказа

### Mini App
- ✅ Категории блюд с фото-обложками
- ✅ Карточки блюд (фото, описание, цена)
- ✅ Корзина с управлением количеством
- ✅ Форма оформления заказа
- ✅ Интеграция с Telegram WebApp API

### API Server
- ✅ REST API для блюд и заказов
- ✅ Отправка уведомлений в Telegram
- ✅ CORS поддержка

## License

MIT
