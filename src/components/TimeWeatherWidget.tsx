import { useEffect, useState } from "react";

export function TimeWeatherWidget() {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState<any>(null);

  // ⏰ Clock
  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // 🌦 Weather
  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Antananarivo,MG&units=metric&lang=fr&appid=${apiKey}`
    )
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(console.error);
  }, []);

  return (
  <>
	<div className="md:hidden w-full flex flex-col items-end px-3 py-2 mt-10 text-[#BAC8C1] text-xs leading-tight">
        <span className="font-bold text-[#B1FB8E]">
          {time}
        </span>
        <span className="opacity-60 mb-1">
          Antananarivo · GMT+3
        </span>

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
	
    <div className="hidden md:flex flex-col items-end text-xs text-[#BAC8C1] leading-tight">
	  {/* Heure */}
	  <span className="text-2xl font-bold text-[#B1FB8E]">
		{time}
	  </span>

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
			Vent {weather.wind.speed} m/s · Hum {weather.main.humidity}%
		  </span>
		</>
	  )}
	</div>
	</>
  );
}
