import logo from "@/img/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="flex justify-between items-center p-2 h-16 md:h-20 border-t-2 border-green-700 mt-5 md:p-4">
        <div className="w-1/3 h-full flex items-center justify-start">
            <Image src={logo} alt="Logo Verdí" className="h-8 md:h-14 w-auto"/>
        </div>
        <div className="w-1/3 h-full flex items-center justify-center">
            <p className="text-creme text-xs text-center md:text-lg">verdí® desde 2024</p>
        </div>
        <div className="w-1/3 text-right flex items-center justify-end">
            <Link href={"/participantes"} className="text-xs text-green-300 underline hover:text-creme duration-300 md:text-lg">Participantes</Link>
        </div>
    </footer>
  )
}
