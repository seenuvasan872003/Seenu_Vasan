import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {
    return (
        <section id="education" className="mt-32 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Education */}
                <div>
                    <div className="bg-yellow-400 text-black border-[3px] border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4">
                        <h2 className="text-xl font-bold uppercase">Education</h2>
                    </div>

                    <div className="bg-white dark:bg-gray-800 border-[3px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">

                        {/* College */}
                        <h3 className="font-bold text-xl">B.E Electronics and Communication Engineering</h3>
                        <p className="text-gray-600 dark:text-gray-400">IFET College of Engineering</p>
                        <span className="bg-[#5ce1e6] border-[2px] border-black px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            Villupuram
                        </span>

                        {/* School */}
                        <h3 className="font-bold text-xl mt-6">12th & 10th</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Gandhi Memorial Higher Secondary School
                        </p>
                        <span className="bg-yellow-300 border-[2px] border-black px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            Villupuram
                        </span>

                        {/* Course */}
                        <h3 className="font-bold text-xl mt-6">Full Stack Web Development Course</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Code 99 IT Academy
                        </p>
                        <span className="bg-pink-300 border-[2px] border-black px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            Chennai
                        </span>

                        <div className="flex items-center gap-2 mt-6 text-sm font-bold text-gray-700 dark:text-gray-300">
                            <FaMapMarkerAlt className="text-red-500 text-lg" /> Tamil Nadu, India
                        </div>

                    </div>
                </div>

                {/* Internships */}
                <div>
                    <div className="bg-yellow-400 text-black border-[3px] border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4">
                        <h2 className="text-xl font-bold uppercase">Internships</h2>
                    </div>

                    <div className="bg-white dark:bg-gray-800 border-[3px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">

                        {/* Tech Vaseegrah */}
                        <h3 className="font-bold text-xl">Web Developer Intern</h3>
                        <p className="text-gray-600 dark:text-gray-400">Tech Vaseegrah</p>
                        <span className="bg-[#5ce1e6] border-[2px] border-black px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            Jan 2025 – Jun 2025
                        </span>
                        <p className="text-sm mt-1 text-gray-500">Thanjavur</p>

                        {/* Novitech */}
                        <h3 className="font-bold text-xl mt-6">Full Stack Developer Intern (Online)</h3>
                        <p className="text-gray-600 dark:text-gray-400">Novitech R&D</p>
                        <span className="bg-yellow-300 border-[2px] border-black px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            March 2024 – May 2024
                        </span>
                        <p className="text-sm mt-1 text-gray-500">Online</p>

                        {/* Nexinfo */}
                        <h3 className="font-bold text-xl mt-6">Web Development Intern (Online)</h3>
                        <p className="text-gray-600 dark:text-gray-400">Nexinfo</p>
                        <span className="bg-pink-300 border-[2px] border-black px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            June 2024 – July 2024
                        </span>
                        <p className="text-sm mt-1 text-gray-500">Online</p>

                        <div className="flex items-center gap-2 mt-6 text-sm font-bold text-gray-700 dark:text-gray-300">
                            <FaMapMarkerAlt className="text-red-500 text-lg" /> India
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;