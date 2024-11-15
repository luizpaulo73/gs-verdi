import Image from "next/image"
import { ListaRecompensa } from "@/data/recompensas";

export default function ConteudoRecompensas() {
  return (
    <section className="grid grid-cols-1 w-72 gap-3 sm:grid-cols-2 sm:w-11/12 md:grid-cols-3 lg:w-2/3">
        {ListaRecompensa.map((info) => (
            <div key={info.id} className="border-2 bg-emerald-950 border-green-700 p-2 flex flex-col justify-between h-72">
                <div className="h-1/2 my-auto">
                <Image src={info.imagem} alt={info.empresa} className="mb-4 mx-auto w-3/4 lg:w-1/2"/>
                </div>
                <p className="text-creme">{info.empresa}</p>
                <p className="text-creme">{info.descricao}</p>
                <div className="flex justify-between">
                    <p className="line-through text-creme">{info.preco}</p>
                    <p className="text-green-400">{info.custo_credito} créditos</p>
                </div>
                
            </div>
        ))}
    </section>
  )
}
