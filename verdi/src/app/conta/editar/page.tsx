import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getUserInfo } from "@/utils/api";

import FormEditarPlano from "@/components/FormEditarPlano/FormEditarPlano";
import FormEditarSenha from "@/components/FormEditarSenha/FormEditarSenha";
import BotaoDelete from "@/components/BotaoDelete/BotaoDelete";
import BotaoVoltar from "@/components/BotaoVoltar/BotaoVoltar";

export default async function EditarConta() {

    const session = await getServerSession();

    if (!session) {
      redirect("/login");
    }
  
    const email:string = session?.user?.email || "";
  
    const userInfo = await getUserInfo(email);
    const idUsuario:number = userInfo.id
    const plano:string = userInfo.planos
     return (
        <div className="flex flex-col justify-around w-full items-center min-h-[70vh]">
          <div className="flex w-full md:w-1/2 justify-between">
            <h1 className="text-center text-creme text-3xl">Editar Conta</h1>
            <BotaoVoltar />
          </div>
          <div className="flex flex-col md:justify-around md:items-center w-11/12 md:w-1/2 py-8 gap-8">
            <FormEditarPlano idUsuario={idUsuario} plano={plano} />
            <FormEditarSenha idUsuario={idUsuario}/>
            <div className="w-full flex flex-col justify-center min-h[40vh] gap-5 md:w-full rounded-2xl bg-white p-5 sm:p-8">
              <h1 className="text-black text-left text-2xl sm:text-3xl">Deletar Conta</h1>
              <BotaoDelete idUsuario={idUsuario}/>
            </div>
          </div>
        </div>
     )
}