import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message envoyé ! (Simulation)');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gradient inline-block">Me Contacter</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-bold mb-6 text-text">Parlons de votre projet</h3>
                    <p className="text-textMuted mb-8 leading-relaxed">
                        Je suis actuellement à la recherche d'opportunités de stage ou d'emploi.
                        N'hésitez pas à me contacter si vous avez une question ou si vous souhaitez simplement échanger.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors">
                            <div className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center">
                                <Mail size={20} />
                            </div>
                            <a href={`mailto:${portfolioData.profile.email}`}>{portfolioData.profile.email}</a>
                        </div>

                        <div className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors">
                            <div className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center">
                                <Phone size={20} />
                            </div>
                            <a href={`tel:${portfolioData.profile.phone}`}>{portfolioData.profile.phone}</a>
                        </div>

                        <div className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors">
                            <div className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center">
                                <MapPin size={20} />
                            </div>
                            <span>{portfolioData.profile.address}</span>
                        </div>

                        <div className="flex gap-4 mt-8 pt-8 border-t border-border">
                            <a href={portfolioData.profile.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-surfaceHighlight rounded-full text-textMuted hover:text-white hover:bg-primary transition-all duration-300">
                                <Github size={20} />
                            </a>
                            <a href={portfolioData.profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-surfaceHighlight rounded-full text-textMuted hover:text-white hover:bg-[#0077b5] transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-surface p-8 rounded-2xl border border-border shadow-lg"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-textMuted mb-2">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-surfaceHighlight border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-text"
                                placeholder="Votre nom"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-textMuted mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-surfaceHighlight border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-text"
                                placeholder="votre@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-textMuted mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg bg-surfaceHighlight border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-text resize-none"
                                placeholder="Votre message..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-gradient-to-r from-primary to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <Send size={18} />
                            Envoyer
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
