"use client"
import { useState } from "react";

export default function IniciarTrajeto() {

  const [origem, setOrigem] = useState<string>("")
  const [destino, setDestino] = useState<string>("")
  const [distancia, setDistancia] = useState<string>("")
  const [meioDeTransporte, setMeioDeTransporte] = useState<string>("")

  const iniciarTrajeto = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    

    try {
      const response = await fetch(`http://localhost:8080/trajeto/registrar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ origem, destino, meioDeTransporte }),
      });
      // if (response.ok) {
      //   console.log("Usuário Cadastrado com sucesso");
      //   setNome("");
      //   setCpf("");
      //   setEmail("");
      //   setSenha("");
      //   setPlanos("");
      // } else {
      //   console.error("Erro ao cadastrar");
      // }
    } catch (error) {
      console.error("Falha no carregamento", error);
    }
  };



  return (
    <div>
      <form onSubmit={iniciarTrajeto}>
        <input 
        type="text"
        placeholder="inicio"
        value={origem}
        onChange={(e) => setOrigem(e.target.value)}
        />
        <p className="text-creme">{distancia}</p>
        <select
        name="meioDeTransporte"
        id="meioDeTransporte"
        value={meioDeTransporte}
        onChange={(e) => setMeioDeTransporte(e.target.value)}
        
        >
          <optgroup>
            <option value="andar">À pé</option>
            <option value="bicicleta">Bicicleta</option>
            <option value="metroTrem">Metro / Trem</option>
            <option value="onibus">Onibus</option>
          </optgroup>
        </select>
        <input
        type="text"
        placeholder="fim"
        value={destino}
        onChange={(e) => setDestino(e.target.value)}
        />
        <button type="submit" className="text-creme">Iniciar</button>
      </form>
    </div>
  )
}
