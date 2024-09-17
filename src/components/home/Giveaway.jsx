import { Timer } from '@/assets'
import Image from 'next/image'
import React from 'react'
import Countdown from '../General/Countdown'

const Giveaway = () => {
  return (
    <div className='Giveaway'>
        <Image src={Timer} width={1600} height={800}  unoptimized   className='w-full h-auto'/>    
        <div className=' bg-gradient-to-b from-[#F2E8E7] from-10% via-[#F2E8E7] via-30% to-[#FFFFFF] to-90% pt-5 pb-24'>
            <div className='container text-center'>

            <h2 className='text-black text-5xl font-bold shadow1 mb-4'>GIVEAWAY ENDS IN:</h2>
            <Countdown/>
            </div>
        </div>
    </div>
  )
}

export default Giveaway