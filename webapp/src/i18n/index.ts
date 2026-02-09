export type Language = 'ru' | 'en';

// Get language from localStorage or default to Russian
export const getLanguage = (): Language => {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'ru') return saved;
    return 'ru';
};

export const setLanguage = (lang: Language): void => {
    localStorage.setItem('language', lang);
    window.dispatchEvent(new Event('languageChange'));
};

// ──────────────────────────── CATEGORY TRANSLATIONS ────────────────────────────
export const categoryTranslations: Record<string, Record<Language, string>> = {
    // Top-level
    breakfast: { ru: '🥞 Завтраки', en: '🥞 Breakfast' },
    poke: { ru: '🥗 Поке боулы', en: '🥗 Poke Bowls' },
    toasts: { ru: '🥪 Тосты', en: '🥪 Toasts' },
    salads: { ru: '🥬 Салаты', en: '🥬 Salads' },
    soups: { ru: '🍲 Супы', en: '🍲 Soups' },
    'hot-dishes': { ru: '🍛 Горячие блюда', en: '🍛 Hot Dishes' },
    sides: { ru: '🍚 Гарниры', en: '🍚 Side Dishes' },
    desserts: { ru: '🍰 Десерты', en: '🍰 Desserts' },
    drinks: { ru: '🥤 Напитки', en: '🥤 Drinks' },
    // Breakfast subs
    eggs: { ru: '🍳 Яичные блюда', en: '🍳 Egg Dishes' },
    pancakes: { ru: '🥞 Блинчики', en: '🥞 Pancakes' },
    syrniki: { ru: '🧀 Сырники', en: '🧀 Syrniki' },
    porridge: { ru: '🥣 Каши', en: '🥣 Porridge' },
    // Poke subs
    'poke-bowls': { ru: '🥗 Поке боулы', en: '🥗 Poke Bowls' },
    'yogurt-bowls': { ru: '🍓 Йогурт-боулы', en: '🍓 Yogurt Bowls' },
    // Drinks subs
    'classic-coffee': { ru: '☕ Классический кофе', en: '☕ Classic Coffee' },
    'specialty-coffee': { ru: '☕ Specialty кофе', en: '☕ Specialty Coffee' },
    'tea-bags': { ru: '🍵 Чай в пакетиках', en: '🍵 Tea Bags' },
    teapot: { ru: '🫖 Чайник', en: '🫖 Teapot' },
    'detox-juice': { ru: '🥤 Detox соки', en: '🥤 Detox Juice' },
    'fresh-juice': { ru: '🍊 Свежевыжатые соки', en: '🍊 Fresh Juice' },
    shakes: { ru: '🥤 Шейки', en: '🥤 Shakes' },
    lemonade: { ru: '🍋 Домашние лимонады', en: '🍋 Homemade Lemonade' },
    mocktails: { ru: '🍹 Моктейли', en: '🍹 Mocktails' },
    'soft-drinks': { ru: '🥤 Безалкогольные напитки', en: '🥤 Soft Drinks' },
};

