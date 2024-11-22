import { NextResponse } from "next/server";
import { getUserInfo } from "@/utils/api";

// export async function getUserInfo(email: string) {
//     try {
//       if (!email) {
//         throw new Error("Email não fornecido");
//       }
//       const response = await fetch(`https://python-verdi-deploy.vercel.app/infos/${email}`);
//       if (response.ok) {
//         const data = await response.json();
//         return data;
//       } else {
//         throw new Error("Erro ao obter informações do usuário");
//       }
//     } catch (error) {
//       console.error("Erro na requisição:", error);
//       throw error;
//     }
//   }

  export async function GET(req: Request, { params }: { params: { email: string } }) {
    const { email } = params;
  
    try {
      if (!email) {
        return NextResponse.json({ error: "Email não fornecido" }, { status: 400 });
      }
  
      const userInfo = await getUserInfo(email);
      return NextResponse.json(userInfo);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
  
      return NextResponse.json(
        { error: "Erro ao obter informações do usuário", details: errorMessage },
        { status: 500 }
      );
    }
  }
  
  