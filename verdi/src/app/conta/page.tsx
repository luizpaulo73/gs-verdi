import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import BotaoLogout from '@/components/BotaoLogout/BotaoLogout';
import { getUserInfo } from '../api/usuario/[email]/route';
import BotaoAssinatura from '@/components/BotaoAssinatura/BotaoAssinatura';

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
  const plano = userInfo.planos
  let planoAtivo : boolean
  
  if (plano == "Plano Verdí") {
    planoAtivo = false
  } else {
    planoAtivo = true
  }

  return (
    <section>
      <div>
      <h1 className='text-creme text-center text-2xl md:text-3xl'>
        Olá {primeiroNome}!
      </h1>
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
      </div>
      <div className='grid grid-cols-2 gap-4 mt-4 sm:grid-cols-4 xl:grid-cols-2'>
        <Link href={"/trajeto/iniciar"} className='bg-green-700 text-creme p-2 lg:text-xl text-center'>Iniciar Trajeto</Link>
        <Link href={"/trajeto/lista"} className='bg-green-700 text-creme p-2 lg:text-xl text-center'>Exibir Trajetos</Link>
        <Link href={"/rewards"} className='bg-green-700 text-creme p-2 lg:text-xl text-center'>Resgatar</Link>
        <BotaoLogout />
      </div>
    </section>
  );
}
