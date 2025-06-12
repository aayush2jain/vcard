import About from "./about"
import  Education from "./resume"
import Project from './project'
import Blog from "./blog"
import Contact from "./contact"
import Navbar from "./navbar"
import { useState } from "react";
export default function Body() {
    const [page, setPage] = useState('about');
    return(
        <>
            <div className="w-full font-sans h-[98vh] relative overflow-y-auto mr-[4vw] my-[1vh] rounded-3xl md:w-3/4 p-6 text-white/90 bg-neutral-900 pb-[8vh] md:pb-0">
       <nav className="bg-neutral-800/70 w-full md:w-auto fixed bottom-0 left-0 md:left-auto md:bottom-auto md:top-[1vh] md:right-[6vw] z-50 
                rounded-t-3xl md:rounded-t-none md:rounded-tr-3xl md:rounded-bl-3xl 
                px-[8vw] md:px-[4vw] text-white p-4 border-t md:border md:border-l-0 border-neutral-700">
  <div className="container mx-auto flex justify-between md:justify-center items-center py-1">
    <ul className="flex justify-between space-x-2 w-full md:w-auto md:space-x-10 font-[600] cursor-pointer transition-colors duration-200 ease-in-out">
      <li><p onClick={() => setPage('about')} className={page === 'about' ? 'text-yellow-400' : 'hover:text-yellow-500'}>About</p></li>
      <li><p onClick={() => setPage('resume')} className={page === 'resume' ? 'text-yellow-400' : 'hover:text-yellow-500'}>Resume</p></li>
      <li><p onClick={() => setPage('project')} className={page === 'project' ? 'text-yellow-400' : 'hover:text-yellow-500'}>Projects</p></li>
      <li><p onClick={() => setPage('blog')} className={page === 'blog' ? 'text-yellow-400' : 'hover:text-yellow-500'}>Blog</p></li>
      <li><p onClick={() => setPage('contact')} className={page === 'contact' ? 'text-yellow-400' : 'hover:text-yellow-500'}>Contact</p></li>
    </ul>
  </div>
</nav>

           {
            page === 'about' && <About/> ||
            page === 'resume' && <Education/> ||
            page === 'project' && <Project/> ||
            page === 'blog' && <Blog/> ||
            page === 'contact' && <Contact/>
        }
            </div>
        </>
    )
}