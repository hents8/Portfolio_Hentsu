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
  <>
	<div className="md:hidden flex flex-col items-start px-3 py-2 text-[#BAC8C1] text-xs leading-tight">
		  <span className="font-semibold text-[#B1FB8E] flex gap-2">
			{daysLabels[todayIndex]}
			<span className="text-[#F5F5F5]">
			  {days[todayIndex]}
			</span>
		  </span>

		  <span className="text-[#B1FB8E] opacity-80">
			Semaine {weekNumber}
		  </span>

		  <span className="capitalize opacity-60">
			{monthYear}
		  </span>
	</div>
	
	<div className="hidden md:flex flex-col gap-2 text-[#BAC8C1]">
	  {/* Jours + dates */}
	  <div className="flex gap-4">
		{daysLabels.map((label, i) => (
		  <div key={label} className="flex flex-col items-center">
			<span
			  className={`text-[12px] tracking-wide ${
				i === todayIndex
				  ? "text-[#B1FB8E] font-semibold"
				  : "opacity-50"
			  }`}
			>
			  {label}
			</span>
			<span
			  className={`text-[14px] ${
				i === todayIndex ? "text-[#B1FB8E] font-bold" : "text-[#BAC8C1]"
			  }`}
			>
			  {days[i]}
			</span>
		  </div>
		))}
	  </div>

	  {/* Mois / année / semaine */}
	  <div className="text-[14px] text-[#BAC8C1] opacity-60">
		<span className="capitalize">{monthYear}</span>
		{" · "}
		Semaine <span className="text-[#B1FB8E]">{weekNumber}</span>
	  </div>
	</div>
	</>
  );
}