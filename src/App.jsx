import React, { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'
import About from './components/About.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Education from './components/Education.jsx'
import Exp from './components/Exp.jsx'
import Contact from './components/Contact.jsx'
import Skill from './components/Skill.jsx'
import Loader from './components/Loader.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
     <BrowserRouter>
     <div id='home' className='bg-slate-200 w-screen h-screen box-border' style={{
          backgroundImage: "url('./software-developer-6521720.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
    <Navbar/>
    <Profile/>
      </div>
     
      <div id='about' className='w-screen box-border bg-slate-900'>
      <About/>
      </div>
      <div id='education' className='w-screen  box-border bg-slate-900'>
      <Education/>
      <Skill/>
      </div>
      <div id='exp' className='w-screen  box-border bg-slate-900'>
      <Exp/>
      </div>
      <div id='contact' className='w-screen  box-border bg-slate-900'>
      <Contact/>
      
      </div>
     
        </BrowserRouter>
   
    </>
  )
}

export default App
