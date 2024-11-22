"use client";
import { useState } from "react";
import Link from "next/link";

export default function Calculo() {
  const [distancia, setDistancia] = useState<string>("");
  const [consumo, setConsumo] = useState<string>("");
  const [litrosConsumidos, setLitrosConsumidos] = useState<number>(0);
  const [emissao, setEmissao] = useState<number>(0);

  const calcularCarbono = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const distanciaNum = parseFloat(distancia) || 0;
    const consumoNum = parseFloat(consumo) || 0;

    if (consumoNum > 0) {
      const litros = distanciaNum / consumoNum;
      setLitrosConsumidos(litros);
      setEmissao(litros * 2.31);
    } else {
      alert("O consumo deve ser maior que zero.");
    }
  };

  return (
    <section className="min-h-[50vh] md:flex md:flex-col md:items-center md:justify-around w-[90vw] lg:w-full">
      <div className="`w-full md:flex items-center justify-between">
        <div className="md:w-2/6 lg:w-5/12 text-center">
          <h1 className="text-creme text-xl text-center md:text-3xl lg:text-4xl mb-5">
            Calcule o seu consumo mensal de carbono
          </h1>
          <Link href={"http://localhost:8501/"} className="underline text-center text-xl text-green-400 hover:text-green-600 duration-300">Teste nossa calculadora com IA</Link>
        </div>
        <div className="md:w-2/6 lg:w-5/12">
          <form onSubmit={calcularCarbono} className="flex flex-col items-center gap-5 md:w-full bg-white p-5 rounded-2xl">
            <fieldset className="flex flex-col items-center gap-5 md:mx-auto">
              <div className="flex flex-col items-center">
                <label className="text-black text-sm lg:text-lg">Distância percorrida (km):</label>
                <input
                  type="text"
                  value={distancia}
                  onChange={(e) => setDistancia(e.target.value)}
                  className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                              focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
                />
              </div>
              <div className="flex flex-col items-center">
                <label className="text-black text-sm lg:text-lg">Consumo (km/l):</label>
                <input
                  type="text"
                  value={consumo}
                  onChange={(e) => setConsumo(e.target.value)}
                  className="bg-white px-2 w-64 placeholder:text-black sm:placeholder:text-xl sm:p-2 sm:w-full text-black
                              focus:outline-none focus:shadow-none border-2 border-b-black border-transparent"
                />
              </div>
            </fieldset>
            <div className="w-full flex justify-center">
              <button type="submit" className="bg-green-700 hover:bg-green-800 duration-300 text-white p-2 md:flex md:justify-center lg:text-xl">
                Calcular
              </button>
            </div>
          </form>
        </div>
      </div>
      {litrosConsumidos > 0 && (
        <div className="w-72 md:w-2/3 mx-auto">
          <p className="text-creme px-2 text-xs md:text-lg lg:text-xl xl:text-2xl md:text-justify mt-5">
            Você poderia economizar R${(3.79 * litrosConsumidos).toFixed(2)} por mês em combustível e ainda resgatar{" "}
            {parseFloat(distancia)} pontos ao optar pelo transporte público ou por alternativas sustentáveis.
          </p>
          <p className="text-creme px-2 text-xs md:text-lg lg:text-xl xl:text-2xl md:text-justify mb-5">
            Além de poupar dinheiro, você pode trocar seus pontos por recompensas exclusivas e ainda contribui para um
            futuro mais verde e saudável!
          </p>
        </div>
      )}
    </section>
  );
}
