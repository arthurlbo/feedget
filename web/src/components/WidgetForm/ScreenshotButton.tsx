import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import html2canvas from "html2canvas";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
    screenshot: string | null;
    onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector("html")!);
        const based64image = canvas.toDataURL("image/png");

        onScreenshotTook(based64image);

        setIsTakingScreenshot(false);
    }

    if (screenshot) {
        return (
            <button
                type="button"
                onClick={() => onScreenshotTook(null)}
                className="transitions-colors flex h-10 w-10 items-end justify-end rounded-md border-transparent p-1  text-zinc-400 hover:text-zinc-100"
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: "right bottom",
                    backgroundSize: 180,
                }}
            >
                <Trash weight="fill" />
            </button>
        );
    }

    return (
        <button
            type="button"
            className="transitions-colors rounded-md border-transparent bg-zinc-800 p-2 transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
            onClick={handleTakeScreenshot}
        >
            {isTakingScreenshot ? <Loading /> : <Camera className="h-6 w-6 text-zinc-100 " />}
        </button>
    );
}
