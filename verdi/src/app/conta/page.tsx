import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import BotaoLogout from '@/components/BotaoLogout/BotaoLogout';
import { getUserInfo } from '../api/usuario/[email]/route';

export default async function Conta() {
  // Obtendo a sessão do usuário
  const session = await getServerSession();

  // Redirecionar para login se não estiver autenticado
  if (!session) {
    redirect("/login");
  }

  // Obtendo o email da sessão
  const email = session?.user?.email || "";

  // Chamando a função getUserInfo para obter as informações do usuário
  const userInfo = await getUserInfo(email);

  // Extraindo dados do usuário
  const nomeCompleto = userInfo?.nome || "";
  const primeiroNome = nomeCompleto.split(" ")[0];
  const quilometrosPercorridos = userInfo?.distancia_acumulada || 0;
  const pontosConquistados = userInfo?.pontos || 0;
  const creditos = userInfo?.creditos || 0;

  return (
    <section>
      <h1 className='text-creme text-center text-2xl md:text-3xl'>
        Olá {primeiroNome}!
      </h1>
      <div className='border-2 border-green-700 w-[90vw] p-2 mt-8 sm:w-96 xl:w-[33vw] flex flex-col gap-5'>
        <div className='flex justify-between'>
          <p className='text-creme lg:text-xl'>Quilômetros Percorridos - </p>
          <p className='text-creme lg:text-xl'>{quilometrosPercorridos} Km</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-creme lg:text-xl'>Pontos Conquistados - </p>
          <p className='text-creme lg:text-xl'>{pontosConquistados}</p>
          </div>
        <div className='flex justify-between'>
          <p className='text-creme lg:text-xl'>Créditos - </p>
          <p className='text-creme lg:text-xl'>{creditos}</p>
        </div>
        
        
        
      </div>
      <div className='flex justify-around mt-5'>
        <Link href={"/trajeto/iniciar"} className='bg-green-700 text-creme p-2 lg:text-xl'>Iniciar Trajeto</Link>
        <Link href={"/trajeto/lista"} className='bg-green-700 text-creme p-2 lg:text-xl'>Exibir Trajetos</Link>
        <BotaoLogout />
      </div>
    </section>
  );
}
