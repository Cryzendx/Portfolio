import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.png';

// Import sections
import Competencies from './Competencies';
import Projects from './Projects';
import Contact from './Contact';
import CV from './CV';

const Home = () => {
    const scrollToNext = () => {
        const element = document.getElementById('competences');
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="flex flex-col gap-20">
            {/* Hero Section */}
            <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center text-center relative pointer-events-none">
                {/* Background decorators */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

                <div className="pointer-events-auto">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 relative inline-block"
                    >

                        <div className="w-40 h-40 rounded-full bg-gradient-to-r from-primary to-purple-500 p-1 shadow-2xl shadow-primary/30">
                            <div className="w-full h-full rounded-full bg-surface overflow-hidden flex items-center justify-center">
                                <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        <span className="text-gradient leading-tight">{portfolioData.profile.name}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-textMuted max-w-2xl mx-auto mb-8 font-light"
                    >
                        {portfolioData.profile.role}
                    </motion.p>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-base text-textMuted max-w-xl mx-auto mb-10 leading-relaxed"
                    >
                        {portfolioData.profile.bio}
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            onClick={scrollToNext}
                            className="group px-8 py-4 bg-primary hover:bg-primaryHover text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                        >
                            Découvrir mon portfolio
                            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-surfaceHighlight hover:bg-border text-text rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 border border-border"
                        >
                            <Download size={18} />
                            Voir mon CV
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-textMuted/50"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            {/* Sections Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            {/* Competencies Section */}
            <section>
                <Competencies />
            </section>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            {/* Projects Section */}
            <section>
                <Projects />
            </section>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            {/* CV Section */}
            <section id="cv" className="py-20">
                <CV />
            </section>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            {/* Contact Section */}
            <section id="contact" className="py-20">
                <Contact />
            </section>
        </div>
    );
};

export default Home;
