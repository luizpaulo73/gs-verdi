"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from '@/img/logo.png';

export default function BotaoAssinatura(props: { planoAtivo: boolean; id: number }) {
  const { planoAtivo, id } = props;

  const [plano, setPlano] = useState<boolean>(planoAtivo);
  const [loading, setLoading] = useState<boolean>(false);

  const melhorarPlano = async () => {
    const novoPlano = plano ? 'Plano Verdí' : 'Plano Super Verdí';

    try {
      setLoading(true);

      const response = await fetch(`http://localhost:8080/pessoas/${id}/trocarPlano`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ novoPlano }),
      });

      if (response.ok) {
        alert('Plano alterado com sucesso!');
        setPlano(!plano);
      } else {
        const errorMessage = await response.text();
        alert(`Erro ao alterar o plano: ${errorMessage}`);
      }
    } catch (error) {
      alert('Erro ao conectar ao servidor.');
    } finally {
      setLoading(false);
    }
  };

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
          <button
            onClick={melhorarPlano} className="bg-green-700 text-creme text-xl p-1 mt-2" disabled={loading}>
            {loading ? 'Carregando...' : 'Vire pro'}
          </button>
        </div>
      )}
    </div>
  );
}
