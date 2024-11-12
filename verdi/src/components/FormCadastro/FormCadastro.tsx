"use client";
import { useState } from "react";

export default function FormCadastro() {
  const [nome, setNome] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

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
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col">
          <input
            type="text"
            id="nome"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            id="cpf"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="senha"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </fieldset>
        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
}
