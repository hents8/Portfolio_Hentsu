import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-1 text-sm">
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-2 py-1 rounded transition-colors duration-200 ${
          i18n.language === 'fr'
            ? 'text-[#B1FB8E] font-bold bg-[#2A3A2A]'
            : 'text-[#BAC8C1] hover:text-[#E6E6E6]'
        }`}
      >
        FR
      </button>
      <span className="text-[#BAC8C1] opacity-30">|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded transition-colors duration-200 ${
          i18n.language === 'en'
            ? 'text-[#B1FB8E] font-bold bg-[#2A3A2A]'
            : 'text-[#BAC8C1] hover:text-[#E6E6E6]'
        }`}
      >
        EN
      </button>
    </div>
  );
}