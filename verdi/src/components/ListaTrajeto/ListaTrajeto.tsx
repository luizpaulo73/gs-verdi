"use client"

import { useEffect , useState } from "react";

import { TipoTrajeto } from "@/types/tipoData";

export default function ListaTrajeto(props: {id:number}) {

    const pessoa_id = props.id;

    const [trajetos, setTrajetos] = useState<TipoTrajeto[]>([]);

    useEffect(() => {
      const fetchTrajetos = async () => {
        try {
          const response = await fetch(`http://localhost:8080/trajetos/usuario/${pessoa_id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
  
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
  
      // Chamar a função assíncrona
      fetchTrajetos();
    }, [pessoa_id]);    
    

  return (
    <div>
        {trajetos.map((info) => (
            <>
            <p key={info.id}></p>
            <p>{info.destino}</p>
            <p>{info.distanciaKm}</p>
            <p>{info.meioDeTransporte}</p>
            <p>{info.origem}</p>
            <p>{info.pontos}</p>
            </>
        ))}
    </div>
  )
}
