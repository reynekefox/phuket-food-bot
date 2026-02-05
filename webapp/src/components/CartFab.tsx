import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

const CartFab = () => {
    const navigate = useNavigate();
    const totalItems = useCartStore((state) => state.getTotalItems());

    if (totalItems === 0) return null;

    return (
        <div className="cart-fab" onClick={() => navigate('/cart')}>
            🛒
            <span className="cart-badge">{totalItems}</span>
        </div>
    );
};

export default CartFab;
