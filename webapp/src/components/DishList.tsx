import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Dish } from '../types';
import { getDishes } from '../api/dishes';
import DishCard from './DishCard';

const categoryNames: Record<string, string> = {
    soups: 'Супы',
    main: 'Горячие блюда',
    noodles: 'Лапша',
    salads: 'Салаты',
    desserts: 'Десерты',
    drinks: 'Напитки',
};

const DishList = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (categoryId) {
            getDishes(categoryId).then((data) => {
                setDishes(data);
                setLoading(false);
            });
        }
    }, [categoryId]);

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner" />
            </div>
        );
    }

    const categoryName = categoryId ? categoryNames[categoryId] || 'Меню' : 'Меню';

    return (
        <>
            <div className="header">
                <button className="back-btn" onClick={() => navigate('/')}>
                    ←
                </button>
                <h1>{categoryName}</h1>
            </div>
            <div className="dishes">
                {dishes.length === 0 ? (
                    <div className="empty-state">
                        <span>🍽</span>
                        <p>В этой категории пока нет блюд</p>
                    </div>
                ) : (
                    dishes.map((dish) => <DishCard key={dish.id} dish={dish} />)
                )}
            </div>
        </>
    );
};

export default DishList;
