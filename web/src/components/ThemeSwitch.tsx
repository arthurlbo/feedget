import { ElementContainer } from "html2canvas/dist/types/dom/element-container";
import { Sun, MoonStars } from "phosphor-react";
import { useState, useEffect } from "react";

export function ThemeSwitch() {
    const [isDarkTheme, setIsDarkTheme] = useState(localStorage.theme === "dark");

    useEffect(() => {
        localStorage.theme = isDarkTheme ? "dark" : "light";

        if (isDarkTheme) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [isDarkTheme]);

    return (
        <button
            type="button"
            className="my-auto ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-700 dark:hover:bg-zinc-600 "
            onClick={() => setIsDarkTheme((s) => !s)}
        >
            {isDarkTheme ? <Sun className="h-5 w-5 " weight="fill" /> : <MoonStars className="h-5 w-5" weight="fill" />}
        </button>
    );
}
