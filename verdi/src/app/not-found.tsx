import Link from 'next/link';

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl xl:text-8xl font-bold mb-4">404</h1>
      <h2 className="text-4xl mb-6 text-center">Página não encontrada</h2>
      <p className="text-2xl mb-8 text-center">
        Parece que você se perdeu na floresta 🌳
      </p>
      <Link href="/">
        <button className="bg-green-700 hover:bg-green-800 duration-300 text-white font-bold py-2 px-4 rounded">
          Voltar para a Home
        </button>
      </Link>
    </div>
  );
}
