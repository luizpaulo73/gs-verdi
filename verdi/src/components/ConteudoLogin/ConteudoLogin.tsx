"use client";
import { useState } from "react";
import Link from "next/link";

export default function ConteudoLogin() {

  const emailRegex : RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const senhaRegex : RegExp = /^.{8,}$/;

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const [validacaoEmail, setValidacaoEmail] = useState<boolean>(true)
  const [validacaoSenha, setValidacaoSenha] = useState<boolean>(true)

  const validarEmail = () => setValidacaoEmail(emailRegex.test(email));
  const validarSenha = () => setValidacaoSenha(senhaRegex.test(senha));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/pessoas/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      if (response.ok) {
        console.log("Usuário conectado com sucesso");
        setEmail("");
        setSenha("");
      } else {
        console.error("Erro ao fazer o login");
      }
    } catch (error) {
      console.error("Falha no carregamento", error);
    }
  };

  return (
    <section className="flex flex-col items-center gap-5">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
        <fieldset className="flex flex-col">
          <div className="flex flex-col gap-5">
            <div>
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validarEmail}
            className="bg-green-700 rounded-full px-2 w-64 placeholder:text-creme sm:placeholder:text-xl sm:p-2 sm:w-full text-creme"
          />
          {!validacaoEmail ? <p className="text-red-600">Email inválido</p> : <></>}
          </div>  
          <div>
          <input
            type="password"
            id="senha"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
            onBlur={validarSenha}
            className="bg-green-700 rounded-full px-2 w-64 placeholder:text-creme sm:placeholder:text-xl sm:p-2 text-creme"
          />
          {!validacaoSenha ? <p className="text-red-600">Senha inválida</p> : <></>}
          </div>
          </div>
        </fieldset>
        <button type="submit" className="bg-green-700 text-creme p-2 sm:text-xl">Entrar</button>
      </form>
      <div className="text-center">
      <p className="text-creme sm:text-xl">Nâo possui uma conta?</p>
      <Link href={"/cadastro"} className="text-green-300 underline hover:text-creme duration-500 sm:text-xl">Cadastre-se</Link>
      </div>
    </section>
  )
}