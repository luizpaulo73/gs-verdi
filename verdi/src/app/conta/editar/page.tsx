import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getUserInfo } from "@/app/api/usuario/[email]/route";

import FormEditarPlano from "@/components/FormEditarPlano/FormEditarPlano";
import FormEditarSenha from "@/components/FormEditarSenha/FormEditarSenha";
import BotaoDelete from "@/components/BotaoDelete/BotaoDelete";

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
        <div className="flex flex-col gap-8 justify-around w-full items-center min-h-[70vh]">
          <h1 className="text-center text-creme text-3xl mb-4">Editar Conta</h1>
          <div className="flex flex-col md:flex-row md:justify-around md:items-center w-full md:w-2/3 py-8 gap-8">
            <FormEditarSenha idUsuario={idUsuario}/>
            <FormEditarPlano idUsuario={idUsuario} plano={plano} />
          </div>
          <div className="min-w-60 flex flex-col items-center justify-center min-h[40vh] p-2 gap-5 md:w-1/2">
            <BotaoDelete idUsuario={idUsuario}/>
          </div>
        </div>
     )
}