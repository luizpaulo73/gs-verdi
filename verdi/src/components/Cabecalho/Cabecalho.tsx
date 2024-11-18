import Image from "next/image"
import Link from "next/link"

import logo from "@/img/logo.png"

export default function Cabecalho() {
  return (
    <header className="flex justify-between p-2 h-14 sm:h-20 sm:p-4 md:h-28 items-center">
        <div className="w-1/3 h-full">
          <Link href={"/"}>
            <Image src={logo} alt="Logo Verdí" className="w-auto h-5/6"/>
          </Link>
        </div>
        <div className="w-2/3 sm:w-1/3">
            <nav>
                <ul className="flex justify-around">
                    <li><Link href={'/sobre/nos'} className="text-creme text-xs font-extrabold sm:text-base md:text-lg xl:text-xl">Sobre Nós</Link></li>
                    <li><Link href={'/#planos'} className="text-creme text-xs font-extrabold sm:text-base md:text-lg xl:text-xl">Planos</Link></li>
                    <li><Link href={'/conta'} className="text-creme text-xs font-extrabold sm:text-base md:text-lg xl:text-xl">Conta</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}