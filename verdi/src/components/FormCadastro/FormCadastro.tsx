"use client"
import { useState } from "react";

export default function FormCadastro() {

    const [nome, setNome] = useState<string>("");
    const [cpf , setCpf] = useState<string>("")
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:5000/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
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
    }

  return (
    <section>
        <form onSubmit={handleSubmit}>
            <fieldset className="flex flex-col">
                <input type="text" id="nome" placeholder="Nome Completo" value={nome}/>
                <input type="text" id="cpf" placeholder="CPF" value={cpf}/>
                <input type="text" id="email" placeholder="E-mail" value={email}/>
                <input type="text" id="senha" placeholder="Senha" value={senha}/>
            </fieldset>
            <button type="submit">botao</button>
        </form>
    </section>
  )
}