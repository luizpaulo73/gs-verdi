import sap from "@/img/sap.png";
import fia from "@/img/fia.png";
import mahindra from "@/img/mahindra.png";
import ultragaz from "@/img/ultragaz.png";
import { StaticImageData } from "next/image";

type TipoRecompensa = {
  id: number;
  empresa: string;
  descricao: string;
  preco: string;
  custo_credito: number;
  imagem: StaticImageData | string;
};

export const ListaRecompensa: TipoRecompensa[] = [
  {
    id: 1,
    empresa: "SAP",
    descricao: "Desconto 40% Curso online",
    preco: "R$ 90",
    custo_credito: 3,
    imagem: sap,
  },
  {
    id: 2,
    empresa: "SAP",
    descricao: "Curso Online Completo",
    preco: "R$ 240",
    custo_credito: 8,
    imagem: sap,
  },
  {
    id: 3,
    empresa: "Fórmula E",
    descricao: "Ingresso Setor B",
    preco: "R$ 150",
    custo_credito: 5,
    imagem: fia,
  },
  {
    id: 4,
    empresa: "Fórmula E",
    descricao: "Kit Oficial",
    preco: "R$ 120",
    custo_credito: 4,
    imagem: fia,
  },
  {
    id: 5,
    empresa: "Mahindra Racing",
    descricao: "Miniatura Autografada",
    preco: "R$ 150",
    custo_credito: 5,
    imagem: mahindra,
  },
  {
    id: 6,
    empresa: "Mahindra Racing",
    descricao: "Fan Package",
    preco: "R$ 120",
    custo_credito: 4,
    imagem: mahindra,
  },
  {
    id: 7,
    empresa: "Ultragaz",
    descricao: "Desconto 50% no Botijão",
    preco: "R$ 60",
    custo_credito: 2,
    imagem: ultragaz,
  },
  {
    id: 8,
    empresa: "Ultragaz",
    descricao: "Botijão grátis",
    preco: "R$ 90",
    custo_credito: 3,
    imagem: ultragaz,
  },
];
