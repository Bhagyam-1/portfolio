/** @type {import('tailwindcss').Config} */
export default {
    dark: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
            primary: 'var(--primary)',
            secondary: 'var(--secondary)',
            text: 'var(--text)',
            background: 'var(--background)'
        }
      },
    },
    plugins: [],
};