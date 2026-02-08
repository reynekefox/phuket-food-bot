import { Category, Dish } from '../types';

// ──────────────────────────── CATEGORIES ────────────────────────────
const categories: Category[] = [
    // ── Top-level ──
    { id: 'breakfast', name: '🥞 Завтраки', cover: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop' },
    { id: 'poke', name: '🥗 Поке', cover: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop' },
    { id: 'toasts', name: '🥪 Тосты', cover: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop' },
    { id: 'salads', name: '🥬 Салаты', cover: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop' },
    { id: 'soups', name: '🍲 Супы', cover: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop' },
    { id: 'hot-dishes', name: '🍛 Горячие блюда', cover: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' },
    { id: 'sides', name: '🍚 Гарниры', cover: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44726?w=400&h=300&fit=crop' },
    { id: 'desserts', name: '🍰 Десерты', cover: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop' },
    { id: 'drinks', name: '🥤 Напитки', cover: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop' },

    // ── Завтраки → subcategories ──
    { id: 'eggs', name: '🍳 Яичные блюда', cover: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=300&fit=crop', parentId: 'breakfast' },
    { id: 'pancakes', name: '🥞 Блинчики', cover: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop', parentId: 'breakfast' },
    { id: 'syrniki', name: '🧀 Сырники', cover: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&h=300&fit=crop', parentId: 'breakfast' },
    { id: 'porridge', name: '🥣 Каши', cover: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&h=300&fit=crop', parentId: 'breakfast' },

    // ── Поке → subcategories ──
    { id: 'poke-bowls', name: '🥗 Поке боулы', cover: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop', parentId: 'poke' },
    { id: 'yogurt-bowls', name: '🍓 Йогурт-боулы', cover: 'https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=400&h=300&fit=crop', parentId: 'poke' },

    // ── Напитки → subcategories ──
    { id: 'classic-coffee', name: '☕ Классический кофе', cover: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'specialty-coffee', name: '☕ Specialty кофе', cover: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'tea-bags', name: '🍵 Чай в пакетиках', cover: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'teapot', name: '🫖 Чайник', cover: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'detox-juice', name: '🥤 Detox соки', cover: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'fresh-juice', name: '🍊 Свежевыжатые соки', cover: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'shakes', name: '🥤 Шейки', cover: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'lemonade', name: '🍋 Домашние лимонады', cover: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'mocktails', name: '🍹 Моктейли', cover: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'soft-drinks', name: '🥤 Безалкогольные напитки', cover: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop', parentId: 'drinks' },
];

// ──────────────────────────── DISHES ────────────────────────────
const dishes: Dish[] = [
    // ═══════ ЗАВТРАКИ — Яичные блюда ═══════
    { id: 'english-breakfast', name: 'Английский завтрак', description: '2 яйца · бекон · 2 сосиски · овощной микс (салат) · хлеб', weight: '350 г', price: 190, photo: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop', categoryId: 'eggs' },
    { id: 'scramble', name: 'Скрэмбл', description: '2 яйца · овощной микс (салат) · хлеб', weight: '200 г', price: 140, photo: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop', categoryId: 'eggs' },
    { id: 'vegetable-omelette', name: 'Омлет с овощами', description: '2 яйца · томаты · болгарский перец · репчатый лук · овощной микс · хлеб', weight: '250 г', price: 140, photo: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=300&fit=crop', categoryId: 'eggs' },
    { id: 'ham-cheese-omelette', name: 'Омлет с ветчиной и сыром', description: '2 яйца · ветчина · сыр · овощной микс · хлеб', weight: '250 г', price: 170, photo: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?w=400&h=300&fit=crop', categoryId: 'eggs' },
    { id: 'greek-omelette', name: 'Омлет по-гречески', description: '2 яйца · томаты · крем-сыр · оливки · овощной микс · хлеб', weight: '250 г', price: 170, photo: 'https://images.unsplash.com/photo-1525351326368-6c6f4a5a85be?w=400&h=300&fit=crop', categoryId: 'eggs' },

    // ═══════ ЗАВТРАКИ — Блинчики ═══════
    { id: 'pancakes-toppings', name: 'Блинчики с топпингами', description: '3 шт. · 2 топпинга на выбор: сметана / клубничный джем / шоколадный соус / мёд / кленовый сироп', weight: '200 г', price: 140, photo: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    { id: 'pancakes-cottage-cheese', name: 'Блинчики с творогом', description: '2 шт. · домашний творог · сметана · микс свежих ягод', weight: '250 г', price: 260, photo: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    { id: 'pancakes-ham-cheese', name: 'Блинчики с ветчиной и сыром', description: '2 шт. · ветчина · сыр · зелень', weight: '220 г', price: 240, photo: 'https://images.unsplash.com/photo-1595981267035-d76e70e5e740?w=400&h=300&fit=crop', categoryId: 'pancakes' },
    { id: 'pancakes-nutella-banana', name: 'Блинчики «Нутелла–банан»', description: '2 шт. · нутелла · банан · шоколадный соус', weight: '230 г', price: 240, photo: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop', categoryId: 'pancakes' },

    // ═══════ ЗАВТРАКИ — Сырники ═══════
    { id: 'syrniki-dish', name: 'Сырники', description: '3 шт. · домашний творог · микс свежих ягод · 2 топпинга на выбор: сметана / клубничный джем / шоколадный соус / мёд / кленовый сироп', weight: '250 г', price: 180, photo: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&h=300&fit=crop', categoryId: 'syrniki' },

    // ═══════ ЗАВТРАКИ — Каши ═══════
    { id: 'oatmeal', name: 'Овсяная каша', description: 'Молоко (коровье / кокосовое) · овсянка · микс свежих ягод', weight: '300 г', price: 100, photo: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=400&h=300&fit=crop', categoryId: 'porridge' },
    { id: 'rice-porridge', name: 'Рисовая каша', description: 'Молоко (коровье / кокосовое) · рис жасмин · манго', weight: '300 г', price: 100, photo: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop', categoryId: 'porridge' },

    // ═══════ ПОКЕ — Поке боулы ═══════
    { id: 'shrimp-bowl', name: 'Боул с креветками', description: 'Рис жасмин · креветки отварные · перепелиные яйца · свежий шпинат · огурец · томаты черри · морковь · эдамаме · зелёный лук · кунжут', weight: '350 г', price: 290, photo: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop', categoryId: 'poke-bowls' },
    { id: 'chicken-bowl', name: 'Боул с курицей', description: 'Рис жасмин · курица гриль · перепелиные яйца · свежий шпинат · огурец · томаты черри · морковь · эдамаме · зелёный лук · кунжут', weight: '350 г', price: 180, photo: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop', categoryId: 'poke-bowls' },
    { id: 'salmon-bowl', name: 'Боул с лососем', description: 'Рис жасмин · лосось гриль · перепелиные яйца · свежий шпинат · огурец · томаты черри · морковь · эдамаме · зелёный лук · кунжут', weight: '350 г', price: 300, photo: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&h=300&fit=crop', categoryId: 'poke-bowls' },

    // ═══════ ПОКЕ — Йогурт-боулы ═══════
    { id: 'berry-yogurt', name: 'Ягодный микс', description: 'Греческий йогурт · свежая клубника · голубика · гранат · мюсли · семена чиа · мёд', weight: '300 г', price: 290, photo: 'https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=400&h=300&fit=crop', categoryId: 'yogurt-bowls' },
    { id: 'tropical-yogurt', name: 'Тропический', description: 'Греческий йогурт · манго · банан · киви · кокосовые хлопья · миндаль · мюсли · мёд', weight: '300 г', price: 260, photo: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop', categoryId: 'yogurt-bowls' },
    { id: 'nutella-banana-yogurt', name: 'Нутелла-банан', description: 'Греческий йогурт · банан · ананас · гранола · миндаль · шоколадный сироп', weight: '300 г', price: 290, photo: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop', categoryId: 'yogurt-bowls' },

    // ═══════ ТОСТЫ ═══════
    { id: 'avocado-toast', name: 'Авокадо тост', description: 'Хлеб · крем-чиз · авокадо · лимонный сок · оливковое масло · соль', weight: '200 г', price: 140, photo: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop', categoryId: 'toasts' },
    { id: 'avocado-salmon-toast', name: 'Авокадо тост с лососем', description: 'Хлеб · крем-чиз · руккола · авокадо · лосось · каперсы · перепелиные яйца (варёные) · лимонный сок · оливковое масло · соль', weight: '250 г', price: 220, photo: 'https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?w=400&h=300&fit=crop', categoryId: 'toasts' },
    { id: 'chicken-pesto-toast', name: 'Тост с курицей и песто', description: 'Хлеб · крем-чиз · авокадо · куриное филе · соус песто · томаты черри · руккола', weight: '230 г', price: 180, photo: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop', categoryId: 'toasts' },
    { id: 'caprese-toast', name: 'Тост Капрезе', description: 'Хлеб · оливковое масло · моцарелла · томаты · базилик', weight: '220 г', price: 210, photo: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop', categoryId: 'toasts' },

    // ═══════ САЛАТЫ ═══════
    { id: 'arugula-shrimp-mango', name: 'Салат с рукколой, креветками и манго', description: 'Свежая руккола · креветки обжаренные · манго · мёд · чеснок · оливковое масло · лайм · кунжут', weight: '300 г', price: 280, photo: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop', categoryId: 'salads' },
    { id: 'beef-arugula-spinach', name: 'Салат с говядиной, рукколой и шпинатом', description: 'Свежая руккола · свежий шпинат · говядина · томаты черри · красный лук · пармезан · оливковое масло · бальзамический соус · соевый соус · мёд · лимонный сок', weight: '300 г', price: 280, photo: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop', categoryId: 'salads' },
    { id: 'caesar-chicken', name: 'Цезарь с курицей', description: 'Куриное филе гриль · салат романо · томаты черри · перепелиные яйца · пармезан · гренки · соус цезарь', weight: '300 г', price: 260, photo: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop', categoryId: 'salads' },
    { id: 'caesar-shrimp', name: 'Цезарь с креветками', description: 'Креветки обжаренные · салат романо · томаты черри · перепелиные яйца · пармезан · гренки · соус цезарь', weight: '300 г', price: 260, photo: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?w=400&h=300&fit=crop', categoryId: 'salads' },
    { id: 'greek-salad', name: 'Салат «Греческий»', description: 'Болгарский перец · огурец · томаты черри · красный лук · оливки · сыр фета · оливковое масло · лимонный сок · орегано', weight: '280 г', price: 240, photo: 'https://images.unsplash.com/photo-1515543237350-b3c5ed6db6a3?w=400&h=300&fit=crop', categoryId: 'salads' },

    // ═══════ СУПЫ ═══════
    { id: 'borscht', name: 'Борщ', description: 'Свёкла · картофель · морковь · лук · томаты · чеснок · говядина · сметана', weight: '350 г', price: 240, photo: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop', categoryId: 'soups' },
    { id: 'chicken-meatball-soup', name: 'Куриный суп с фрикадельками', description: 'Картофель · морковь · лук · укроп · куриные фрикадельки · сметана', weight: '350 г', price: 180, photo: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=400&h=300&fit=crop', categoryId: 'soups' },
    { id: 'shchi', name: 'Щи из свежей капусты', description: 'Белокочанная капуста · картофель · морковь · лук · курица · укроп · сметана', weight: '350 г', price: 220, photo: 'https://images.unsplash.com/photo-1605522469906-3fe226b356bc?w=400&h=300&fit=crop', categoryId: 'soups' },

    // ═══════ ГОРЯЧИЕ БЛЮДА ═══════
    { id: 'chicken-cutlets', name: 'Куриные котлеты с пюре (2 шт.)', description: 'Куриный фарш · лук · чеснок · яйцо · хлеб · молоко · соль · картофельное пюре', weight: '350 г', price: 160, photo: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },
    { id: 'fish-cutlets', name: 'Рыбные котлеты с пюре (2 шт.)', description: 'Фарш из сёмги · лук · чеснок · яйцо · вода · хлеб · соль · картофельное пюре', weight: '350 г', price: 190, photo: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },
    { id: 'grilled-chicken', name: 'Куриное филе гриль', description: 'Куриное филе гриль · сливочное масло · соль · перец · морковь · бейби-кукуруза · спаржа · свежий шпинат · томаты черри · сырный соус', weight: '350 г', price: 260, photo: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },
    { id: 'grilled-salmon', name: 'Лосось гриль', description: 'Лосось гриль · сливочное масло · морковь · бейби-кукуруза · спаржа · свежий шпинат · томаты черри · сливочно-лимонный соус', weight: '350 г', price: 380, photo: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },
    { id: 'sweet-sour-chicken', name: 'Курица в кисло-сладком соусе', description: 'Куриное филе · болгарский перец · лук · ананасы · кисло-сладкий соус · кунжут', weight: '300 г', price: 190, photo: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },

    // ═══════ НАПИТКИ — Классический кофе ═══════
    { id: 'espresso', name: 'Эспрессо', description: '', weight: '', price: 60, photo: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'americano', name: 'Американо', description: '', weight: '', price: 60, photo: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'cappuccino', name: 'Капучино', description: '', weight: '', price: 80, photo: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'frappuccino', name: 'Фрапучино', description: '', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'macchiato', name: 'Макиато', description: '', weight: '', price: 80, photo: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'latte', name: 'Латте', description: '', weight: '', price: 90, photo: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'flat-white', name: 'Флэт уайт', description: '', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'mocha', name: 'Мокка', description: '', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'raf', name: 'Раф', description: '', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'cocoa', name: 'Какао', description: '', weight: '', price: 100, photo: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },
    { id: 'matcha-latte', name: 'Классический матча-латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },

    // ═══════ НАПИТКИ — Specialty кофе ═══════
    { id: 'orange-americano', name: 'Апельсиновый американо', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'coconut-americano', name: 'Кокосовый американо', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'tonic-americano', name: 'Тоник американо', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'honey-lemon-americano', name: 'Американо с мёдом и лимоном', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'caramel-latte', name: 'Карамельный латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'berry-latte', name: 'Ягодный латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'coconut-latte', name: 'Кокосовый латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'choco-mint-latte', name: 'Шоколадно-мятный латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'caramel-macchiato', name: 'Карамельный макиато', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'mint-mocha', name: 'Мятный мокка', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'affogato', name: 'Аффогато с кокосовым мороженым', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'cocoa-marshmallow', name: 'Какао с маршмеллоу', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'cocoa-raspberry-latte', name: 'Какао-малиновый латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'matcha-lemon-soda', name: 'Матча-лимонная сода', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },

    // ═══════ НАПИТКИ — Чай в пакетиках (300 мл) ═══════
    { id: 'black-tea', name: 'Чёрный чай', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'black-tea-thyme', name: 'Чёрный чай с тимьяном', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'bergamot-tea', name: 'Бергамот', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'green-tea', name: 'Зелёный', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'green-tea-melissa', name: 'Зелёный с мелиссой', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'jasmine-tea', name: 'Жасмин', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'strawberry-tea', name: 'Клубничный', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'milk-oolong', name: 'Молочный улун', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'apple-iced-tea', name: 'Яблочный холодный чай', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'peach-iced-tea', name: 'Персиковый холодный чай', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'lemon-iced-tea', name: 'Лимонный холодный чай', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'mango-iced-tea', name: 'Манговый холодный чай', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'thai-iced-tea', name: 'Тайский холодный чай', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', categoryId: 'tea-bags' },

    // ═══════ НАПИТКИ — Чайник (1000 мл) ═══════
    { id: 'teapot-raspberry', name: 'Малина', description: 'Зелёный чай, малина, мята, лайм', weight: '1000 мл', price: 150, photo: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', categoryId: 'teapot' },
    { id: 'teapot-apple', name: 'Яблоко', description: 'Чёрный чай, яблоко, корица, анис', weight: '1000 мл', price: 150, photo: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', categoryId: 'teapot' },
    { id: 'teapot-cranberry', name: 'Клюква', description: 'Чёрный чай, клюква, апельсин, анис, корица', weight: '1000 мл', price: 150, photo: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', categoryId: 'teapot' },
    { id: 'teapot-herbal', name: 'Травяной', description: 'Лемонграсс, имбирь, лайм', weight: '1000 мл', price: 150, photo: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', categoryId: 'teapot' },
    { id: 'teapot-blossom', name: 'Blossom Harmony', description: 'Синий чай анчан, роза', weight: '1000 мл', price: 150, photo: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', categoryId: 'teapot' },
    { id: 'teapot-chrysanthemum', name: 'Хризантема', description: 'Чай из цветков хризантемы, мята, лайм', weight: '1000 мл', price: 150, photo: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', categoryId: 'teapot' },

    // ═══════ НАПИТКИ — Detox соки (200 мл) ═══════
    { id: 'green-glow', name: 'Green Glow', description: 'Сельдерей, зелёное яблоко, лимон, имбирь', weight: '200 мл', price: 140, photo: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop', categoryId: 'detox-juice' },
    { id: 'golden-power', name: 'Golden Power', description: 'Морковь, яблоко, лимон, имбирь, куркума', weight: '200 мл', price: 140, photo: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop', categoryId: 'detox-juice' },
    { id: 'morning-boost', name: 'Morning Boost', description: 'Ананас, апельсин, лимон', weight: '200 мл', price: 140, photo: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop', categoryId: 'detox-juice' },
    { id: 'garden-power', name: 'Garden Power', description: 'Шпинат беби, огурец, зелёное яблоко, лимон', weight: '200 мл', price: 140, photo: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop', categoryId: 'detox-juice' },
    { id: 'pink-power', name: 'Pink Power', description: 'Свёкла, яблоко, морковь, лимон, имбирь', weight: '200 мл', price: 140, photo: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop', categoryId: 'detox-juice' },

    // ═══════ НАПИТКИ — Свежевыжатые соки (200 мл) ═══════
    { id: 'orange-juice', name: 'Апельсин', description: '', weight: '200 мл', price: 120, photo: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop', categoryId: 'fresh-juice' },
    { id: 'apple-juice', name: 'Яблоко', description: '', weight: '200 мл', price: 120, photo: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop', categoryId: 'fresh-juice' },
    { id: 'pineapple-juice', name: 'Ананас', description: '', weight: '200 мл', price: 120, photo: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop', categoryId: 'fresh-juice' },
    { id: 'carrot-juice', name: 'Морковь', description: '', weight: '200 мл', price: 120, photo: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop', categoryId: 'fresh-juice' },

    // ═══════ НАПИТКИ — Шейки (500 мл) ═══════
    { id: 'mango-shake', name: 'Манго', description: '', weight: '500 мл', price: 100, photo: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'watermelon-shake', name: 'Арбуз', description: '', weight: '500 мл', price: 100, photo: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'pineapple-shake', name: 'Ананас', description: '', weight: '500 мл', price: 100, photo: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'lime-shake', name: 'Лайм', description: '', weight: '500 мл', price: 100, photo: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'banana-milkshake', name: 'Банановый милкшейк', description: '', weight: '500 мл', price: 110, photo: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'coconut-milkshake', name: 'Кокосовый милкшейк', description: '', weight: '500 мл', price: 110, photo: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'protein-vanilla', name: 'Протеин ваниль', description: '', weight: '500 мл', price: 130, photo: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'protein-chocolate', name: 'Протеин шоколад', description: '', weight: '500 мл', price: 130, photo: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'protein-strawberry', name: 'Протеин клубника', description: '', weight: '500 мл', price: 130, photo: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'protein-banana', name: 'Протеин банан', description: '', weight: '500 мл', price: 130, photo: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'protein-coffee', name: 'Протеин кофе', description: '', weight: '500 мл', price: 150, photo: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'protein-muesli-banana', name: 'Смузи протеин мюсли, банан', description: '', weight: '500 мл', price: 150, photo: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', categoryId: 'shakes' },

    // ═══════ НАПИТКИ — Домашние лимонады ═══════
    { id: 'tropical-passion', name: 'Tropical Passion', description: 'Пюре маракуйи, сироп маракуйи, содовая, лёд', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop', categoryId: 'lemonade' },
    { id: 'strawberry-kiss', name: 'Strawberry Kiss', description: 'Клубничное пюре, клубничный сироп, лимонный сок, содовая, лёд', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop', categoryId: 'lemonade' },
    { id: 'lemon-shine', name: 'Lemon Shine', description: 'Лимонный сок, лимонный сироп, лайм, содовая, лёд', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop', categoryId: 'lemonade' },
    { id: 'raspberry-ginger', name: 'Raspberry Ginger', description: 'Малиновое пюре, малиновый сироп, имбирный сок, содовая, лёд', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop', categoryId: 'lemonade' },

    // ═══════ НАПИТКИ — Моктейли ═══════
    { id: 'sunrise', name: 'Sunrise', description: 'Апельсиновый сок, сироп юдзу, клубничный сироп, содовая, лёд', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop', categoryId: 'mocktails' },
    { id: 'mojito', name: 'Mojito', description: 'Мята, лайм, тростниковый сахар, сироп лайма, содовая, лёд', weight: '', price: 90, photo: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop', categoryId: 'mocktails' },
    { id: 'strawberry-mojito', name: 'Strawberry Mojito', description: 'Мята, лайм, клубника, тростниковый сахар, сироп лайма, содовая, лёд', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop', categoryId: 'mocktails' },
    { id: 'mango-mojito', name: 'Mango Mojito', description: 'Мята, лайм, манго, тростниковый сахар, сироп лайма, содовая, лёд', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop', categoryId: 'mocktails' },
    { id: 'blue-butterfly', name: 'Blue Butterfly', description: 'Пюре маракуйи, сироп маракуйи, чай анчан, содовая, лёд', weight: '', price: 110, photo: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop', categoryId: 'mocktails' },
    { id: 'choco-banana', name: 'Choco Banana', description: 'Банановое пюре, молоко, шоколадный сироп, взбитые сливки', weight: '', price: 130, photo: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop', categoryId: 'mocktails' },
    { id: 'pina-colada', name: 'Pina Colada', description: 'Кокосовое молоко, ананасовый сок, кокосовый сироп, взбитые сливки', weight: '', price: 130, photo: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop', categoryId: 'mocktails' },

    // ═══════ НАПИТКИ — Безалкогольные напитки ═══════
    { id: 'water', name: 'Вода', description: '', weight: '500 мл', price: 30, photo: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop', categoryId: 'soft-drinks' },
    { id: 'soda-water', name: 'Содовая', description: '', weight: '330 мл', price: 30, photo: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop', categoryId: 'soft-drinks' },
    { id: 'singha-lemon', name: 'Singha Red Lemon Soda', description: '', weight: '330 мл', price: 40, photo: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop', categoryId: 'soft-drinks' },
    { id: 'schweppes-tonic', name: 'Schweppes тоник', description: '', weight: '330 мл', price: 40, photo: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop', categoryId: 'soft-drinks' },
    { id: 'sprite', name: 'Sprite', description: '', weight: '330 мл', price: 50, photo: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop', categoryId: 'soft-drinks' },
    { id: 'coca-cola', name: 'Coca-Cola (обычная/zero)', description: '', weight: '330 мл', price: 50, photo: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop', categoryId: 'soft-drinks' },
    { id: 'fanta', name: 'Fanta апельсин', description: '', weight: '330 мл', price: 50, photo: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop', categoryId: 'soft-drinks' },
];

// ──────────────────────────── API ────────────────────────────
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const getCategories = async (parentId?: string): Promise<Category[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (parentId) {
                resolve(categories.filter((c) => c.parentId === parentId));
            } else {
                resolve(categories.filter((c) => !c.parentId));
            }
        }, 300);
    });
};

export const getDishes = async (categoryId?: string): Promise<Dish[]> => {
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
