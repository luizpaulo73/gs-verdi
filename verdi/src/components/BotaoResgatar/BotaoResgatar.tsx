"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BotaoResgatar(props:{idUsuario:string , idRecompensa:number , preco:number, pontos:number , empresa:string}) {
    const pessoa_id:string = props.idUsuario;
    const recompensa_id:number = props.idRecompensa
    const preco:number = props.preco
    const pontos:number = props.pontos
    const nome_empresa:string = props.empresa

    const navigate = useRouter();

    const [resgatar, setResgatar] = useState<boolean>(true);

    const handleResgatar = async () => {
        try {
          const response = await fetch(`https://python-verdi-deploy.vercel.app/resgatar`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pessoa_id, recompensa_id, nome_empresa }),
          });
          if (response.ok) {  
            console.log("Usuário conectado com sucesso");
            navigate.push("/resgatado");
          } else {
            console.error("Erro ao fazer o login");
          }
        } catch (error) {
          console.error("Falha no carregamento", error);
        }
      }

  return (
    <div className="flex flex-col justify-around lg:w-1/3 items-center gap-5">
    {resgatar ? <button onClick={() => setResgatar(false)} className="bg-green-700 hover:bg-green-800 duration-300 text-creme p-2 ">Resgatar</button>
    :
    <>
    <div className="flex gap-3 justify-center">
      <button onClick={handleResgatar} className="bg-green-700 hover:bg-green-800 duration-300 text-creme p-2">Confirmar</button>
      <button onClick={() =>setResgatar(true)} className="bg-red-600 hover:bg-red-700 duration-300 text-creme p-2">Cancelar</button>
    </div>
    <p className="text-creme my-auto text-center text-sm md:text-base lg:text-lg">Seu saldo após resgatar será de {pontos - preco} pontos</p>
    </>}
    </div>
  )
}
