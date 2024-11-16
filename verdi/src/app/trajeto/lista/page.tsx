import { getServerSession } from "next-auth";
import { getUserInfo } from "@/app/api/usuario/[email]/route";
import ListaTrajeto from "@/components/ListaTrajeto/ListaTrajeto";

export default async function ListaTrajetos() {

    const session = await getServerSession();
    const email = session?.user?.email || "";
    const userInfo = await getUserInfo(email);
    const idPessoa = userInfo?.id

  return (
    <section className="w-full overflow-hidden">
      <h1 className="text-creme text-center text-3xl mb-5">Trajetos</h1>
      <ListaTrajeto id={idPessoa}/>
    </section>
    
  )
}
