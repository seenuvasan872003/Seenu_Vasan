import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaLaptopCode, FaServer, FaDatabase, FaCode, FaTools, FaLink } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostgresql, SiTailwindcss, SiBootstrap, SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
    {
        title: 'FRONTEND',
        bgColor: 'bg-blue-400',
        icon: <FaLaptopCode />,
        items: [
            { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
            { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
            { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
            { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> }
        ]
    },
    {
        title: 'BACKEND',
        bgColor: 'bg-pink-400',
        icon: <FaServer />,
        items: [
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Express.js', icon: <SiExpress className="text-gray-500" /> },
            { name: 'REST API', icon: <FaLink className="text-blue-600" /> }
        ]
    },
    {
        title: 'DATABASE',
        bgColor: 'bg-indigo-400',
        icon: <FaDatabase />,
        items: [
            { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
            { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> }
        ]
    },
    {
        title: 'LANGUAGES',
        bgColor: 'bg-yellow-400',
        icon: <FaCode />,
        items: [
            { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
            { name: 'Python', icon: <FaPython className="text-red-500" /> }
        ]
    },
    {
        title: 'TOOLS',
        bgColor: 'bg-teal-400',
        icon: <FaTools />,
        items: [
            { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
            { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-gray-200" /> },
            { name: 'VS Code', icon: <VscVscode className="text-blue-500" /> },
            { name: 'Postman', icon: <SiPostman className="text-orange-500" /> }
        ]
    }
];

// const skillCategories = [
//     {
//         title: 'FRONTEND',
//         color: 'border-blue-400',
//         icon: '⚙️',
//         items: [
//             { name: 'React.js', icon: '⚛️' },
//             { name: 'Redux', icon: '🔄' },
//             { name: 'MobX', icon: '📦' },
//             { name: 'Angular', icon: '🅰️' },
//             { name: 'Bootstrap', icon: '🅱️' },
//             { name: 'Material-UI', icon: '🎨' },
//             { name: 'React Native', icon: '📱' },
//             { name: 'Ionic', icon: '⚡' }
//         ]
//     },
//     {
//         title: 'LANGUAGES',
//         color: 'border-yellow-400',
//         icon: '</>',
//         items: [
//             { name: 'JavaScript', icon: '🟨' },
//             { name: 'TypeScript', icon: '🟦' },
//             { name: 'Python', icon: '🐍' },
//             { name: 'Java', icon: '☕' },
//             { name: 'Kotlin', icon: '🟣' },
//             { name: 'SQL', icon: '💾' },
//             { name: 'HTML', icon: '📄' },
//             { name: 'CSS', icon: '🎨' }
//         ]
//     },
//     {
//         title: 'BACKEND',
//         color: 'border-pink-400',
//         icon: '⚙️',
//         items: [
//             { name: 'Node.js', icon: '🟢' },
//             { name: 'Express.js', icon: '🚂' },
//             { name: 'Hapi', icon: '😊' },
//             { name: 'Firebase', icon: '🔥' },
//             { name: 'Cloud Functions', icon: '☁️' },
//             { name: 'AWS Lambda', icon: 'λ' },
//             { name: 'AWS S3', icon: '🪣' },
//             { name: 'NGINX', icon: '🟩' }
//         ]
//     },
//     {
//         title: 'CLOUD & DEVOPS',
//         color: 'border-teal-400',
//         icon: '☁️',
//         items: [
//             { name: 'Google Cloud', icon: '☁️' },
//             { name: 'AWS', icon: '☁️' },
//             { name: 'Azure', icon: '☁️' },
//             { name: 'Docker', icon: '🐳' },
//             { name: 'Kubernetes', icon: '☸️' },
//             { name: 'Terraform', icon: '🏗️' },
//             { name: 'Cloud Run', icon: '🏃‍♂️' }
//         ]
//     },
//     {
//         title: 'DATABASES',
//         color: 'border-blue-500',
//         icon: '🛢️',
//         items: [
//             { name: 'MongoDB', icon: '🍃' },
//             { name: 'Firestore', icon: '🔥' },
//             { name: 'RethinkDB', icon: '📚' },
//             { name: 'Redis', icon: '🔴' },
//             { name: 'PostgreSQL', icon: '🐘' },
//             { name: 'SQL Server', icon: '🗄️' },
//             { name: 'BigQuery', icon: '🔍' }
//         ]
//     },
//     {
//         title: 'TOOLS & MORE',
//         color: 'border-pink-500',
//         icon: '🔧',
//         items: [
//             { name: 'Git', icon: '🐙' },
//             { name: 'Elasticsearch', icon: '🔍' },
//             { name: 'GraphQL', icon: '🕸️' },
//             { name: 'pandas', icon: '🐼' },
//             { name: 'Jest', icon: '🃏' },
//             { name: 'Cypress', icon: '🌲' },
//             { name: 'Jira', icon: '🎫' },
//             { name: 'VSCode', icon: '💻' }
//         ]
//     }
// ];

const Skills = () => {
    return (
        <section id="skills" className="mt-32 px-4 relative">
            <div className="inline-block bg-[#5ce1e6] dark:bg-blue-600 border-2 border-black px-6 py-2 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-3xl font-bold uppercase tracking-wider">Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                        {/* Top color bar */}
                        <div className={`absolute top-0 left-0 right-0 h-2 border-b-4 border-black ${category.bgColor}`} />

                        <h3 className="text-xl font-bold flex items-center gap-3 mb-6 mt-4">
                            <span className="text-2xl">{category.icon}</span>
                            {category.title}
                        </h3>
                        <hr className="border-t-4 border-black mb-6" />

                        <div className="flex flex-wrap gap-x-3 gap-y-4">
                            {category.items.map((item, itemIdx) => (
                                <div
                                    key={itemIdx}
                                    className="flex items-center gap-2 bg-white dark:bg-gray-700 border-2 border-black px-3 py-1 font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0_0_0_0_rgba(0,0,0,1)] transition-all cursor-pointer"
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
