import React, { useState } from 'react';
import Tilt from "react-parallax-tilt";
const Exp = () => {
  // State to store mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to update mouse position
  const updateMousePosition = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
    <div className="max-w-3xl mx-auto pb-12 text-center md:pb-20">
      <div className="inline-flex items-center gap-3 pb-3">
        <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-6xl"> Project Works</span>
      </div>
      <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-2xl">My Recent Works</h2>
      <p className="text-lg text-indigo-200/65">Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
    </div>
    <div className="grid max-w-sm mx-auto  items-start gap-6 lg:max-w-none lg:grid-cols-3">
    <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-slate-800 p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src="./projectinsta.jpeg"
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <a href="https://github.com/vishnumangattu/INSTAGRAM.git"><div
              
              className='bg-slate-900 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src="./github.png"
                alt='source code'
                className='w-2/3 h-2/3 object-contain'
              />
            </div>
            </a>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>INSTAGRAM-Clone</h3>
          <p className='mt-2 text-slate-300 text-[14px]'>A full-featured web application developed using the MERN stack, designed to same as that of Instagram. This app supports user registration, authentication,add and view posts etc. Built with modern tools and technologies such as React with Vite, Sass for styling.</p><br></br><br></br>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
         
        <p className={`text-[14px] text-blue-500 `} >#React</p>
            <p className={`text-[14px] text-yellow-500 `} >#Sass</p>
            <p className={`text-[14px] text-green-500 `} >#Express</p>
            <p className={`text-[14px] text-orange-500 `} >#Mongodb</p>
  
        </div>
      </Tilt>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-slate-800 p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <a href="https://github.com/vishnumangattu/OLX-Main.git"><div className='relative w-full h-[230px]'>
          <img
            src="./projectolx.jpeg"
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              
              className='bg-slate-900 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src="./github.png"
                alt='source code'
                className='w-2/3 h-2/3 object-contain'
              />
            </div>
          </div>
        </div>
        </a>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>OLX-Clone</h3>
          <p className='mt-2 text-slate-300 text-[14px]'>A web application developed using the MERN stack, designed as which same functionality of OLX app. This app supports user registration, authentication,adding and removing products,buyer and seller options,login assistance,view products and buy products. Built with tools such as HTML,Javascript,nodeJs and CSS for styling.</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
         
            <p className={`text-[14px] text-blue-500 `} >#HTML</p>
            <p className={`text-[14px] text-yellow-500 `} >#CSS</p>
            <p className={`text-[14px] text-green-500 `} >#Express</p>
            <p className={`text-[14px] text-orange-500 `} >#Mongodb</p>
  
        </div>
      </Tilt>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-slate-800 p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src="./projectport.jpeg"
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover '>
           <a href="https://github.com/vishnumangattu/PORT-FOLIO.git"> <div
              
              className='bg-slate-900 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src="./github.png"
                alt='source code'
                className='w-2/3 h-2/3 object-contain'
              />
            </div>
            </a>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>PORTFOLIO</h3>
          <p className='mt-2 text-slate-300 text-[14px]'>Built a responsive portfolio using ReactJS, leveraging components and state management for a seamless user experience across devices. Developed a feature for dynamic theme changes, enhancing user engagement by allowing personalization of background and foreground colors through efficient state management.</p><br></br>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
         
            <p className={`text-[14px] text-blue-500 `} >#React</p>
            <p className={`text-[14px] text-yellow-500 `} >#Tailwind</p>
            <p className={`text-[14px] text-green-500 `} >#Sass</p>
  
        </div>
      </Tilt>
     
    </div>
  </section>
  
  

  );
};

export default Exp;
