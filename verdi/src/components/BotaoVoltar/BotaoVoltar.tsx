import Link from 'next/link'
import React from 'react'

export default function BotaoVoltar() {
  return (
    <Link href={"/conta"} className='bg-green-700 text-creme p-2 lg:text-lg'>Voltar</Link>
  )
}
