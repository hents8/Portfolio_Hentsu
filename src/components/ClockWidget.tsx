import { useEffect, useState } from "react";

export function ClockWidget() {
  const [time, setTime] = useState("");
  const [fullDate, setFullDate] = useState("");
  const [weekNumber, setWeekNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      // Heure
      setTime(now.toLocaleTimeString("fr-FR", { hour12: false }));

      // Date complète
      setFullDate(
        now.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
      );

      // Numéro de semaine
      const onejan = new Date(now.getFullYear(), 0, 1);
      const week = Math.ceil(((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7);
      setWeekNumber(week);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md text-center">
      <p className="font-semibold text-lg">{time}</p>
      <p className="text-sm">{fullDate}</p>
      <p className="text-sm text-gray-300">Semaine {weekNumber}</p>
    </div>
  );
}
