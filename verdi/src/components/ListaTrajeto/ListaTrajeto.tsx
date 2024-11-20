"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { TipoTrajeto } from "@/types/tipoData";
import ping from "@/img/ping.png"

export default function ListaTrajeto(props: { id: number }) {
  const pessoa_id = props.id;

  const [trajetos, setTrajetos] = useState<TipoTrajeto[]>([]);

  useEffect(() => {
    const fetchTrajetos = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/trajetos/usuario/${pessoa_id}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setTrajetos(data);
        } else {
          const errorData = await response.json();
          console.error("Erro ao carregar o trajeto:", errorData);
        }
      } catch (error) {
        console.error("Falha no carregamento", error);
      }
    };
    fetchTrajetos();
  }, [pessoa_id]);

  return (
    <div className="flex flex-col gap-4 mx-2 w-full items-center">
      {trajetos.map((info) => (
        <div key={info.id} className="border-2 border-green-700 flex flex-col items-center justify-between p-2 gap-5
                                      sm:w-2/3 lg:flex-row">
          <div>
          <p className="text-creme text-xs md:text-base xl:text-lg">Início: {info.origem}</p>
          <Image src={ping} alt="Ping" className="h-10 w-auto"/>
          <p className="text-creme text-xs md:text-base xl:text-lg">Destino: {info.destino}</p>
          </div>
          <div className="bg-green-700 h-2"></div>
          <div className="text-center">
          <p className="text-creme text-xs md:text-base xl:text-lg">Distância: {info.distanciaKm} Km</p>
          <p className="text-creme text-xs md:text-base xl:text-lg">Meio de transporte: {info.meioDeTransporte}</p>
          <p className="text-creme text-xs md:text-base xl:text-lg">Pontos conquistados: {info.pontos}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
