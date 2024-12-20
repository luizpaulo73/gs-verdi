export type TipoTrajeto = {
    id: number;
    distanciaKm: number;
    pontos: number;
    meioDeTransporte: string;
    origem: string;
    destino: string;
    data: string;
  };

export type TipoRecompensas = {
  nomeEmpresa: string;
  id: number;
  descricao: string;
  data_resgate: string;
  empresa: string;
}  