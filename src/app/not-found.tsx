import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-blue-dark to-brand-blue">
      <div className="text-center px-4">
        <h1 className="text-8xl md:text-9xl font-bold font-display text-gradient mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Página não encontrada
        </h2>
        <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-brand-green text-brand-blue-dark font-bold rounded-lg text-lg transition-all duration-300 hover:bg-brand-green-hover hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-green/25"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
