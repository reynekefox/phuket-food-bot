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
    { id: 'breakfast', name: '🍳 Завтраки', cover: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop' },
    { id: 'pancakes', name: '🥞 Блинчики', cover: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop' },
    { id: 'syrniki', name: '🧀 Сырники', cover: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&h=300&fit=crop' },
    { id: 'porridge', name: '🥣 Каши', cover: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&h=300&fit=crop' },
];

export const dishes: Dish[] = [
    // Завтраки
    { id: 'english-breakfast', name: 'Английский завтрак', description: '2 яйца · бекон · 2 сосиски · овощной микс (салат) · хлеб', weight: '350 г', price: 190, photo: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop', categoryId: 'breakfast' },
    { id: 'scramble', name: 'Скрэмбл', description: '2 яйца · овощной микс (салат) · хлеб', weight: '200 г', price: 140, photo: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop', categoryId: 'breakfast' },
    { id: 'vegetable-omelette', name: 'Омлет с овощами', description: '2 яйца · томаты · болгарский перец · репчатый лук · овощной микс · хлеб', weight: '250 г', price: 140, photo: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=300&fit=crop', categoryId: 'breakfast' },
    { id: 'ham-cheese-omelette', name: 'Омлет с ветчиной и сыром', description: '2 яйца · ветчина · сыр · овощной микс · хлеб', weight: '250 г', price: 170, photo: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=400&h=300&fit=crop', categoryId: 'breakfast' },
    { id: 'greek-omelette', name: 'Омлет по-гречески', description: '2 яйца · томаты · крем-сыр · оливки · овощной микс · хлеб', weight: '250 г', price: 170, photo: 'https://images.unsplash.com/photo-1525351326368-6c6f4a5a85be?w=400&h=300&fit=crop', categoryId: 'breakfast' },
    // Блинчики
    { id: 'pancakes-toppings', name: 'Блинчики с топпингами', description: '3 шт. · 2 топпинга на выбор: сметана / клубничный джем / шоколадный соус / мёд / кленовый сироп', weight: '200 г', price: 140, photo: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    { id: 'pancakes-cottage-cheese', name: 'Блинчики с творогом', description: '2 шт. · домашний творог · сметана · микс свежих ягод', weight: '250 г', price: 260, photo: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    { id: 'pancakes-ham-cheese', name: 'Блинчики с ветчиной и сыром', description: '2 шт. · ветчина · сыр · зелень', weight: '220 г', price: 240, photo: 'https://images.unsplash.com/photo-1595981267035-d76e70e5e740?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    { id: 'pancakes-nutella-banana', name: 'Блинчики «Нутелла–банан»', description: '2 шт. · нутелла · банан · шоколадный соус', weight: '230 г', price: 240, photo: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    // Сырники
    { id: 'syrniki', name: 'Сырники', description: '3 шт. · домашний творог · микс свежих ягод · 2 топпинга на выбор', weight: '250 г', price: 180, photo: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&h=300&fit=crop', categoryId: 'syrniki' },
    // Каши
    { id: 'oatmeal', name: 'Овсяная каша', description: 'Молоко (коровье / кокосовое) · овсянка · микс свежих ягод', weight: '300 г', price: 100, photo: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=400&h=300&fit=crop', categoryId: 'porridge' },
    { id: 'rice-porridge', name: 'Рисовая каша', description: 'Молоко (коровье / кокосовое) · рис жасмин · манго', weight: '300 г', price: 100, photo: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop', categoryId: 'porridge' },
];

// In-memory orders storage (use database in production)
export const orders: Order[] = [];
