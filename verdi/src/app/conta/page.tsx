import Link from 'next/link'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import BotaoLogout from '@/components/BotaoLogout/BotaoLogout';

export default async function Conta() {

  const session = await getServerSession();

  if(!session) {
    redirect("/login")
  }

  const nomeCompleto = session?.user?.name || "";
  const primeiroNome = nomeCompleto.split(" ")[0];

  return (
    <section>
        <h1 className='text-creme text-center text-2xl md:text-3xl'>Bem vindo(a) {primeiroNome}</h1>
        <div className='border-2 border-green-700 w-[90vw] p-2 mt-8 sm:w-96 xl:w-[33vw] flex flex-col gap-5'>
            <p className='text-creme lg:text-xl'>Quilômetros Percorridos - </p>
            <p className='text-creme lg:text-xl'>Pontos Conquistados - </p>
            <p className='text-creme lg:text-xl'>Créditos - </p>
        </div>
        <div className='flex justify-around mt-5'>
            <Link href={"/trajeto/iniciar"} className='bg-green-700 text-creme p-2 lg:text-xl'>Iniciar Trajeto</Link>
            <Link href={"/trajeto/lista"} className='bg-green-700 text-creme p-2 lg:text-xl'>Exibir Trajetos</Link>
            <BotaoLogout/>
        </div>
    </section>
  )
}
