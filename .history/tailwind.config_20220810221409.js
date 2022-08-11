module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    variants: {
        extend: {
            zIndex: ["hover", "active"],
            fontSize: ["hover", "active"],
            display: ["group-hover"],
        },
    },
};
