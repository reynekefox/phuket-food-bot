export interface Dish {
    id: string;
    name: string;
    description: string;
    weight: string;
    price: number;
    photo: string;
    categoryId: string;
}

export interface Category {
    id: string;
    name: string;
    cover: string;
}

export interface OrderItem {
    dishId: string;
    quantity: number;
}

export interface Order {
    id: string;
    items: OrderItem[];
    customerPhone: string;
    customerAddress: string;
    comment?: string;
    telegramUserId?: number;
    telegramUsername?: string;
    totalPrice: number;
    status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
    createdAt: Date;
}

// Demo data
export const categories: Category[] = [
    { id: 'soups', name: 'Супы', cover: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop' },
    { id: 'main', name: 'Горячие блюда', cover: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop' },
    { id: 'noodles', name: 'Лапша', cover: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop' },
    { id: 'salads', name: 'Салаты', cover: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop' },
    { id: 'desserts', name: 'Десерты', cover: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop' },
    { id: 'drinks', name: 'Напитки', cover: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop' },
];

export const dishes: Dish[] = [
    { id: 'tom-yum', name: 'Том Ям', description: 'Острый тайский суп с креветками', weight: '350 мл', price: 280, photo: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400&h=300&fit=crop', categoryId: 'soups' },
    { id: 'tom-kha', name: 'Том Кха Гай', description: 'Кокосовый суп с курицей', weight: '350 мл', price: 250, photo: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop', categoryId: 'soups' },
    { id: 'pad-thai', name: 'Пад Тай', description: 'Рисовая лапша с креветками и арахисом', weight: '350 г', price: 320, photo: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop', categoryId: 'main' },
    { id: 'green-curry', name: 'Зелёный Карри', description: 'Курица в зелёном карри', weight: '300 г', price: 350, photo: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop', categoryId: 'main' },
    { id: 'massaman', name: 'Массаман Карри', description: 'Говядина в массаман карри', weight: '350 г', price: 380, photo: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop', categoryId: 'main' },
    { id: 'pad-see-ew', name: 'Пад Си Ию', description: 'Широкая рисовая лапша с курицей', weight: '300 г', price: 280, photo: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop', categoryId: 'noodles' },
    { id: 'som-tam', name: 'Сом Там', description: 'Острый салат из зелёной папайи', weight: '200 г', price: 180, photo: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', categoryId: 'salads' },
    { id: 'mango-sticky', name: 'Манго Стики Райс', description: 'Сладкий рис с манго', weight: '200 г', price: 200, photo: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop', categoryId: 'desserts' },
    { id: 'thai-tea', name: 'Тайский чай', description: 'Классический тайский чай со льдом', weight: '400 мл', price: 120, photo: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop', categoryId: 'drinks' },
];

// In-memory orders storage (use database in production)
export const orders: Order[] = [];
