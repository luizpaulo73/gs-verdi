"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import estiloMapa from "@/data/estiloMapa.json";

export default function Mapa(props: {inicio: string , destino: string}) {
  const mapRef = useRef<HTMLDivElement>(null);

  const [mapa, setMapa] = useState(null);
  const [direcoes, setDirecoes] = useState(null);
  const inicio = props.inicio
  const destino = props.destino

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      await loader.load();

      const position = {
        lat: -12.0464,
        lng: -77.0283,
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

  useEffect(() => {
    const calcularDirecao = async () => {
      if (!inicio || !destino || !mapa) return;

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(mapa);

      const request = {
        origin: inicio,
        destination: destino,
        travelMode: google.maps.TravelMode.WALKING,
      };

      try {
        const response = await directionsService.route(request);
        if (response.status === "OK") {
          setDirecoes(response);
          directionsRenderer.setDirections(response);
        }
      } catch (error) {
        console.error("Erro ao calcular direções:", error);
      }
    };

    calcularDirecao();
  }, [inicio, destino, mapa]);

  return <div className="w-full h-full mx-auto rounded-2xl" ref={mapRef} />;
}
