import Image from "next/image"
import fotoBicicleta from "@/img/foto-inicio.jpg"

export default function Inicio() {
  return (
    <section className="w-[90vw] min-h-[70vh] flex flex-col justify-center items-center gap-2 sm:flex-row mx-auto">
      <div className="md:w-1/2 flex justify-center">
      <h1 className="text-creme text-xl text-center w-72 md:text-3xl lg:text-4xl lg:w-2/3"><span className="text-green-400">Transforme</span> seu deslocamento diário em impacto ambiental <span className="text-green-400">positivo</span></h1>
      </div>
      <div className="md:w-1/2">
      <Image src={fotoBicicleta} alt="Casal pedalando" className="w-60 mx-auto rounded-3xl md:w-3/4 lg:w-2/3 xl:w-1/2"/>
      </div>
    </section>
  )
}
