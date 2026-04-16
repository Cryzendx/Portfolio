import React from 'react';
import Navbar from './Navbar';
import StarField from './StarField';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col relative" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text-primary)' }}>
            <StarField />
            <Navbar />
            <main className="flex-grow pt-12 relative" style={{ zIndex: 1 }}>
                <div className="w-full max-w-5xl mx-auto px-6">
                    {children}
                </div>
            </main>
            <footer className="mt-auto border-t relative" style={{ zIndex: 1, borderColor: 'var(--color-border)', backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                        &copy; {new Date().getFullYear()} Adrien Lagarrigue
                    </p>
                    <p className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                        BUT Informatique &mdash; Parcours DACS
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
