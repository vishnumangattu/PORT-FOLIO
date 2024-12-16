import React from 'react'

const Profile = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='absolute inset-0 top-[120px]  max-w-7xl mx-1 flex flex-row items-start gap-5 sm:px-16 px-6 mt-24'>
        <div>
          <h1 className= 'text-white font-black text-white lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 '>
            Hello, I'm <br></br><span className='text-[#ddd6fe] lg:text-[80px]'>Vishnu V Nair</span>
          </h1>
          <div className=' px-4 py-1 rounded-full'>
          <p className='mt-5 text-slate-100 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] '>
          A computer science undergraduate,  <br className='sm:block hidden' />
          a software developer and a full stack web developer.
          </p>
         <div className='flex flex-row gap-2 mt-4'>
         <a
          className="font-poppins"
          href="https://www.linkedin.com/in/vishnu-v-nair-8a0074341/"
          target="_blank"
          rel="noopener noreferrer"
        > <img src="./linkedin.svg" alt="" className='w-14 h-14' /></a>
         <a
          className="font-poppins"
          href="https://github.com/vishnumangattu/"
          target="_blank"
          rel="noopener noreferrer"
        ><img src="./github.png" alt=""  className='w-14 h-14'/></a>
          <a
          className="font-poppins"
          href="https://twitter.com/@vishnumangattu/"
          target="_blank"
          rel="noopener noreferrer"
        ><img src="./x.svg" alt="" className='w-14 h-14' /></a>
         </div>
          </div>
        </div>
      </div>
     
    </section>
  )
}

export default Profile