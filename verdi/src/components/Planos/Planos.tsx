import Image from "next/image";

import logo from "@/img/logo.png";

export default function Planos() {
    return(
        <section>
            <h1>Contrate o nosso plano</h1>
            <div>
                <div>
                <h2>Plano</h2>
                <Image src={logo} alt="Logo Verdí"/>
                </div>
                <div>

                </div>
                <div>
                    <h2>R$0,00</h2><p>/mês</p>
                </div>
            </div>
        </section>
    )
}