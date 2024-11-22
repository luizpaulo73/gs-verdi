"use client";
import { useState } from "react";

export default function FormEditarSenha(props: { idUsuario: number }) {
  const senhaRegex: RegExp = /^.{8,}$/;

  const [senhaAtual, setSenhaAtual] = useState<string>("");
  const [novaSenha, setNovaSenha] = useState<string>("");
  const [validacaoSenha, setValidacaoSenha] = useState<boolean>(true);

  const validarSenha = () => setValidacaoSenha(senhaRegex.test(novaSenha));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validarSenha();
    if (validacaoSenha) {
      try {
        const response = await fetch(
          `http://localhost:8080/pessoas/${props.idUsuario}/alterarSenha`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ senhaAtual, novaSenha }),
          }
        );

        if (response.ok) {
          alert("Senha alterada com sucesso!");
        } else {
          const errorMessage = await response.text();
          alert(`Erro ao alterar a senha: ${errorMessage}`);
        }
      } catch (error) {
        alert(`Erro ao conectar ao servidor. ${error}`);
      }
    }
  };

  return (
    <section className="flex flex-col gap-5 w-full bg-white p-5 sm:p-8 rounded-2xl">
      <h1 className="text-black text-left text-2xl sm:text-3xl">Alterar Senha</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
        <fieldset className="flex flex-col gap-5">
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Senha Atual"
              value={senhaAtual}
              onChange={(e) => setSenhaAtual(e.target.value)}
              className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                          focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Nova Senha"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              onBlur={validarSenha}
              className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                          focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
            />
            {!validacaoSenha && (
              <p className="text-red-600">A senha deve ter pelo menos 8 caracteres</p>
            )}
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-green-700 text-white p-2 sm:text-xl"
        >
          Salvar Alterações
        </button>
      </form>
    </section>
  );
}
