"use client";
import { useState } from "react";

export default function Calculo() {
  const [distancia, setDistancia] = useState<number>(0);
  const [consumo, setConsumo] = useState<number>(0);
  const [litrosConsumidos, setLitrosConsumidos] = useState<number>(0);
  const [emissao, setEmissao] = useState<number>(0);

  const calcularCarbono = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (consumo > 0) {
      setLitrosConsumidos(distancia/consumo)  
      setEmissao(litrosConsumidos * 2.31);
      
    } else {
      alert("O consumo deve ser maior que zero.");
    }
  };

  return (
    <section className="min-h-[50vh] md:flex md:flex-col md:items-center md:justify-around w-full">
      <div className="md:flex items-center justify-between">
      <div className="md:w-2/6 lg:w-5/12">
        <h1 className="text-creme text-xl text-center md:text-3xl lg:text-4xl">Calcule o seu consumo mensal de carbono</h1>
      </div>
      <div className="md:w-2/6 lg:w-5/12">
        <form onSubmit={calcularCarbono} className="flex flex-col items-center gap-5 md:w-full">
          <fieldset className="flex flex-col items-center gap-5 md:mx-auto">
            <div className="flex flex-col items-center">
            <label className="text-creme text-sm lg:text-lg">Distância percorrida (km):</label>
            <input
              type="number"
              value={distancia}
              onChange={(e) => setDistancia(Number(e.target.value))}
              placeholder="Quantidade de Km percorridos por mês"
              className="bg-green-700 rounded-full px-2 text-creme w-72 md:w-full lg:text-xl"
            />
            </div>
            <div className="flex flex-col items-center">
            <label className="text-creme text-sm lg:text-lg">Consumo (km/l):</label>
            <input
              type="number"
              value={consumo}
              onChange={(e) => setConsumo(Number(e.target.value))}
              placeholder="Consumo do veículo Km/l"
              className="bg-green-700 rounded-full px-2 text-creme w-72 md:w-full lg:text-xl"
            />
            </div>
          </fieldset>
          <div className="w-full flex justify-center">
          <button type="submit" className="bg-green-700 text-creme p-2 md:flex md:justify-center lg:text-xl">Calcular</button>
          </div>
        </form>
      </div>
      </div>
      {emissao !== 0 && (
            <div className="w-72 md:w-2/3 mx-auto">
            <p className="text-creme px-2 text-xs md:text-lg lg:text-xl xl:text-2xl md:text-justify mt-5">Você poderia economizar R${3.79*litrosConsumidos} por mês em combustível e ainda resgatar {distancia} pontos ao optar pelo transporte público ou por alternativas sustentáveis.</p>
            <p className="text-creme px-2 text-xs md:text-lg lg:text-xl xl:text-2xl md:text-justify mb-5">Além de poupar dinheiro, você  pode trocar seus pontos por recompensas exclusivas e ainda contribui para um futuro mais verde e saudável!</p>
            </div>
        )}
    </section>
  );
}