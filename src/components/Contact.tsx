import { useState } from "react";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";

export default function Contact() {
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
      setError("Merci de remplir tous les champs.");
      return;
    }

    setLoading(true);
    setError("");

    // 1️⃣ MAIL POUR TOI (contenu du message)
    emailjs
      .send(
        "service_qsvmryd",
        "template_0vl5j6o", // → template réception admin
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "ImlMunHu-u3cVqQ8i"
      )
      .then(() => {
        // 2️⃣ ACCUSÉ DE RÉCEPTION UTILISATEUR
        return emailjs.send(
          "service_qsvmryd",
          "template_iao8ca5", // → template accusé
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
        setError("Erreur lors de l'envoi. Réessayez plus tard.");
        console.error(err);
      });
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Contact</h2>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Votre nom"
          className="p-3 rounded bg-[#1E293B]"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Votre email"
          className="p-3 rounded bg-[#1E293B]"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Votre message..."
          className="p-3 rounded bg-[#1E293B] h-32"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>

        {error && <p className="text-red-400 text-sm">{error}</p>}
      </form>

      {/* ✅ POPUP SUCCÈS */}
      {success && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSuccess(false)}
        >
          <div
            className="bg-[#0F172A] p-6 rounded-2xl shadow-xl w-[90%] max-w-md relative animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setSuccess(false)}
            >
              <X size={22} />
            </button>

            <h3 className="text-xl font-bold text-cyan-400 mb-2">
              Message envoyé ✅
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              Votre message a bien été envoyé.
              <br />
              Un accusé de réception vous a été transmis par email.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-6 w-full bg-cyan-500 hover:bg-cyan-400 py-2 rounded-lg font-semibold transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
