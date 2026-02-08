import { Category, Dish } from '../types';

// ──────────────────────────── CATEGORIES ────────────────────────────
const categories: Category[] = [
    // ── Top-level ──
    { id: 'breakfast', name: '🥞 Завтраки', cover: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop' },
    { id: 'poke', name: '🥗 Поке боулы', cover: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop' },
    { id: 'toasts', name: '🥪 Тосты', cover: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop' },
    { id: 'salads', name: '🥬 Салаты', cover: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop' },
    { id: 'soups', name: '🍲 Супы', cover: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop' },
    { id: 'hot-dishes', name: '🍛 Горячие блюда', cover: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop' },
    { id: 'sides', name: '🍚 Гарниры', cover: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop' },
    { id: 'desserts', name: '🍰 Десерты', cover: 'https://images.unsplash.com/photo-1563729768-6af7c96d2075?w=400&h=300&fit=crop' },
    { id: 'drinks', name: '🥤 Напитки', cover: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop' },

    // ── Завтраки → subcategories ──
    { id: 'eggs', name: '🍳 Яичные блюда', cover: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&h=300&fit=crop', parentId: 'breakfast' },
    { id: 'pancakes', name: '🥞 Блинчики', cover: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop', parentId: 'breakfast' },
    { id: 'syrniki', name: '🧀 Сырники', cover: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&h=300&fit=crop', parentId: 'breakfast' },
    { id: 'porridge', name: '🥣 Каши', cover: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=400&h=300&fit=crop', parentId: 'breakfast' },

    // ── Поке → subcategories ──
    { id: 'poke-bowls', name: '🥗 Поке боулы', cover: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop', parentId: 'poke' },
    { id: 'yogurt-bowls', name: '🍓 Йогурт-боулы', cover: 'https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?w=400&h=300&fit=crop', parentId: 'poke' },

    // ── Напитки → subcategories ──
    { id: 'classic-coffee', name: '☕ Классический кофе', cover: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'specialty-coffee', name: '☕ Specialty кофе', cover: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'tea-bags', name: '🍵 Чай в пакетиках', cover: 'https://images.unsplash.com/photo-1576092768241-dec231844f74?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'teapot', name: '🫖 Чайник', cover: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'detox-juice', name: '🥤 Detox соки', cover: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'fresh-juice', name: '🍊 Свежевыжатые соки', cover: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'shakes', name: '🥤 Шейки', cover: 'https://images.unsplash.com/photo-1579954115545-a95591f28dfc?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'lemonade', name: '🍋 Домашние лимонады', cover: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'mocktails', name: '🍹 Моктейли', cover: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop', parentId: 'drinks' },
    { id: 'soft-drinks', name: '🥤 Безалкогольные напитки', cover: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop', parentId: 'drinks' },
];

// ──────────────────────────── DISHES ────────────────────────────
const dishes: Dish[] = [
    // ═══════ ЗАВТРАКИ — Яичные блюда ═══════
    { id: 'english-breakfast', name: 'Английский завтрак', description: '2 яйца · бекон · 2 сосиски · овощной микс (салат) · хлеб', weight: '350 г', price: 190, photo: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop', categoryId: 'eggs' },
    { id: 'scramble', name: 'Скрэмбл', description: '2 яйца · овощной микс (салат) · хлеб', weight: '200 г', price: 140, photo: 'https://images.unsplash.com/photo-1529583488247-48f8600d8928?w=400&h=300&fit=crop', categoryId: 'eggs' },
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
    { id: 'avocado-toast', name: 'Авокадо тост', description: 'Хлеб · крем-чиз · авокадо · лимонный сок · оливковое масло', weight: '200 г', price: 140, photo: 'https://images.unsplash.com/photo-1588137372308-15f75323ca8d?w=400&h=300&fit=crop', categoryId: 'toasts' },
    { id: 'avocado-salmon-toast', name: 'Авокадо тост с лососем', description: 'Хлеб · крем-чиз · руккола · авокадо · лосось · каперсы · яйца', weight: '250 г', price: 220, photo: 'https://images.unsplash.com/photo-1534441097653-bba80a5264b7?w=400&h=300&fit=crop', categoryId: 'toasts' },
    { id: 'chicken-pesto-toast', name: 'Тост с курицей и песто', description: 'Хлеб · крем-чиз · авокадо · курица · песто · черри · руккола', weight: '230 г', price: 180, photo: 'https://images.unsplash.com/photo-1600271801401-647d3ee36cf2?w=400&h=300&fit=crop', categoryId: 'toasts' },
    { id: 'caprese-toast', name: 'Тост Капрезе', description: 'Хлеб · оливковое масло · моцарелла · томаты · базилик', weight: '220 г', price: 210, photo: 'https://images.unsplash.com/photo-1595190011504-20a6713e717a?w=400&h=300&fit=crop', categoryId: 'toasts' },

    // ═══════ САЛАТЫ ═══════
    { id: 'arugula-shrimp-mango', name: 'Салат с рукколой, креветками и манго', description: 'Руккола · креветки · манго · мёд · чеснок · оливковое масло · лайм · кунжут', weight: '300 г', price: 280, photo: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop', categoryId: 'salads' },
    { id: 'beef-arugula-spinach', name: 'Салат с говядиной, рукколой и шпинатом', description: 'Руккола · шпинат · говядина · черри · пармезан · бальзамик', weight: '300 г', price: 280, photo: 'https://images.unsplash.com/photo-1601356616077-695028bc368d?w=400&h=300&fit=crop', categoryId: 'salads' },
    { id: 'caesar-chicken', name: 'Цезарь с курицей', description: 'Курица гриль · романо · черри · пармезан · гренки · соус цезарь', weight: '300 г', price: 260, photo: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop', categoryId: 'salads' },
    { id: 'caesar-shrimp', name: 'Цезарь с креветками', description: 'Креветки · романо · черри · пармезан · гренки · соус цезарь', weight: '300 г', price: 260, photo: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop', categoryId: 'salads' },
    { id: 'greek-salad', name: 'Салат «Греческий»', description: 'Перец · огурец · черри · лук · оливки · фета · оливковое масло', weight: '280 г', price: 240, photo: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop', categoryId: 'salads' },

    // ═══════ СУПЫ ═══════
    { id: 'borscht', name: 'Борщ', description: 'Свёкла · картофель · морковь · лук · томаты · чеснок · говядина · сметана', weight: '350 г', price: 240, photo: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop', categoryId: 'soups' },
    { id: 'chicken-meatball-soup', name: 'Куриный суп с фрикадельками', description: 'Картофель · морковь · лук · укроп · фрикадельки · сметана', weight: '350 г', price: 180, photo: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop', categoryId: 'soups' },
    { id: 'shchi', name: 'Щи из свежей капусты', description: 'Капуста · картофель · морковь · лук · курица · укроп · сметана', weight: '350 г', price: 220, photo: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop', categoryId: 'soups' },

    // ═══════ ГОРЯЧИЕ БЛЮДА ═══════
    { id: 'chicken-cutlets', name: 'Куриные котлеты с пюре (2 шт.)', description: 'Куриный фарш · лук · чеснок · яйцо · пюре', weight: '350 г', price: 160, photo: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },
    { id: 'fish-cutlets', name: 'Рыбные котлеты с пюре (2 шт.)', description: 'Фарш из сёмги · лук · чеснок · яйцо · пюре', weight: '350 г', price: 190, photo: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },
    { id: 'grilled-chicken', name: 'Куриное филе гриль', description: 'Куриное филе гриль · овощи · сырный соус', weight: '350 г', price: 260, photo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },
    { id: 'grilled-salmon', name: 'Лосось гриль', description: 'Лосось гриль · овощи · сливочно-лимонный соус', weight: '350 г', price: 380, photo: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },
    { id: 'sweet-sour-chicken', name: 'Курица в кисло-сладком соусе', description: 'Куриное филе · перец · лук · ананасы · кисло-сладкий соус · кунжут', weight: '300 г', price: 190, photo: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=400&h=300&fit=crop', categoryId: 'hot-dishes' },

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
    { id: 'matcha-latte', name: 'Классический матча-латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1515822397-6a12541a5d6e?w=400&h=300&fit=crop', categoryId: 'classic-coffee' },

    // ═══════ НАПИТКИ — Specialty кофе ═══════
    { id: 'orange-americano', name: 'Апельсиновый американо', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1596707323201-356165509930?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'coconut-americano', name: 'Кокосовый американо', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1517406256920-5643444280cf?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'tonic-americano', name: 'Тоник американо', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1596707323201-356165509930?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'honey-lemon-americano', name: 'Американо с мёдом и лимоном', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'caramel-latte', name: 'Карамельный латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'berry-latte', name: 'Ягодный латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1529121882030-a15d0ecac0db?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'coconut-latte', name: 'Кокосовый латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1620216120155-08e1ec626d7c?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'choco-mint-latte', name: 'Шоколадно-мятный латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1515234907297-f584fdf50ba2?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'caramel-macchiato', name: 'Карамельный макиато', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1485609653198-bc46c05d7b57?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'mint-mocha', name: 'Мятный мокка', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1533256073147-3dc6f82b7931?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'affogato', name: 'Аффогато с кокосовым мороженым', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1588665726259-2428587eb098?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'cocoa-marshmallow', name: 'Какао с маршмеллоу', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1563223164-28b940907e54?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'cocoa-raspberry-latte', name: 'Какао-малиновый латте', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1549420078-4378772297af?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },
    { id: 'matcha-lemon-soda', name: 'Матча-лимонная сода', description: '', weight: '', price: 120, photo: 'https://images.unsplash.com/photo-1598918237279-373b75ab9693?w=400&h=300&fit=crop', categoryId: 'specialty-coffee' },

    // ═══════ НАПИТКИ — Чай в пакетиках (300 мл) ═══════
    { id: 'black-tea', name: 'Чёрный чай', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'green-tea', name: 'Зелёный чай', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'fruit-tea', name: 'Фруктовый чай', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'herbal-tea', name: 'Травяной чай', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'earl-grey', name: 'Эрл Грей', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'jasmine-tea', name: 'Жасмин', description: '', weight: '300 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'chamomile-tea', name: 'Ромашка', description: '', weight: '450 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'pu-erh', name: 'Пуэр', description: '', weight: '450 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'oolong', name: 'Улун', description: '', weight: '450 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'red-tea', name: 'Каркаде', description: '', weight: '450 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'tie-guan-yin', name: 'Те Гуань Инь', description: '', weight: '450 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'da-hong-pao', name: 'Да Хун Пао', description: '', weight: '450 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },
    { id: 'milk-oolong', name: 'Молочный улун', description: '', weight: '450 мл', price: 80, photo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400&h=300&fit=crop', categoryId: 'tea-bags' },

    // ═══════ НАПИТКИ — Чайник (1000 мл) ═══════
    { id: 'sencha-teapot', name: 'Сенча', description: '', weight: '600 мл', price: 150, photo: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', categoryId: 'teapot' },
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
    { id: 'carrot-juice', name: 'Морковный', description: '', weight: '300 мл', price: 120, photo: 'https://images.unsplash.com/photo-1598465961621-e00947ba9440?w=400&h=300&fit=crop', categoryId: 'fresh-juice' },
    { id: 'apple-juice', name: 'Яблочный', description: '', weight: '300 мл', price: 120, photo: 'https://images.unsplash.com/photo-1579781354199-1bd1dd47f30d?w=400&h=300&fit=crop', categoryId: 'fresh-juice' },
    { id: 'orange-juice', name: 'Апельсиновый', description: '', weight: '300 мл', price: 120, photo: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop', categoryId: 'fresh-juice' },
    { id: 'pineapple-juice', name: 'Ананасовый', description: '', weight: '300 мл', price: 120, photo: 'https://images.unsplash.com/photo-1601282697274-1b15cb8872a0?w=400&h=300&fit=crop', categoryId: 'fresh-juice' },
    // ═══════ НАПИТКИ — Шейки (350 мл) ═══════
    { id: 'coconut-shake', name: 'Кокосовый', description: '', weight: '350 мл', price: 100, photo: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'pineapple-shake', name: 'Ананасовый', description: '', weight: '350 мл', price: 100, photo: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'watermelon-shake', name: 'Арбузный', description: '', weight: '350 мл', price: 100, photo: 'https://images.unsplash.com/photo-1589734580289-e88b50935105?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'melon-shake', name: 'Дынный', description: '', weight: '350 мл', price: 100, photo: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'mango-shake', name: 'Манго', description: '', weight: '350 мл', price: 120, photo: 'https://images.unsplash.com/photo-1634629377402-45bdd4dfd8da?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'banana-shake', name: 'Банановый', description: '', weight: '350 мл', price: 100, photo: 'https://images.unsplash.com/photo-1596489397666-a33719001b6c?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'dragonfruit-shake', name: 'Драгонфрут', description: '', weight: '350 мл', price: 120, photo: 'https://images.unsplash.com/photo-1628557044797-f21a17b916c5?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'passion-fruit-shake', name: 'Маракуйя', description: '', weight: '350 мл', price: 120, photo: 'https://images.unsplash.com/photo-1549420078-4378772297af?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'strawberry-shake', name: 'Клубничный', description: '', weight: '350 мл', price: 120, photo: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'kiwi-shake', name: 'Киви', description: '', weight: '350 мл', price: 120, photo: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'lime-shake', name: 'Лайм', description: '', weight: '350 мл', price: 120, photo: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400&h=300&fit=crop', categoryId: 'shakes' },
    { id: 'mix-shake', name: 'Микс (любой)', description: '', weight: '350 мл', price: 120, photo: 'https://images.unsplash.com/photo-1579954115545-a95591f28dfc?w=400&h=300&fit=crop', categoryId: 'shakes' },
    // ═══════ НАПИТКИ — Лимонады (400 мл) ═══════
    { id: 'classic-lemonade', name: 'Классический', description: '', weight: '400 мл', price: 120, photo: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop', categoryId: 'lemonade' },
    { id: 'strawberry-lychee', name: 'Клубника-личи', description: '', weight: '400 мл', price: 120, photo: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop', categoryId: 'lemonade' },
    { id: 'passion-orange', name: 'Маракуйя-апельсин', description: '', weight: '400 мл', price: 120, photo: 'https://images.unsplash.com/photo-1549420078-4378772297af?w=400&h=300&fit=crop', categoryId: 'lemonade' },
    { id: 'butterfly-pea', name: 'Анчан-лайм', description: '', weight: '400 мл', price: 120, photo: 'https://images.unsplash.com/photo-1628109673238-04f85e439587?w=400&h=300&fit=crop', categoryId: 'lemonade' },
    // ═══════ НАПИТКИ — Моктейли (400 мл) ═══════
    { id: 'mojito', name: 'Мохито', description: '', weight: '400 мл', price: 150, photo: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop', categoryId: 'mocktails' },
    { id: 'pina-colada', name: 'Пина колада', description: '', weight: '400 мл', price: 150, photo: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop', categoryId: 'mocktails' },
    { id: 'fruit-punch', name: 'Фруктовый пунш', description: '', weight: '400 мл', price: 150, photo: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop', categoryId: 'mocktails' },
    { id: 'blue-lagoon', name: 'Голубая лагуна', description: '', weight: '400 мл', price: 150, photo: 'https://images.unsplash.com/photo-1628109673238-04f85e439587?w=400&h=300&fit=crop', categoryId: 'mocktails' },
    { id: 'sunrise', name: 'Санрайз', description: '', weight: '400 мл', price: 150, photo: 'https://images.unsplash.com/photo-1549420078-4378772297af?w=400&h=300&fit=crop', categoryId: 'mocktails' },
    { id: 'strawberry-mojito', name: 'Клубничный мохито', description: '', weight: '400 мл', price: 150, photo: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop', categoryId: 'mocktails' },
    { id: 'virgin-mary', name: 'Вирджин мэри', description: '', weight: '400 мл', price: 150, photo: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop', categoryId: 'mocktails' },
    // ═══════ НАПИТКИ — Безалкогольные ═══════
    { id: 'water', name: 'Water', description: '', weight: '500 ml', price: 30, photo: '', categoryId: 'soft-drinks' },
    { id: 'soda-water', name: 'Soda water', description: '', weight: '330 ml', price: 30, photo: '', categoryId: 'soft-drinks' },
    { id: 'singha-lemon-soda', name: 'Singha Red Lemon Soda', description: '', weight: '330 ml', price: 40, photo: '', categoryId: 'soft-drinks' },
    { id: 'schweppes-tonic', name: 'Schweppes Tonic Water', description: '', weight: '330 ml', price: 40, photo: '', categoryId: 'soft-drinks' },
    { id: 'sprite', name: 'Sprite', description: '', weight: '330 ml', price: 50, photo: '', categoryId: 'soft-drinks' },
    { id: 'coca-cola', name: 'Coca-Cola (Original/Zero)', description: '', weight: '330 ml', price: 50, photo: '', categoryId: 'soft-drinks' },
    { id: 'fanta-orange', name: 'Fanta Orange', description: '', weight: '330 ml', price: 50, photo: '', categoryId: 'soft-drinks' },
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
