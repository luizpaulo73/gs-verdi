"use client";
import { useState } from 'react'

export default function Trajeto(props: {id:number}) {
  
  const [origem, setOrigem] = useState<string>("");
  const [destino, setDestino] = useState<string>("");
  const [distancia, setDistancia] = useState<string>("");
  const [pontos, setPontos] = useState<string>("");
  const [meioDeTransporte, setMeioDeTransporte] = useState<string>("");

  const iniciarTrajeto = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pessoa_id = props.id;
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
        setDistancia(`${Math.round(data.distanciaKm * 100) / 100} Km`);
        setPontos(`${Math.floor(data.distanciaKm)} Pontos conquistados`)
      } else {
        const errorData = await response.json();
        console.error("Erro ao registrar o trajeto:", errorData);
      }
    } catch (error) {
      console.error("Falha no carregamento", error);
    }
  };

  return (
    <section className='md:w-screen flex flex-col items-center'>
      <form onSubmit={iniciarTrajeto} className='flex flex-col items-center gap-6 container sm:w-1/2'>
        <input
          type="text"
          placeholder="Início"
          value={origem}
          onChange={(e) => setOrigem(e.target.value)}
          className='w-72 bg-green-700 rounded-full px-2 py-1 text-creme placeholder:text-creme md:w-4/5 lg:text-2xl'
        />
        <select
          name="meioDeTransporte"
          id="meioDeTransporte"
          value={meioDeTransporte}
          onChange={(e) => setMeioDeTransporte(e.target.value)}
          className='w-72 bg-green-700 rounded-full px-2 py-1 text-creme placeholder:text-creme md:w-4/5 lg:text-2xl'
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
          className='w-72 bg-green-700 rounded-full px-2 py-1 text-creme placeholder:text-creme md:w-4/5 lg:text-2xl'
        />
        <button type="submit" className="text-creme bg-green-700 p-2 lg:text-2xl  ">
          Iniciar
        </button>
      </form>
      <div className='mt-5 sm:w-1/3'>
        {<p className="text-creme text-center lg:text-2xl xl:text-3xl">{distancia}</p>}
        {<p className='text-creme text-center lg:text-2xl xl:text-3xl'>{pontos}</p>}
      </div>
    </section>
  );
}
