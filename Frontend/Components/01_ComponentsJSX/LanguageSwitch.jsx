import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="language-switch">
      <label>{t('language')}: </label>
      <select
        value={i18n.language}
        onChange={handleChange}
        className="language-select"
      >
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;
