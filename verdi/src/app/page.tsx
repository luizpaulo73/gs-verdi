import Planos from "@/components/Planos/Planos";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-creme text-center text-2xl lg:text-4xl">Contrate o nosso plano</h1>
      <Planos />
    </div>
  )
}