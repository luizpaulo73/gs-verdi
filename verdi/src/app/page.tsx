import Calculo from "@/components/Calculo/Calculo";
import Inicio from "@/components/Inicio/Inicio";
import Planos from "@/components/Planos/Planos";

export default function Home() {
  return (
    <div>
      <Inicio />
      <Calculo />
      <div className="flex flex-col gap-5 min-h-[70vh] justify-center">
        <h1 className="text-creme text-center text-2xl lg:text-4xl">Contrate o nosso plano</h1>
        <Planos /> 
      </div>
    </div>
  )
}