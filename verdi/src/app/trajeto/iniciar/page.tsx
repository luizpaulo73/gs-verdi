import Trajeto from "@/components/Trajeto/Trajeto";
import { getServerSession } from "next-auth";
import { getUserInfo } from "@/app/api/usuario/[email]/route";

export default async function IniciarTrajeto() {
  
  const session = await getServerSession();
  const email = session?.user?.email || "";
  const userInfo = await getUserInfo(email);
  const idPessoa = userInfo?.id

  console.log(session)
  return (
    <>
      <Trajeto id={idPessoa}/>
    </>
  );
}
