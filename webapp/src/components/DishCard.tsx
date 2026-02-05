import { Dish } from '../types';
import { useCartStore } from '../store/cartStore';

interface DishCardProps {
    dish: Dish;
}

const DishCard = ({ dish }: DishCardProps) => {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = () => {
        addItem(dish);
        // Haptic feedback if available
        if (window.Telegram?.WebApp) {
            try {
                // @ts-ignore - HapticFeedback may not be typed
                window.Telegram.WebApp.HapticFeedback?.impactOccurred('light');
            } catch {
                // Ignore if not supported
            }
        }
    };

    return (
        <div className="dish-card">
            <img src={dish.photo} alt={dish.name} className="dish-image" />
            <div className="dish-info">
                <h3>{dish.name}</h3>
                <p className="dish-description">{dish.description}</p>
                <p className="dish-weight">{dish.weight}</p>
                <div className="dish-footer">
                    <span className="dish-price">{dish.price} ฿</span>
                    <button className="add-btn" onClick={handleAddToCart}>
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DishCard;
