import React from 'react';

const About = () => {
    return (
        <section id="about" className="mt-32 md:px-4 relative">

            <div className="inline-block bg-yellow-300 border-2 border-black px-6 py-2 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-3xl font-bold uppercase tracking-wider">About</h2>
            </div>

            <div className="bg-white dark:bg-gray-800 border-4 border-black p-2 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-lg md:text-xl leading-[2.5rem] md:leading-[3rem]">

                <p className="mb-6">
                    I am a graduate in{' '}
                    <span className="bg-yellow-300 px-2 font-bold border border-black shadow-[2px_2px_0_#000]">
                        Electronics and Communication Engineering
                    </span>{' '}
                    from{' '}
                    <span className="bg-pink-300 px-2 font-bold border border-black shadow-[2px_2px_0_#000]">
                        IFET College of Engineering
                    </span>.
                    I am passionate about{' '}
                    <span className="bg-[#5ce1e6] px-2 font-bold border border-black shadow-[2px_2px_0_#000]">
                        Full-Stack Web Development
                    </span>{' '}
                    and building modern web applications using the{' '}
                    <span className="bg-green-300 px-2 font-bold border border-black shadow-[2px_2px_0_#000]">
                        MERN Stack
                    </span>.
                </p>

                <p className="mb-6">
                    I have{' '}
                    <span className="bg-yellow-300 px-2 font-bold border border-black shadow-[2px_2px_0_#000]">
                        experience working on
                    </span>{' '}
                    real-world projects during my{' '}
                    <span className="bg-pink-300 px-2 font-bold border border-black shadow-[2px_2px_0_#000]">
                        internship
                    </span>{' '}
                    at{' '}
                    <span className="bg-purple-300 px-2 font-bold border border-black shadow-[2px_2px_0_#000]">
                        Tech Vaseegrah
                    </span>{' '}
                    where I worked as a{' '}
                    <span className="bg-green-300 px-2 font-bold border border-black shadow-[2px_2px_0_#000]">
                        Web Developer Intern
                    </span>{' '}
                    on the{' '}
                    <span className="bg-blue-300 px-2 font-bold border border-black shadow-[2px_2px_0_#000]">
                        GoWhats Project
                    </span>.
                    I built dashboards, analytics pages, and optimized rendering performance using modern frontend technologies.
                </p>

                <p>
                    My technical skills include{' '}
                    <span className="bg-[#5ce1e6] px-2 font-bold border border-black shadow-[2px_2px_0_#000]">
                        HTML, CSS, JavaScript, React, Node.js, and MongoDB
                    </span>.
                    I enjoy learning new technologies and building{' '}
                    <span className="bg-blue-300 px-2 font-bold border border-black shadow-[2px_2px_0_#000]">
                        efficient and user-friendly applications
                    </span>{' '}
                    that solve real-world problems.
                </p>

            </div>
        </section>
    );
};

export default About;