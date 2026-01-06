import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!form.name || !form.email || !form.message) {
    alert("Merci de remplir tous les champs !");
    return;
  }
  setLoading(true);

  // 1️⃣ Envoyer à moi-même
  emailjs
    .send(
      "service_qsvmryd",
      "template_0vl5j6o",
      {
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
      },
      "ImlMunHu-u3cVqQ8i"
    )
    .then(() => {
      // 2️⃣ Envoyer l'accusé à l'utilisateur
      return emailjs.send(
        "service_qsvmryd",
        "template_iao8ca5",
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "ImlMunHu-u3cVqQ8i"
      );
    })
    .then(() => {
      setLoading(false);
      alert("Message envoyé et accusé de réception envoyé !");
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      setLoading(false);
      alert("Erreur lors de l'envoi : " + error.text);
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
        ></textarea>

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-lg font-semibold"
          disabled={loading}
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </section>
  );
}
