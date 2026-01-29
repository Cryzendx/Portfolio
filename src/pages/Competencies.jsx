import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Competencies = () => {
    const [highlightedId, setHighlightedId] = useState(null);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash.startsWith('#C')) {
                const id = hash.substring(1); // e.g. "C1"
                setHighlightedId(id);
                setTimeout(() => setHighlightedId(null), 3000);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const scrollToProject = (projId) => {
        const element = document.getElementById("projets");
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
            window.location.hash = `#${projId}`;
        }
    }

    return (
        <div id="competences" className="py-20 min-h-screen flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-12 text-gradient inline-block">Mes Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.competencies.map((comp, index) => {
                    const isHighlighted = highlightedId === comp.id;
                    return (
                        <motion.div
                            id={comp.id}
                            key={comp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bg-surface border rounded-xl p-6 transition-all duration-500 relative overflow-hidden ${isHighlighted
                                    ? 'border-primary ring-2 ring-primary shadow-lg shadow-primary/20 z-10 bg-surfaceHighlight'
                                    : 'border-border hover:border-primary/50'
                                }`}
                        >
                            {isHighlighted && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-bl">
                                    Sélectionné
                                </div>
                            )}

                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                                    {comp.id}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text">{comp.title}</h3>
                                    <p className="text-sm text-textMuted italic">{comp.description}</p>
                                </div>
                            </div>

                            <p className="text-textMuted mb-6 text-sm leading-relaxed border-l-2 border-primary/30 pl-4">
                                {comp.fullDescription}
                            </p>

                            <div className="bg-background/50 rounded-lg p-4">
                                <p className="text-xs text-textMuted uppercase font-bold mb-3 flex items-center gap-2">
                                    Preuves (Projets) :
                                </p>
                                <div className="grid grid-cols-1 gap-2">
                                    {comp.projects.map(projId => {
                                        const project = portfolioData.projects.find(p => p.id === projId);
                                        return (
                                            <button
                                                key={projId}
                                                onClick={() => scrollToProject(projId)}
                                                className="w-full text-left p-2 rounded hover:bg-surfaceHighlight transition-colors border border-transparent hover:border-border flex justify-between items-center group"
                                            >
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-sm group-hover:text-primary transition-colors">{project?.title}</span>
                                                    <span className="text-[10px] text-textMuted">{project?.type}</span>
                                                </div>
                                                <span className="text-xs text-textMuted opacity-0 group-hover:opacity-100 transition-opacity">Voir ➜</span>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    );
};

export default Competencies;
