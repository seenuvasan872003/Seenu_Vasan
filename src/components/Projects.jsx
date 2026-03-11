import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: 'GoWhats Landing Page',
        description: 'Developed the landing page for the GoWhats platform during my internship, focusing on responsive UI and modern frontend design.',
        tech: ['HTML', 'CSS', 'JavaScript', 'React'],
        color: 'bg-yellow-300',
        github: '',
        live: 'https://gowhatslandingpage.netlify.app/'
    },
    {
        title: 'Bike Website (Frontend Project)',
        description: 'Built a responsive bike showcase website with modern UI design and smooth layout using frontend technologies.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        color: 'bg-[#5ce1e6]',
        github: '',
        live: 'https://bike-websites.netlify.app/'
    },
    {
        title: 'Weather App REST API',
        description: 'Developed a weather application using REST API to fetch real-time weather data and display it in a clean user interface.',
        tech: ['JavaScript', 'API', 'HTML', 'CSS'],
        color: 'bg-pink-300',
        github: '',
        live: ''
    },
    {
        title: 'Employee Management System',
        description: 'Built a full-stack Employee Management System using the MERN stack to manage employee data with CRUD operations.',
        tech: ['MongoDB', 'Express', 'React', 'Node.js'],
        color: 'bg-green-300',
        github: '',
        live: ''
    }
];

const Projects = () => {
    return (
        <section id="projects" className="mt-32 px-4 relative">
            <div className="flex justify-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold uppercase bg-white dark:bg-gray-800 border-4 border-black px-8 md:px-12 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] tracking-widest relative text-center">
                    My Projects
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full border-2 border-black" />
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-blue-500 rounded-full border-2 border-black" />
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 border-4 border-black relative group hover:-translate-y-2 transition-transform duration-300">
                        {/* Background color offset */}
                        <div className={`absolute inset-0 ${project.color} border-4 border-black translate-x-3 translate-y-3 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform`} />

                        <div className="p-6 h-full flex flex-col">
                            <h3 className="text-2xl font-bold mb-4 font-vt323 tracking-wide">{project.title}</h3>
                            <p className="mb-6 flex-grow text-gray-800 dark:text-gray-200 font-medium">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs font-bold border-2 border-black px-2 py-1 bg-gray-100 dark:bg-gray-700 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-auto border-t-2 border-black pt-4">
                                <button className="flex items-center gap-2 hover:text-blue-600 font-bold transition-colors">
                                    <FaGithub size={20} /> Code
                                </button>
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black text-white px-4 py-1 font-bold border-2 border-black hover:bg-gray-800 transition-colors" >
                                    <FaExternalLinkAlt size={16} /> Live
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
