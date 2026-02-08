import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Dish } from '../types';
import { getDishes } from '../api/dishes';
import DishCard from './DishCard';
import { getCategoryName, t, getLanguage, Language } from '../i18n';

const DishList = () => {
    const { categoryId, parentCategoryId } = useParams<{ categoryId: string; parentCategoryId?: string }>();
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [loading, setLoading] = useState(true);
    const [lang, setLang] = useState<Language>(getLanguage());
    const navigate = useNavigate();

    useEffect(() => {
        if (categoryId) {
            getDishes(categoryId).then((data) => {
                setDishes(data);
                setLoading(false);
            });
        }
    }, [categoryId]);

    useEffect(() => {
        const handleLangChange = () => setLang(getLanguage());
        window.addEventListener('languageChange', handleLangChange);
        return () => window.removeEventListener('languageChange', handleLangChange);
    }, []);

    const handleBack = () => {
        if (parentCategoryId) {
            navigate(`/category/${parentCategoryId}`);
        } else {
            navigate('/');
        }
    };

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner" />
            </div>
        );
    }

    const categoryName = categoryId ? getCategoryName(categoryId, lang) : t('menu', lang);

    return (
        <>
            <div className="header">
                <button className="back-btn" onClick={handleBack}>
                    ←
                </button>
                <h1>{categoryName}</h1>
            </div>
            <div className="dishes">
                {dishes.length === 0 ? (
                    <div className="empty-state">
                        <span>🍽</span>
                        <p>{t('noDishes', lang)}</p>
                    </div>
                ) : (
                    dishes.map((dish) => <DishCard key={dish.id} dish={dish} />)
                )}
            </div>
        </>
    );
};

export default DishList;
