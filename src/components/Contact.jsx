import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="mt-32 px-4 mb-24">
            <div className="bg-yellow-400 text-black border-[3px] border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-12">
                <h2 className="text-xl font-bold uppercase tracking-wider">GET IN TOUCH</h2>
            </div>

            <div className="text-center mb-12">
                <p className="font-bold text-lg dark:text-gray-300">Let's build something amazing together</p>
            </div>

            <div className="flex justify-center gap-8 flex-wrap">
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="relative group hover:-translate-y-2 transition-transform cursor-pointer block">
                    <div className="w-56 h-32 bg-[#5ce1e6] text-black border-[3px] border-black flex flex-col items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <FaLinkedinIn className="text-4xl mb-2" />
                        <span className="font-cursive italic font-bold">LinkedIn</span>
                    </div>
                    {/* Tape */}
                    <div className="absolute -top-3 right-4 w-12 h-6 bg-yellow-200/90 border border-yellow-300 rotate-12"></div>
                </a>

                {/* GitHub */}
                <a href="https://github.com" target="_blank" rel="noreferrer" className="relative group hover:-translate-y-2 transition-transform cursor-pointer block">
                    <div className="w-56 h-32 bg-yellow-400 text-black border-[3px] border-black flex flex-col items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <FaGithub className="text-4xl mb-2" />
                        <span className="font-cursive italic font-bold">GitHub</span>
                    </div>
                    {/* Tape */}
                    <div className="absolute -top-3 right-4 w-12 h-6 bg-yellow-200/90 border border-yellow-300 -rotate-12"></div>
                </a>

                {/* Email */}
                <a href="mailto:email@example.com" className="relative group hover:-translate-y-2 transition-transform cursor-pointer block">
                    <div className="w-56 h-32 bg-pink-400 text-black border-[3px] border-black flex flex-col items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <FaEnvelope className="text-4xl mb-2" />
                        <span className="font-cursive italic font-bold">Email</span>
                    </div>
                    {/* Tape */}
                    <div className="absolute -top-3 right-4 w-12 h-6 bg-yellow-200/90 border border-yellow-300 rotate-6"></div>
                </a>
            </div>
        </section>
    );
};

export default Contact;
