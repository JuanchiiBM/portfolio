import '@/css/index.css';
import '@/lib/fontawesome/css/all.min.css';
import Icons from '@/components/icons';
import Proyects from '@/components/proyects';

const Home = () => {
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
            <div className='div-laboral-experience'>
                <h1>Experiencia laboral</h1>
                <div className='div-box'>
                    <ul>
                        <li><div></div><p><b>09/2021 - 04/2023 | Ejército Argentino | Soldado Voluntario:</b> Trabajé en el ejército como soldado militar administrativo, en este trabajo me encargaba de realizar tareas administrativas y atencion al cliente, lo que aprendí en esta etapa de mi vida, por sobre todas las cosas, fue el trabajo en equipo, la disciplina, y el respeto a mis superiores. </p></li>
                        <li><div></div><p><b>05/2023 - 01/2024 | Tauri Solutions S.R.L | Desarrollador Front-End:</b> En este periodo fui parte del equipo de desarrollo de el Sistema Automatizado de Tiro para Artillería de Campaña (SATAC) y el Sistema de Puntería Autónomo de Artillería de Campaña (SIPAAC).<br></br>En los mismos utilizamos diversas tecnologías las cuales aportaron a la experiencia de algunas de mis habilidades.</p></li>
                        <li><div></div><p><b>02/2024 - Act | Tauri Solutions S.R.L | Desarrollador Front-End:</b> Actualmente me encuentro en el equipo de desarrollo de el Sistema Integral Táctico de Comando y Control del Ejército Argentino (SITEA). Un sistema integrador e inmenso utilizado para operaciones militares, al igual que en mi anterior contrato, en el mismo utilizamos diversas tecnologías las cuales fortalecen mis habilidades como desarrollador.</p></li>
                    </ul>
                </div>
            </div>
            <Icons></Icons>
            <div className='div-proyects'>
                <h1>Proyectos mas relevantes</h1>
                <Proyects></Proyects>
                <p>Mostrar más...</p>
            </div>      
        </main>
    );
}

export default Home;
