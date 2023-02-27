/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'rojo': '#C6241E',
                'fondo': '#ECE3E6',
                'azul': '#0170F2',
                'verde': '#3BFF1C',
                'blanco2': '#F9FBFE',
                'levantamiento':'#E0F2FE',
                'casoespecial':'#E7E5E4',
                'levantamientoE':'#38BDF8',
                'casoespecialE':'#A8A29E',
            },
            fontSize: {
                'pq': '0.75rem',
            }
        },
    },
    plugins: [],
}