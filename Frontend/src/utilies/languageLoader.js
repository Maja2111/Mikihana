export const supportedLanguages = ['en', 'de', 'es', 'fr', 'zh'];

export const loadTranslations = async (lang) => {
  try {
    const response = await fetch(`/locales/${lang}/common/${lang}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to load ${lang} translations:`, error);
    return {};
  }
};
