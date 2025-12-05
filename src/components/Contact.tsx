export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Contact</h2>

      <form className="grid gap-4">
        <input type="text" placeholder="Votre nom" className="p-3 rounded bg-[#1E293B]" />
        <input type="email" placeholder="Votre email" className="p-3 rounded bg-[#1E293B]" />
        <textarea placeholder="Votre message..." className="p-3 rounded bg-[#1E293B] h-32"></textarea>

        <button className="bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-lg font-semibold">
          Envoyer
        </button>
      </form>
    </section>
  );
}
