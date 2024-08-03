import React from 'react';
import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
    const config = {
        link: 'https://drive.google.com/file/d/1HL99jA1NC3I6HzkYVQQ2Q4FguE9j5hX0/preview'  // Relative URL to the public directory
    };
    return (
        <section className='flex flex-col md:flex-row bg-secondary py-20' id='Resume'>
            <div className=' py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className="w-[300px]" src={ResumeImg}/>
        </div>
            <div className='md:w-1/2 flex px-10 justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[130px] font-bold'>Resume</h1>
                    <p className='pb-5 justify-center'>
                        You can view my resume<br/><br/><a className='btn' target="_blank" rel="noopener noreferrer" href={config.link}>Download</a></p>
                </div>
            </div>
        </section>
    );
}
