"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function ConteudoLogin() {

  const emailRegex : RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const senhaRegex : RegExp = /^.{8,}$/;

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const [validacaoEmail, setValidacaoEmail] = useState<boolean>(true)
  const [validacaoSenha, setValidacaoSenha] = useState<boolean>(true)

  const validarEmail = () => setValidacaoEmail(emailRegex.test(email));
  const validarSenha = () => setValidacaoSenha(senhaRegex.test(senha));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const loginData = new FormData(e.currentTarget);
  
    const email = loginData.get("email") as string;
    const password = loginData.get("password") as string;
  
    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/conta",
    });
  }
  return (
    <section className="flex flex-col items-center gap-5 bg-white rounded-2xl p-5 sm:p-8 min-w-[300px]">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
        <fieldset className="flex flex-col">
          <div className="flex flex-col gap-5">
            <div>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validarEmail}
            className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                      focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
          />
          {!validacaoEmail ? <p className="text-red-600">Email inválido</p> : <></>}
          </div>  
          <div>
          <input
            name="password"
            type="password"
            id="senha"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
            onBlur={validarSenha}
            className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                      focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
          />
          {!validacaoSenha ? <p className="text-red-600">Senha inválida</p> : <></>}
          </div>
          </div>
        </fieldset>
        <button type="submit" className="bg-green-700 text-white p-2 sm:text-xl">Entrar</button>
      </form>
      <div className="text-center">
      <p className="text-black sm:text-xl">Nâo possui uma conta?</p>
      <Link href={"/cadastro"} className="text-emerald-500 underline hover:text-emerald-700 duration-500 sm:text-xl">Cadastre-se</Link>
      </div>
    </section>
  )
}