import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import BotaoLogout from '@/components/BotaoLogout/BotaoLogout';
import { getUserInfo } from '@/utils/api';
import BotaoAssinatura from '@/components/BotaoAssinatura/BotaoAssinatura';

export default async function Conta() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const email:string = session?.user?.email || "";

  const userInfo = await getUserInfo(email);

  const nomeCompleto:string = userInfo.nome || "";
  const primeiroNome:string = nomeCompleto.split(" ")[0];
  const quilometrosPercorridos:number = userInfo.distancia_acumulada || 0;
  const pontosConquistados:number = userInfo.pontos || 0;
  const plano:string = userInfo.planos
  let planoAtivo:boolean
  
  if (plano == "Plano Verdí") {
    planoAtivo = false
  } else {
    planoAtivo = true
  }

  return (
    <section>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='text-creme text-center text-2xl md:text-3xl'>
            Olá {primeiroNome}!
          </h1>
          <Link href={"/conta/editar"} className='bg-green-700 hover:bg-green-800 duration-300 text-creme p-1 sm:p-2'>Editar Conta</Link>
        </div>
      <h2></h2>
      </div>
      <div className='border-2 border-green-700 w-[90vw] p-2 mt-8 xl:w-[33vw] flex flex-col gap-5'>
        <div className='flex justify-between'>
          <p className='text-creme lg:text-xl'>Total Km - </p>
          <p className='text-creme lg:text-xl'>{quilometrosPercorridos} Km</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-creme lg:text-xl'>Total de Pontos - </p>
          <p className='text-creme lg:text-xl'>{pontosConquistados}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-creme lg:text-xl'>Plano - </p>
          <BotaoAssinatura planoAtivo={planoAtivo}/>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-creme lg:text-xl'>Resgates -</p>
          <Link href={"/rewards/historico"} className='text-green-400 lg:text-xl underline'>Histórico</Link>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 mt-4 sm:grid-cols-4 xl:grid-cols-2'>
        <Link href={"/trajeto/iniciar"} className='bg-green-700 hover:bg-green-800 duration-300 text-creme p-2 lg:text-xl text-center'>Iniciar Trajeto</Link>
        <Link href={"/trajeto/lista"} className='bg-green-700 hover:bg-green-800 duration-300 text-creme p-2 lg:text-xl text-center'>Exibir Trajetos</Link>
        <Link href={"/rewards"} className='bg-green-700 hover:bg-green-800 duration-300 text-creme p-2 lg:text-xl text-center'>Resgatar</Link>
        <BotaoLogout />
      </div>
    </section>
  );
}
