import Image from "next/image"
import Link from "next/link";
import { ListaRecompensa } from "@/data/recompensas";
import BarraProgresso from "../BarraProgresso/BarraProgresso";

export default function ConteudoRecompensas() {
  return (
    <section className="grid grid-cols-1 w-72 gap-3 sm:grid-cols-2 sm:w-11/12 md:grid-cols-3 lg:w-2/3">
        {ListaRecompensa.map((info) => (
            <div key={info.id} className="border-2 bg-emerald-950 border-green-700 p-2 flex flex-col justify-between h-80 relative">
              <Link href={`/rewards/${info.id}`} className="absolute w-full h-full"></Link>
                <div className="h-2/5 my-auto">
                <Image src={info.imagem} alt={info.empresa} className="mb-4 mx-auto w-3/4 lg:w-1/2"/>
                </div>
                <p className="text-creme">{info.empresa}</p>
                <p className="text-creme">{info.descricao}</p>
                <BarraProgresso pontos={5000} pontosNecessarios={info.custo_pontos}/>
            </div>
        ))}
    </section>
  )
}
