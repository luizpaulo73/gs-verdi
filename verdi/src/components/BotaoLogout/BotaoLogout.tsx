"use client"
import { signOut } from "next-auth/react"

export default function BotaoLogout() {
  return (
    <button onClick={() => signOut()} className="bg-red-600 p-2 text-white lg:text-xl text-center">Sair da conta</button>
  )
}
