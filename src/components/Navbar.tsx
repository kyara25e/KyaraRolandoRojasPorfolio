import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl md:px-8">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Kyara Rojas
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="transition hover:text-orange-300">
            Home
          </Link>
          <Link
            href="/proyectos"
            className="transition hover:text-orange-300"
          >
            Proyectos
          </Link>
          <Link href="/contacto" className="transition hover:text-orange-300">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}