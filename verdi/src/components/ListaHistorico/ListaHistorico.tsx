"use client"
import { useState , useEffect } from "react";
import { TipoRecompensas } from "@/types/tipoData";

export default function ListaHistorico(props: {idUsuario:number}) {

    const idUsuario = props.idUsuario

    const [resgates, setResgates] = useState<TipoRecompensas[]>([]);

    useEffect(() => {
      const fetchTrajetos = async () => {
        try {
          const response = await fetch(
            `http://localhost:5000/exibir/resgates/${idUsuario}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );
  
          if (response.ok) {
            const data = await response.json();
            setResgates(data.resgates);
          } else {
            const errorData = await response.json();
            console.error("Erro ao carregar o trajeto:", errorData);
          }
        } catch (error) {
          console.error("Falha no carregamento", error);
        }
      };  
      fetchTrajetos();
    }, [idUsuario]);
  
      return (
          <div className="flex flex-col gap-4 mx-2 w-full items-center">
            {resgates.map((info) => (
              <div key={info.id} className="border-2 border-green-700 flex flex-col items-center justify-between p-2 gap-5
                                            sm:w-2/3 lg:flex-row">
                <div>
                <p className="text-creme text-xs md:text-base xl:text-lg">Recompensa: {info.descricao}</p>
                <p className="text-creme text-xs md:text-base xl:text-lg">Data do resgate: {info.data_resgate}</p>
                </div>
              </div>
            ))}
          </div>
        );
}
