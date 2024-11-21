import sap from "@/img/sap.png";
import fia from "@/img/fia.png";
import mahindra from "@/img/mahindra.png";
import ultragaz from "@/img/ultragaz.png";
import { StaticImageData } from "next/image";

type TipoRecompensa = {
  id: number;
  nomeEmpresa: string;
  descricao: string;
  descricaoLonga: string;
  preco: string;
  custo_pontos: number;
  imagem: StaticImageData | string;
};

export const ListaRecompensa: TipoRecompensa[] = [
  {
    id: 1,
    nomeEmpresa: "SAP",
    descricao: "Desconto 40% Curso online",
    descricaoLonga: "Aproveite um desconto de 40% em cursos online da SAP. Estes cursos cobrem tópicos importantes sobre ERP, gerenciamento de negócios e análise de dados, ministrados por especialistas da indústria.",
    preco: "R$ 90",
    custo_pontos: 12600,
    imagem: sap,
  },
  {
    id: 2,
    nomeEmpresa: "SAP",
    descricao: "Curso Online Completo",
    descricaoLonga: "Tenha acesso a um curso online completo da SAP, com todo o conteúdo necessário para se especializar em gestão nomeEmpresarial e sistemas de ERP. O curso abrange desde os fundamentos até módulos avançados, proporcionando um aprendizado profundo e prático.",
    preco: "R$ 240",
    custo_pontos: 33600,
    imagem: sap,
  },
  {
    id: 3,
    nomeEmpresa: "Fórmula E",
    descricao: "Ingresso Setor B",
    descricaoLonga: "Desfrute de uma experiência única com um ingresso para o Setor B no circuito do Brasil da Fórmula E. Este ingresso oferece uma visão privilegiada da pista, permitindo que você acompanhe de perto a ação e a emoção das corridas de carros elétricos de alta performance.",
    preco: "R$ 150",
    custo_pontos: 21000,
    imagem: fia,
  },
  {
    id: 4,
    nomeEmpresa: "Fórmula E",
    descricao: "Kit Oficial",
    descricaoLonga: "Receba o Kit Oficial da Fórmula E, que inclui uma seleção de produtos exclusivos, como camiseta, boné e pôster da temporada atual.",
    preco: "R$ 120",
    custo_pontos: 16800,
    imagem: fia,
  },
  {
    id: 5,
    nomeEmpresa: "Mahindra Racing",
    descricao: "Miniatura Autografada",
    descricaoLonga: "Adicione à sua coleção uma miniatura autografada pelos pilotos da Mahindra Racing. Esta peça de edição limitada é perfeita para fãs e colecionadores.",
    preco: "R$ 150",
    custo_pontos: 21000,
    imagem: mahindra,
  },
  {
    id: 6,
    nomeEmpresa: "Mahindra Racing",
    descricao: "Fan Package",
    descricaoLonga: "Adquira o Fan Package exclusivo da Mahindra Racing, que inclui diversos itens oficiais da equipe, como bandeira, camiseta e adesivos.",
    preco: "R$ 120",
    custo_pontos: 16800,
    imagem: mahindra,
  },
  {
    id: 7,
    nomeEmpresa: "Ultragaz",
    descricao: "Desconto 50% no Botijão",
    descricaoLonga: "Economize com um desconto de 50% na compra de um botijão de gás Ultragaz.",
    preco: "R$ 60",
    custo_pontos: 8400,
    imagem: ultragaz,
  },
  {
    id: 8,
    nomeEmpresa: "Ultragaz",
    descricao: "Botijão grátis",
    descricaoLonga: "Receba um botijão de gás Ultragaz totalmente gratuito.",
    preco: "R$ 90",
    custo_pontos: 12600,
    imagem: ultragaz,
  },
];
