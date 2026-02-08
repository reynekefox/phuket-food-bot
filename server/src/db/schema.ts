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

// Demo data — categories
export const categories: Category[] = [
    // Top-level
    { id: 'breakfast', name: '🥞 Завтраки', cover: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop' },
    { id: 'poke', name: '🥗 Поке боулы', cover: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop' },
    { id: 'toasts', name: '🥪 Тосты', cover: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop' },
    { id: 'salads', name: '🥬 Салаты', cover: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop' },
    { id: 'soups', name: '🍲 Супы', cover: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop' },
    { id: 'hot-dishes', name: '🍛 Горячие блюда', cover: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' },
    { id: 'sides', name: '🍚 Гарниры', cover: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop' },
    { id: 'desserts', name: '🍰 Десерты', cover: 'https://images.unsplash.com/photo-1756551399655-207569477340?fm=jpg&q=60&w=3000&ixid=M3wxMjA3fDB8MXx0b3BpY3x8eGpQUjRobGtCR0F8fHx8fDJ8fDE3NzA1MjI5MTd8&ixlib=rb-4.1.0' },
    { id: 'drinks', name: '🥤 Напитки', cover: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop' },
    // Breakfast subs
    { id: 'eggs', name: '🍳 Яичные блюда', cover: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=300&fit=crop', parentId: 'breakfast' },
    { id: 'pancakes', name: '🥞 Блинчики', cover: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop', parentId: 'breakfast' },
    { id: 'syrniki', name: '🧀 Сырники', cover: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&h=300&fit=crop', parentId: 'breakfast' },
    { id: 'porridge', name: '🥣 Каши', cover: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&h=300&fit=crop', parentId: 'breakfast' },
    // Poke subs
    { id: 'poke-bowls', name: '🥗 Поке боулы', cover: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop', parentId: 'poke' },
    { id: 'yogurt-bowls', name: '🍓 Йогурт-боулы', cover: 'https://images.unsplash.com/photo-1758979690131-11e2aa0b142b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', parentId: 'poke' },
    // Drinks subs
    { id: 'classic-coffee', name: '☕ Классический кофе', cover: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'specialty-coffee', name: '☕ Specialty кофе', cover: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'tea-bags', name: '🍵 Чай в пакетиках', cover: 'https://images.unsplash.com/photo-1758380742009-163a0deee80e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', parentId: 'drinks' },
    { id: 'teapot', name: '🫖 Чайник', cover: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'detox-juice', name: '🥤 Detox соки', cover: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'fresh-juice', name: '🍊 Свежевыжатые соки', cover: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'shakes', name: '🥤 Шейки', cover: 'https://images.unsplash.com/photo-1758221055840-be5dfa05699d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', parentId: 'drinks' },
    { id: 'lemonade', name: '🍋 Домашние лимонады', cover: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'mocktails', name: '🍹 Моктейли', cover: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'soft-drinks', name: '🥤 Безалкогольные напитки', cover: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop', parentId: 'drinks' },
];

// Demo data — dishes (abbreviated for server; full list matches frontend)
export const dishes: Dish[] = [
    // Eggs
    { id: 'english-breakfast', name: 'Английский завтрак', description: '2 яйца · бекон · 2 сосиски · овощной микс (салат) · хлеб', weight: '350 г', price: 190, photo: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop', categoryId: 'eggs' },
    { id: 'scramble', name: 'Скрэмбл', description: '2 яйца · овощной микс (салат) · хлеб', weight: '200 г', price: 140, photo: 'https://images.unsplash.com/photo-1758221054864-8c8737821bfd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'eggs' },
    { id: 'vegetable-omelette', name: 'Омлет с овощами', description: '2 яйца · томаты · болгарский перец · репчатый лук · овощной микс · хлеб', weight: '250 г', price: 140, photo: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=300&fit=crop', categoryId: 'eggs' },
    { id: 'ham-cheese-omelette', name: 'Омлет с ветчиной и сыром', description: '2 яйца · ветчина · сыр · овощной микс · хлеб', weight: '250 г', price: 170, photo: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=400&h=300&fit=crop', categoryId: 'eggs' },
    { id: 'greek-omelette', name: 'Омлет по-гречески', description: '2 яйца · томаты · крем-сыр · оливки · овощной микс · хлеб', weight: '250 г', price: 170, photo: 'https://images.unsplash.com/photo-1757752463419-4f0788b2b544?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'eggs' },
    // Pancakes
    { id: 'pancakes-toppings', name: 'Блинчики с топпингами', description: '3 шт. · 2 топпинга на выбор', weight: '200 г', price: 140, photo: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    { id: 'pancakes-cottage-cheese', name: 'Блинчики с творогом', description: '2 шт. · домашний творог · сметана · микс свежих ягод', weight: '250 г', price: 260, photo: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    { id: 'pancakes-ham-cheese', name: 'Блинчики с ветчиной и сыром', description: '2 шт. · ветчина · сыр · зелень', weight: '220 г', price: 240, photo: 'https://images.unsplash.com/photo-1757519740947-eef07a74c4ab?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'pancakes' },
    { id: 'pancakes-nutella-banana', name: 'Блинчики «Нутелла–банан»', description: '2 шт. · нутелла · банан · шоколадный соус', weight: '230 г', price: 240, photo: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    // Syrniki
    { id: 'syrniki-dish', name: 'Сырники', description: '3 шт. · домашний творог · микс свежих ягод · 2 топпинга на выбор', weight: '250 г', price: 180, photo: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&h=300&fit=crop', categoryId: 'syrniki' },
    // Porridge
    { id: 'oatmeal', name: 'Овсяная каша', description: 'Молоко · овсянка · микс свежих ягод', weight: '300 г', price: 100, photo: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=400&h=300&fit=crop', categoryId: 'porridge' },
    { id: 'rice-porridge', name: 'Рисовая каша', description: 'Молоко · рис жасмин · манго', weight: '300 г', price: 100, photo: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop', categoryId: 'porridge' },
    // Poke Bowls
    { id: 'shrimp-bowl', name: 'Боул с креветками', description: 'Рис жасмин · креветки · шпинат · овощи · кунжут', weight: '350 г', price: 290, photo: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop', categoryId: 'poke-bowls' },
    { id: 'chicken-bowl', name: 'Боул с курицей', description: 'Рис жасмин · курица гриль · шпинат · овощи · кунжут', weight: '350 г', price: 180, photo: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop', categoryId: 'poke-bowls' },
    { id: 'salmon-bowl', name: 'Боул с лососем', description: 'Рис жасмин · лосось гриль · шпинат · овощи · кунжут', weight: '350 г', price: 300, photo: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&h=300&fit=crop', categoryId: 'poke-bowls' },
    // Yogurt Bowls
    { id: 'berry-yogurt', name: 'Ягодный микс', description: 'Греческий йогурт · клубника · голубика · гранат · мюсли · чиа · мёд', weight: '300 г', price: 290, photo: 'https://images.unsplash.com/photo-1757450296755-f875c2dc80bf?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'yogurt-bowls' },
    { id: 'tropical-yogurt', name: 'Тропический', description: 'Греческий йогурт · манго · банан · киви · кокос · миндаль · мюсли · мёд', weight: '300 г', price: 260, photo: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop', categoryId: 'yogurt-bowls' },
    { id: 'nutella-banana-yogurt', name: 'Нутелла-банан', description: 'Греческий йогурт · банан · ананас · гранола · миндаль · шоколадный сироп', weight: '300 г', price: 290, photo: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop', categoryId: 'yogurt-bowls' },
    // Toasts
    { id: 'avocado-toast', name: 'Авокадо тост', description: 'Хлеб · крем-чиз · авокадо · лимонный сок · оливковое масло', weight: '200 г', price: 140, photo: 'https://images.unsplash.com/photo-1756551399655-207569477340?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'toasts' },
    { id: 'avocado-salmon-toast', name: 'Авокадо тост с лососем', description: 'Хлеб · крем-чиз · руккола · авокадо · лосось · каперсы · яйца', weight: '250 г', price: 220, photo: 'https://images.unsplash.com/photo-1756260853158-a63f71b4bff6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'toasts' },
    { id: 'chicken-pesto-toast', name: 'Тост с курицей и песто', description: 'Хлеб · крем-чиз · авокадо · курица · песто · черри · руккола', weight: '230 г', price: 180, photo: 'https://images.unsplash.com/photo-1756523854214-9191eb30eb1e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'toasts' },
    { id: 'caprese-toast', name: 'Тост Капрезе', description: 'Хлеб · оливковое масло · моцарелла · томаты · базилик', weight: '220 г', price: 210, photo: 'https://images.unsplash.com/photo-1756260897470-f5b9f4af80c7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'toasts' },
    // Salads
    { id: 'arugula-shrimp-mango', name: 'Салат с рукколой, креветками и манго', description: 'Руккола · креветки · манго · мёд · чеснок · оливковое масло · лайм · кунжут', weight: '300 г', price: 280, photo: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop', categoryId: 'salads' },
    { id: 'beef-arugula-spinach', name: 'Салат с говядиной, рукколой и шпинатом', description: 'Руккола · шпинат · говядина · черри · пармезан · бальзамик', weight: '300 г', price: 280, photo: 'https://images.unsplash.com/photo-1756292024340-a7ca44eb8e5d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'salads' },
    { id: 'caesar-chicken', name: 'Цезарь с курицей', description: 'Курица гриль · романо · черри · пармезан · гренки · соус цезарь', weight: '300 г', price: 260, photo: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop', categoryId: 'salads' },
    { id: 'caesar-shrimp', name: 'Цезарь с креветками', description: 'Креветки · романо · черри · пармезан · гренки · соус цезарь', weight: '300 г', price: 260, photo: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop', categoryId: 'salads' },
    { id: 'greek-salad', name: 'Салат «Греческий»', description: 'Перец · огурец · черри · лук · оливки · фета · оливковое масло', weight: '280 г', price: 240, photo: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop', categoryId: 'salads' },
    // Soups
    { id: 'borscht', name: 'Борщ', description: 'Свёкла · картофель · морковь · лук · томаты · чеснок · говядина · сметана', weight: '350 г', price: 240, photo: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop', categoryId: 'soups' },
    { id: 'chicken-meatball-soup', name: 'Куриный суп с фрикадельками', description: 'Картофель · морковь · лук · укроп · фрикадельки · сметана', weight: '350 г', price: 180, photo: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop', categoryId: 'soups' },
    { id: 'shchi', name: 'Щи из свежей капусты', description: 'Капуста · картофель · морковь · лук · курица · укроп · сметана', weight: '350 г', price: 220, photo: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop', categoryId: 'soups' },
    // Hot Dishes
    { id: 'chicken-cutlets', name: 'Куриные котлеты с пюре (2 шт.)', description: 'Куриный фарш · лук · чеснок · яйцо · пюре', weight: '350 г', price: 160, photo: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },
    { id: 'fish-cutlets', name: 'Рыбные котлеты с пюре (2 шт.)', description: 'Фарш из сёмги · лук · чеснок · яйцо · пюре', weight: '350 г', price: 190, photo: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },
    { id: 'grilled-chicken', name: 'Куриное филе гриль', description: 'Куриное филе гриль · овощи · сырный соус', weight: '350 г', price: 260, photo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },
    { id: 'grilled-salmon', name: 'Лосось гриль', description: 'Лосось гриль · овощи · сливочно-лимонный соус', weight: '350 г', price: 380, photo: 'https://images.unsplash.com/photo-1756395080881-a6e83b582509?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'hot-dishes' },
    { id: 'sweet-sour-chicken', name: 'Курица в кисло-сладком соусе', description: 'Куриное филе · перец · лук · ананасы · кисло-сладкий соус · кунжут', weight: '300 г', price: 190, photo: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },
    // Drinks — all subcategories have dishes in frontend, server just mirrors IDs/prices
    { id: 'espresso', name: 'Эспрессо', description: '', weight: '', price: 60, photo: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'americano', name: 'Американо', description: '', weight: '', price: 60, photo: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'cappuccino', name: 'Капучино', description: '', weight: '', price: 80, photo: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'frappuccino', name: 'Фрапучино', description: '', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'macchiato', name: 'Макиато', description: '', weight: '', price: 80, photo: 'https://images.unsplash.com/photo-1557772611-7ac030a8f59f?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'latte', name: 'Латте', description: '', weight: '', price: 90, photo: 'https://images.unsplash.com/photo-1541167760496-1613c541b5a1?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'flat-white', name: 'Флэт уайт', description: '', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1577968897818-08c387aa43b7?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'mocha', name: 'Мокка', description: '', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'raf', name: 'Раф', description: '', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'cocoa', name: 'Какао', description: '', weight: '', price: 100, photo: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'matcha-latte', name: 'Классический матча-латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1756395194652-96bc660d0a50?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'classic-coffee' },
    // Specialty Coffee
    { id: 'orange-americano', name: 'Апельсиновый американо', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1756334830608-32905156d724?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'specialty-coffee' },
    { id: 'coconut-americano', name: 'Кокосовый американо', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1756383254040-d19dbc1d4cb1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'specialty-coffee' },
    { id: 'tonic-americano', name: 'Тоник американо', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1756260897483-7cfc313b7534?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'specialty-coffee' },
    { id: 'honey-lemon-americano', name: 'Американо с мёдом и лимоном', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'caramel-latte', name: 'Карамельный латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'berry-latte', name: 'Ягодный латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1756300217545-b9860909057b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'specialty-coffee' },
    { id: 'coconut-latte', name: 'Кокосовый латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1755605983542-a525a0975a25?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'specialty-coffee' },
    { id: 'choco-mint-latte', name: 'Шоколадно-мятный латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1755004609214-c252674df1ca?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'specialty-coffee' },
    { id: 'caramel-macchiato', name: 'Карамельный макиато', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1754992599453-01e809722aa1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'specialty-coffee' },
    { id: 'mint-mocha', name: 'Мятный мокка', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1754836717974-d43bd9c798ae?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'specialty-coffee' },
    { id: 'affogato', name: 'Аффогато с кокосовым мороженым', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1754559109273-23aee0d85471?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'specialty-coffee' },
    { id: 'cocoa-marshmallow', name: 'Какао с маршмеллоу', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1754047166273-a3cc44c1cf50?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'specialty-coffee' },
    { id: 'cocoa-raspberry-latte', name: 'Какао-малиновый латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1754047167199-7867304392c6?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'specialty-coffee' },
    { id: 'matcha-lemon-soda', name: 'Матча-лимонная сода', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1752764181807-a05e8fc3c767?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0', categoryId: 'specialty-coffee' },
    // Tea, Juices, Shakes, Lemonades, Mocktails, Soft Drinks — all IDs and prices match frontend
    { id: 'black-tea', name: 'Чёрный чай', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'water', name: 'Water', description: '', weight: '500 ml', price: 30, photo: '', categoryId: 'soft-drinks' },
    { id: 'soda-water', name: 'Soda water', description: '', weight: '330 ml', price: 30, photo: '', categoryId: 'soft-drinks' },
    { id: 'singha-lemon-soda', name: 'Singha Red Lemon Soda', description: '', weight: '330 ml', price: 40, photo: '', categoryId: 'soft-drinks' },
    { id: 'schweppes-tonic', name: 'Schweppes Tonic Water', description: '', weight: '330 ml', price: 40, photo: '', categoryId: 'soft-drinks' },
    { id: 'sprite', name: 'Sprite', description: '', weight: '330 ml', price: 50, photo: '', categoryId: 'soft-drinks' },
    { id: 'coca-cola', name: 'Coca-Cola (Original/Zero)', description: '', weight: '330 ml', price: 50, photo: '', categoryId: 'soft-drinks' },
    { id: 'fanta-orange', name: 'Fanta Orange', description: '', weight: '330 ml', price: 50, photo: '', categoryId: 'soft-drinks' },
];

// In-memory orders storage
export const orders: Order[] = [];
