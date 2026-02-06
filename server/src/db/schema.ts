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
    { id: 'soups', name: 'Супы', cover: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop' },
    { id: 'main', name: 'Горячие блюда', cover: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop' },
    { id: 'noodles', name: 'Лапша', cover: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop' },
    { id: 'salads', name: 'Салаты', cover: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop' },
    { id: 'desserts', name: 'Десерты', cover: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop' },
    { id: 'drinks', name: 'Напитки', cover: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop' },
];

export const dishes: Dish[] = [
    // Breakfast
    { id: 'english-breakfast', name: 'Английский завтрак', description: '2 яйца · бекон · 2 сосиски · овощной микс (салат) · хлеб', weight: '350 г', price: 190, photo: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop', categoryId: 'breakfast' },
    { id: 'scramble', name: 'Скрэмбл', description: '2 яйца · овощной микс (салат) · хлеб', weight: '200 г', price: 140, photo: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop', categoryId: 'breakfast' },
    { id: 'vegetable-omelette', name: 'Омлет с овощами', description: '2 яйца · томаты · болгарский перец · репчатый лук · овощной микс · хлеб', weight: '250 г', price: 140, photo: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=300&fit=crop', categoryId: 'breakfast' },
    { id: 'ham-cheese-omelette', name: 'Омлет с ветчиной и сыром', description: '2 яйца · ветчина · сыр · овощной микс · хлеб', weight: '250 г', price: 170, photo: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=400&h=300&fit=crop', categoryId: 'breakfast' },
    { id: 'greek-omelette', name: 'Омлет по-гречески', description: '2 яйца · томаты · крем-сыр · оливки · овощной микс · хлеб', weight: '250 г', price: 170, photo: 'https://images.unsplash.com/photo-1482049016gy-d6cc3cc402?w=400&h=300&fit=crop', categoryId: 'breakfast' },
    // Pancakes
    { id: 'pancakes-toppings', name: 'Блинчики с топпингами', description: '3 шт. · 2 топпинга на выбор: сметана / клубничный джем / шоколадный соус / мёд / кленовый сироп', weight: '200 г', price: 140, photo: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    { id: 'pancakes-cottage-cheese', name: 'Блинчики с творогом', description: '2 шт. · домашний творог · сметана · микс свежих ягод', weight: '250 г', price: 260, photo: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    { id: 'pancakes-ham-cheese', name: 'Блинчики с ветчиной и сыром', description: '2 шт. · ветчина · сыр · зелень', weight: '220 г', price: 240, photo: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    { id: 'pancakes-nutella-banana', name: 'Блинчики «Нутелла–банан»', description: '2 шт. · нутелла · банан · шоколадный соус', weight: '230 г', price: 240, photo: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    // Syrniki
    { id: 'syrniki', name: 'Сырники', description: '3 шт. · домашний творог · микс свежих ягод · 2 топпинга на выбор', weight: '250 г', price: 180, photo: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&h=300&fit=crop', categoryId: 'syrniki' },
    // Porridge
    { id: 'oatmeal', name: 'Овсяная каша', description: 'Молоко (коровье / кокосовое) · овсянка · микс свежих ягод', weight: '300 г', price: 100, photo: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&h=300&fit=crop', categoryId: 'porridge' },
    { id: 'rice-porridge', name: 'Рисовая каша', description: 'Молоко (коровье / кокосовое) · рис жасмин · манго', weight: '300 г', price: 100, photo: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=300&fit=crop', categoryId: 'porridge' },
    // Soups
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
