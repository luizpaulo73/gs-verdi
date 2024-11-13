"use client"
import { signOut } from "next-auth/react"

export default function BotaoLogout() {
  return (
    <button onClick={() => signOut()}>Sair</button>
  )
}
