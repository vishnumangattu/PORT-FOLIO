import React,{useState,useEffect}from 'react';

const About = () => {
  return (
    <div className='w-screen h-screen'>
    <section className="about px-1 md:px-1 pt-20 bg-slate-900 flex flex-col md:flex-row-reverse items-center">
      {/* Text Section */}
      <div className="md:w-3/5 w-full mt-10">
        <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">About Me...</h2>
        <p className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]">
          I'm a computer science undergraduate at Kerala University and a skilled Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js) and a strong foundation in JavaScript. 
          I specialize in building dynamic, efficient, and scalable web applications, leveraging my experience with front-end and back-end technologies. I'm a quick learner who collaborates closely with clients to deliver 
          user-friendly solutions tailored to real-world challenges.
        </p>
        <div className=" flex  flex-row flex-wrap gap-10 pb-10 justify-center my-10">
    <div className="xs:w-[250px]  perspective-1000 ">
  <div className="w-3/4 bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 p-[1px] rounded-[20px] shadow-card transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-200 ...">
    <div className="bg-slate-800 rounded-[20px] py-5 px-1  min-h-[150px] flex justify-evenly items-center flex-col">
      <img src="./pngwing.com.png" alt="web-development" className="w-12 h-16 object-contain" />
      <h3 className="text-white text-[20px] font-bold text-center">Backend Developer</h3>
    </div>
  </div>
</div>
<div className="xs:w-[250px]  perspective-1000">
  <div className="w-3/4 bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 p-[1px] rounded-[20px] shadow-card transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200 ...">
    <div className="bg-slate-800 rounded-[20px] py-5 px-4 min-h-[150px] flex justify-evenly items-center flex-col">
      <img src="./React-icon.svg.png" alt="web-development" className="w-10 h-16 object-contain" />
      <h3 className="text-white text-[20px] font-bold text-center">React Developer</h3>
    </div>
  </div>
</div>
<div className="xs:w-[250px]  perspective-1000 mr-28">
  <div className="w-3/4 bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 p-[1px] rounded-[20px] shadow-card  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200 ...   " >
    <div className="bg-slate-800 rounded-[20px] py-5 px-5 min-h-[150px] flex justify-evenly items-center flex-col">
      <img src="./pngwing.com (1).png" alt="web-development" className="w-12 h-16 object-contain" />
      <h3 className="text-white text-[20px] font-bold text-center">Web Developer</h3>
    </div>
  </div>
</div>


</div>

      </div>

      {/* Image Section */}
      <div className="md:w-2/5 w-full flex justify-center  md:mt-0  ">
        <img
          src="./developer-8764521.jpg" 
          alt="About Me"
          className="w-2/3 md:w-2/4 lg:w-1/2 h-96 rounded-xl mt-1"
        />
        
      </div>
    </section>
   
     </div>
  );
};

export default About;
