import { useEffect } from "react";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { Widget } from "./components/Widget";

export function App() {
    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    });

    return (
        <>
            <header className="flex h-[72px] w-full  items-center  justify-center bg-zinc-100 drop-shadow-sm dark:bg-zinc-800 ">
                <div className="my-auto h-10 w-40  rounded-lg bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-700 dark:hover:bg-zinc-600 "></div>

                <nav className="mx-40 my-auto flex h-3 items-center justify-center gap-6">
                    <div className="h-3 w-24 rounded-full bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
                    <div className="h-3 w-24 rounded-full bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
                    <div className="h-3 w-24 rounded-full bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
                    <div className="h-3 w-24 rounded-full bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-700 dark:hover:bg-zinc-600"></div>
                </nav>

                <div className="my-auto h-8 w-8 rounded-lg bg-zinc-200 hover:bg-zinc-300  dark:bg-zinc-700 dark:hover:bg-zinc-600 "></div>

                <ThemeSwitch />

                <div className="my-auto ml-4 h-12 w-12 rounded-full bg-zinc-200  hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 "></div>
            </header>

            <main className="mt-8">
                <div className="mx-auto mt-4 w-[1120px] ">
                    <div className="mb-8 flex h-[124px] flex-row justify-center rounded-lg bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 ">
                        <p className="m-auto ml-14 text-zinc-500 dark:text-zinc-400">
                            Experimente enviar um feedback de um bug na aplicação &#128516;
                        </p>
                    </div>

                    <div className="flex w-full flex-wrap gap-8">
                        <div className="h-[310px] w-[352px] rounded-lg  bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"></div>
                        <div className="h-[310px] w-[352px] rounded-lg  bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"></div>
                        <div className="h-[310px] w-[352px] rounded-lg  bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700"></div>
                    </div>
                </div>
            </main>

            <Widget />
        </>
    );
}
