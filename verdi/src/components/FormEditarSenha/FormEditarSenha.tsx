"use client"
import { useState } from "react"

export default function FormEditarSenha(props: {idUsuario:number}) {
  const senhaRegex: RegExp = /^.{8,}$/;

  const [senhaAtual, setSenhaAtual] = useState<string>("")
  const [novaSenha, setNovaSenha] = useState<string>("");
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState<string>("");
  const [validacaoSenha, setValidacaoSenha] = useState<boolean>(true);
  const [validacaoConfirmarSenha, setValidacaoConfirmarSenha] = useState<boolean>(true);

  const validarSenha = () => setValidacaoSenha(senhaRegex.test(novaSenha));
  const validarConfirmarSenha = () => setValidacaoConfirmarSenha(novaSenha === confirmarNovaSenha);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validarSenha();
    validarConfirmarSenha();
    if (validacaoSenha && validacaoConfirmarSenha) {
      try {
        const responseSenha = await fetch(`http://localhost:8080/pessoas/${props.idUsuario}/alterarSenha`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({senhaAtual, novaSenha }),
        });
  
        if (responseSenha.ok) {
          alert('Senha alterada com sucesso!');
        } else {
          const errorMessage = await responseSenha.text();
          alert(`Erro ao alterar a senha: ${errorMessage}`);
        }
      } catch (error) {
        alert(`Erro ao conectar ao servidor. ${error}`);
      }
    }
  };
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-creme text-center text-2xl sm:text-3xl">Alterar Senha</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
        <fieldset className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-creme">Senha Atual:</label>
            <input
              type="password"
              placeholder="Senha"
              value={senhaAtual}
              onChange={(e) => setSenhaAtual(e.target.value)}
                  className="bg-green-700 rounded-full px-2 w-64 placeholder:text-creme sm:placeholder:text-xl sm:p-2 text-creme"
            />
            {!validacaoSenha && (
              <p className="text-red-600">A senha deve ter pelo menos 8 caracteres</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-creme">Nova Senha:</label>
            <input
              type="password"
              placeholder="Senha"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
              onBlur={validarSenha}
              className="bg-green-700 rounded-full px-2 w-64 placeholder:text-creme sm:placeholder:text-xl sm:p-2 text-creme"
            />
            {!validacaoSenha && (
              <p className="text-red-600">A senha deve ter pelo menos 8 caracteres</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-creme">Confirmar Senha:</label>
            <input
              type="password"
              placeholder="Confirmar Senha"
              value={confirmarNovaSenha}
              onChange={(e) => setConfirmarNovaSenha(e.target.value)}
              onBlur={validarConfirmarSenha}
              className="bg-green-700 rounded-full px-2 w-64 placeholder:text-creme sm:placeholder:text-xl sm:p-2 text-creme"
            />
            {!validacaoConfirmarSenha && (
              <p className="text-red-600">As senhas não coincidem</p>
            )}
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-green-700 text-creme p-2 sm:text-xl"
        >
          Salvar Alterações
        </button>
      </form>
    </section>
  )
}
