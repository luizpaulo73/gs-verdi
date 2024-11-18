import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getUserInfo } from "@/app/api/usuario/[email]/route";

import FormEditarPlano from "@/components/FormEditarPlano/FormEditarPlano";
import FormEditarSenha from "@/components/FormEditarSenha/FormEditarSenha";

export default async function EditarConta() {

    const session = await getServerSession();

    if (!session) {
      redirect("/login");
    }
  
    const email = session?.user?.email || "";
  
    const userInfo = await getUserInfo(email);
    const idUsuario:number = userInfo.id
    const plano = userInfo.planos
     return (
        <div className="flex flex-col md:flex-row gap-8 justify-around w-full items-center">
        <FormEditarSenha idUsuario={idUsuario}/>
        <FormEditarPlano idUsuario={idUsuario} plano={plano} />
        </div>
     )
}
