import { useEffect, useState } from "react";

export function WeatherWidget({ city = "Antananarivo" }: { city?: string }) {
  const [weather, setWeather] = useState<{ temp: number; desc: string; icon: string } | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setWeather({
          temp: Math.round(data.main.temp),
          desc: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        });
      })
      .catch(err => console.error(err));
  }, [city]);

  if (!weather) return <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md text-center">Chargement...</div>;

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md text-center">
      <p className="font-semibold">{city}</p>
      <img src={weather.icon} alt={weather.desc} className="mx-auto w-12 h-12" />
      <p>{weather.temp}°C</p>
      <p className="text-sm text-gray-300">{weather.desc}</p>
    </div>
  );
}
