"use client";
import { useState } from "react";
import { signOut } from "next-auth/react";
 
export default function BotaoDelete(props: { idUsuario: number }) {
  const idUsuario: number = props.idUsuario;
 
  const [telaDeletar, setTelaDeletar] = useState<boolean>(false);
  const [confirmarDelete, setConfirmarDelete] = useState<string>("");
 
  const deletarConta = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmarDelete.toUpperCase() !== "DELETAR") {
      alert('Você deve digitar "DELETAR" para confirmar a exclusão da conta.');
      return;
    }
    try {
      const response = await fetch(
        `https://python-verdi-deploy.vercel.app/pessoas/${idUsuario}`,
        {
          method: "DELETE",
        }
      );
 
      if (response.ok) {
        alert("Conta excluída com sucesso!");
        signOut();
      } else {
        // Tenta interpretar a resposta como JSON
        const errorData = await response.json().catch(() => ({
          error: "Erro desconhecido no servidor.",
        }));
        alert(errorData.error || "Erro ao excluir a conta.");
      }
    } catch (error) {
      console.error("Falha no carregamento", error);
      alert("Erro ao se conectar ao servidor.");
    }
  };
 
  return (
    <>
      {!telaDeletar ? (
        <div className="w-full flex flex-col items-center">
          <button
            onClick={() => setTelaDeletar(!telaDeletar)}
            className="bg-red-600 hover:bg-red-700 duration-300 text-white p-2"
          >
            Deletar Conta
          </button>
          <p className="text-white">Essa ação é irreversível</p>
        </div>
      ) : (
        <form onSubmit={deletarConta} className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <label htmlFor="deletar" className="text-black text-center">
              Digite
              <span className="text-red-600"> {'"DELETAR"'}</span> para apagar
              sua conta
            </label>
            <input
              type="text"
              id="deletar"
              value={confirmarDelete}
              onChange={(e) => setConfirmarDelete(e.target.value)}
              className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-1/2 mx-auto text-center text-red-600
                                      focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
            />
          </div>
          <div className="flex justify-around">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 duration-300 text-white p-2"
            >
              Confirmar
            </button>
            <button
              onClick={() => setTelaDeletar(!telaDeletar)}
              className="bg-green-700 hover:bg-green-800 duration-300 text-white p-2"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
    </>
  );
}