import carol from "@/img/fotocarol.png"
import luiz from "@/img/fotoluiz.jpg"
import rafael from "@/img/fotorafael.png"
import { StaticImageData } from "next/image";

type aluno = {
  nome: string;
  rm: number;
  sala: string;
  linkedin: string;
  github: string;
  foto: StaticImageData | string;
}

export const participantes: aluno[] = [
    {
      nome: "Carolina Pinsdorf",
      rm: 556898,
      sala: "1TDSPY",
      linkedin: "https://www.linkedin.com/in/carolinapinsdorf/",
      github: "https://github.com/carolpinsdorf",
      foto: carol,
    },
    {
      nome: "Luiz Paulo",
      rm: 555497,
      sala: "1TDSPF",
      linkedin: "https://www.linkedin.com/in/luizpaulo73/",
      github: "https://github.com/luizpaulo73",
      foto: luiz,
    },
    {
      nome: "Rafael de Souza",
      rm: 555130,
      sala: "1TDSPI",
      linkedin: "https://www.linkedin.com/in/rafael-souza-fiap/",
      github: "https://github.com/RafaellSouzaPinto",
      foto: rafael,
    },
  ];
  