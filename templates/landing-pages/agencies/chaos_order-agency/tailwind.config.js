/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./config/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#f9f506",
                "background-light": "#f8f8f5",
                "background-dark": "#23220f",
            },
            fontFamily: {
                "display": ["Spline Sans", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"],
            },
            boxShadow: {
                "neo": "4px 4px 0px 0px #000000",
                "neo-hover": "2px 2px 0px 0px #000000",
                "neo-lg": "8px 8px 0px 0px #000000",
            },
            animation: {
                'marquee': 'marquee 20s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            },
        },
    },
    plugins: [],
}
