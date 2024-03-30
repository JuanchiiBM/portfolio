'use client'

import '@/css/proyects.css'
import Image from 'next/image';
import trex from '../../public/img/trex.png'
import { MouseEventHandler, useRef } from 'react';

const Proyects = () => {
    const divElement = useRef<HTMLDivElement>(null);
    const blurImg = (e: string) => {
        const element = document.getElementById(e)
        element?.firstElementChild?.classList.add('imgBlur')
    }
    const removeBlur = (e: string) => {
        const element = document.getElementById(e)
        element?.firstElementChild?.classList.remove('imgBlur')
    }

    return (
        <div className='div-proyects-layers'>
            <div id='div1' className='div-trucho' onMouseEnter={() => blurImg('div1')} onMouseLeave={() => removeBlur('div1')}>
                <Image src={trex} layout='fill' objectFit='cover' alt=''></Image>
                <span>Texto</span>
            </div>
            <div id='div2' className='div-trucho' onMouseEnter={() => blurImg('div2')} onMouseLeave={() => removeBlur('div2')}>

            </div>
            <div id='div3' className='div-trucho' onMouseEnter={() => blurImg('div3')} onMouseLeave={() => removeBlur('div3')}>

            </div>
            <div id='div4' className='div-trucho' onMouseEnter={() => blurImg('div4')} onMouseLeave={() => removeBlur('div4')}>

            </div>
            <div id='div5' className='div-trucho' onMouseEnter={() => blurImg('div5')} onMouseLeave={() => removeBlur('div5')}>

            </div>
            <div id='div6' className='div-trucho' onMouseEnter={() => blurImg('div6')} onMouseLeave={() => removeBlur('div6')}>

            </div>
        </div>
    )
}

export default Proyects;