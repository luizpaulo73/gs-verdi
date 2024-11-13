"use client";
import { useState } from "react";

export default function FormCadastro() {
  const emailRegex : RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const senhaRegex : RegExp = /^.{8,}$/;

  const [nome, setNome] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const [validacaoNome , setValidacaoNome] = useState<boolean>(true)
  const [validacaoCpf , setValidacaoCpf] = useState<boolean>(true)
  const [validacaoEmail , setValidacaoEmail] = useState<boolean>(true)
  const [validacaoSenha , setValidacaoSenha] = useState<boolean>(true)

  const validarNome = () => {
    nome.length >= 3 ? setValidacaoNome(true) : setValidacaoNome(false)
  }

  const validarCpf = () => {
    cpf.length === 11 ? setValidacaoCpf(true) : setValidacaoCpf(false)
  }

  const validarEmail = () => {
    emailRegex.test(email) ? setValidacaoEmail(true) : setValidacaoEmail(false)
  }

  const validarSenha = () => {
    senhaRegex.test(senha) ? setValidacaoSenha(true) : setValidacaoSenha(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/pessoas/cadastro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, cpf, email, senha }),
      });
      if (response.ok) {
        console.log("Usuário Cadastrado com sucesso");
        setNome("");
        setCpf("");
        setEmail("");
        setSenha("");
      } else {
        console.error("Erro ao cadastrar");
      }
    } catch (error) {
      console.error("Falha no carregamento", error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <fieldset className="flex flex-col">
          <div>
          <input
            type="text"
            id="nome"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            onBlur={validarNome}
            className="bg-green-700 rounded-full text-creme w-[95vw] px-2"
          />
          {!validacaoNome ? <p className="text-red-600">Nome precisa ter no mínimo 3 caracteres</p> : <></>}
          </div>
          <div>
          <input
            type="text"
            id="cpf"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            onBlur={validarCpf}
            className="bg-green-700 rounded-full text-creme w-[95vw] px-2"
          />
          {!validacaoCpf ? <p className="text-red-600">CPF inválido</p> : <></>}
          </div>
          <div>
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validarEmail}
            className="bg-green-700 rounded-full text-creme w-[95vw] px-2"
          />
          {!validacaoEmail ? <p className="text-red-600">Email inválido</p> : <></>}
          </div>
          <div>
          <input
            type="password"
            id="senha"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            onBlur={validarSenha}
            className="bg-green-700 rounded-full text-creme w-[95vw] px-2"
          />
          {!validacaoSenha ? <p className="text-red-600">Senha inválida</p> : <></>}
          </div>
        </fieldset>
        <button type="submit" className="bg-green-700 text-creme p-2">Cadastrar</button>
      </form>
    </section>
  );
}
