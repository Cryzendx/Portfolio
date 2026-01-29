import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const CV = () => {
    return (
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gradient inline-block">Mon Curriculum Vitae</h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-surface border border-border rounded-xl p-8 shadow-lg mb-8"
            >
                <div className="aspect-[1/1.4] w-full max-w-2xl mx-auto bg-white flex items-center justify-center text-gray-800 mb-8 rounded shadow-inner overflow-hidden">
                    <iframe src="/CV_Adrien_Lagarrigue.pdf" className="w-full h-full" title="CV Preview"></iframe>
                </div>

                <a
                    href="/CV_Adrien_Lagarrigue.pdf"
                    download="CV_Adrien_Lagarrigue.pdf"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primaryHover transition-all shadow-lg hover:shadow-primary/25"
                >
                    <Download size={20} />
                    Télécharger le CV (PDF)
                </a>
            </motion.div>
        </div>
    );
};

export default CV;
