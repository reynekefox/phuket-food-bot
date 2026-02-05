import { Category, Dish } from '../types';

// Demo data - in production, fetch from API
const categories: Category[] = [
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
