export default function Footer() {
  return (
    <footer className="py-6 text-center bg-[#2A3A2A]">
      <span className="text-[#F5F5F5]">© {new Date().getFullYear()} </span>
      <span className="text-[#B1FB8E] font-semibold">Hentsu</span>
      <span className="text-[#F5F5F5]"> — Portfolio.</span>
    </footer>
  );
}
