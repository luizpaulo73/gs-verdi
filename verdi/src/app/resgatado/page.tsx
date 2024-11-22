"use client"
import { useRouter } from "next/navigation"

export default function Resgatado() {

  const navigate = useRouter()

  return (
    <section className="flex flex-col items-center">
        <h1 className="text-creme text-center text-3xl">Sua recompensa foi resgatada com sucesso! ✅</h1>
        <div className="flex gap-5">
          <button onClick={() => navigate.push("/conta")} className="bg-green-700 hover:bg-green-800 duration-300 p-2 text-creme mt-5">Voltar a conta</button>
          <button onClick={() => navigate.push("/rewards/historico")} className="bg-green-700 hover:bg-green-800 duration-300 p-2 text-creme mt-5">Ver Resgates</button>
        </div>
    </section>
  )
}
