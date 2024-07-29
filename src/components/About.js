import AboutImg from '../assets/about2.png';


export default function About() {
    const config ={
        line1: 'Hi , My name is Sowndariya K . I am a Full stack developer. I built a beautiful Websites with React.js and Tailwind css.',
        line2: 'I am Proficient in Frontend Skills like React.js, Bootstrap, Html, Tailwindcss and many more...',
        line3: 'In backend I know MongoDB, MySQL, Node.js'
    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5 py-20 ' id='About'>
        <div className=' py-5 md:w-1/2 flex justify-center '>
            <img className="w-[300px]" src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex pl-20 justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p>{config.line1}</p><br/>
            <p>{config.line2}</p><br/>
            <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
        
    </section>
}