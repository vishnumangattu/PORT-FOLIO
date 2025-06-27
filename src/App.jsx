import './App.css'
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'
import About from './components/About.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Education from './components/Education.jsx'
import Exp from './components/Exp.jsx'
import Contact from './components/Contact.jsx'
import Skill from './components/Skill.jsx'
import { useEffect, useState } from "react";
function App() {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.images;
    let loaded = 0;

    const onImageLoad = () => {
      loaded++;
      if (loaded === images.length) {
        setAllImagesLoaded(true);
      }
    };

    for (let i = 0; i < images.length; i++) {
      if (images[i].complete) {
        loaded++;
      } else {
        images[i].addEventListener("load", onImageLoad);
      }
    }

    if (loaded === images.length) {
      setAllImagesLoaded(true);
    }
  }, []);

  if (!allImagesLoaded) {
    return <div>Loading images...</div>;
  }
  return (
    <>
     <BrowserRouter>
     <div id='home' className='bg-slate-200 w-screen h-screen' style={{
          backgroundImage: "url('./software-developer-6521720.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow:'hidden',
          backgroundRepeat: 'no-repeat',
        }}>
    <Navbar/>
    <Profile/>
      </div>
     
      <div id='about' className='w-screen  bg-slate-900'>
      <About/>
      </div>
      <div id='education' className='w-screen bg-slate-900'>
      <Education/>
      <Skill/>
      </div>
      <div id='exp' className='w-screen bg-slate-900'>
      <Exp/>
      </div>
      <div id='contact' className='w-screen bg-slate-900'>
      <Contact/>
      
      </div>
     
        </BrowserRouter>
   
    </>
  )
}

export default App
