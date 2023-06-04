import { FeedbackType, feedbackTypes } from "../";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-4">Deixe seu feedback</span>

                <CloseButton />
            </header>

            <div className="flex w-full gap-2 py-8">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="flex w-24 flex-1 flex-col items-center rounded-lg border-2 border-transparent bg-zinc-800 py-5 hover:border-brand-500 focus:border-brand-500 focus:outline-none "
                            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                            type="button"
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
}
