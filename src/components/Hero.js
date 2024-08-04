import { LiaLinkedin } from 'react-icons/lia';
import HeroImg from 'src/assets/hero.png';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";



export default function Hero(){
    const config ={
        subtitle: 'Im a Full-stack developer',
        social: {
            Linkedin :'https://www.linkedin.com/in/sowndariya-k/',
            github :'https://github.com/sowndariya-k'
        }
    }
    return <section className='flex flex-col md:flex-row  px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-hero-font '>Hi ,<br/> Im Sowndariya <span className='text-black'>K</span>
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
            <a href={config.social.github} className='pr-5 hover:text-white' ><AiOutlineGithub size={40}/></a>
            <a href={config.social.Linkedin} className='pr-5 hover:text-white' ><AiOutlineLinkedin size={40}/></a>
            
        </div>
        </div>
        <img  className='md:w-1/3 ' src={HeroImg}></img>
    </section>

}
<div class="social-icon">
<div class="social-item">
    <a href="https://www.linkedin.com/company/program-warehouse">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg" alt="linkedin" width="20px"/>
    </a>
</div>
<div class="social-item">
    <a href="https://github.com/program-warehouse">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" alt="github" width="20px"/>
    </a>
</div>
</div>
