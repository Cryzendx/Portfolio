import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-text flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
                >
                    {children}
                </motion.div>
            </main>
            <footer className="bg-surface border-t border-border mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p className="text-center text-textMuted text-sm">
                        © {new Date().getFullYear()} Mon Portfolio - BUT Informatique
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
