import Image from "next/image"
import Link from "next/link";
import { ListaRecompensa } from "@/data/recompensas";
import BarraProgresso from "../BarraProgresso/BarraProgresso";

export default function ConteudoRecompensas() {
  return (
    <section className="flex flex-col items-center mt-5">
      <h1 className="text-creme mb-5 text-xl sm:text-2xl md:text-4xl">Resgate suas Recompensas</h1>
      <div className="grid grid-cols-1 w-72 gap-3 sm:grid-cols-2 sm:w-11/12 md:grid-cols-3 md:w-[700px] lg:w-[900px]">
        {ListaRecompensa.map((info) => (
            <div key={info.id} className="border-2 bg-emerald-950 border-green-700 p-2 flex flex-col justify-between h-80 relative">
                <div className="h-2/5 flex items-center">
                <Image src={info.imagem} alt={info.empresa} className="mb-4 mx-auto h-2/3 w-auto"/>
                </div>
                <p className="text-creme">{info.empresa}</p>
                <p className="text-creme">{info.descricao}</p>
                <BarraProgresso pontos={5000} pontosNecessarios={info.custo_pontos}/>
                <Link href={`/rewards/${info.id}`} className="absolute w-full h-full"></Link>
            </div>
        ))}
      </div>
    </section>
  )
}
