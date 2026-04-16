import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import GlowCard from '../components/GlowCard';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message envoyé ! (Simulation)');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        { icon: Mail, label: portfolioData.profile.email, href: `mailto:${portfolioData.profile.email}` },
        { icon: Phone, label: portfolioData.profile.phone, href: `tel:${portfolioData.profile.phone}` },
        { icon: MapPin, label: portfolioData.profile.address, href: null },
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-display" style={{ color: 'var(--color-text-primary)' }}>
                    Contact
                </h2>
                <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                    Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="space-y-5">
                        {contactInfo.map(({ icon: Icon, label, href }) => (
                            <div key={label} className="flex items-center gap-4">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
                                >
                                    <Icon size={16} style={{ color: 'var(--color-text-secondary)' }} />
                                </div>
                                {href ? (
                                    <a
                                        href={href}
                                        className="text-sm transition-colors duration-200"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                                    >
                                        {label}
                                    </a>
                                ) : (
                                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                        {label}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-10 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
                        <a
                            href={portfolioData.profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                            style={{ backgroundColor: 'var(--color-bg-tertiary)', color: 'var(--color-text-secondary)' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--color-text-primary)';
                                e.currentTarget.style.color = 'var(--color-bg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--color-bg-tertiary)';
                                e.currentTarget.style.color = 'var(--color-text-secondary)';
                            }}
                        >
                            <Github size={16} />
                        </a>
                        <a
                            href={portfolioData.profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                            style={{ backgroundColor: 'var(--color-bg-tertiary)', color: 'var(--color-text-secondary)' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#0077b5';
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--color-bg-tertiary)';
                                e.currentTarget.style.color = 'var(--color-text-secondary)';
                            }}
                        >
                            <Linkedin size={16} />
                        </a>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <GlowCard>
                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-xs font-medium mb-1.5"
                                    style={{ color: 'var(--color-text-tertiary)' }}
                                >
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Votre nom"
                                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 border"
                                    style={{
                                        backgroundColor: 'var(--color-bg-tertiary)',
                                        borderColor: 'var(--color-border)',
                                        color: 'var(--color-text-primary)',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-xs font-medium mb-1.5"
                                    style={{ color: 'var(--color-text-tertiary)' }}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="votre@email.com"
                                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 border"
                                    style={{
                                        backgroundColor: 'var(--color-bg-tertiary)',
                                        borderColor: 'var(--color-border)',
                                        color: 'var(--color-text-primary)',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-xs font-medium mb-1.5"
                                    style={{ color: 'var(--color-text-tertiary)' }}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder="Votre message..."
                                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 border resize-none"
                                    style={{
                                        backgroundColor: 'var(--color-bg-tertiary)',
                                        borderColor: 'var(--color-border)',
                                        color: 'var(--color-text-primary)',
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:opacity-80 flex items-center justify-center gap-2"
                                style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg)' }}
                            >
                                <Send size={14} />
                                Envoyer
                            </button>
                        </form>
                    </GlowCard>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
