import React from 'react';

const educationData = [
    {
        id: 1,
        institution: "Synnefo Solutions ,Ernakulam",
        course: "MERN STACK Developer Intern",
        startYear: "2024",
        endYear: "Present",
        img:"./pngwing.com (2).png"
    },
    {
        id: 2,
        institution: "College Of Applied Science ,Adoor",
        course: "Bachelor of Computer Application",
        startYear: "2021",
        endYear: "2024",
        img:"./Degree-PNG-Cutout.png"
    },
    {
        id: 3,
        institution: "VVHSS Thamarakulam ,charumood",
        course: "Higher Secondary Education",
        startYear: "2019",
        endYear: "2021",
         img:"./School-Download-PNG.png"
    },
];

function Education() {
    return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center" id="resume" >
            <div className="w-full max-w-7xl px-6 flex flex-col md:flex-row items-center gap-10">
                {/* Education Cards */}
                <div className="w-full md:w-2/3 flex flex-col gap-8">
                    <h1 className=" font-bold mb-8 text-right text-slate-100 pr-10 text-5xl">Education</h1>
                    {educationData.map((edu) => (
                        <div
                            key={edu.id}
                            className="flex flex-col md:flex-row w-full bg-gray-800 shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105"
                        >
                            <div
                                className="flex items-center justify-center w-full md:w-1/4 p-6 bg-orange-500"
                            >
                                <img
                                    src={edu.img}
                                    alt="education"
                                    className="w-20 h-20 "
                                />
                            </div>
                            <div className="p-6 flex-grow">
                                <h6 className="text-base font-semibold mb-3 text-orange-500">
                                    {edu.startYear} - {edu.endYear}
                                </h6>
                                <h4 className="text-xl font-bold mb-2 text-white">
                                    {edu.course}
                                </h4>
                                <h5 className="text-lg font-medium text-gray-400">
                                    {edu.institution}
                                </h5>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Education Image */}
                <div className="w-full md:w-2/4 flex justify-center mt-8 md:mt-0">
                    <img
                        src=".\eduOrange.svg"
                        alt="Education Illustration"
                        className="w-full max-w-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default Education;
