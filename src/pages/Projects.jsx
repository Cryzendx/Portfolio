import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import GlowCard from '../components/GlowCard';

const Projects = () => {
    const [highlightedId, setHighlightedId] = useState(null);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash.startsWith('#P')) {
                const id = hash.substring(1);
                setHighlightedId(id);
                setTimeout(() => setHighlightedId(null), 3000);
            }
        };
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const scrollToCompetence = (compId) => {
        const element = document.getElementById('competences');
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
            window.location.hash = `#${compId}`;
        }
    };

    return (
        <div id="projets" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-display" style={{ color: 'var(--color-text-primary)' }}>
                    Projets
                </h2>
                <p className="mt-4 text-sm max-w-lg mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                    Les projets et expériences qui illustrent mes compétences en action.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {portfolioData.projects.map((project, index) => {
                    const isHighlighted = highlightedId === project.id;
                    return (
                        <motion.div
                            id={project.id}
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <GlowCard
                                className="h-full group"
                                style={isHighlighted ? {
                                    borderColor: 'var(--color-accent)',
                                    boxShadow: '0 0 0 1px var(--color-accent)',
                                } : {}}
                            >
                                {/* Image */}
                                <div className="aspect-[16/9] overflow-hidden relative rounded-t-[inherit]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                                    />
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
                                    >
                                        <p className="text-white text-sm font-light">{project.summary}</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <div>
                                            <h3 className="text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                                                {project.title}
                                            </h3>
                                            <span
                                                className="text-[11px] font-medium mt-1 inline-block px-2 py-0.5 rounded-full"
                                                style={{
                                                    color: 'var(--color-accent)',
                                                    backgroundColor: 'var(--color-bg-tertiary)',
                                                }}
                                            >
                                                {project.type}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                                        {project.description}
                                    </p>

                                    {/* Competencies links */}
                                    <div className="pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                                        <p className="text-[10px] uppercase font-semibold tracking-wider mb-2" style={{ color: 'var(--color-text-tertiary)' }}>
                                            Compétences mobilisées
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.competencies.map(compId => {
                                                const comp = portfolioData.competencies.find(c => c.id === compId);
                                                return (
                                                    <button
                                                        key={compId}
                                                        onClick={() => scrollToCompetence(compId)}
                                                        className="text-[11px] font-medium px-2.5 py-1 rounded-full border transition-all duration-200 flex items-center gap-1"
                                                        style={{
                                                            color: 'var(--color-text-secondary)',
                                                            borderColor: 'var(--color-border)',
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'var(--color-text-primary)';
                                                            e.currentTarget.style.color = 'var(--color-bg)';
                                                            e.currentTarget.style.borderColor = 'var(--color-text-primary)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'transparent';
                                                            e.currentTarget.style.color = 'var(--color-text-secondary)';
                                                            e.currentTarget.style.borderColor = 'var(--color-border)';
                                                        }}
                                                    >
                                                        {comp?.title}
                                                        <ArrowUpRight size={10} />
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.technologies.map(tech => (
                                            <span
                                                key={tech}
                                                className="text-[10px] font-mono"
                                                style={{ color: 'var(--color-text-tertiary)' }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </GlowCard>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
