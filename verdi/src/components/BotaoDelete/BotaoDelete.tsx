    "use client"
    import { useState } from "react";
    import { signOut } from "next-auth/react";

    export default function BotaoDelete(props:{idUsuario:number}) {

        const idUsuario = props.idUsuario

        const [telaDeletar, setTelaDeletar] = useState<boolean>(false);
        const [confirmarDelete, setConfirmarDelete] = useState<string>("");

        const deletarConta = async (e : React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (confirmarDelete.toUpperCase() !== "DELETAR") {
                alert('Você deve digitar "DELETAR" para confirmar a exclusão da conta.');
                return;
            }
            try {
            const response = await fetch(
                `http://localhost:8080/pessoas/${idUsuario}`,
                { method: "DELETE" }
            );
            if (response.ok) {
                signOut()
            } else {
                const errorData = await response.json();
                console.error("Erro ao carregar o trajeto:", errorData);
            }
            } catch (error) {
            console.error("Falha no carregamento", error);
            }
        };

    return (
        <>
        {telaDeletar === false ? 
        <div className="w-full flex flex-col items-center">
        <button onClick={() => setTelaDeletar(!telaDeletar)} className='bg-red-600 text-white p-2'>Deletar Conta</button>
        <p className="text-white">Essa ação é irreversível</p>
        </div>
        :
        <form onSubmit={deletarConta} className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
                <label htmlFor="deletar" className="text-creme">Digite
                <span className="text-red-600"> {'"DELETAR"'}</span> para apagar sua conta</label>
                <input
                type="text"
                id="deletar"
                value={confirmarDelete}
                onChange={(e) => setConfirmarDelete(e.target.value)}
                className="border-2 border-red-600 placeholder:text-red-600 text-red-800 rounded-full px-2 md:w-full"/>
            </div>
        <div className="flex justify-around">
            <button
            type="submit"
            className="bg-red-600 text-white p-2">Confirmar</button>
            <button
            onClick={() => setTelaDeletar(!telaDeletar)}
            className="bg-green-700 text-white p-2">Cancelar</button>
        </div>
        </form>}
        
        </>
    )
    }
