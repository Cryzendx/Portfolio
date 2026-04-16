import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import GlowCard from '../components/GlowCard';

const Competencies = () => {
    const [highlightedId, setHighlightedId] = useState(null);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash.startsWith('#C')) {
                const id = hash.substring(1);
                setHighlightedId(id);
                setTimeout(() => setHighlightedId(null), 3000);
            }
        };
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const scrollToProject = (projId) => {
        const element = document.getElementById('projets');
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
            window.location.hash = `#${projId}`;
        }
    };

    return (
        <div id="competences" className="py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-display" style={{ color: 'var(--color-text-primary)' }}>
                    Compétences
                </h2>
                <p className="mt-4 text-sm max-w-lg mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                    Les compétences clés que j'ai développées au fil de ma formation et de mes expériences professionnelles.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolioData.competencies.map((comp, index) => {
                    const isHighlighted = highlightedId === comp.id;
                    return (
                        <motion.div
                            id={comp.id}
                            key={comp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                        >
                            <GlowCard
                                className="h-full"
                                style={isHighlighted ? {
                                    borderColor: 'var(--color-accent)',
                                    boxShadow: '0 0 0 1px var(--color-accent)',
                                } : {}}
                            >
                                <div className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold flex-shrink-0"
                                            style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg)' }}
                                        >
                                            {comp.id}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                                                {comp.title}
                                            </h3>
                                            <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-tertiary)' }}>
                                                {comp.description}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-secondary)' }}>
                                        {comp.fullDescription}
                                    </p>

                                    <div className="pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                                        <p className="text-[10px] uppercase font-semibold tracking-wider mb-3" style={{ color: 'var(--color-text-tertiary)' }}>
                                            Projets associés
                                        </p>
                                        <div className="flex flex-col gap-1.5">
                                            {comp.projects.map(projId => {
                                                const project = portfolioData.projects.find(p => p.id === projId);
                                                return (
                                                    <button
                                                        key={projId}
                                                        onClick={() => scrollToProject(projId)}
                                                        className="w-full text-left px-3 py-2 rounded-lg text-sm flex justify-between items-center group transition-colors"
                                                        style={{ color: 'var(--color-text-secondary)' }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'var(--color-text-primary)';
                                                            e.currentTarget.style.color = 'var(--color-bg)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'transparent';
                                                            e.currentTarget.style.color = 'var(--color-text-secondary)';
                                                        }}
                                                    >
                                                        <span className="font-medium text-xs">{project?.title}</span>
                                                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </button>
                                                );
                                            })}
                                        </div>
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

export default Competencies;
