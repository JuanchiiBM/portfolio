'use client'

import '@/css/icons.css'
import { useRef } from 'react';

const Icons = () => {
    const icons = useRef<HTMLDivElement>(null);

    const iconsAnimation = (e: MouseEvent) => {
        const xCursor = e.clientX;
        const yCursor = e.clientY;
        const yScroll = window.scrollY;

        //reactIcon
        const reactIcon = icons.current?.children[0] as HTMLIFrameElement;
        const xReact = reactIcon.offsetLeft;
        const yReact = reactIcon.offsetTop;
        reactIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xReact ? xReact : 0)}px ${yCursor + yScroll - (yReact ? yReact : 0)}px, rgb(0, 145, 255) 0%, white 30vw)`;
        //htmlIcon
        const htmlIcon = icons.current?.children[1] as HTMLIFrameElement;
        const xHtml = htmlIcon.offsetLeft;
        const yHtml = htmlIcon.offsetTop;
        htmlIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xHtml ? xHtml : 0)}px ${yCursor + yScroll - (yHtml ? yHtml : 0)}px, rgb(255, 69, 0) 0%, white 30vw)`;
        //cssIcon
        const cssIcon = icons.current?.children[2] as HTMLIFrameElement;
        const xCss = cssIcon.offsetLeft;
        const yCss = cssIcon.offsetTop;
        cssIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xCss ? xCss : 0)}px ${yCursor + yScroll - (yCss ? yCss : 0)}px, rgb(48, 135, 255) 0%, white 30vw)`;
        //bootIcon
        const bootIcon = icons.current?.children[3] as HTMLIFrameElement;
        const xBoot = bootIcon.offsetLeft;
        const yBoot = bootIcon.offsetTop;
        bootIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xBoot ? xBoot : 0)}px ${yCursor + yScroll - (yBoot ? yBoot : 0)}px, rgb(138, 43, 226) 0%, white 30vw)`;
        //sassIcon
        const sassIcon = icons.current?.children[4] as HTMLIFrameElement;
        const xSass = sassIcon.offsetLeft;
        const ySass = sassIcon.offsetTop;
        sassIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xSass ? xSass : 0)}px ${yCursor + yScroll - (ySass ? ySass : 0)}px, rgb(216, 112, 147) 0%, white 30vw)`;
    }
    window.addEventListener('mousemove',iconsAnimation);
    window.addEventListener('mousedown',iconsAnimation);

    return (
        <div ref={icons} className='div-tecnologys'>
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3"></i>
            <i className="fa-brands fa-bootstrap"></i>
            <i className="fa-brands fa-sass"></i>
        </div>
    )
}

export default Icons;