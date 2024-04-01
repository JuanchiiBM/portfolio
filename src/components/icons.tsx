'use client'

import '@/css/icons.css'
import '@/lib/fonticons/fonticons.css'
import Image from 'next/image';
import { useRef } from 'react';

const Icons = () => {
    const icons = useRef<HTMLDivElement>(null);
    let xCursor: number;
    let yCursor: number;
    window.addEventListener('mousemove', (e: MouseEvent) => {
        xCursor = e.clientX;
        yCursor = e.clientY;
    });
    const iconsAnimation = () => {
        const yScroll = window.scrollY;

        //reactIcon
        const reactIcon = icons.current?.children[0] as HTMLIFrameElement;
        const xReact = reactIcon.offsetLeft;
        const yReact = reactIcon.offsetTop;
        reactIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xReact ? xReact : 0)}px ${yCursor + yScroll - (yReact ? yReact : 0)}px, rgb(0, 145, 255) 3vw, white 30vw)`;
        //htmlIcon
        const htmlIcon = icons.current?.children[1] as HTMLIFrameElement;
        const xHtml = htmlIcon.offsetLeft;
        const yHtml = htmlIcon.offsetTop;
        htmlIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xHtml ? xHtml : 0)}px ${yCursor + yScroll - (yHtml ? yHtml : 0)}px, rgb(255, 69, 0) 3vw, white 30vw)`;
        //bootIcon
        const bootIcon = icons.current?.children[2] as HTMLIFrameElement;
        const xBoot = bootIcon.offsetLeft;
        const yBoot = bootIcon.offsetTop;
        bootIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xBoot ? xBoot : 0)}px ${yCursor + yScroll - (yBoot ? yBoot : 0)}px, rgb(138, 43, 226) 3vw, white 30vw)`;
        //typeIcon
        const typeIcon = icons.current?.children[3] as HTMLIFrameElement;
        const xType = typeIcon.offsetLeft;
        const yType = typeIcon.offsetTop;
        typeIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xType ? xType : 0)}px ${yCursor + yScroll - (yType ? yType : 0)}px, rgb(49, 120, 198) 3vw, white 30vw)`;
        //sassIcon
        const sassIcon = icons.current?.children[4] as HTMLIFrameElement;
        const xSass = sassIcon.offsetLeft;
        const ySass = sassIcon.offsetTop;
        sassIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xSass ? xSass : 0)}px ${yCursor + yScroll - (ySass ? ySass : 0)}px, rgb(216, 112, 147) 3vw, white 30vw)`;
        //netIcon
        const netIcon = icons.current?.children[5] as HTMLIFrameElement;
        const xNet = netIcon.offsetLeft;
        const yNet = netIcon.offsetTop;
        netIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xNet ? xNet : 0)}px ${yCursor + yScroll - (yNet ? yNet : 0)}px, rgb(81, 61, 203) 3vw, white 30vw)`;
        //nextIcon
        const nextIcon = icons.current?.children[6] as HTMLIFrameElement;
        const xNext = nextIcon.offsetLeft;
        const yNext = nextIcon.offsetTop;
        nextIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xNext ? xNext : 0)}px ${yCursor + yScroll - (yNext ? yNext : 0)}px, rgb(20, 20, 20) 3vw, white 30vw)`;

    }
    window.addEventListener('mousemove', iconsAnimation);
    window.addEventListener('scroll', iconsAnimation);

    return (
        <div ref={icons} className='div-tecnologys'>
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-bootstrap"></i>
            <i className="icon-TypeScript"></i>
            <i className="fa-brands fa-sass"></i>
            <i className='icon-NET'></i>
            <i className='icon-Next'></i>
        </div>
    )
}

export default Icons;