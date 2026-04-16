import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/adrien.jpeg';

import Competencies from './Competencies';
import Projects from './Projects';
import Contact from './Contact';
import CV from './CV';

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
};

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
        <div className="flex flex-col">
            {/* Hero Section */}
            <section id="home" className="min-h-[92vh] flex flex-col items-center justify-center text-center relative">
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mb-8"
                >
                    <div className="relative w-36 h-36 mx-auto">
                        <div className="absolute -inset-3 rounded-full blur-xl opacity-30 animate-pulse-slow"
                             style={{ background: 'var(--color-text-tertiary)' }} />
                        <div className="relative w-36 h-36 rounded-full overflow-hidden ring-1 ring-black/5 dark:ring-white/10 shadow-xl">
                            <img src={profileImg} alt="Adrien Lagarrigue" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.div>

                <motion.h1
                    {...fadeUp}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-hero max-w-3xl"
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    {portfolioData.profile.name}
                </motion.h1>

                <motion.p
                    {...fadeUp}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-lg md:text-xl font-light max-w-xl mx-auto mt-4"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    {portfolioData.profile.role}
                </motion.p>

                <motion.p
                    {...fadeUp}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-sm max-w-lg mx-auto mt-6 leading-relaxed"
                    style={{ color: 'var(--color-text-tertiary)' }}
                >
                    {portfolioData.profile.bio}
                </motion.p>

                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex flex-col sm:flex-row gap-3 mt-10"
                >
                    <button
                        onClick={scrollToNext}
                        className="group px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-80 flex items-center justify-center gap-2"
                        style={{
                            backgroundColor: 'var(--color-text-primary)',
                            color: 'var(--color-bg)',
                        }}
                    >
                        Découvrir mon portfolio
                        <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
                    </button>
                    <button
                        onClick={() => document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 border"
                        style={{
                            color: 'var(--color-text-primary)',
                            borderColor: 'var(--color-border)',
                            backgroundColor: 'var(--color-bg-secondary)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-text-primary)';
                            e.currentTarget.style.color = 'var(--color-bg)';
                            e.currentTarget.style.borderColor = 'var(--color-text-primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)';
                            e.currentTarget.style.color = 'var(--color-text-primary)';
                            e.currentTarget.style.borderColor = 'var(--color-border)';
                        }}
                    >
                        <Download size={15} />
                        Voir mon CV
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <ArrowDown size={20} style={{ color: 'var(--color-text-tertiary)' }} />
                    </motion.div>
                </motion.div>
            </section>

            {/* Sections */}
            <Divider />
            <section><Competencies /></section>
            <Divider />
            <section><Projects /></section>
            <Divider />
            <section id="cv" className="py-24"><CV /></section>
            <Divider />
            <section id="contact" className="py-24"><Contact /></section>
        </div>
    );
};

const Divider = () => (
    <div className="w-full max-w-md mx-auto py-4">
        <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, var(--color-border), transparent)' }} />
    </div>
);

export default Home;
