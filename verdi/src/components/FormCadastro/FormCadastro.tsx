  "use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormCadastro() {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const senhaRegex: RegExp = /^.{8,}$/;
  const navigate = useRouter();

  const [nome, setNome] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [planos, setPlanos] = useState<string>("");

  const [validacaoNome, setValidacaoNome] = useState<boolean>(true);
  const [validacaoCpf, setValidacaoCpf] = useState<boolean>(true);
  const [validacaoEmail, setValidacaoEmail] = useState<boolean>(true);
  const [validacaoSenha, setValidacaoSenha] = useState<boolean>(true);

  const validarNome = () => setValidacaoNome(nome.length >= 3);
  const validarCpf = () => setValidacaoCpf(cpf.length === 11);
  const validarEmail = () => setValidacaoEmail(emailRegex.test(email));
  const validarSenha = () => setValidacaoSenha(senhaRegex.test(senha));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const requestBody = { nome, cpf, email, senha, planos };

      const response = await fetch(`http://localhost:8080/pessoas/cadastro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log("Usuário cadastrado com sucesso");
        setNome("");
        setCpf("");
        setEmail("");
        setSenha("");
        setPlanos("");
        navigate.push("/login")
      } else {
        const errorMessage = await response.text();
        console.error("Erro ao cadastrar:", errorMessage);
      }
    } catch (error) {
      console.error("Falha no carregamento", error);
    }
  };

  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-creme text-center text-2xl sm:text-3xl">
        Insira os seus dados
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 bg-white p-5 sm:p-8 rounded-2xl"
      >
        <fieldset className="flex flex-col gap-5">
          <div>
            <input
              type="text"
              id="nome"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              onBlur={validarNome}
              className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                          focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
            />
            {!validacaoNome && <p className="text-red-600">Nome muito curto</p>}
          </div>
          <div>
            <input
              type="text"
              id="cpf"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              onBlur={validarCpf}
              className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                          focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
            />
            {!validacaoCpf && <p className="text-red-600">CPF inválido</p>}
          </div>
          <div>
            <select
              name="planos"
              id="planos"
              value={planos}
              onChange={(e) => setPlanos(e.target.value)}
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
          <div>
            <input
              type="text"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validarEmail}
              className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                          focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
            />
            {!validacaoEmail && <p className="text-red-600">Email inválido</p>}
          </div>
          <div>
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              onBlur={validarSenha}
              className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                          focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
            />
            {!validacaoSenha && <p className="text-red-600">Senha inválida</p>}
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 duration-300 text-white p-2 sm:text-xl"
        >
          Cadastrar
        </button>
      </form>
    </section>
  );
}