// ──────────────────────────── DISH TRANSLATIONS ────────────────────────────
export const dishTranslations: Record<string, { name: Record<Language, string>; description: Record<Language, string> }> = {
    // ═══════ Яичные блюда ═══════
    'english-breakfast': {
        name: { ru: 'Английский завтрак', en: 'English Breakfast' },
        description: { ru: '2 яйца · бекон · 2 сосиски · овощной микс (салат) · хлеб', en: '2 eggs · bacon · 2 sausages · mixed vegetables (salad) · bread' },
    },
    'scramble': {
        name: { ru: 'Скрэмбл', en: 'Scrambled Eggs' },
        description: { ru: '2 яйца · овощной микс (салат) · хлеб', en: '2 eggs · vegetable mix (salad) · bread' },
    },
    'vegetable-omelette': {
        name: { ru: 'Омлет с овощами', en: 'Vegetable Omelette' },
        description: { ru: '2 яйца · томаты · болгарский перец · репчатый лук · овощной микс · хлеб', en: '2 eggs · tomatoes · bell pepper · onion · vegetable mix · bread' },
    },
    'ham-cheese-omelette': {
        name: { ru: 'Омлет с ветчиной и сыром', en: 'Ham & Cheese Omelette' },
        description: { ru: '2 яйца · ветчина · сыр · овощной микс · хлеб', en: '2 eggs · ham · cheese · vegetable mix · bread' },
    },
    'greek-omelette': {
        name: { ru: 'Омлет по-гречески', en: 'Greek Omelette' },
        description: { ru: '2 яйца · томаты · крем-сыр · оливки · овощной микс · хлеб', en: '2 eggs · tomatoes · cream cheese · olives · vegetable mix · bread' },
    },
    // ═══════ Блинчики ═══════
    'pancakes-toppings': {
        name: { ru: 'Блинчики с топпингами', en: 'Pancakes, 3 pcs with toppings (choose 2)' },
        description: { ru: '3 шт. · 2 топпинга на выбор: сметана / клубничный джем / шоколадный соус / мёд / кленовый сироп', en: 'Toppings: sour cream · strawberry jam · chocolate sauce · honey · maple syrup' },
    },
    'pancakes-cottage-cheese': {
        name: { ru: 'Блинчики с творогом', en: 'Pancakes with Cottage Cheese, 2 pcs' },
        description: { ru: '2 шт. · домашний творог · сметана · микс свежих ягод', en: 'Pancakes · homemade cottage cheese · sour cream · fresh berry mix' },
    },
    'pancakes-ham-cheese': {
        name: { ru: 'Блинчики с ветчиной и сыром', en: 'Pancakes with Ham & Cheese, 2 pcs' },
        description: { ru: '2 шт. · ветчина · сыр · зелень', en: 'Pancakes · ham · cheese · greens' },
    },
    'pancakes-nutella-banana': {
        name: { ru: 'Блинчики «Нутелла–банан»', en: 'Nutella–Banana Pancakes, 2 pcs' },
        description: { ru: '2 шт. · нутелла · банан · шоколадный соус', en: 'Pancakes · Nutella · banana · chocolate sauce' },
    },
    // ═══════ Сырники ═══════
    'syrniki-dish': {
        name: { ru: 'Сырники', en: 'Syrniki (Cottage Cheese Fritters), 3 pcs' },
        description: { ru: '3 шт. · домашний творог · микс свежих ягод · 2 топпинга на выбор: сметана / клубничный джем / шоколадный соус / мёд / кленовый сироп', en: 'Homemade cottage cheese · fresh berry mix · toppings (choose 2): sour cream · strawberry jam · chocolate sauce · honey · maple syrup' },
    },
    // ═══════ Каши ═══════
    'oatmeal': {
        name: { ru: 'Овсяная каша', en: 'Oatmeal' },
        description: { ru: 'Молоко (коровье / кокосовое) · овсянка · микс свежих ягод', en: 'Milk (dairy / coconut) · oats · fresh berry mix' },
    },
    'rice-porridge': {
        name: { ru: 'Рисовая каша', en: 'Rice Porridge' },
        description: { ru: 'Молоко (коровье / кокосовое) · рис жасмин · манго', en: 'Milk (dairy / coconut) · jasmine rice · mango' },
    },
    // ═══════ Поке боулы ═══════
    'shrimp-bowl': {
        name: { ru: 'Боул с креветками', en: 'Shrimp Bowl' },
        description: { ru: 'Рис жасмин · креветки отварные · перепелиные яйца · свежий шпинат · огурец · томаты черри · морковь · эдамаме · зелёный лук · кунжут', en: 'Jasmine rice · boiled shrimp · quail eggs · fresh spinach · cucumber · cherry tomatoes · carrot · edamame · green onion · sesame' },
    },
    'chicken-bowl': {
        name: { ru: 'Боул с курицей', en: 'Chicken Bowl' },
        description: { ru: 'Рис жасмин · курица гриль · перепелиные яйца · свежий шпинат · огурец · томаты черри · морковь · эдамаме · зелёный лук · кунжут', en: 'Jasmine rice · grilled chicken · quail eggs · fresh spinach · cucumber · cherry tomatoes · carrot · edamame · green onion · sesame' },
    },
    'salmon-bowl': {
        name: { ru: 'Боул с лососем', en: 'Salmon Bowl' },
        description: { ru: 'Рис жасмин · лосось гриль · перепелиные яйца · свежий шпинат · огурец · томаты черри · морковь · эдамаме · зелёный лук · кунжут', en: 'Jasmine rice · grilled salmon · quail eggs · fresh spinach · cucumber · cherry tomatoes · carrot · edamame · green onion · sesame' },
    },
    // ═══════ Йогурт-боулы ═══════
    'berry-yogurt': {
        name: { ru: 'Ягодный микс', en: 'Berry Mix' },
        description: { ru: 'Греческий йогурт · свежая клубника · голубика · гранат · мюсли · семена чиа · мёд', en: 'Greek yogurt · fresh strawberries · blueberries · pomegranate · muesli · chia seeds · honey' },
    },
    'tropical-yogurt': {
        name: { ru: 'Тропический', en: 'Tropical' },
        description: { ru: 'Греческий йогурт · манго · банан · киви · кокосовые хлопья · миндаль · мюсли · мёд', en: 'Greek yogurt · mango · banana · kiwi · coconut flakes · almonds · muesli · honey' },
    },
    'nutella-banana-yogurt': {
        name: { ru: 'Нутелла-банан', en: 'Nutella Banana' },
        description: { ru: 'Греческий йогурт · банан · ананас · гранола · миндаль · шоколадный сироп', en: 'Greek yogurt · banana · pineapple · granola · almonds · chocolate syrup' },
    },
    // ═══════ Тосты ═══════
    'avocado-toast': {
        name: { ru: 'Авокадо тост', en: 'Avocado Toast' },
        description: { ru: 'Хлеб · крем-чиз · авокадо · лимонный сок · оливковое масло · соль', en: 'Bread · cream cheese · avocado · lemon juice · olive oil · salt' },
    },
    'avocado-salmon-toast': {
        name: { ru: 'Авокадо тост с лососем', en: 'Avocado Toast with Salmon' },
        description: { ru: 'Хлеб · крем-чиз · руккола · авокадо · лосось · каперсы · перепелиные яйца (варёные) · лимонный сок · оливковое масло · соль', en: 'Bread · cream cheese · arugula · avocado · salmon · capers · boiled quail eggs · lemon juice · olive oil · salt' },
    },
    'chicken-pesto-toast': {
        name: { ru: 'Тост с курицей и песто', en: 'Chicken Pesto Toast' },
        description: { ru: 'Хлеб · крем-чиз · авокадо · куриное филе · соус песто · томаты черри · руккола', en: 'Bread · cream cheese · avocado · chicken fillet · pesto sauce · cherry tomatoes · arugula' },
    },
    'caprese-toast': {
        name: { ru: 'Тост Капрезе', en: 'Caprese Toast' },
        description: { ru: 'Хлеб · оливковое масло · моцарелла · томаты · базилик', en: 'Bread · olive oil · mozzarella · tomatoes · basil' },
    },
    // ═══════ Салаты ═══════
    'arugula-shrimp-mango': {
        name: { ru: 'Салат с рукколой, креветками и манго', en: 'Arugula Salad with Shrimp & Mango' },
        description: { ru: 'Свежая руккола · креветки обжаренные · манго · мёд · чеснок · оливковое масло · лайм · кунжут', en: 'Fresh arugula · sautéed shrimp · mango · honey · garlic · olive oil · lime · sesame' },
    },
    'beef-arugula-spinach': {
        name: { ru: 'Салат с говядиной, рукколой и шпинатом', en: 'Beef Salad with Arugula & Spinach' },
        description: { ru: 'Свежая руккола · свежий шпинат · говядина · томаты черри · красный лук · пармезан · оливковое масло · бальзамический соус · соевый соус · мёд · лимонный сок', en: 'Fresh arugula · fresh spinach · beef · cherry tomatoes · red onion · parmesan · olive oil · balsamic sauce · soy sauce · honey · lemon juice' },
    },
    'caesar-chicken': {
        name: { ru: 'Цезарь с курицей', en: 'Caesar with Chicken' },
        description: { ru: 'Куриное филе гриль · салат романо · томаты черри · перепелиные яйца · пармезан · гренки · соус цезарь', en: 'Grilled chicken fillet · romaine lettuce · cherry tomatoes · quail eggs · parmesan · croutons · Caesar dressing' },
    },
    'caesar-shrimp': {
        name: { ru: 'Цезарь с креветками', en: 'Caesar with Shrimp' },
        description: { ru: 'Креветки обжаренные · салат романо · томаты черри · перепелиные яйца · пармезан · гренки · соус цезарь', en: 'Sautéed shrimp · romaine lettuce · cherry tomatoes · quail eggs · parmesan · croutons · Caesar dressing' },
    },
    'greek-salad': {
        name: { ru: 'Салат «Греческий»', en: 'Greek Salad' },
        description: { ru: 'Болгарский перец · огурец · томаты черри · красный лук · оливки · сыр фета · оливковое масло · лимонный сок · орегано', en: 'Bell pepper · cucumber · cherry tomatoes · red onion · olives · feta cheese · olive oil · lemon juice · oregano' },
    },
    // ═══════ Супы ═══════
    'borscht': {
        name: { ru: 'Борщ', en: 'Borscht' },
        description: { ru: 'Свёкла · картофель · морковь · лук · томаты · чеснок · говядина · сметана', en: 'Beetroot · potatoes · carrot · onion · tomatoes · garlic · beef · sour cream' },
    },
    'chicken-meatball-soup': {
        name: { ru: 'Куриный суп с фрикадельками', en: 'Chicken Meatball Soup' },
        description: { ru: 'Картофель · морковь · лук · укроп · куриные фрикадельки · сметана', en: 'Potatoes · carrot · onion · dill · chicken meatballs · sour cream' },
    },
    'shchi': {
        name: { ru: 'Щи из свежей капусты', en: 'Fresh Cabbage Soup (Shchi)' },
        description: { ru: 'Белокочанная капуста · картофель · морковь · лук · курица · укроп · сметана', en: 'White cabbage · potatoes · carrot · onion · chicken · dill · sour cream' },
    },
    // ═══════ Горячие блюда ═══════
    'chicken-cutlets': {
        name: { ru: 'Куриные котлеты с пюре (2 шт.)', en: 'Chicken Cutlets with Mashed Potatoes (2 pcs)' },
        description: { ru: 'Куриный фарш · лук · чеснок · яйцо · хлеб · молоко · соль · картофельное пюре', en: 'Minced chicken · onion · garlic · egg · bread · milk · salt · mashed potatoes' },
    },
    'fish-cutlets': {
        name: { ru: 'Рыбные котлеты с пюре (2 шт.)', en: 'Salmon Fish Cutlets with Mashed Potatoes (2 pcs)' },
        description: { ru: 'Фарш из сёмги · лук · чеснок · яйцо · вода · хлеб · соль · картофельное пюре', en: 'Minced salmon · onion · garlic · egg · water · bread · salt · mashed potatoes' },
    },
    'grilled-chicken': {
        name: { ru: 'Куриное филе гриль', en: 'Grilled Chicken Fillet' },
        description: { ru: 'Куриное филе гриль · сливочное масло · соль · перец · морковь · бейби-кукуруза · спаржа · свежий шпинат · томаты черри · сырный соус', en: 'Grilled chicken fillet · butter · salt · pepper · carrot · baby corn · asparagus · fresh spinach · cherry tomatoes · cheese sauce' },
    },
    'grilled-salmon': {
        name: { ru: 'Лосось гриль', en: 'Grilled Salmon' },
        description: { ru: 'Лосось гриль · сливочное масло · морковь · бейби-кукуруза · спаржа · свежий шпинат · томаты черри · сливочно-лимонный соус', en: 'Grilled salmon · butter · carrot · baby corn · asparagus · fresh spinach · cherry tomatoes · creamy lemon sauce' },
    },
    'sweet-sour-chicken': {
        name: { ru: 'Курица в кисло-сладком соусе', en: 'Sweet & Sour Chicken' },
        description: { ru: 'Куриное филе · болгарский перец · лук · ананасы · кисло-сладкий соус · кунжут', en: 'Chicken fillet · bell pepper · onion · pineapple · sweet & sour sauce · sesame' },
    },
    // ═══════ Гарниры ═══════
    'rice': { name: { ru: 'Рис', en: 'Rice' }, description: { ru: '', en: '' } },
    'buckwheat': { name: { ru: 'Греча', en: 'Buckwheat' }, description: { ru: '', en: '' } },
    'mashed-potatoes': { name: { ru: 'Картофельное пюре', en: 'Mashed Potatoes' }, description: { ru: '', en: '' } },
    'grilled-vegetables': { name: { ru: 'Овощи гриль', en: 'Grilled Vegetables' }, description: { ru: '', en: '' } },
    'steamed-vegetables': { name: { ru: 'Овощи на пару', en: 'Steamed Vegetables' }, description: { ru: '', en: '' } },
    // ═══════ Классический кофе ═══════
    'espresso': { name: { ru: 'Эспрессо', en: 'Espresso' }, description: { ru: '', en: '' } },
    'americano': { name: { ru: 'Американо', en: 'Americano' }, description: { ru: '', en: '' } },
    'cappuccino': { name: { ru: 'Капучино', en: 'Cappuccino' }, description: { ru: '', en: '' } },
    'frappuccino': { name: { ru: 'Фрапучино', en: 'Frappuccino' }, description: { ru: '', en: '' } },
    'macchiato': { name: { ru: 'Макиато', en: 'Macchiato' }, description: { ru: '', en: '' } },
    'latte': { name: { ru: 'Латте', en: 'Latte' }, description: { ru: '', en: '' } },
    'flat-white': { name: { ru: 'Флэт уайт', en: 'Flat White' }, description: { ru: '', en: '' } },
    'mocha': { name: { ru: 'Мокка', en: 'Mocha' }, description: { ru: '', en: '' } },
    'raf': { name: { ru: 'Раф', en: 'Raf Coffee' }, description: { ru: '', en: '' } },
    'cocoa': { name: { ru: 'Какао', en: 'Cocoa' }, description: { ru: '', en: '' } },
    'matcha-latte': { name: { ru: 'Классический матча-латте', en: 'Classic Matcha Latte' }, description: { ru: '', en: '' } },
    // ═══════ Specialty кофе ═══════
    'orange-americano': { name: { ru: 'Апельсиновый американо', en: 'Orange Americano' }, description: { ru: '', en: '' } },
    'coconut-americano': { name: { ru: 'Кокосовый американо', en: 'Coconut Americano' }, description: { ru: '', en: '' } },
    'tonic-americano': { name: { ru: 'Тоник американо', en: 'Tonic Americano' }, description: { ru: '', en: '' } },
    'honey-lemon-americano': { name: { ru: 'Американо с мёдом и лимоном', en: 'Honey Lemon Americano' }, description: { ru: '', en: '' } },
    'caramel-latte': { name: { ru: 'Карамельный латте', en: 'Caramel Latte' }, description: { ru: '', en: '' } },
    'berry-latte': { name: { ru: 'Ягодный латте', en: 'Berry Latte' }, description: { ru: '', en: '' } },
    'coconut-latte': { name: { ru: 'Кокосовый латте', en: 'Coconut Latte' }, description: { ru: '', en: '' } },
    'choco-mint-latte': { name: { ru: 'Шоколадно-мятный латте', en: 'Chocolate Mint Latte' }, description: { ru: '', en: '' } },
    'caramel-macchiato': { name: { ru: 'Карамельный макиато', en: 'Caramel Macchiato' }, description: { ru: '', en: '' } },
    'mint-mocha': { name: { ru: 'Мятный мокка', en: 'Mint Mocha' }, description: { ru: '', en: '' } },
    'affogato': { name: { ru: 'Аффогато с кокосовым мороженым', en: 'Affogato with Coconut Ice Cream' }, description: { ru: '', en: '' } },
    'cocoa-marshmallow': { name: { ru: 'Какао с маршмеллоу', en: 'Cocoa with Marshmallow' }, description: { ru: '', en: '' } },
    'cocoa-raspberry-latte': { name: { ru: 'Какао-малиновый латте', en: 'Cocoa Raspberry Latte' }, description: { ru: '', en: '' } },
    'matcha-lemon-soda': { name: { ru: 'Матча-лимонная сода', en: 'Matcha Lemon Soda' }, description: { ru: '', en: '' } },
    // ═══════ Чай в пакетиках ═══════
    'black-tea': { name: { ru: 'Чёрный чай', en: 'Black Tea' }, description: { ru: '', en: '' } },
    'black-tea-thyme': { name: { ru: 'Чёрный чай с тимьяном', en: 'Black Tea with Thyme' }, description: { ru: '', en: '' } },
    'bergamot-tea': { name: { ru: 'Бергамот', en: 'Bergamot Tea' }, description: { ru: '', en: '' } },
    'green-tea': { name: { ru: 'Зелёный', en: 'Green Tea' }, description: { ru: '', en: '' } },
    'green-tea-melissa': { name: { ru: 'Зелёный с мелиссой', en: 'Green Tea with Melissa' }, description: { ru: '', en: '' } },
    'jasmine-tea': { name: { ru: 'Жасмин', en: 'Jasmine Tea' }, description: { ru: '', en: '' } },
    'strawberry-tea': { name: { ru: 'Клубничный', en: 'Strawberry Tea' }, description: { ru: '', en: '' } },
    'milk-oolong': { name: { ru: 'Молочный улун', en: 'Milk Oolong' }, description: { ru: '', en: '' } },
    'apple-iced-tea': { name: { ru: 'Яблочный холодный чай', en: 'Apple Iced Tea' }, description: { ru: '', en: '' } },
    'peach-iced-tea': { name: { ru: 'Персиковый холодный чай', en: 'Peach Iced Tea' }, description: { ru: '', en: '' } },
    'lemon-iced-tea': { name: { ru: 'Лимонный холодный чай', en: 'Lemon Iced Tea' }, description: { ru: '', en: '' } },
    'mango-iced-tea': { name: { ru: 'Манговый холодный чай', en: 'Mango Iced Tea' }, description: { ru: '', en: '' } },
    'thai-iced-tea': { name: { ru: 'Тайский холодный чай', en: 'Thai Iced Tea' }, description: { ru: '', en: '' } },
    // ═══════ Чайник ═══════
    'teapot-raspberry': {
        name: { ru: 'Малина', en: 'Raspberry' },
        description: { ru: 'Зелёный чай, малина, мята, лайм', en: 'Green tea, raspberry, mint, lime' },
    },
    'teapot-apple': {
        name: { ru: 'Яблоко', en: 'Apple' },
        description: { ru: 'Чёрный чай, яблоко, корица, анис', en: 'Black tea, apple, cinnamon, anise' },
    },
    'teapot-cranberry': {
        name: { ru: 'Клюква', en: 'Cranberry' },
        description: { ru: 'Чёрный чай, клюква, апельсин, анис, корица', en: 'Black tea, cranberry, orange, anise, cinnamon' },
    },
    'teapot-herbal': {
        name: { ru: 'Травяной', en: 'Herbal' },
        description: { ru: 'Лемонграсс, имбирь, лайм', en: 'Lemongrass, ginger, lime' },
    },
    'teapot-blossom': {
        name: { ru: 'Blossom Harmony', en: 'Blossom Harmony' },
        description: { ru: 'Синий чай анчан, роза', en: 'Butterfly pea tea, rose' },
    },
    'teapot-chrysanthemum': {
        name: { ru: 'Хризантема', en: 'Chrysanthemum' },
        description: { ru: 'Чай из цветков хризантемы, мята, лайм', en: 'Chrysanthemum flower tea, mint, lime' },
    },
    // ═══════ Detox соки ═══════
    'green-glow': {
        name: { ru: 'Green Glow', en: 'Green Glow' },
        description: { ru: 'Сельдерей, зелёное яблоко, лимон, имбирь', en: 'Celery, green apple, lemon, ginger' },
    },
    'golden-power': {
        name: { ru: 'Golden Power', en: 'Golden Power' },
        description: { ru: 'Морковь, яблоко, лимон, имбирь, куркума', en: 'Carrot, apple, lemon, ginger, turmeric' },
    },
    'morning-boost': {
        name: { ru: 'Morning Boost', en: 'Morning Boost' },
        description: { ru: 'Ананас, апельсин, лимон', en: 'Pineapple, orange, lemon' },
    },
    'garden-power': {
        name: { ru: 'Garden Power', en: 'Garden Power' },
        description: { ru: 'Шпинат беби, огурец, зелёное яблоко, лимон', en: 'Baby spinach, cucumber, green apple, lemon' },
    },
    'pink-power': {
        name: { ru: 'Pink Power', en: 'Pink Power' },
        description: { ru: 'Свёкла, яблоко, морковь, лимон, имбирь', en: 'Beetroot, apple, carrot, lemon, ginger' },
    },
    // ═══════ Свежевыжатые соки ═══════
    'orange-juice': { name: { ru: 'Апельсин', en: 'Orange' }, description: { ru: '', en: '' } },
    'apple-juice': { name: { ru: 'Яблоко', en: 'Apple' }, description: { ru: '', en: '' } },
    'pineapple-juice': { name: { ru: 'Ананас', en: 'Pineapple' }, description: { ru: '', en: '' } },
    'carrot-juice': { name: { ru: 'Морковь', en: 'Carrot' }, description: { ru: '', en: '' } },
    // ═══════ Шейки ═══════
    'mango-shake': { name: { ru: 'Манго', en: 'Mango' }, description: { ru: '', en: '' } },
    'watermelon-shake': { name: { ru: 'Арбуз', en: 'Watermelon' }, description: { ru: '', en: '' } },
    'pineapple-shake': { name: { ru: 'Ананас', en: 'Pineapple' }, description: { ru: '', en: '' } },
    'lime-shake': { name: { ru: 'Лайм', en: 'Lime' }, description: { ru: '', en: '' } },
    'banana-milkshake': { name: { ru: 'Банановый милкшейк', en: 'Banana Milkshake' }, description: { ru: '', en: '' } },
    'coconut-milkshake': { name: { ru: 'Кокосовый милкшейк', en: 'Coconut Milkshake' }, description: { ru: '', en: '' } },
    'protein-vanilla': { name: { ru: 'Протеин ваниль', en: 'Protein Vanilla' }, description: { ru: '', en: '' } },
    'protein-chocolate': { name: { ru: 'Протеин шоколад', en: 'Protein Chocolate' }, description: { ru: '', en: '' } },
    'protein-strawberry': { name: { ru: 'Протеин клубника', en: 'Protein Strawberry' }, description: { ru: '', en: '' } },
    'protein-banana': { name: { ru: 'Протеин банан', en: 'Protein Banana' }, description: { ru: '', en: '' } },
    'protein-coffee': { name: { ru: 'Протеин кофе', en: 'Protein Coffee' }, description: { ru: '', en: '' } },
    'protein-muesli-banana': { name: { ru: 'Смузи протеин мюсли, банан', en: 'Protein Muesli Banana Smoothie' }, description: { ru: '', en: '' } },
    // ═══════ Домашние лимонады ═══════
    'tropical-passion': {
        name: { ru: 'Tropical Passion', en: 'Tropical Passion' },
        description: { ru: 'Пюре маракуйи, сироп маракуйи, содовая, лёд', en: 'Passion fruit puree, passion fruit syrup, soda water, ice' },
    },
    'strawberry-kiss': {
        name: { ru: 'Strawberry Kiss', en: 'Strawberry Kiss' },
        description: { ru: 'Клубничное пюре, клубничный сироп, лимонный сок, содовая, лёд', en: 'Strawberry puree, strawberry syrup, lemon juice, soda water, ice' },
    },
    'lemon-shine': {
        name: { ru: 'Lemon Shine', en: 'Lemon Shine' },
        description: { ru: 'Лимонный сок, лимонный сироп, лайм, содовая, лёд', en: 'Lemon juice, lemon syrup, lime, soda water, ice' },
    },
    'raspberry-ginger': {
        name: { ru: 'Raspberry Ginger', en: 'Raspberry Ginger' },
        description: { ru: 'Малиновое пюре, малиновый сироп, имбирный сок, содовая, лёд', en: 'Raspberry puree, raspberry syrup, ginger juice, soda water, ice' },
    },
    // ═══════ Моктейли ═══════
    'sunrise': {
        name: { ru: 'Sunrise', en: 'Sunrise' },
        description: { ru: 'Апельсиновый сок, сироп юдзу, клубничный сироп, содовая, лёд', en: 'Orange juice, yuzu syrup, strawberry syrup, soda water, ice' },
    },
    'mojito': {
        name: { ru: 'Mojito', en: 'Mojito' },
        description: { ru: 'Мята, лайм, тростниковый сахар, сироп лайма, содовая, лёд', en: 'Mint, lime, brown sugar, lime syrup, soda water, ice' },
    },
    'strawberry-mojito': {
        name: { ru: 'Strawberry Mojito', en: 'Strawberry Mojito' },
        description: { ru: 'Мята, лайм, клубника, тростниковый сахар, сироп лайма, содовая, лёд', en: 'Mint, lime, strawberry, brown sugar, lime syrup, soda water, ice' },
    },
    'mango-mojito': {
        name: { ru: 'Mango Mojito', en: 'Mango Mojito' },
        description: { ru: 'Мята, лайм, манго, тростниковый сахар, сироп лайма, содовая, лёд', en: 'Mint, lime, mango, brown sugar, lime syrup, soda water, ice' },
    },
    'blue-butterfly': {
        name: { ru: 'Blue Butterfly', en: 'Blue Butterfly' },
        description: { ru: 'Пюре маракуйи, сироп маракуйи, чай анчан, содовая, лёд', en: 'Passion fruit puree, passion fruit syrup, butterfly pea tea, soda water, ice' },
    },
    'choco-banana': {
        name: { ru: 'Choco Banana', en: 'Choco Banana' },
        description: { ru: 'Банановое пюре, молоко, шоколадный сироп, взбитые сливки', en: 'Banana puree, milk, chocolate syrup, whipped cream' },
    },
    'pina-colada': {
        name: { ru: 'Pina Colada', en: 'Pina Colada' },
        description: { ru: 'Кокосовое молоко, ананасовый сок, кокосовый сироп, взбитые сливки', en: 'Coconut milk, pineapple juice, coconut syrup, whipped cream' },
    },
    // ═══════ Безалкогольные напитки ═══════
    'water': { name: { ru: 'Вода', en: 'Water' }, description: { ru: '', en: '' } },
    'soda-water': { name: { ru: 'Содовая', en: 'Soda Water' }, description: { ru: '', en: '' } },
    'singha-lemon': { name: { ru: 'Singha Red Lemon Soda', en: 'Singha Red Lemon Soda' }, description: { ru: '', en: '' } },
    'schweppes-tonic': { name: { ru: 'Schweppes тоник', en: 'Schweppes Tonic Water' }, description: { ru: '', en: '' } },
    'sprite': { name: { ru: 'Sprite', en: 'Sprite' }, description: { ru: '', en: '' } },
    'coca-cola': { name: { ru: 'Coca-Cola (обычная/zero)', en: 'Coca-Cola (Original/Zero)' }, description: { ru: '', en: '' } },
    'fanta': { name: { ru: 'Fanta апельсин', en: 'Fanta Orange' }, description: { ru: '', en: '' } },
};

