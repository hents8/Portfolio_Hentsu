import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function CalendarWidget() {
  const { t, i18n } = useTranslation();
  const [days, setDays] = useState<number[]>([]);
  const [todayIndex, setTodayIndex] = useState(0);
  const [monthYear, setMonthYear] = useState("");
  const [weekNumber, setWeekNumber] = useState(0);

  // Récupérer le tableau de jours selon la langue active
  const daysLabels = t("calendar.days", { returnObjects: true }) as string[];

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

    // Formatage dynamique selon la langue actuelle ('fr-FR' ou 'en-US')
    const locale = i18n.language === "en" ? "en-US" : "fr-FR";
    setMonthYear(
      today.toLocaleDateString(locale, {
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
  }, [i18n.language]); // Se ré-exécute automatiquement au changement de langue !

  return (
    <>
      {/* MOBILE */}
      <div className="md:hidden flex flex-col items-start px-3 py-2 mt-4 text-[#BAC8C1] text-xs leading-tight">
        <span className="font-semibold text-[#B1FB8E] flex gap-2">
          {daysLabels[todayIndex]}
          <span className="text-[#F5F5F5]">{days[todayIndex]}</span>
        </span>

        <span className="text-[#B1FB8E] opacity-80">
          {t("calendar.week")} {weekNumber}
        </span>

        <span className="capitalize opacity-60">{monthYear}</span>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-col gap-2 text-[#BAC8C1]">
        {/* Jours + dates */}
        <div className="flex gap-4">
          {Array.isArray(daysLabels) &&
            daysLabels.map((label, i) => (
              <div key={i} className="flex flex-col items-center">
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
                    i === todayIndex
                      ? "text-[#B1FB8E] font-bold"
                      : "text-[#BAC8C1]"
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
          {t("calendar.week")}{" "}
          <span className="text-[#B1FB8E]">{weekNumber}</span>
        </div>
      </div>
    </>
  );
}