import { getServerSession } from "next-auth";
import { getUserInfo } from "@/app/api/usuario/[email]/route";
import ListaTrajeto from "@/components/ListaTrajeto/ListaTrajeto";
import BotaoVoltar from "@/components/BotaoVoltar/BotaoVoltar";

export default async function ListaTrajetos() {

    const session = await getServerSession();
    const email:string = session?.user?.email || "";
    const userInfo = await getUserInfo(email);
    const idPessoa:number = userInfo?.id

  return (
    <section className="w-full overflow-hidden flex flex-col items-center">
      <div className="w-full sm:w-2/3 flex mb-5 justify-between">
        <h1 className="text-creme text-center text-3xl lg:text-4xl">Trajetos</h1>
        <BotaoVoltar />
      </div>
      <ListaTrajeto id={idPessoa}/>
    </section>
    
  )
}
