/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Inter',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'sans-serif',
                ],
            },
            fontSize: {
                'hero': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.03em' }],
                'display': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.02em' }],
            },
            transitionTimingFunction: {
                'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            },
            animation: {
                'pulse-slow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.7' },
                },
            },
        },
    },
    plugins: [],
}
