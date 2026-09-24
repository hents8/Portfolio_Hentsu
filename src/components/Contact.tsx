import { useState } from "react";
import emailjs from "@emailjs/browser";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError(t("contact.error_fill_all", "Merci de remplir tous les champs."));
      return;
    }

    setLoading(true);
    setError("");

    // 1️⃣ ENVOI DU MESSAGE À L'ADMINISTRATEUR
    emailjs
      .send(
        "service_qsvmryd",
        "template_0vl5j6o",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "ImlMunHu-u3cVqQ8i"
      )
      .then(() => {
        // 2️⃣ ACCUSÉ DE RÉCEPTION AUTOMATIQUE
        return emailjs.send(
          "service_qsvmryd",
          "template_iao8ca5",
          {
            name: form.name,
            email: form.email,
          },
          "ImlMunHu-u3cVqQ8i"
        );
      })
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setLoading(false);
        setError(
          t("contact.error_sending", "Erreur lors de l'envoi. Réessayez plus tard.")
        );
        console.error(err);
      });
  };

  return (
    <section id="contact" className="py-35 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-[#B1FB8E] mb-6">
        {t("contact.title", "Contact")}
      </h2>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={t("contact.placeholder_name", "Votre nom")}
          className="p-3.5 rounded-xl bg-[#2A3A2A] text-[#F5F5F5] placeholder-gray-400 border border-[#7B9669]/20 focus:border-[#B1FB8E] focus:outline-none transition"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={t("contact.placeholder_email", "Votre email")}
          className="p-3.5 rounded-xl bg-[#2A3A2A] text-[#F5F5F5] placeholder-gray-400 border border-[#7B9669]/20 focus:border-[#B1FB8E] focus:outline-none transition"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={t("contact.placeholder_message", "Votre message...")}
          className="p-3.5 rounded-xl bg-[#2A3A2A] text-[#F5F5F5] placeholder-gray-400 h-36 border border-[#7B9669]/20 focus:border-[#B1FB8E] focus:outline-none transition leading-relaxed"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#B1FB8E] hover:bg-[#7B9669] text-[#1A251A] px-6 py-3.5 rounded-xl font-bold disabled:opacity-50 transition flex items-center justify-center gap-2 shadow-lg"
        >
          <Send size={16} />
          <span>
            {loading
              ? t("contact.btn_sending", "Envoi...")
              : t("contact.btn_send", "Envoyer")}
          </span>
        </button>

        {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
      </form>

      {/* POPUP DE SUCCÈS HOMOGÈNE */}
      {success && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all duration-300"
          onClick={() => setSuccess(false)}
        >
          <div
            className="bg-[#1A251A] p-6 md:p-8 rounded-3xl border border-[#B1FB8E]/30 shadow-2xl w-[90%] max-w-md relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-5 p-2 rounded-full bg-[#2A3A2A] text-[#BAC8C1] hover:text-white hover:bg-[#7B9669] transition-all"
              onClick={() => setSuccess(false)}
            >
              <X size={20} />
            </button>

            <CheckCircle2 size={48} className="text-[#B1FB8E] mx-auto mb-4 animate-bounce" />

            <h3 className="text-2xl font-extrabold text-[#F5F5F5] mb-2">
              {t("contact.modal_title", "Message envoyé")}
            </h3>

            <p className="text-[#BAC8C1] text-sm leading-relaxed mb-6">
              {t(
                "contact.modal_desc",
                "Votre message a bien été transmis. Un accusé de réception automatique vous a été envoyé par e-mail."
              )}
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="w-full bg-[#B1FB8E] hover:bg-[#7B9669] text-[#1A251A] py-3 rounded-xl font-bold transition shadow-lg"
            >
              {t("contact.modal_close", "Fermer")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}