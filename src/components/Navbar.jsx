import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
 
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <nav className={`w-full flex items-center py-3 fixed top-0 z-20  ${
      scrolled ? "bg-transparent":"bg-blue-900"}`}>
         <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
         <div className='flex ml-6'>
          <p className='text-white text-[20px] font-bold cursor-pointer flex '>
            Vishnu V Nair &nbsp;
            <span className='sm:block hidden'> | Full-Stack Developer</span>
          </p>
        </div>
         </div>
         <div className='top-10 right-0 mx-4 my-2 p-2'>
         <ul className='list-none hidden sm:flex flex-row gap-10 text-slate-400'>
         <li className='hover:text-white text-[18px] font-medium cursor-pointer' onClick={() => scrollToSection("home")}>Home</li>
         <li className='hover:text-white text-[18px] font-medium cursor-pointer' onClick={() => scrollToSection("about")}>About </li>
            <li className='hover:text-white text-[18px] font-medium cursor-pointer'onClick={() => scrollToSection("education")}> Education </li>
            <li className='hover:text-white text-[18px] font-medium cursor-pointer'onClick={() => scrollToSection("exp")}> Projects</li>
            <li className='hover:text-white text-[18px] font-medium cursor-pointer'onClick={() => scrollToSection("contact")}>Contact</li>
         </ul>
         </div>
    </nav>
  )
}

export default Navbar