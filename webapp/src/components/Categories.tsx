import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../types';
import { getCategories } from '../api/dishes';
import { getCategoryName, getLanguage, Language } from '../i18n';

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [lang, setLang] = useState<Language>(getLanguage());
    const navigate = useNavigate();

    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);
            setLoading(false);
        });
    }, []);

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

    return (
        <div className="categories">
            {categories.map((category) => (
                <div
                    key={category.id}
                    className="category-card"
                    onClick={() => navigate(`/category/${category.id}`)}
                >
                    <img src={category.cover} alt={getCategoryName(category.id, lang)} />
                    <div className="overlay">
                        <h3>{getCategoryName(category.id, lang)}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Categories;
