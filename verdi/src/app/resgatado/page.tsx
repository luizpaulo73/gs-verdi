"use client"
import { useRouter } from "next/navigation"

export default function Resgatado() {

  const navigate = useRouter()

  return (
    <section className="flex flex-col items-center">
        <h1 className="text-creme text-center text-3xl">Sua recompensa foi resgatada com sucesso! ✅</h1>
        <button onClick={() => navigate.push("/conta")} className="bg-green-700 p-2 text-creme mt-5">Voltar a conta</button>
    </section>
  )
}
