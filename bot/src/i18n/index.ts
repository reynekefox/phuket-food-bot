export type Language = 'ru' | 'en';

// Simple in-memory storage for user language preferences
const userLanguages = new Map<number, Language>();

export const getUserLanguage = (userId: number): Language => {
    return userLanguages.get(userId) || 'ru';
};

export const setUserLanguage = (userId: number, language: Language): void => {
    userLanguages.set(userId, language);
};

export const translations = {
    ru: {
        welcome: `
🕊️ *Добро пожаловать в Nest cafe!*

Это кафе в современном минималистичном стиле с теплыми природными акцентами и спокойной атмосферой.

У нас есть отдельная зона для нетворкингов, мастер-классов и встреч, а также уютная комната с настольными играми.

*Что умеет этот бот:*
🍽️ Просмотр меню с фото и ценами
🛋️ Просмотр галереи с интерьером
📍 Информация о локации
🚚 Условия доставки
💳 Различные способы оплаты

Нажмите *Меню*, чтобы выбрать блюда, или изучите другие разделы 👇
`,
        location: `
📍 *Наша локация*

🏠 Адрес: 6, 17 Rasadanusorn Rd, Tambon Ratsada, Mueang Phuket District, Phuket 83000
📞 Телефон: +66 617866071

🕐 Время работы:
Пн-Вс: 09:00 - 21:00
`,
        delivery: `
🚚 *Информация о доставке*

⏱ Время доставки: 30-60 минут
📦 Минимальный заказ: 500 ฿
🆓 Бесплатная доставка от 1000 ฿

*Зоны доставки:*
• Phuket Town - 50 ฿
• Patong - 100 ฿
• Kata/Karon - 100 ฿
• Rawai/Chalong - 80 ฿
`,
        payment: `
💳 *Способы оплаты*

• 💵 Наличные курьеру
• 💳 Банковская карта
• 📱 PromptPay
• 🏦 Банковский перевод

Оплата при получении или онлайн!
`,
        selectLanguage: '🌐 Выберите язык / Select language:',
        orderReceived: '✅ Данные получены! Обрабатываем ваш заказ...',
        orderError: '❌ Ошибка обработки данных. Попробуйте снова.',
        buttons: {
            menu: '🍽 Меню',
            location: '📍 Локация',
            delivery: '🚚 Доставка',
            gallery: '🖼 Галерея',
            instagram: '📸 Instagram',
            contact: '💬 Связаться',
            payment: '💳 Оплата',
            back: '« Назад в меню',
        },
    },
    en: {
        welcome: `
🕊️ *Welcome to Nest Cafe!*

A café designed in a modern minimalist style with warm natural accents and a calm, relaxed atmosphere.

We have a dedicated area for networking events, workshops, and meetings, as well as a cozy room with board games.

*What this bot can do:*
🍽️ View the menu with photos and prices
🛋️ Browse the interior gallery
📍 Get location information
🚚 Delivery details
💳 Various payment methods

Tap *Menu* to choose your dishes, or explore the other sections below 👇
`,
        location: `
📍 *Our Location*

🏠 Address: 6, 17 Rasadanusorn Rd, Tambon Ratsada, Mueang Phuket District, Phuket 83000
📞 Phone: +66 617866071

🕐 Working hours:
Mon-Sun: 09:00 - 21:00
`,
        delivery: `
🚚 *Delivery Information*

⏱ Delivery time: 30-60 minutes
📦 Minimum order: 500 ฿
🆓 Free delivery from 1000 ฿

*Delivery zones:*
• Phuket Town - 50 ฿
• Patong - 100 ฿
• Kata/Karon - 100 ฿
• Rawai/Chalong - 80 ฿
`,
        payment: `
💳 *Payment Methods*

• 💵 Cash on delivery
• 💳 Bank card
• 📱 PromptPay
• 🏦 Bank transfer

Pay on delivery or online!
`,
        selectLanguage: '🌐 Выберите язык / Select language:',
        orderReceived: '✅ Data received! Processing your order...',
        orderError: '❌ Error processing data. Please try again.',
        buttons: {
            menu: '🍽️ Menu',
            location: '📍 Location',
            delivery: '🚚 Delivery',
            gallery: '🖼️ Gallery',
            instagram: '📸 Instagram',
            contact: '💬 Contact Manager',
            payment: '💳 Payment',
            back: '« Back to menu',
        },
    },
};

export const t = (userId: number, key: keyof typeof translations.ru): string => {
    const lang = getUserLanguage(userId);
    return translations[lang][key] as string;
};

export const getButtons = (userId: number) => {
    const lang = getUserLanguage(userId);
    return translations[lang].buttons;
};
