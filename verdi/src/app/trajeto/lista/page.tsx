import { getServerSession } from "next-auth";
import { getUserInfo } from "@/app/api/usuario/[email]/route";
import ListaTrajeto from "@/components/ListaTrajeto/ListaTrajeto";

export default async function ListaTrajetos() {

    const session = await getServerSession();
    const email = session?.user?.email || "";
    const userInfo = await getUserInfo(email);
    const idPessoa = userInfo?.id

  return (
    <ListaTrajeto id={idPessoa}/>
  )
}
