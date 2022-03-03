const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                tiny: '.60rem',
            },
            colors: {
                'blue-sapphire': '#21587d',
                isabelline: '#f8f5f1',
                'space-cadet': '#1d1a44',
                'indigo-dye': '#1F1C2D',
            },
            boxShadow: {
                'white-light': '5px 5px 10px 3px rgba(255, 255, 255, 0.3)',
            },
            fontFamily: {
                inter: ['Inter, sans-serif'],
            },
            height: {
                header: '6rem',
                body: 'calc(100vh - theme("height.header"))',
            },
            minHeight: {
                body: 'calc(100vh - theme("height.header"))',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar'),
    ],
};
