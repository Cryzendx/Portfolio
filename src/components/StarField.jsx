import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const DARK_COUNT = 260;
const DARK_MOUSE_RADIUS = 200;
const DARK_PUSH_STRENGTH = 30;

const LIGHT_COUNT = 80;
const LIGHT_MOUSE_RADIUS = 200;
const LIGHT_CONNECT_DIST = 120;

const LIGHT_COLORS = [
    [0, 113, 227],
    [88, 86, 214],
    [50, 170, 255],
    [165, 120, 230],
    [0, 200, 190],
];

const StarField = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -500, y: -500 });
    const darkParticlesRef = useRef([]);
    const lightParticlesRef = useRef([]);
    const animFrameRef = useRef(null);
    const themeRef = useRef(false);

    const { isDark } = useTheme();
    themeRef.current = isDark;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width, height;

        const init = () => {
            // Dark mode stars
            const dark = [];
            for (let i = 0; i < DARK_COUNT; i++) {
                const bx = Math.random() * width;
                const by = Math.random() * height;
                dark.push({
                    baseX: bx, baseY: by, x: bx, y: by,
                    size: Math.random() * 1.6 + 0.2,
                    opacity: Math.random() * 0.4 + 0.1,
                    pulseSpeed: Math.random() * 0.003 + 0.001,
                    pulseOffset: Math.random() * Math.PI * 2,
                });
            }
            darkParticlesRef.current = dark;

            // Light mode: floating constellation particles
            const light = [];
            for (let i = 0; i < LIGHT_COUNT; i++) {
                const bx = Math.random() * width;
                const by = Math.random() * height;
                light.push({
                    baseX: bx, baseY: by, x: bx, y: by,
                    size: Math.random() * 2 + 1,
                    baseOpacity: Math.random() * 0.15 + 0.1,
                    color: LIGHT_COLORS[Math.floor(Math.random() * LIGHT_COLORS.length)],
                    driftAngle: Math.random() * Math.PI * 2,
                    driftSpeed: Math.random() * 0.15 + 0.05,
                    pulseSpeed: Math.random() * 0.002 + 0.001,
                    pulseOffset: Math.random() * Math.PI * 2,
                });
            }
            lightParticlesRef.current = light;
        };

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            init();
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        const handleMouseLeave = () => {
            mouseRef.current = { x: -500, y: -500 };
        };

        const animate = (time) => {
            const dark = themeRef.current;
            ctx.clearRect(0, 0, width, height);
            const mouse = mouseRef.current;

            if (!dark) {
                animFrameRef.current = requestAnimationFrame(animate);
                return;
            }

            if (dark) {
                // ===== DARK MODE: stars =====

                // Mouse glow
                if (mouse.x > -100 && mouse.y > -100) {
                    const glow = ctx.createRadialGradient(
                        mouse.x, mouse.y, 0,
                        mouse.x, mouse.y, DARK_MOUSE_RADIUS * 2
                    );
                    glow.addColorStop(0, 'rgba(41, 151, 255, 0.07)');
                    glow.addColorStop(0.4, 'rgba(41, 151, 255, 0.03)');
                    glow.addColorStop(1, 'transparent');
                    ctx.fillStyle = glow;
                    ctx.beginPath();
                    ctx.arc(mouse.x, mouse.y, DARK_MOUSE_RADIUS * 2, 0, Math.PI * 2);
                    ctx.fill();
                }

                const stars = darkParticlesRef.current;
                for (let i = 0; i < stars.length; i++) {
                    const s = stars[i];
                    const pulse = Math.sin(time * s.pulseSpeed + s.pulseOffset);
                    const alpha = s.opacity * (0.7 + 0.3 * pulse);

                    // Mouse push
                    const dx = s.baseX - mouse.x;
                    const dy = s.baseY - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    let tx = s.baseX, ty = s.baseY;
                    if (dist < DARK_MOUSE_RADIUS && dist > 0) {
                        const force = (1 - dist / DARK_MOUSE_RADIUS) * DARK_PUSH_STRENGTH;
                        tx += (dx / dist) * force;
                        ty += (dy / dist) * force;
                    }
                    s.x += (tx - s.x) * 0.05;
                    s.y += (ty - s.y) * 0.05;

                    ctx.fillStyle = `rgba(190, 200, 220, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                    ctx.fill();

                    if (s.size > 1.0) {
                        ctx.fillStyle = `rgba(140, 170, 255, ${alpha * 0.08})`;
                        ctx.beginPath();
                        ctx.arc(s.x, s.y, s.size * 3, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            } else {
                // ===== LIGHT MODE: interactive constellation =====
                const particles = lightParticlesRef.current;
                const mouseActive = mouse.x > -100 && mouse.y > -100;

                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i];

                    // Slow drift
                    p.baseX += Math.cos(p.driftAngle) * p.driftSpeed;
                    p.baseY += Math.sin(p.driftAngle) * p.driftSpeed;

                    // Wrap around edges
                    if (p.baseX < -30) p.baseX = width + 30;
                    if (p.baseX > width + 30) p.baseX = -30;
                    if (p.baseY < -30) p.baseY = height + 30;
                    if (p.baseY > height + 30) p.baseY = -30;

                    // Mouse interaction
                    let tx = p.baseX, ty = p.baseY;
                    let opacity = p.baseOpacity;

                    if (mouseActive) {
                        const dx = p.baseX - mouse.x;
                        const dy = p.baseY - mouse.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < LIGHT_MOUSE_RADIUS && dist > 0) {
                            // Push away from mouse
                            const force = (1 - dist / LIGHT_MOUSE_RADIUS) * 20;
                            tx += (dx / dist) * force;
                            ty += (dy / dist) * force;
                            // Brighten near mouse
                            opacity += (1 - dist / LIGHT_MOUSE_RADIUS) * 0.35;
                        }
                    }

                    // Pulse
                    const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset);
                    opacity *= (0.8 + 0.2 * pulse);

                    // Smooth movement
                    p.x += (tx - p.x) * 0.05;
                    p.y += (ty - p.y) * 0.05;

                    const [r, g, b] = p.color;

                    // Draw particle
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();

                    // Soft glow for larger particles
                    if (p.size > 1.5) {
                        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.12})`;
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }

                // Connecting lines near mouse (constellation effect)
                if (mouseActive) {
                    ctx.lineWidth = 0.5;
                    const connectRadius = LIGHT_MOUSE_RADIUS * 1.5;

                    for (let i = 0; i < particles.length; i++) {
                        const a = particles[i];
                        const adx = a.x - mouse.x;
                        const ady = a.y - mouse.y;
                        const aDistMouse = Math.sqrt(adx * adx + ady * ady);
                        if (aDistMouse > connectRadius) continue;

                        for (let j = i + 1; j < particles.length; j++) {
                            const b = particles[j];
                            const bdx = b.x - mouse.x;
                            const bdy = b.y - mouse.y;
                            const bDistMouse = Math.sqrt(bdx * bdx + bdy * bdy);
                            if (bDistMouse > connectRadius) continue;

                            const dx = a.x - b.x;
                            const dy = a.y - b.y;
                            const dist = Math.sqrt(dx * dx + dy * dy);

                            if (dist < LIGHT_CONNECT_DIST) {
                                const lineAlpha = (1 - dist / LIGHT_CONNECT_DIST) * 0.12;
                                ctx.strokeStyle = `rgba(0, 113, 227, ${lineAlpha})`;
                                ctx.beginPath();
                                ctx.moveTo(a.x, a.y);
                                ctx.lineTo(b.x, b.y);
                                ctx.stroke();
                            }
                        }
                    }
                }

                // Mouse glow
                if (mouseActive) {
                    const glow = ctx.createRadialGradient(
                        mouse.x, mouse.y, 0,
                        mouse.x, mouse.y, 200
                    );
                    glow.addColorStop(0, 'rgba(0, 113, 227, 0.06)');
                    glow.addColorStop(0.4, 'rgba(88, 86, 214, 0.03)');
                    glow.addColorStop(1, 'transparent');
                    ctx.fillStyle = glow;
                    ctx.beginPath();
                    ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animFrameRef.current = requestAnimationFrame(animate);
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    useEffect(() => {
        themeRef.current = isDark;
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
};

export default StarField;
