import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Categories from './components/Categories';
import SubcategoryPage from './components/SubcategoryPage';
import DishList from './components/DishList';
import Cart from './components/Cart';
import CartFab from './components/CartFab';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useTelegram } from './hooks/useTelegram';

const AppContent = () => {
    const location = useLocation();
    const showCartFab = !location.pathname.startsWith('/cart');

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="header">
                                <h1>🕊️ Nest Cafe</h1>
                                <LanguageSwitcher />
                            </div>
                            <Categories />
                        </>
                    }
                />
                <Route path="/category/:categoryId" element={<SubcategoryPage />} />
                <Route path="/category/:parentCategoryId/:categoryId" element={<DishList />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            {showCartFab && <CartFab />}
        </div>
    );
};

const App = () => {
    // Initialize Telegram WebApp
    useTelegram();

    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
};

export default App;
