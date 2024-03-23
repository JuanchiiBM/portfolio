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
