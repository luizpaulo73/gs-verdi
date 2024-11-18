import React from 'react'
import Image from 'next/image'

import logo from "@/img/logo.png"

export default function BotaoAssinatura(props : {planoAtivo: boolean}) {

    const plano : boolean = props.planoAtivo


  return (
    <>
    {plano === true ?  <div className='flex items-center justify-center gap-1'>
                            <h2 className='text-green-400 text-xl'>Super</h2>
                            <Image src={logo} alt='' className='h-6 w-auto'/>
                        </div> 
                        :
                        <div className='flex items-center justify-center gap-4'>
                            <Image src={logo} alt='' className='h-6 w-auto'/>
                            <button className='bg-green-700 text-creme text-xl p-1 mt-2'>Vire pro</button>
                        </div>}
    </>
  )
}
