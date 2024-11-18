import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';
import { getUserInfo } from "@/app/api/usuario/[email]/route";

import ListaHistorico from "@/components/ListaHistorico/ListaHistorico";

export default async function Historico() {

  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const email = session?.user?.email || "";

  const userInfo = await getUserInfo(email);
  const idUsuario = userInfo.id

    return (
        <section className="w-full overflow-hidden">
            <h2 className="text-center text-creme text-3xl mb-5">Histórico de resgates</h2>
        <ListaHistorico idUsuario={idUsuario}/>
        </section>
      );
}
