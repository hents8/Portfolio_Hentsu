import { useEffect, useState } from "react";

const daysLabels = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];

export function CalendarWidget() {
  const [days, setDays] = useState<number[]>([]);
  const [todayIndex, setTodayIndex] = useState(0);
  const [monthYear, setMonthYear] = useState("");
  const [weekNumber, setWeekNumber] = useState(0);

  useEffect(() => {
    const today = new Date();

    // Lundi = 0
    const mondayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;
    setTodayIndex(mondayIndex);

    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - mondayIndex);

    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(firstDayOfWeek);
      d.setDate(firstDayOfWeek.getDate() + i);
      return d.getDate();
    });

    setDays(weekDays);

    setMonthYear(
      today.toLocaleDateString("fr-FR", {
        month: "long",
        year: "numeric",
      })
    );

    const onejan = new Date(today.getFullYear(), 0, 1);
    const week = Math.ceil(
      ((today.getTime() - onejan.getTime()) / 86400000 +
        onejan.getDay() +
        1) / 7
    );
    setWeekNumber(week);
  }, []);

  return (
    <div className="flex flex-col gap-2 text-xs text-gray-300">
      {/* Jours + dates */}
      <div className="flex gap-4">
        {daysLabels.map((label, i) => (
          <div key={label} className="flex flex-col items-center">
            <span
              className={`text-[11px] tracking-wide ${
                i === todayIndex
                  ? "text-cyan-400 font-semibold"
                  : "opacity-50"
              }`}
            >
              {label}
            </span>
            <span
              className={`text-sm ${
                i === todayIndex
                  ? "text-cyan-400 font-bold"
                  : "text-gray-400"
              }`}
            >
              {days[i]}
            </span>
          </div>
        ))}
      </div>

      {/* Mois / année / semaine */}
      <div className="text-[11px] opacity-60">
        <span className="capitalize">{monthYear}</span>
        {" · "}
        Semaine <span className="text-cyan-400">{weekNumber}</span>
      </div>
    </div>
  );
}
