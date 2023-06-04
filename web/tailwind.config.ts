module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    300: "#996DFF",
                    500: "#8257e6",
                },
            },
            borderRadius: {
                md: "4px",
            },
            dropShadow: {
                sm: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
