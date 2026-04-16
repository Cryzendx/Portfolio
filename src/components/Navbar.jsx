import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);

            const sections = ['home', 'competences', 'projets', 'cv', 'contact'];
            for (const section of [...sections].reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = [
        { name: 'Accueil', id: 'home' },
        { name: 'Compétences', id: 'competences' },
        { name: 'Projets', id: 'projets' },
        { name: 'CV', id: 'cv' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ease-apple ${
                scrolled ? 'glass border-b' : 'bg-transparent'
            }`}
            style={{ borderColor: scrolled ? 'var(--color-nav-border)' : 'transparent' }}
        >
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center justify-between h-12">
                    <button
                        onClick={() => scrollToSection('home')}
                        className="text-sm font-semibold tracking-tight"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        Adrien Lagarrigue
                    </button>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                                style={{
                                    color: activeSection === link.id
                                        ? 'var(--color-accent)'
                                        : 'var(--color-text-secondary)',
                                    backgroundColor: activeSection === link.id
                                        ? isDark ? 'rgba(41, 151, 255, 0.1)' : 'rgba(0, 113, 227, 0.08)'
                                        : 'transparent',
                                }}
                            >
                                {link.name}
                            </button>
                        ))}

                        <div className="w-px h-4 mx-2" style={{ backgroundColor: 'var(--color-border)' }} />

                        <button
                            onClick={toggleTheme}
                            className="p-1.5 rounded-full transition-all duration-200 hover:scale-110"
                            style={{ color: 'var(--color-text-secondary)' }}
                            aria-label="Changer le thème"
                        >
                            {isDark ? <Sun size={14} /> : <Moon size={14} />}
                        </button>
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            {isDark ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-full"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            {isOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="md:hidden glass border-t overflow-hidden"
                        style={{ borderColor: 'var(--color-nav-border)' }}
                    >
                        <div className="px-6 py-3 space-y-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.id)}
                                    className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                                    style={{
                                        color: activeSection === link.id
                                            ? 'var(--color-accent)'
                                            : 'var(--color-text-secondary)',
                                    }}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll progress */}
            <div
                className="absolute bottom-0 left-0 h-[2px]"
                style={{
                    width: `${scrollProgress}%`,
                    background: 'var(--color-text-primary)',
                    opacity: scrollProgress > 0 ? 1 : 0,
                    transition: 'width 0.15s linear, opacity 0.3s ease',
                }}
            />
        </nav>
    );
};

export default Navbar;
