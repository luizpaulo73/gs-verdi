import Trajeto from "@/components/Trajeto/Trajeto";
import { getServerSession } from "next-auth";
import { getUserInfo } from "@/app/api/usuario/[email]/route";

export default async function IniciarTrajeto() {
  
  const session = await getServerSession();
  const email:string = session?.user?.email || "";
  const userInfo = await getUserInfo(email);
  const idPessoa:number = userInfo?.id

  console.log(session)
  return (
    <>
      <Trajeto id={idPessoa}/>
    </>
  );
}
