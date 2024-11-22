"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import estiloMapa from "@/data/estiloMapa.json";

export default function Mapa(props: { inicio: string; destino: string }) {
  const mapRef = useRef<HTMLDivElement>(null);

  const [mapa, setMapa] = useState<google.maps.Map | null>(null);
  const [infoRota, setInfoRota] = useState<{
    distancia: string;
    tempo: string;
  } | null>(null);

  const inicio = props.inicio;
  const destino = props.destino;

  // Inicializa o mapa
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      await loader.load();

      const position = {
        lat: -23.5640843,
        lng: -46.6523865,
      };

      const mapOptions = {
        center: position,
        zoom: 12,
        mapTypeId: "roadmap",
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        styles: estiloMapa,
      };

      const mapInstance = new google.maps.Map(
        mapRef.current as HTMLDivElement,
        mapOptions
      );

      setMapa(mapInstance);
    };

    initMap();
  }, []);

  // Calcula a rota e exibe no mapa
  useEffect(() => {
    const calcularDirecao = async () => {
      if (!inicio || !destino || !mapa) return;

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({
        map: mapa,
        polylineOptions: {
          strokeColor: "#00FF00", // Linha verde
          strokeOpacity: 1.0,
          strokeWeight: 4,
        },
      });

      const request = {
        origin: inicio,
        destination: destino,
        travelMode: google.maps.TravelMode.BICYCLING, // Modo bicicleta
      };

      try {
        const response = await directionsService.route(request);
        if (response.status === "OK") {
          directionsRenderer.setDirections(response);

          // Atualiza as informações da rota
          const distancia = response.routes[0].legs[0].distance.text;
          const tempo = response.routes[0].legs[0].duration.text;
          setInfoRota({ distancia, tempo });
        }
      } catch (error) {
        console.error("Erro ao calcular direções:", error);
      }
    };

    calcularDirecao();
  }, [inicio, destino, mapa]);

  return (
    <div className="relative w-full h-full">
      {/* Mapa */}
      <div
        className="w-full h-full mx-auto rounded-2xl shadow-md"
        ref={mapRef}
      />

      {/* Informações da rota no canto inferior esquerdo */}
      {infoRota && (
        <div
          className="absolute bottom-4 left-4 bg-green-900 text-white p-4 rounded-lg shadow-lg"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
            maxWidth: "250px",
          }}
        >
          <p style={{ margin: 0 }}>
            <b>Distância:</b> {infoRota.distancia}
          </p>
          <p style={{ margin: 0 }}>
            <b>Tempo:</b> {infoRota.tempo}
          </p>
        </div>
      )}
    </div>
  );
}
