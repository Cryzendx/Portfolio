import React, { useRef, useState, useCallback } from 'react';

const GlowCard = ({ children, className = '', style = {}, ...props }) => {
    const cardRef = useRef(null);
    const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setGlowPos({ x, y });
        setTilt({
            x: ((y - rect.height / 2) / rect.height) * -2.5,
            y: ((x - rect.width / 2) / rect.width) * 2.5,
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        setTilt({ x: 0, y: 0 });
    }, []);

    return (
        <div
            ref={cardRef}
            className={`card relative overflow-hidden ${className}`}
            style={{
                ...style,
                transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: isHovered
                    ? 'transform 0.15s ease-out, border-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)'
                    : 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
                willChange: 'transform',
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {/* Glow effect */}
            <div
                className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-500"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, var(--color-accent), transparent 40%)`,
                    maskImage: 'linear-gradient(black, black)',
                    WebkitMaskImage: 'linear-gradient(black, black)',
                }}
            />
            {/* Border glow */}
            <div
                className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-500"
                style={{
                    opacity: isHovered ? 0.15 : 0,
                    background: `radial-gradient(300px circle at ${glowPos.x}px ${glowPos.y}px, var(--color-accent), transparent 40%)`,
                }}
            />
            {/* Content (above glow) */}
            <div className="relative z-10 flex flex-col" style={{ background: 'var(--color-card-bg)', borderRadius: 'inherit', margin: '1px', minHeight: 'calc(100% - 2px)' }}>
                {children}
            </div>
        </div>
    );
};

export default GlowCard;
