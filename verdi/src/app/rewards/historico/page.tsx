import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';
import { getUserInfo } from "@/app/api/usuario/[email]/route";

import ListaHistorico from "@/components/ListaHistorico/ListaHistorico";

export default async function Historico() {

  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const email:string = session?.user?.email || "";

  const userInfo = await getUserInfo(email);
  const idUsuario:number = userInfo.id

    return (
        <section className="w-full overflow-hidden">
        <ListaHistorico idUsuario={idUsuario}/>
        </section>
      );
}
