import React from "react";

export default function BarraProgresso(props:{ pontos:number, pontosNecessarios:number }) {

  const progressPercentage:number = Math.min((props.pontos / props.pontosNecessarios) * 100, 100);

  return (
    <>
    <div className="w-5/6 bg-white h-2 flex mx-auto">
      <div
        className="bg-green-700 h-2"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
    <p className="text-creme text-center">
        {props.pontos} / {props.pontosNecessarios} pontos
      </p>
    </>
  );
};
