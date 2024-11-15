import Image from "next/image";
import { ListaRecompensa } from "@/data/recompensas";
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { getUserInfo } from "@/app/api/usuario/[email]/route";
import BotaoResgatar from "@/components/BotaoResgatar/BotaoResgatar";

export default async function Resgatar({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const email = session?.user?.email || "";
  const userInfo = await getUserInfo(email);
  const idUsuario = userInfo.id

  const recompensaSelecionada = ListaRecompensa.find(
    (recompensa) => recompensa.id === id
  );

  return (
    recompensaSelecionada && (
      <section>
        <div>
          <Image
            src={recompensaSelecionada.imagem}
            alt={recompensaSelecionada.empresa}
          />
        </div>
        <BotaoResgatar idUsuario={idUsuario} idRecompensa={id}/>
      </section>
    )
  );
}
