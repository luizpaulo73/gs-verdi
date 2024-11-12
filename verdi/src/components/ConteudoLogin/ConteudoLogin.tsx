"use client";
import { useState } from "react";

export default function ConteudoLogin() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/pessoas/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      if (response.ok) {
        console.log("Usuário Cadastrado com sucesso");
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
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col">
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="senha"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </fieldset>
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  )
}