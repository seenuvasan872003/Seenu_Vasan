import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import profile from '../assets/profileimage/seenu.png'

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Python', icon: <FaPython className="text-blue-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-gray-200" /> }
];

const Hero = () => {
    return (
        <section id="home" className="flex flex-col md:flex-row items-center justify-between mt-16 px-4">
            {/* Left Text */}
            <div className="md:w-1/2 space-y-4 md:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-vt323 text-[#5ce1e6] tracking-wider drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
                    Hi there, I'm
                </h2>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight break-words">
                    Seenuvasan.
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                    I'm a Full-Stack Developer skilled in HTML, CSS, JavaScript, React, and Node.js. I enjoy building modern web applications, learning new technologies, and creating efficient solutions to real-world problems.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
                    <button className="bg-[#5ce1e6] border-2 border-black px-6 py-3 font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all w-full sm:w-auto">
                        Get in Touch!
                    </button>
                    <div className="flex items-center mt-4 sm:mt-2 relative">
                        <span className="font-bold text-xl md:text-2xl rotate-[-5deg]" style={{ fontFamily: 'cursive' }}>Buy me a coffee</span>

                        <svg width="70" height="70" viewBox="0 0 100 100" className="ml-2 transform translate-y-4">
                            <path
                                d="M10,60 C20,90 45,100 65,70 C75,55 60,40 45,55 C30,75 55,80 85,25"
                                fill="transparent"
                                stroke="#333"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <polygon points="80,20 92,20 85,32" fill="#333" className="transform rotate-[10deg] origin-[85px_25px]" />
                        </svg>

                        <div className="w-12 h-12 bg-white rounded-full border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ml-2 -translate-y-8 animate-bounce">
                            <span className="text-2xl">☕</span>
                        </div>
                    </div>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-3 mt-12 w-full">
                    {skills.map(skill => (
                        <span
                            key={skill.name}
                            className="flex items-center gap-2 bg-white dark:bg-gray-800 border-2 border-black px-4 py-2 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 cursor-pointer"
                        >
                            <span className="text-lg">{skill.icon}</span>
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center mt-16 md:mt-0 relative group">
                <div className="relative z-10 w-64 md:w-80 aspect-square border-[4px] border-black box-content flex items-center justify-center bg-[#7db4ea] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:translate-x-2 transition-transform duration-300">

                    {/* The Character / Avatar */}
                    <div className="w-full h-full relative overflow-hidden">
                        <img
                            src={profile}
                            alt="Avatar"
                            className="w-full h-full object-cover scale-[1.15] translate-y-4"
                        />
                    </div>

                    {/* Tape top right */}
                    <div className="absolute -top-3 right-8 w-16 h-6 bg-yellow-200/90 border-[2px] border-yellow-400 rotate-12 z-20"></div>

                    {/* Top Left </ > */}
                    <div className="absolute -top-6 -left-8 bg-[#5ce1e6] border-[4px] border-black w-14 h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-xl md:text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-2xl rotate-[-12deg] z-20 text-black">
                        &lt;/&gt;
                    </div>

                    {/* Middle Right >_ */}
                    <div className="absolute top-1/3 -right-6 md:-right-8 bg-[#fcd02c] border-[4px] border-black w-14 h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-xl md:text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl rotate-[8deg] z-20 text-black">
                        &gt;_
                    </div>

                    {/* Bottom Left Floppy Disk */}
                    <div className="absolute -bottom-6 -left-6 bg-[#aee6d0] border-[4px] border-black w-16 h-16 flex flex-col justify-end shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl rotate-[-10deg] p-1.5 z-20">
                        {/* Metal cover top */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-5 bg-gray-200 border-x-[3px] border-b-[3px] border-black">
                            <div className="w-1.5 h-full bg-gray-400 border-r-[2px] border-black ml-1.5"></div>
                        </div>
                        {/* White label bottom */}
                        <div className="w-full h-6 bg-white border-[3px] border-black rounded-[2px] flex flex-col gap-0.5 justify-center px-1">
                            <div className="w-full h-[2px] bg-black"></div>
                            <div className="w-3/4 h-[2px] bg-black"></div>
                        </div>
                    </div>

                    {/* Bottom Right Full-Stack Ninja */}
                    <div className="absolute -bottom-4 right-0 md:right-4 bg-[#aee6d0] border-[4px] border-black px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm md:text-base z-20 text-black">
                        Full-Stack Developer
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
