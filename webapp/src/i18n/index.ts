export type Language = 'ru' | 'en';

// Get language from localStorage or default to Russian
export const getLanguage = (): Language => {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'ru') return saved;
    return 'ru';
};

export const setLanguage = (lang: Language): void => {
    localStorage.setItem('language', lang);
    window.dispatchEvent(new Event('languageChange'));
};

// Category translations
export const categoryTranslations: Record<string, Record<Language, string>> = {
    breakfast: { ru: '🍳 Завтраки', en: '🍳 Breakfast' },
    pancakes: { ru: '🥞 Блинчики', en: '🥞 Pancakes' },
    syrniki: { ru: '🧀 Сырники', en: '🧀 Syrniki (Cottage Cheese Pancakes)' },
    porridge: { ru: '🥣 Каши', en: '🥣 Porridge' },
};

// Dish translations
export const dishTranslations: Record<string, { name: Record<Language, string>; description: Record<Language, string> }> = {
    // Breakfast
    'english-breakfast': {
        name: { ru: 'Английский завтрак', en: 'English Breakfast' },
        description: {
            ru: '2 яйца · бекон · 2 сосиски · овощной микс (салат) · хлеб',
            en: '2 eggs · bacon · 2 sausages · vegetable mix (salad) · bread'
        },
    },
    'scramble': {
        name: { ru: 'Скрэмбл', en: 'Scrambled Eggs' },
        description: { ru: '2 яйца · овощной микс (салат) · хлеб', en: '2 eggs · vegetable mix (salad) · bread' },
    },
    'vegetable-omelette': {
        name: { ru: 'Омлет с овощами', en: 'Vegetable Omelette' },
        description: {
            ru: '2 яйца · томаты · болгарский перец · репчатый лук · овощной микс · хлеб',
            en: '2 eggs · tomatoes · bell pepper · onion · vegetable mix · bread'
        },
    },
    'ham-cheese-omelette': {
        name: { ru: 'Омлет с ветчиной и сыром', en: 'Ham & Cheese Omelette' },
        description: { ru: '2 яйца · ветчина · сыр · овощной микс · хлеб', en: '2 eggs · ham · cheese · vegetable mix · bread' },
    },
    'greek-omelette': {
        name: { ru: 'Омлет по-гречески', en: 'Greek Omelette' },
        description: {
            ru: '2 яйца · томаты · крем-сыр · оливки · овощной микс · хлеб',
            en: '2 eggs · tomatoes · cream cheese · olives · vegetable mix · bread'
        },
    },
    // Pancakes
    'pancakes-toppings': {
        name: { ru: 'Блинчики с топпингами', en: 'Pancakes, 3 pcs with toppings (choose 2)' },
        description: {
            ru: '3 шт. · 2 топпинга на выбор: сметана / клубничный джем / шоколадный соус / мёд / кленовый сироп',
            en: 'toppings: sour cream · strawberry jam · chocolate sauce · honey · maple syrup'
        },
    },
    'pancakes-cottage-cheese': {
        name: { ru: 'Блинчики с творогом', en: 'Pancakes with Cottage Cheese, 2 pcs' },
        description: {
            ru: '2 шт. · домашний творог · сметана · микс свежих ягод',
            en: 'pancakes · homemade cottage cheese · sour cream · fresh berry mix'
        },
    },
    'pancakes-ham-cheese': {
        name: { ru: 'Блинчики с ветчиной и сыром', en: 'Pancakes with Ham & Cheese, 2 pcs' },
        description: { ru: '2 шт. · ветчина · сыр · зелень', en: 'pancakes · ham · cheese · greens' },
    },
    'pancakes-nutella-banana': {
        name: { ru: 'Блинчики «Нутелла–банан»', en: 'Nutella–Banana Pancakes, 2 pcs' },
        description: { ru: '2 шт. · нутелла · банан · шоколадный соус', en: 'pancakes · Nutella · banana · chocolate sauce' },
    },
    // Syrniki
    'syrniki': {
        name: { ru: 'Сырники', en: 'Syrniki, 3 pcs' },
        description: {
            ru: '3 шт. · домашний творог · микс свежих ягод · 2 топпинга на выбор: сметана / клубничный джем / шоколадный соус / мёд / кленовый сироп',
            en: 'homemade cottage cheese · fresh berry mix · toppings (choose 2): sour cream · strawberry jam · chocolate sauce · honey · maple syrup'
        },
    },
    // Porridge
    'oatmeal': {
        name: { ru: 'Овсяная каша', en: 'Oatmeal' },
        description: {
            ru: 'Молоко (коровье / кокосовое) · овсянка · микс свежих ягод',
            en: 'milk (dairy / coconut) · oats · fresh berry mix'
        },
    },
    'rice-porridge': {
        name: { ru: 'Рисовая каша', en: 'Rice Porridge' },
        description: {
            ru: 'Молоко (коровье / кокосовое) · рис жасмин · манго',
            en: 'milk (dairy / coconut) · jasmine rice · mango'
        },
    },
};

// UI translations
export const uiTranslations: Record<string, Record<Language, string>> = {
    addToCart: { ru: 'В корзину', en: 'Add to cart' },
    cart: { ru: 'Корзина', en: 'Cart' },
    checkout: { ru: 'Оформить заказ', en: 'Checkout' },
    total: { ru: 'Итого', en: 'Total' },
    emptyCart: { ru: 'Корзина пуста', en: 'Cart is empty' },
    phone: { ru: 'Телефон', en: 'Phone' },
    address: { ru: 'Адрес доставки', en: 'Delivery address' },
    comment: { ru: 'Комментарий', en: 'Comment' },
    orderSuccess: { ru: 'Заказ оформлен!', en: 'Order placed!' },
    back: { ru: '← Назад', en: '← Back' },
    menu: { ru: 'Меню', en: 'Menu' },
    noDishes: { ru: 'В этой категории пока нет блюд', en: 'No dishes in this category yet' },
};

// Helper to get translated text
export const t = (key: string, lang?: Language): string => {
    const language = lang || getLanguage();
    return uiTranslations[key]?.[language] || key;
};

// Get translated dish name
export const getDishName = (dishId: string, lang?: Language): string => {
    const language = lang || getLanguage();
    return dishTranslations[dishId]?.name[language] || dishId;
};

// Get translated dish description
export const getDishDescription = (dishId: string, lang?: Language): string => {
    const language = lang || getLanguage();
    return dishTranslations[dishId]?.description[language] || '';
};

// Get translated category name
export const getCategoryName = (categoryId: string, lang?: Language): string => {
    const language = lang || getLanguage();
    return categoryTranslations[categoryId]?.[language] || categoryId;
};
