import Link from "next/link";
import Image from "next/image";

import { participantes } from "@/data/participantes";
import linkedin from "@/img/linkedin.png";
import github from "@/img/GitHub.png";

export default function Participantes() {

  return (
    <section className="flex flex-col justify-around w-11/12 md:w-full mx-auto mt-4">
        <h1 className="text-creme text-center text-2xl mb-5 md:text-4xl">Participantes</h1>
        <div className="flex flex-col gap-5 mx-auto md:flex-row md:w-full justify-center">
        {participantes.map((aluno) => (
            <div key={aluno.nome} className="border-2 border-green-700 text-center p-2 flex flex-col gap-4 w-64 md:w-1/4 md:text-xl">
                <Image src={aluno.foto} alt={`Foto de ${aluno.nome}`} className="lg:w-2/3 mx-auto rounded-2xl border-2 border-white mt-4"/>
                <p className="text-creme">{aluno.nome}</p>
                <p className="text-creme">RM - {aluno.rm}</p>
                <p className="text-creme">{aluno.sala}</p>
                <div className="flex justify-center">
                    <div>
                        <Link href={aluno.github} className="w-1/4 h-auto">
                            <Image src={linkedin} alt="Logo LinkedIn" className="w-full h-full hover:scale-110 duration-300"/>
                        </Link>
                    </div>
                    <div>
                        <Link href={aluno.github} className="w-1/4 h-auto">
                            <Image src={github} alt="Logo GitHub" className="w-full h-full hover:scale-110 duration-300"/>
                        </Link>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </section>
  )
}
