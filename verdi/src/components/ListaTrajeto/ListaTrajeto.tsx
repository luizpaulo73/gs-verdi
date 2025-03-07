"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { TipoTrajeto } from "@/types/tipoData";
import ping from "@/img/ping.png";
import Mapa from "../Mapa/Mapa";

export default function ListaTrajeto(props: { id: number }) {
  const pessoa_id: number = props.id;

  const [trajetos, setTrajetos] = useState<TipoTrajeto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [expandidoId, setExpandidoId] = useState<number | null>(null);

  useEffect(() => {
    const fetchTrajetos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://python-verdi-deploy.vercel.app/trajetos/usuario/${pessoa_id}`,
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
      } finally {
        setLoading(false);
      }
    };
    fetchTrajetos();
  }, [pessoa_id]);

  const toggleExpandir = (id: number) => {
    if (expandidoId === id) {
      setExpandidoId(null);
    } else {
      setExpandidoId(id);
    }
  };

  return (
    <div className="flex flex-col gap-4 mx-2 w-full items-center">
      {loading ? (
        <p className="text-creme text-xl">Carregando...</p>
      ) : trajetos.length > 0 ? (
        trajetos.map((info) => (
          <div
            key={info.id}
            className="border-2 border-green-700 flex flex-col items-center justify-between p-2 gap-5 sm:w-2/3"
          >
            <div className="flex justify-between w-full">
              <div>
                <p className="text-creme text-xs md:text-base xl:text-lg">
                  Início: {info.origem}
                </p>
                <div className="flex">
                  <Image src={ping} alt="Ping" className="h-10 w-auto" />
                  <button
                    onClick={() => toggleExpandir(info.id)}
                    className="ml-2 text-green-500 hover:text-green-300 duration-300"
                  >
                    {expandidoId === info.id ? "Fechar" : "Expandir"}
                  </button>
                </div>
                <p className="text-creme text-xs md:text-base xl:text-lg">
                  Destino: {info.destino}
                </p>
              </div>
              <div className="bg-green-700 h-2"></div>
              <div className="text-center">
                <p className="text-creme text-xs md:text-base xl:text-lg">
                  Distância: {info.distanciaKm} Km
                </p>
                <p className="text-creme text-xs md:text-base xl:text-lg">
                  Meio de transporte: {info.meioDeTransporte}
                </p>
                <p className="text-creme text-xs md:text-base xl:text-lg">
                  Pontos conquistados: {info.pontos}
                </p>
                <p className="text-creme text-xs md:text-base xl:text-lg">
                  Data Trajeto: {info.data.slice(0, 8)}
                </p>
              </div>
            </div>
            {expandidoId === info.id && (
              <div className="w-full h-[400px]">
                <Mapa inicio={info.origem} destino={info.destino} />
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-creme text-xl">Nenhum trajeto encontrado</p>
      )}
    </div>
  );
}
