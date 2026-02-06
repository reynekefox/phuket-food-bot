import { useState, useEffect } from 'react';
import { getLanguage, setLanguage, Language } from '../i18n';

const LanguageSwitcher = () => {
    const [lang, setLang] = useState<Language>(getLanguage());

    useEffect(() => {
        const handleLangChange = () => setLang(getLanguage());
        window.addEventListener('languageChange', handleLangChange);
        return () => window.removeEventListener('languageChange', handleLangChange);
    }, []);

    const toggleLanguage = () => {
        const newLang = lang === 'ru' ? 'en' : 'ru';
        setLanguage(newLang);
    };

    return (
        <button className="lang-switcher" onClick={toggleLanguage}>
            {lang === 'ru' ? '🇬🇧 EN' : '🇷🇺 RU'}
        </button>
    );
};

export default LanguageSwitcher;
