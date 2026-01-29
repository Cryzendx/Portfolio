/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                surface: '#121212',
                surfaceHighlight: '#1E1E1E',
                primary: '#3b82f6', // Professional Blue
                primaryHover: '#2563eb',
                text: '#e5e5e5',
                textMuted: '#a3a3a3',
                border: '#262626',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
