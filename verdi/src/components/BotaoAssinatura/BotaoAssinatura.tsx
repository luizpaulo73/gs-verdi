"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from '@/img/logo.png';
import Link from 'next/link';

export default function BotaoAssinatura(props: { planoAtivo: boolean }) {
  const { planoAtivo } = props;

  const [plano, setPlano] = useState<boolean>(planoAtivo);

  useEffect(() => {
    setPlano(planoAtivo);
  }, [planoAtivo]);

  return (
    <div className="flex items-center justify-center gap-4">
      {plano ? (
        <div className="flex items-center justify-center gap-1">
          <h2 className="text-green-400 text-xl">Super</h2>
          <Image src={logo} alt="" className="h-6 w-auto" />
        </div>
      ) : (
        <div className="flex items-center justify-center gap-4">
          <Image src={logo} alt="" className="h-6 w-auto" />
          <Link className="bg-green-700 text-creme text-xl p-1 mt-2" href={"/conta/editar"}>Vire Pro</Link>
        </div>
      )}
    </div>
  );
}
