import Link from 'next/link'
import React from 'react'

export default function BotaoVoltar() {
  return (
    <Link href={"/conta"} className='bg-green-700 hover:bg-green-800 duration-300 text-creme p-2 lg:text-lg'>Voltar</Link>
  )
}
