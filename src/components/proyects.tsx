'use client'

import '@/css/proyects.css'
import Image from 'next/image';
import trex from '../../public/img/trex.png'
import { useRef } from 'react';

const Proyects = () => {
    const divsImage = useRef<HTMLDivElement>(null)

    return (
        <div className='div-proyects-layers'>
            <div className='div-trucho' ref={divsImage}>
                <Image src={trex} layout='fill' objectFit='contain' alt=''></Image>
                <span>Texto</span>
            </div>
            <div className='div-trucho' ref={divsImage}> 

            </div>
            <div className='div-trucho' ref={divsImage}>

            </div>
            <div className='div-trucho' ref={divsImage}>

            </div>
            <div className='div-trucho' ref={divsImage}>

            </div>
            <div className='div-trucho' ref={divsImage}>

            </div>
            <div className='div-trucho' ref={divsImage}>

            </div>
        </div>
    )
}

export default Proyects;