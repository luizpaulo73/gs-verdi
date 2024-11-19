import Image from "next/image";
import fotoSobreNos from "@/img/foto-sobre-nos.jpg"

export default function page() {
  return (
    <section>
      <h1 className="text-center text-creme text-3xl mb-4 mt-4">Sobre Nós</h1>
      <div className="flex flex-col gap-5 md:flex-row md:justify-around md:items-center md:gap-2 md:w-full">
        <div className="w-5/6 flex flex-col justify-center mx-auto gap-5 md:w-1/2 md:items-center">
        <p className="text-creme text-sm sm:text-base lg:text-lg xl:text-xl">
          Apresento a <span className="text-green-400">Verdí</span>: uma plataforma que recompensa usuários por decisões eco-conscientes, acumulando pontos ao optar por deslocamentos sustentáveis. Esses pontos podem ser trocados por <span className="text-green-400">recompensas</span> e benefícios.
        </p>
        <p className="text-creme text-sm sm:text-base lg:text-lg xl:text-xl">
          Com o plano <span className="text-green-400">Super Verdí</span>, os usuários aumentam sua pontuação e contribuem para um fundo de reflorestamento. Empresas também podem aderir, comprando <span className="text-green-400">créditos de carbono</span> e oferecendo benefícios aos associados, enquanto compensam suas próprias emissões.
        </p>
        <p className="text-creme text-sm sm:text-base lg:text-lg xl:text-xl">
          A <span className="text-green-400">Verdí</span> conecta consumidores e empresas para engajar na preservação ambiental, recompensando escolhas sustentáveis e promovendo um <span className="text-green-400">futuro mais verde</span>.
        </p>
        </div>
        <div className="w-full flex justify-center md:w-5/12">
          <Image src={fotoSobreNos} alt="" className="w-72 rounded-2xl lg:w-80 shadow-2xl"/>
        </div>
      </div>
    </section>
  )
}
