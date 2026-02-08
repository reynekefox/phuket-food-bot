import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Category, Dish } from '../types';
import { getCategories, getDishes } from '../api/dishes';
import DishCard from './DishCard';
import { getCategoryName, t, getLanguage, Language } from '../i18n';

const SubcategoryPage = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const [subcategories, setSubcategories] = useState<Category[]>([]);
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [loading, setLoading] = useState(true);
    const [hasSubcategories, setHasSubcategories] = useState(false);
    const [lang, setLang] = useState<Language>(getLanguage());
    const navigate = useNavigate();

    useEffect(() => {
        if (categoryId) {
            setLoading(true);
            getCategories(categoryId).then((subs) => {
                if (subs.length > 0) {
                    setSubcategories(subs);
                    setHasSubcategories(true);
                    setLoading(false);
                } else {
                    // No subcategories — load dishes directly
                    getDishes(categoryId).then((d) => {
                        setDishes(d);
                        setHasSubcategories(false);
                        setLoading(false);
                    });
                }
            });
        }
    }, [categoryId]);

    useEffect(() => {
        const handleLangChange = () => setLang(getLanguage());
        window.addEventListener('languageChange', handleLangChange);
        return () => window.removeEventListener('languageChange', handleLangChange);
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner" />
            </div>
        );
    }

    const parentName = categoryId ? getCategoryName(categoryId, lang) : '';

    return (
        <>
            <div className="header">
                <button className="back-btn" onClick={() => navigate('/')}>
                    ←
                </button>
                <h1>{parentName}</h1>
            </div>
            {hasSubcategories ? (
                <div className="categories">
                    {subcategories.map((category) => (
                        <div
                            key={category.id}
                            className="category-card"
                            onClick={() => navigate(`/category/${categoryId}/${category.id}`)}
                        >
                            <img src={category.cover} alt={getCategoryName(category.id, lang)} />
                            <div className="overlay">
                                <h3>{getCategoryName(category.id, lang)}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
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
            )}
        </>
    );
};

export default SubcategoryPage;
