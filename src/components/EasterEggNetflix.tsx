import { useState, useEffect } from "react";
import { ExternalLink, X, Github, MonitorPlay } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

export function EasterEggNetflix() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Fermeture automatique avec la touche Echap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="mt-12 pt-6 text-center">
      {/* BOUTON DECLENCHEUR MINIMALISTE ET DISCRET */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          inline-flex items-center gap-3
          text-[#BAC8C1] hover:text-[#FFFFFF]
          text-xs md:text-sm font-medium
          transition-all duration-300 group hover:scale-[1.02]
          cursor-pointer bg-transparent border-0
        "
      >
        {/* Conteneur Lottie sur-mesure */}
        <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
          <DotLottiePlayer
            src="/Bonusgiftsuccess.lottie"
            autoplay
            loop
            style={{ width: "70px", height: "70px" }}
          />
        </div>

        {/* Texte élégant et épuré */}
        <span className="tracking-wide">
          {t(
            "easteregg.trigger_btn",
            "[UI/UX Lab] Découvrir le projet créatif streaming & audio"
          )}
        </span>
      </button>

      {/* MODALE EASTER EGG */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="
              bg-[#1A251A] p-6 md:p-8 rounded-3xl border border-[#FFFFFF]/40 
              shadow-[0_0_50px_rgba(229,9,20,0.2)] max-w-lg w-full relative text-left 
              animate-slideUp max-h-[90vh] overflow-y-auto custom-scrollbar
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button
              className="absolute top-5 right-5 p-2 rounded-full bg-[#2A3A2A] text-[#BAC8C1] hover:text-white hover:bg-[#7B9669] transition-all"
              onClick={() => setIsOpen(false)}
            >
              <X size={18} />
            </button>

            {/* Header Modale */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 text-[#B1FB8E] text-[11px] font-mono font-bold tracking-widest uppercase mb-1">
                <MonitorPlay size={13} />{" "}
                {t("easteregg.badge", "Creative Side Project • Off-Duty")}
              </span>
              <h3 className="text-xl font-extrabold text-[#F5F5F5]">
                {t("easteregg.title", "Interactive Streaming & Web Audio Engine")}
              </h3>
            </div>

            {/* Description */}
            <p className="text-xs text-[#BAC8C1] leading-relaxed mb-4">
              {t(
                "easteregg.description",
                "Une exploration ludique développée pour tester les limites des animations web fluides et des interactions audio contextuelles, directement inspirée des codes visuels de Netflix."
              )}
            </p>

            {/* Highlights techniques */}
            <div className="bg-[#121A12] p-4 rounded-2xl border border-white/5 mb-6 space-y-2.5">
              <span className="text-[11px] font-mono text-[#B1FB8E] font-bold block mb-1">
                // Focus & Stack Technique :
              </span>

              <div className="flex items-start gap-2 text-xs text-[#BAC8C1]">
                <span className="text-[#E50914] font-bold">❯</span>
                <span>
                  <strong>Web Audio API :</strong> Gestion dynamique des
                  transitions audio, contrôles de fondus (fade-in / fade-out) et
                  effets sonores synchro.
                </span>
              </div>

              <div className="flex items-start gap-2 text-xs text-[#BAC8C1]">
                <span className="text-[#E50914] font-bold">❯</span>
                <span>
                  <strong>Rich Media & Vectoriel :</strong> Lecteur Lottie
                  dotLottie, animations Canvas fluides & confettis dynamiques.
                </span>
              </div>

              <div className="flex items-start gap-2 text-xs text-[#BAC8C1]">
                <span className="text-[#E50914] font-bold">❯</span>
                <span>
                  <strong>UI/UX Streaming :</strong> Sélecteur de profils
                  interactif, carrousel responsive mobile-first et parcours
                  scénarisé.
                </span>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://hoanao.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#2A3A2A] text-[#B1FB8E] font-bold text-xs rounded-xl hover:bg-[#344834] transition-all shadow-lg"
              >
                <ExternalLink size={15} />
                <span>
                  {t("easteregg.btn_demo", "Tester la Démo Interactive")}
                </span>
              </a>

              <a
                href="https://github.com/hents8/rizzmee"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#2A3A2A] text-[#B1FB8E] font-semibold text-xs rounded-xl border border-[#B1FB8E]/30 hover:bg-[#344834] transition-all"
              >
                <Github size={15} />
                <span>{t("easteregg.btn_code", "Code Source")}</span>
              </a>
            </div>

            {/* Note finale */}
            <span className="block text-center text-[10px] text-[#BAC8C1]/60 font-mono mt-4">
              ✨ Développé avec soin • Garanti 0% de bug sur mobile
            </span>
          </div>
        </div>
      )}
    </div>
  );
}