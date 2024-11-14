"use client";
import { useState } from "react";

export default function IniciarTrajeto() {
  const [origem, setOrigem] = useState<string>("");
  const [destino, setDestino] = useState<string>("");
  const [distancia, setDistancia] = useState<string>("");
  const [meioDeTransporte, setMeioDeTransporte] = useState<string>("");

  const iniciarTrajeto = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pessoa_id = 37; // Substitua por um valor dinâmico se necessário
    const meioDeTransporte = "metro";

    console.log("Origem:", origem);
    console.log("Destino:", destino);
    console.log("Meio de Transporte:", meioDeTransporte);
    console.log("Pessoa ID:", pessoa_id);

    if (!pessoa_id || !origem || !destino || !meioDeTransporte) {
      console.error("Todos os campos são obrigatórios");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/registrar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pessoa_id,
          origem,
          destino,
          meioDeTransporte,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Trajeto registrado com sucesso:", data);
        setDistancia(`${data.distanciaKm} km`);
      } else {
        const errorData = await response.json();
        console.error("Erro ao registrar o trajeto:", errorData);
      }
    } catch (error) {
      console.error("Falha no carregamento", error);
    }
  };

  return (
    <div>
      <form onSubmit={iniciarTrajeto}>
        <input
          type="text"
          placeholder="Início"
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
          <option value="andar">À pé</option>
          <option value="bicicleta">Bicicleta</option>
          <option value="metroTrem">Metrô / Trem</option>
          <option value="onibus">Ônibus</option>
        </select>
        <input
          type="text"
          placeholder="Fim"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
        />
        <button type="submit" className="text-creme">
          Iniciar
        </button>
      </form>
    </div>
  );
}
