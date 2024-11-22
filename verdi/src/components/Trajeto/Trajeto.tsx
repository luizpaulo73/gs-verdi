"use client";
import { useState } from "react";
import BotaoVoltar from "../BotaoVoltar/BotaoVoltar";
import Mapa from "../Mapa/Mapa";

export default function Trajeto(props: { id: number }) {
  const [origem, setOrigem] = useState<string>("");
  const [destino, setDestino] = useState<string>("");
  const [distancia, setDistancia] = useState<string>("");
  const [pontos, setPontos] = useState<string>("");
  const [meioDeTransporte, setMeioDeTransporte] = useState<string>("");
  const [mostrarMapa, setMostrarMapa] = useState<boolean>(false);

  const iniciarTrajeto = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pessoa_id: number = props.id;

    if (!pessoa_id || !origem || !destino || !meioDeTransporte) {
      console.error("Todos os campos são obrigatórios");
      return;
    }

    try {
      const response = await fetch(
        `https://python-verdi-deploy.vercel.app/registrar`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pessoa_id,
            origem,
            destino,
            meioDeTransporte,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Trajeto registrado com sucesso:", data);

        setMostrarMapa(true);
        setDistancia(`${Math.round(data.distanciaKm * 100) / 100} Km`);
        setPontos(`${data.pontosGanhos} Pontos conquistados`);
      } else {
        const errorData = await response.json();
        console.error("Erro ao registrar o trajeto:", errorData);
      }
    } catch (error) {
      console.error("Falha no carregamento", error);
    }
  };

  return (
    <section className="flex flex-col lg:flex-row lg:justify-around lg:items-center w-screen">
      <div className="md:w-screen lg:w-[40vw] flex flex-col items-center">
        <div className="flex justify-between w-full md:w-2/5 lg:w-full mb-5 md:mb-10">
          <h1 className="text-creme text-2xl md:text-3xl">Iniciar Trajeto</h1>
          <BotaoVoltar />
        </div>
        <form
          onSubmit={iniciarTrajeto}
          className="flex flex-col items-center gap-6 container w-11/12 md:w-1/2 lg:w-full bg-white p-5 sm:p-8 rounded-2xl"
        >
          <input
            type="text"
            placeholder="Início"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
            className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                        focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
          />
          <select
            name="meioDeTransporte"
            id="meioDeTransporte"
            value={meioDeTransporte}
            onChange={(e) => setMeioDeTransporte(e.target.value)}
            className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                        focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
          >
            <option value="" disabled>
              Meio de Transporte
            </option>
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
            className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                        focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
          />
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 duration-300 p-2 lg:text-2xl"
          >
            Iniciar
          </button>
        </form>
        <div className="mt-5 sm:w-1/3">
          {
            <p className="text-creme text-center lg:text-2xl xl:text-3xl">
              {distancia}
            </p>
          }
          {
            <p className="text-creme text-center lg:text-2xl xl:text-3xl">
              {pontos}
            </p>
          }
        </div>
      </div>
      {mostrarMapa === true ? (
        <div className="w-[90vw] h-[500px] lg:w-[40vw] mx-auto lg:m-0">
          <Mapa inicio={origem} destino={destino} />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
