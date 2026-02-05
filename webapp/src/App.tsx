import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Categories from './components/Categories';
import DishList from './components/DishList';
import Cart from './components/Cart';
import CartFab from './components/CartFab';
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
                                <h1>🍜 Phuket Food</h1>
                            </div>
                            <Categories />
                        </>
                    }
                />
                <Route path="/category/:categoryId" element={<DishList />} />
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
