import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function TimeWeatherWidget() {
  const { t, i18n } = useTranslation();
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState<any>(null);

  // Déterminer la langue active (fr ou en)
  const currentLang = i18n.language === "en" ? "en" : "fr";

  // ⏰ Horloge dynamique selon la langue
  useEffect(() => {
    const locale = currentLang === "en" ? "en-US" : "fr-FR";

    const update = () => {
      setTime(
        new Date().toLocaleTimeString(locale, {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [currentLang]);

  // 🌦 Météo avec paramètre de langue dynamique
  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Antananarivo,MG&units=metric&lang=${currentLang}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch(console.error);
  }, [currentLang]); // Re-fetch automatique au changement de langue !

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden w-full flex flex-col items-end px-3 py-2 mt-4 text-[#BAC8C1] text-xs leading-tight">
        <span className="font-bold text-[#B1FB8E]">{time}</span>
        <span className="opacity-60 mb-1">Antananarivo · GMT+3</span>

        {weather && (
          <>
            <span className="font-semibold text-[#B1FB8E]">
              {Math.round(weather.main.temp)}°C
            </span>
            <span className="capitalize opacity-70">
              {weather.weather[0].description}
            </span>
          </>
        )}
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-col items-end text-xs text-[#BAC8C1] leading-tight">
        {/* Heure */}
        <span className="text-2xl font-bold text-[#B1FB8E]">{time}</span>

        <span className="text-[12px] opacity-60 mb-3">
          Antananarivo · GMT+3
        </span>

        {/* Météo */}
        {weather && (
          <>
            <span className="text-lg font-semibold text-[#B1FB8E]">
              {Math.round(weather.main.temp)}°C
            </span>

            <span className="text-[12px] capitalize opacity-70">
              {weather.weather[0].description}
            </span>

            <span className="text-[12px] opacity-50">
              {t("weather.wind")} {weather.wind.speed} m/s · {t("weather.humidity")}{" "}
              {weather.main.humidity}%
            </span>
          </>
        )}
      </div>
    </>
  );
}