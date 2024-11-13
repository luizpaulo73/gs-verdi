import Link from 'next/link'
import React from 'react'

export default function Conta() {
  return (
    <section>
        <h1 className='text-creme text-center text-2xl md:text-3xl'>Bem vindo(a) Nome</h1>
        <div className='border-2 border-green-700 w-[90vw] p-2 mt-8 sm:w-96 xl:w-[33vw] flex flex-col gap-5'>
            <p className='text-creme lg:text-xl'>Quilômetros Percorridos - </p>
            <p className='text-creme lg:text-xl'>Pontos Conquistados - </p>
            <p className='text-creme lg:text-xl'>Créditos - </p>
        </div>
        <div className='flex justify-around mt-5'>
            <Link href={"/trajeto/iniciar"} className='bg-green-700 text-creme p-2 lg:text-xl'>Iniciar Trajeto</Link>
            <Link href={"/trajeto/lista"} className='bg-green-700 text-creme p-2 lg:text-xl'>Exibir Trajetos</Link>
        </div>
    </section>
  )
}
