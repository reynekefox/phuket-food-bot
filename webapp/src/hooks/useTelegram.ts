import { useEffect, useState } from 'react';

interface TelegramWebApp {
    ready: () => void;
    close: () => void;
    expand: () => void;
    MainButton: {
        text: string;
        color: string;
        textColor: string;
        isVisible: boolean;
        isActive: boolean;
        show: () => void;
        hide: () => void;
        onClick: (callback: () => void) => void;
        offClick: (callback: () => void) => void;
        enable: () => void;
        disable: () => void;
        setParams: (params: { text?: string; color?: string; text_color?: string; is_active?: boolean; is_visible?: boolean }) => void;
    };
    BackButton: {
        isVisible: boolean;
        show: () => void;
        hide: () => void;
        onClick: (callback: () => void) => void;
        offClick: (callback: () => void) => void;
    };
    sendData: (data: string) => void;
    initDataUnsafe: {
        user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
        };
        query_id?: string;
    };
    themeParams: {
        bg_color?: string;
        text_color?: string;
        hint_color?: string;
        link_color?: string;
        button_color?: string;
        button_text_color?: string;
        secondary_bg_color?: string;
    };
}

declare global {
    interface Window {
        Telegram?: {
            WebApp: TelegramWebApp;
        };
    }
}

export const useTelegram = () => {
    const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);

    useEffect(() => {
        const tg = window.Telegram?.WebApp;
        if (tg) {
            tg.ready();
            tg.expand();
            setWebApp(tg);

            // Apply Telegram theme
            if (tg.themeParams) {
                const root = document.documentElement;
                if (tg.themeParams.bg_color) {
                    root.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color);
                }
                if (tg.themeParams.text_color) {
                    root.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color);
                }
                if (tg.themeParams.hint_color) {
                    root.style.setProperty('--tg-theme-hint-color', tg.themeParams.hint_color);
                }
                if (tg.themeParams.button_color) {
                    root.style.setProperty('--tg-theme-button-color', tg.themeParams.button_color);
                }
                if (tg.themeParams.secondary_bg_color) {
                    root.style.setProperty('--tg-theme-secondary-bg-color', tg.themeParams.secondary_bg_color);
                }
            }
        }
    }, []);

    const user = webApp?.initDataUnsafe?.user;
    const queryId = webApp?.initDataUnsafe?.query_id;

    const sendData = (data: object) => {
        webApp?.sendData(JSON.stringify(data));
    };

    const close = () => {
        webApp?.close();
    };

    return {
        webApp,
        user,
        queryId,
        sendData,
        close,
    };
};
