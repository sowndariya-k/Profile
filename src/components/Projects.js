import WebsiteImg1 from '../assets/flower.jpg';
import WebsiteImg2 from '../assets/tic tac toe.png';
import WebsiteImg3 from '../assets/To-Do-list.png';
export default function Projects() {
    const config = {
        projects: [
            {
                image: WebsiteImg1,
                description:'A visually stunning landing page for a flower shop created with HTML and CSS, featuring vibrant images, elegant typography, and a user-friendly layout.',
                link:'https://github.com/sowndariya-k/flower-shop-landing-page'
            },
            {
                image: WebsiteImg3,
                description:'A simple to-do list project that allows users to add, delete, and mark tasks as completed using HTML for structure, CSS for styling, and JavaScript for functionality ',
                link:'https://github.com/sowndariya-k/to-do-list'
            },
            {
                image: WebsiteImg2,
                description:'A Tic Tac Toe game implemented with HTML, CSS, and JavaScript to create an interactive and visually appealing two-player game.This project helps in understanding DOM manipulation and event handling in JavaScript.',
                link:'https://github.com/sowndariya-k/tic-tac-toe-game'
            }
        ]
    }
    return<section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='Projects'>
        <div className="w-full">
        <div className='flex flex-col px-10 py-5 '>
        <h1 className='text-4xl border-b-4 border-secondary  mb-5 w-[135px] font-bold'>Projects</h1>
        <p>These are some of my projects. I have built these with React, HTML, CSS, JS...</p>
        </div>
        </div>


        <div className="w-full flex flex-col md:flex-row px-10 gap-9">
            {config.projects.map((project) =>(
                <div className='relative'>
            <img className='py-5 h-[300px] w-[400px]' src={project.image}/>
            <div className='project-desc'>
                <p className='text-center px-5 py-5'>{project.description}</p>
            <div className='flex justify-center'>
            <a className='btn' target='blank' href={project.link}> view project</a>
            </div>
            </div>
            </div>
        ))}
           
        </div>
  
    </section>
}
