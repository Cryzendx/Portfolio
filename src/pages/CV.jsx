import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const CV = () => {
    return (
        <div className="max-w-3xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-display" style={{ color: 'var(--color-text-primary)' }}>
                    Curriculum Vitae
                </h2>
                <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                    Mon parcours, mes expériences et ma formation en un coup d'œil.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card mt-12 overflow-hidden"
            >
                <div className="aspect-[1/1.4] w-full">
                    <iframe
                        src={`${import.meta.env.BASE_URL}CV_Adrien_Lagarrigue.pdf`}
                        className="w-full h-full border-0"
                        title="Aperçu du CV"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8"
            >
                <a
                    href={`${import.meta.env.BASE_URL}CV_Adrien_Lagarrigue.pdf`}
                    download="CV_Adrien_Lagarrigue.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-80"
                    style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg)' }}
                >
                    <Download size={16} />
                    Télécharger le CV
                </a>
            </motion.div>
        </div>
    );
};

export default CV;
