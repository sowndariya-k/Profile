import { Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu]= useState(false);
    return <header className="flex justify-between px-5 py-3 bg-primary">
        <a className="font-bold text-black" href="#">Sowndariya <span className='text-white'>K</span></a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Resume">Resume</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        </nav>
        
        {toggleMenu && <nav className="block md:hidden ">
        <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Resume">Resume</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        </nav>}
        <button  onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
}