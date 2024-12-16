import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'


function Skill() {

   
    const skillBoxStyle = {
        boxShadow: `0px 0px 20px #ea580c`,
     backgroundColor:'#0f172a',
    }

    return (
        <div id ="skills"className="skills">
            <div className="skillsHeader">
                <h2 className='text-slate-100'>Skills</h2>
            </div>
            <div className="skillsContainer h-64 ">
                <div className="skill--scroll h-full">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                       
                            <div className="skill--box " style={skillBoxStyle}>
                                <img src="./html.png" alt="hiimg" />
                                <h3 className='text-slate-100'>
                                HTML
                                </h3>
                            </div><div className="skill--box " style={skillBoxStyle}>
                                <img src="./css.png" alt="hiimg" />
                                <h3 className='text-slate-100'>
                                CSS
                                </h3>
                            </div>
                            <div className="skill--box " style={skillBoxStyle}>
                                <img src="./bootstrap.svg" alt="hiimg" />
                                <h3 className='text-slate-100'>
                                BootStrap
                                </h3>
                            </div>
                            <div className="skill--box " style={skillBoxStyle}>
                                <img src="./javascript.png" alt="hiimg" />
                                <h3 className='text-slate-100'>
                                JavaScript
                                </h3>
                            </div><div className="skill--box " style={skillBoxStyle}>
                                <img src="./reactjs.png" alt="hiimg" />
                                <h3 className='text-slate-100'>
                                React Js
                                </h3>
                            </div><div className="skill--box " style={skillBoxStyle}>
                                <img src="./nodejs.png" alt="hiimg" />
                                <h3 className='text-slate-100'>
                                Node Js
                                </h3>
                            </div><div className="skill--box " style={skillBoxStyle}>
                                <img src="mysql.png" alt="hiimg" />
                                <h3 className='text-slate-100'>
                                MYSQL
                                </h3>
                            </div>
                            <div className="skill--box " style={skillBoxStyle}>
                                <img src="./mongodb.png" alt="hiimg" />
                                <h3 className='text-slate-100'>
                               MongoDB
                                </h3>
                            </div><div className="skill--box " style={skillBoxStyle}>
                                <img src="./tailwind.png" alt="hiimg" />
                                <h3 className='text-slate-100'>
                                TailWindCss
                                </h3>
                            </div>
                            <div className="skill--box " style={skillBoxStyle}>
                                <img src="./sass.png" alt="hiimg" />
                                <h3 className='text-slate-100'>
                                SaSS
                                </h3>
                            </div>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skill