// ──────────────────────────── UI TRANSLATIONS ────────────────────────────
export const uiTranslations: Record<string, Record<Language, string>> = {
    addToCart: { ru: 'В корзину', en: 'Add to cart' },
    cart: { ru: 'Корзина', en: 'Cart' },
    checkout: { ru: 'Оформить заказ', en: 'Checkout' },
    total: { ru: 'Итого', en: 'Total' },
    emptyCart: { ru: 'Корзина пуста', en: 'Cart is empty' },
    phone: { ru: 'Телефон', en: 'Phone' },
    address: { ru: 'Адрес доставки', en: 'Delivery address' },
    comment: { ru: 'Комментарий', en: 'Comment' },
    orderSuccess: { ru: 'Заказ оформлен!', en: 'Order placed!' },
    back: { ru: '← Назад', en: '← Back' },
    menu: { ru: 'Меню', en: 'Menu' },
    noDishes: { ru: 'В этой категории пока нет блюд', en: 'No dishes in this category yet' },
};

// ──────────────────────────── HELPERS ────────────────────────────
export const t = (key: string, lang?: Language): string => {
    const language = lang || getLanguage();
    return uiTranslations[key]?.[language] || key;
};

export const getDishName = (dishId: string, lang?: Language): string => {
    const language = lang || getLanguage();
    return dishTranslations[dishId]?.name[language] || dishId;
};

export const getDishDescription = (dishId: string, lang?: Language): string => {
    const language = lang || getLanguage();
    return dishTranslations[dishId]?.description[language] || '';
};

export const getCategoryName = (categoryId: string, lang?: Language): string => {
    const language = lang || getLanguage();
    return categoryTranslations[categoryId]?.[language] || categoryId;
};
