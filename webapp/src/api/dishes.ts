import { Category, Dish } from '../types';

// Demo data - in production, fetch from API
const categories: Category[] = [
    {
        id: 'breakfast',
        name: '🍳 Завтраки',
        cover: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop',
    },
    {
        id: 'pancakes',
        name: '🥞 Блинчики',
        cover: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    },
    {
        id: 'syrniki',
        name: '🧀 Сырники',
        cover: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&h=300&fit=crop',
    },
    {
        id: 'porridge',
        name: '🥣 Каши',
        cover: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&h=300&fit=crop',
    },
    {
        id: 'soups',
        name: 'Супы',
        cover: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    },
    {
        id: 'main',
        name: 'Горячие блюда',
        cover: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop',
    },
    {
        id: 'noodles',
        name: 'Лапша',
        cover: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    },
    {
        id: 'salads',
        name: 'Салаты',
        cover: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    },
    {
        id: 'desserts',
        name: 'Десерты',
        cover: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
    },
    {
        id: 'drinks',
        name: 'Напитки',
        cover: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop',
    },
];

const dishes: Dish[] = [
    // Breakfast - Завтраки
    {
        id: 'english-breakfast',
        name: 'Английский завтрак',
        description: '2 яйца · бекон · 2 сосиски · овощной микс (салат) · хлеб',
        weight: '350 г',
        price: 190,
        photo: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop',
        categoryId: 'breakfast',
    },
    {
        id: 'scramble',
        name: 'Скрэмбл',
        description: '2 яйца · овощной микс (салат) · хлеб',
        weight: '200 г',
        price: 140,
        photo: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
        categoryId: 'breakfast',
    },
    {
        id: 'vegetable-omelette',
        name: 'Омлет с овощами',
        description: '2 яйца · томаты · болгарский перец · репчатый лук · овощной микс · хлеб',
        weight: '250 г',
        price: 140,
        photo: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=300&fit=crop',
        categoryId: 'breakfast',
    },
    {
        id: 'ham-cheese-omelette',
        name: 'Омлет с ветчиной и сыром',
        description: '2 яйца · ветчина · сыр · овощной микс · хлеб',
        weight: '250 г',
        price: 170,
        photo: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=400&h=300&fit=crop',
        categoryId: 'breakfast',
    },
    {
        id: 'greek-omelette',
        name: 'Омлет по-гречески',
        description: '2 яйца · томаты · крем-сыр · оливки · овощной микс · хлеб',
        weight: '250 г',
        price: 170,
        photo: 'https://images.unsplash.com/photo-1525351326368-6c6f4a5a85be?w=400&h=300&fit=crop',
        categoryId: 'breakfast',
    },
    // Pancakes - Блинчики
    {
        id: 'pancakes-toppings',
        name: 'Блинчики с топпингами',
        description: '3 шт. · 2 топпинга на выбор: сметана / клубничный джем / шоколадный соус / мёд / кленовый сироп',
        weight: '200 г',
        price: 140,
        photo: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
        categoryId: 'pancakes',
    },
    {
        id: 'pancakes-cottage-cheese',
        name: 'Блинчики с творогом',
        description: '2 шт. · домашний творог · сметана · микс свежих ягод',
        weight: '250 г',
        price: 260,
        photo: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop',
        categoryId: 'pancakes',
    },
    {
        id: 'pancakes-ham-cheese',
        name: 'Блинчики с ветчиной и сыром',
        description: '2 шт. · ветчина · сыр · зелень',
        weight: '220 г',
        price: 240,
        photo: 'https://images.unsplash.com/photo-1595981267035-d76e70e5e740?w=400&h=300&fit=crop',
        categoryId: 'pancakes',
    },
    {
        id: 'pancakes-nutella-banana',
        name: 'Блинчики «Нутелла–банан»',
        description: '2 шт. · нутелла · банан · шоколадный соус',
        weight: '230 г',
        price: 240,
        photo: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop',
        categoryId: 'pancakes',
    },
    // Syrniki - Сырники
    {
        id: 'syrniki',
        name: 'Сырники',
        description: '3 шт. · домашний творог · микс свежих ягод · 2 топпинга на выбор: сметана / клубничный джем / шоколадный соус / мёд / кленовый сироп',
        weight: '250 г',
        price: 180,
        photo: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&h=300&fit=crop',
        categoryId: 'syrniki',
    },
    // Porridge - Каши
    {
        id: 'oatmeal',
        name: 'Овсяная каша',
        description: 'Молоко (коровье / кокосовое) · овсянка · микс свежих ягод',
        weight: '300 г',
        price: 100,
        photo: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&h=300&fit=crop',
        categoryId: 'porridge',
    },
    {
        id: 'rice-porridge',
        name: 'Рисовая каша',
        description: 'Молоко (коровье / кокосовое) · рис жасмин · манго',
        weight: '300 г',
        price: 100,
        photo: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=300&fit=crop',
        categoryId: 'porridge',
    },
    // Soups
    {
        id: 'tom-yum',
        name: 'Том Ям',
        description: 'Острый тайский суп с креветками, грибами и лемонграссом',
        weight: '350 мл',
        price: 280,
        photo: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400&h=300&fit=crop',
        categoryId: 'soups',
    },
    {
        id: 'tom-kha',
        name: 'Том Кха Гай',
        description: 'Кокосовый суп с курицей и галангалом',
        weight: '350 мл',
        price: 250,
        photo: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop',
        categoryId: 'soups',
    },
    // Main dishes
    {
        id: 'pad-thai',
        name: 'Пад Тай',
        description: 'Рисовая лапша с креветками, тофу и арахисом',
        weight: '350 г',
        price: 320,
        photo: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop',
        categoryId: 'main',
    },
    {
        id: 'green-curry',
        name: 'Зелёный Карри',
        description: 'Курица в зелёном карри с кокосовым молоком и овощами',
        weight: '300 г',
        price: 350,
        photo: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop',
        categoryId: 'main',
    },
    {
        id: 'massaman',
        name: 'Массаман Карри',
        description: 'Говядина в массаман карри с картофелем и арахисом',
        weight: '350 г',
        price: 380,
        photo: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
        categoryId: 'main',
    },
    // Noodles
    {
        id: 'pad-see-ew',
        name: 'Пад Си Ию',
        description: 'Широкая рисовая лапша с курицей и соевым соусом',
        weight: '300 г',
        price: 280,
        photo: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
        categoryId: 'noodles',
    },
    {
        id: 'khao-soi',
        name: 'Кхао Сой',
        description: 'Северный тайский суп с яичной лапшой и курицей',
        weight: '400 г',
        price: 290,
        photo: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
        categoryId: 'noodles',
    },
    // Salads
    {
        id: 'som-tam',
        name: 'Сом Там',
        description: 'Острый салат из зелёной папайи с помидорами и арахисом',
        weight: '200 г',
        price: 180,
        photo: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
        categoryId: 'salads',
    },
    {
        id: 'larb',
        name: 'Ларб',
        description: 'Тайский салат с рубленой курицей, мятой и рисом',
        weight: '220 г',
        price: 220,
        photo: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
        categoryId: 'salads',
    },
    // Desserts
    {
        id: 'mango-sticky',
        name: 'Манго Стики Райс',
        description: 'Сладкий рис с манго и кокосовым молоком',
        weight: '200 г',
        price: 200,
        photo: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
        categoryId: 'desserts',
    },
    {
        id: 'coconut-ice',
        name: 'Кокосовое мороженое',
        description: 'Мороженое в кокосовой скорлупе с топпингами',
        weight: '150 г',
        price: 150,
        photo: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=300&fit=crop',
        categoryId: 'desserts',
    },
    // Drinks
    {
        id: 'thai-tea',
        name: 'Тайский чай',
        description: 'Классический оранжевый тайский чай со льдом',
        weight: '400 мл',
        price: 120,
        photo: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop',
        categoryId: 'drinks',
    },
    {
        id: 'coconut-water',
        name: 'Кокосовая вода',
        description: 'Свежая кокосовая вода в молодом кокосе',
        weight: '350 мл',
        price: 100,
        photo: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=400&h=300&fit=crop',
        categoryId: 'drinks',
    },
];

// API URL from environment
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getCategories = async (): Promise<Category[]> => {
    // In production, fetch from API:
    // const response = await fetch(`${API_URL}/api/categories`);
    // return response.json();

    // For demo, return local data
    return new Promise((resolve) => {
        setTimeout(() => resolve(categories), 300);
    });
};

export const getDishes = async (categoryId?: string): Promise<Dish[]> => {
    // In production, fetch from API:
    // const url = categoryId 
    //   ? `${API_URL}/api/dishes?category=${categoryId}` 
    //   : `${API_URL}/api/dishes`;
    // const response = await fetch(url);
    // return response.json();

    // For demo, return local data filtered by category
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtered = categoryId
                ? dishes.filter((d) => d.categoryId === categoryId)
                : dishes;
            resolve(filtered);
        }, 300);
    });
};

export const submitOrder = async (order: {
    items: { dishId: string; quantity: number }[];
    customerPhone: string;
    customerAddress: string;
    comment?: string;
    telegramUserId?: number;
    telegramUsername?: string;
}): Promise<{ success: boolean; orderId: string }> => {
    // In production, POST to API:
    const response = await fetch(`${API_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
    });

    if (!response.ok) {
        throw new Error('Failed to submit order');
    }

    return response.json();
};
