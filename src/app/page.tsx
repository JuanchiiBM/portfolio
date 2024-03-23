"use client"

import '@/css/index.css'
import '@/lib/fontawesome/css/all.min.css'
import { useRef } from 'react';

export default function Home() {
    const icons = useRef<HTMLDivElement>(null);

    window.addEventListener('mousemove', (e: any) => {
        const xCursor = e.clientX;
        const yCursor = e.clientY;
        const yScroll = window.scrollY;

        //reactIcon
        const reactIcon = icons.current?.children[0] as HTMLIFrameElement;
        const xReact = reactIcon.offsetLeft;
        const yReact = reactIcon.offsetTop;
        reactIcon.style.backgroundPosition = `${document.body.offsetLeft}px ${document.body.offsetTop}px`;
        reactIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xReact ? xReact : 0)}px ${yCursor + yScroll - (yReact ? yReact : 0)}px, rgb(0, 145, 255) 0%, white 10vw)`;
        //htmlIcon
        const htmlIcon = icons.current?.children[1] as HTMLIFrameElement;
        const xHtml = htmlIcon.offsetLeft;
        const yHtml = htmlIcon.offsetTop;
        htmlIcon.style.backgroundPosition = `${document.body.offsetLeft}px ${document.body.offsetTop}px`;
        htmlIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xHtml ? xHtml : 0)}px ${yCursor + yScroll - (yHtml ? yHtml : 0)}px, rgb(255, 69, 0) 0%, white 10vw)`;
        //cssIcon
        const cssIcon = icons.current?.children[2] as HTMLIFrameElement;
        const xCss = cssIcon.offsetLeft;
        const yCss = cssIcon.offsetTop;
        cssIcon.style.backgroundPosition = `${document.body.offsetLeft}px ${document.body.offsetTop}px`;
        cssIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xCss ? xCss : 0)}px ${yCursor + yScroll - (yCss ? yCss : 0)}px, rgb(68, 118, 203) 0%, white 10vw)`;
        //bootIcon
        const bootIcon = icons.current?.children[3] as HTMLIFrameElement;
        const xBoot = bootIcon.offsetLeft;
        const yBoot = bootIcon.offsetTop;
        bootIcon.style.backgroundPosition = `${document.body.offsetLeft}px ${document.body.offsetTop}px`;
        bootIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xBoot ? xBoot : 0)}px ${yCursor + yScroll - (yBoot ? yBoot : 0)}px, rgb(138, 43, 226) 0%, white 10vw)`;
        //sassIcon
        const sassIcon = icons.current?.children[4] as HTMLIFrameElement;
        const xSass = sassIcon.offsetLeft;
        const ySass = sassIcon.offsetTop;
        sassIcon.style.backgroundPosition = `${document.body.offsetLeft}px ${document.body.offsetTop}px`;
        sassIcon.style.backgroundImage = `radial-gradient(circle at ${xCursor - (xSass ? xSass : 0)}px ${yCursor + yScroll - (ySass ? ySass : 0)}px, rgb(216, 112, 147) 0%, white 10vw)`;
    })

    return (
        <main className='main-index'>
            <header>
                <div className='div-titles'>
                    <h1>Juan Carlos Benitez Mingrone</h1>
                    <h2>Desarrollador Front-End</h2>
                </div>
                <div className='div-options'>
                    <p>TUKI</p>
                </div>
            </header>
            <canvas className='canvas-trex'>

            </canvas>
            <div className='div-aboutMe'>
                <h1>Un poco sobre mi</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, accusantium enim minus sunt nostrum animi neque quaerat eius ex, alias maxime laborum dicta illo fuga quibusdam minima aliquam ipsum consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quidem quis totam possimus perferendis tempora placeat odio, unde non molestiae, a odit aliquam adipisci voluptatem deleniti. Consequatur natus quidem provident.</p>
            </div>
            <div  ref={icons} className='div-tecnologys'>
                <i className="fa-brands fa-react"></i>
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3"></i>
                <i className="fa-brands fa-bootstrap"></i>
                <i className="fa-brands fa-sass"></i>
            </div>
        </main>
    );
}
