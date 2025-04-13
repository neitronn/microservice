interface TelegramWebApp {
    initData: string;
    // Добавьте другие свойства, если необходимо
}

interface Window {
    Telegram: {
        WebApp: TelegramWebApp;
    };
}