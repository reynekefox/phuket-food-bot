import { useEffect, useState } from 'react';
import { Dish } from '../types';
import { useCartStore } from '../store/cartStore';
import { getDishName, getDishDescription, t, getLanguage, Language } from '../i18n';

interface DishCardProps {
    dish: Dish;
}

const DishCard = ({ dish }: DishCardProps) => {
    const addItem = useCartStore((state) => state.addItem);
    const [lang, setLang] = useState<Language>(getLanguage());

    useEffect(() => {
        const handleLangChange = () => setLang(getLanguage());
        window.addEventListener('languageChange', handleLangChange);
        return () => window.removeEventListener('languageChange', handleLangChange);
    }, []);

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

    const name = getDishName(dish.id, lang);
    const description = getDishDescription(dish.id, lang);

    return (
        <div className="dish-card">
            {dish.photo && <img src={dish.photo} alt={name} className="dish-image" />}
            <div className="dish-info">
                <h3>{name}</h3>
                <p className="dish-description">{description}</p>
                <p className="dish-weight">{dish.weight}</p>
                <div className="dish-footer">
                    <span className="dish-price">{dish.price} ฿</span>
                    <button className="add-btn" onClick={handleAddToCart}>
                        {t('addToCart', lang)}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DishCard;
