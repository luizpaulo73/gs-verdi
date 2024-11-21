import Image from "next/image";
import Link from "next/link";

import logo from "@/img/logo.png";
import checkmark from "@/img/checkmark.png";

export default function Planos() {
    return(
        <section id="planos" className="flex flex-col sm:flex-row gap-6 lg:w-[70vw] lg:h-96 mx-auto">
        <div className="border-2 border-green-700 w-[275px] mx-auto p-2 flex flex-col justify-around gap-6 lg:w-5/12">
            <div className="flex flex-col gap-2">
                <h2 className="text-creme text-2xl lg:text-3xl">Plano</h2>
                <Image src={logo} alt="Logo Verdí" className="w-1/3"/>
            </div>
            <div className="flex w-full items-center gap-2">
                <Image src={checkmark} alt="CheckMark" className="w-5 h-5 lg:w-7 lg:h-7"/>
                <p className="text-white text-xs lg:text-base">1 ponto por Km andado com transportes sustentáveis</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex">
                <h2 className="text-creme text-lg lg:text-2xl">Gratuito</h2>
                </div>
                <Link href={"/cadastro"} className="bg-green-700 text-creme p-1 lg:text-lg">Criar conta</Link>
            </div>
        </div>
        <div className="border-2 border-green-700 w-[275px] mx-auto p-2 flex flex-col justify-around gap-6 lg:w-5/12">
            <div className="flex flex-col gap-2">
                <h2 className="text-creme text-2xl">Plano</h2>
                <div className="flex">
                    <h2 className="text-green-300 text-2xl xl:text-4xl">Super</h2>
                    <Image src={logo} alt="Logo Verdí" className="w-1/3 h-auto"/>
                </div>
            </div>
            <div className="flex flex-col gap-5">
            <div className="flex w-full items-center gap-2">
                <Image src={checkmark} alt="CheckMark" className="w-5 h-5 lg:w-7 lg:h-7"/>
                <p className="text-white text-xs lg:text-base">1,5x mais pontos por km andado</p>
            </div>
            <div className="flex w-full items-center gap-2">
                <Image src={checkmark} alt="CheckMark" className="w-5 h-5 lg:w-7 lg:h-7"/>
                <p className="text-white text-xs lg:text-base">Descontos com empresas parceiras</p>
            </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex">
                <h2 className="text-creme text-lg lg:text-2xl">R$9,99</h2><p className="text-creme lg:text-lg">/mês</p>
                </div>
                <Link href={"/cadastro"} className="bg-green-700 text-creme p-1 text-center lg:text-lg">Contratar</Link>
            </div>
        </div>
        </section>
    )
}