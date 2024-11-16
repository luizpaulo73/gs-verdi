"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BotaoResgatar(props:{idUsuario:string , idRecompensa:number , preco:number, pontos:number}) {
    const pessoa_id = props.idUsuario;
    const recompensa_id = props.idRecompensa
    const preco = props.preco
    const pontos = props.pontos

    const navigate = useRouter();

    const [resgatar, setResgatar] = useState<boolean>(true);

    const handleResgatar = async () => {
        try {
          const response = await fetch(`http://localhost:5000/resgatar`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pessoa_id, recompensa_id }),
          });
          if (response.ok) {  
            console.log("Usuário conectado com sucesso");
            setTimeout(() => {
              navigate.push("/resgatado");
            }, 1000);
          } else {
            console.error("Erro ao fazer o login");
          }
        } catch (error) {
          console.error("Falha no carregamento", error);
        }
      }

  return (
    <div className="flex flex-col justify-around lg:w-1/3 items-center gap-5">
    {resgatar ? <button onClick={() => setResgatar(false)} className="bg-green-700 text-creme p-2 ">Resgatar</button>
    :
    <>
    <div className="flex gap-3 justify-center">
      <button onClick={handleResgatar} className="bg-green-700 text-creme p-2">Confirmar</button>
      <button onClick={() =>setResgatar(true)} className="bg-red-600 text-creme p-2">Cancelar</button>
    </div>
    <p className="text-creme my-auto text-center text-sm md:text-base lg:text-lg">Seu saldo após resgatar será de {pontos - preco} pontos</p>
    </>}
    </div>
  )
}
