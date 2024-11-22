"use client"
import { useState } from "react";

export default function FormEditarPlano(props: {idUsuario:number , plano:string}) {
  
  const [plano, setPlano] = useState<string>(props.plano);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const novoPlano = plano;
    if (plano) {
      try {
        const responsePlano = await fetch(`http://localhost:8080/pessoas/${props.idUsuario}/trocarPlano`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ novoPlano }),
        });
  
        if (responsePlano.ok) {
        } else {
          const errorMessage = await responsePlano.text();
          alert(`Erro ao alterar o plano: ${errorMessage}`);
        }
      } catch (error) {
        alert(`Erro ao conectar ao servidor. ${error}`);
      }
    }
  };

  return (
    <section className="flex flex-col gap-5 bg-white p-5 sm:p-8 rounded-2xl w-full">
      <h1 className="text-black text-left text-2xl sm:text-3xl">Alterar Plano</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
        <fieldset className="flex flex-col gap-5">
          <div className="flex flex-col">
            <select
              name="planos"
              id="planos"
              value={plano}
              onChange={(e) => setPlano(e.target.value)}
              className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                          focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
              required
            >
              <option value="" disabled>
                Selecione o Plano
              </option>
              <option value="Plano Verdí">Plano Verdí</option>
              <option value="Plano Super Verdí">Plano Super Verdí</option>
            </select>
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 duration-300 text-white p-2 sm:text-xl"
        >
          Salvar Alterações
        </button>
      </form>
    </section>
  );
}
