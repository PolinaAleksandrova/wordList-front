import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируйте ваши файлы с языковыми ресурсами
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';

// Создайте объект i18n и настройте его
i18n
  .use(initReactI18next) // Используйте react-i18next плагин
  .init({
    lng: 'en', // Начальный язык
    fallbackLng: 'en', // Язык по умолчанию, если перевод для текущего языка не найден
    resources: {
      en: {
        translation: enTranslation, // Переводы для английского языка
      },
      ru: {
        translation: ruTranslation, // Переводы для русского языка
      },
    },
    lng: 'en', // Установите язык по умолчанию
    fallbackLng: 'en', // Язык по умолчанию в случае отсутствия перевода
    interpolation: {
      escapeValue: false, // Необходимо для поддержки HTML-тегов в переводах
    },
    // Другие настройки i18n...
  });

export default i18n;
