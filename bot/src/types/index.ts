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

export interface CartItem {
    dish: Dish;
    quantity: number;
}

export interface Order {
    id?: string;
    items: CartItem[];
    totalPrice: number;
    customerPhone: string;
    customerAddress: string;
    comment?: string;
    telegramUserId: number;
    telegramUsername?: string;
    status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
    createdAt: Date;
}

export interface OrderNotification {
    order: Order;
    chatId: number;
}
