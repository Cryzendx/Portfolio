import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
    const [highlightedId, setHighlightedId] = useState(null);

    // Listen for hash changes to highlight projects from Competencies
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash.startsWith('#P')) {
                const id = hash.substring(1);
                setHighlightedId(id);
                // Clear highlight after a few seconds
                setTimeout(() => setHighlightedId(null), 3000);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        // Initial check
        handleHashChange();

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const scrollToCompetence = (compId) => {
        const element = document.getElementById("competences");
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
            // Update hash to trigger highlight in Competencies component
            window.location.hash = `#${compId}`;
        }
    }

    return (
        <div id="projets" className="py-20">
            <h2 className="text-3xl font-bold mb-12 text-gradient inline-block">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project, index) => {
                    const isHighlighted = highlightedId === project.id;
                    return (
                        <motion.div
                            id={project.id}
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group bg-surface border rounded-xl overflow-hidden transition-all duration-500 shadow-lg ${isHighlighted
                                    ? 'border-primary ring-2 ring-primary scale-105 z-10'
                                    : 'border-border hover:border-primary/50 hover:shadow-primary/10'
                                }`}
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                    <p className="text-white text-sm">{project.summary}</p>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-text mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full inline-block">
                                        {project.type}
                                    </span>
                                </div>

                                <p className="text-textMuted text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="mb-4 pt-4 border-t border-border/50">
                                    <p className="text-xs text-textMuted uppercase font-semibold mb-2">Compétences :</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.competencies.map(compId => {
                                            const comp = portfolioData.competencies.find(c => c.id === compId);
                                            return (
                                                <button
                                                    key={compId}
                                                    onClick={() => scrollToCompetence(compId)}
                                                    className="text-xs bg-surfaceHighlight hover:bg-primary hover:text-white transition-colors px-2 py-1 rounded text-textMuted border border-border cursor-pointer"
                                                    title={comp?.title}
                                                >
                                                    {comp?.title} (Transitivité 🔗)
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="text-xs text-textMuted font-mono">#{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
