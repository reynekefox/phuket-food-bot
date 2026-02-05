import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../types';
import { getCategories } from '../api/dishes';

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner" />
            </div>
        );
    }

    return (
        <div className="categories">
            {categories.map((category) => (
                <div
                    key={category.id}
                    className="category-card"
                    onClick={() => navigate(`/category/${category.id}`)}
                >
                    <img src={category.cover} alt={category.name} />
                    <div className="overlay">
                        <h3>{category.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Categories;
