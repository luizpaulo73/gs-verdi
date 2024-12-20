import Image from "next/image";
import { ListaRecompensa } from "@/data/recompensas";
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { getUserInfo } from "@/utils/api";
import BotaoResgatar from "@/components/BotaoResgatar/BotaoResgatar";

export default async function Resgatar({ params }: { params: { id: string } }) {
  const id:number = Number(params.id);
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const email:string = session?.user?.email || "";
  const userInfo = await getUserInfo(email);
  const idUsuario:string = userInfo.id;
  const totalPontos:number = userInfo.pontos

  const recompensaSelecionada = ListaRecompensa.find(
    (recompensa) => recompensa.id === id
  );

  return (
    recompensaSelecionada && (
      <section className="flex flex-col items-center">
        <div className="p-2 flex flex-col items-center gap-5 w-72 md:w-1/2 border-2 border-green-700">
          <Image src={recompensaSelecionada.imagem} alt={recompensaSelecionada.nomeEmpresa} className="w-2/3 lg:w-1/2 xl:lg:w-1/3 mx-auto"/>
          <p className="text-creme md:text-md lg:text-lg xl:text-xl text-justify">{recompensaSelecionada.descricaoLonga}</p>
        <BotaoResgatar idUsuario={idUsuario} idRecompensa={id} preco={recompensaSelecionada.custo_pontos} pontos={totalPontos} empresa={recompensaSelecionada.nomeEmpresa}/>
        </div>
      </section>
    )
  );
}
