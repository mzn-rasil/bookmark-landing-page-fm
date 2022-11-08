/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "pri-soft-blue": "hsl(231, 69%, 60%)",
                "pri-soft-red": "hsl(0, 94%, 66%)",
                "neu-grayish-blue": "hsl(229, 8%, 60%)",
                "neu-dark-blue": "hsl(229, 31%, 21%)",
            },
            fontFamily: {
                "rubik": ["Rubik", "sans-serif"],
            }
        },
    },
    plugins: [],
}