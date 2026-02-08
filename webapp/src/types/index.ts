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
    parentId?: string;
}

export interface CartItem {
    dish: Dish;
    quantity: number;
}

export interface Order {
    items: CartItem[];
    totalPrice: number;
    customerPhone: string;
    customerAddress: string;
    comment?: string;
}
