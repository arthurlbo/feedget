import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto",
        },
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: "Imagem de uma lampada",
        },
    },

    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: "Imagem de um balao de pensamentos",
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="relative mb-4 flex w-[calc(100vw-2rem)] flex-col items-center rounded-2xl bg-zinc-900 p-4 shadow-lg md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="group text-xs text-neutral-400">
                Feito com 💜 por
                <a
                    className="group-hover:text-violet-400 group-hover:underline  group-hover:underline-offset-2"
                    href="https://github.com/arthurlbo"
                    target="_blank"
                    rel="noreferrer"
                >
                    {" "}
                    Arthur Carneiro Lobo
                </a>
            </footer>
        </div>
    );
}
