import { CloseButton } from "../../CloseButton";

import succesImage from "../../../assets/success.svg";

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex w-[304px]  flex-col items-center py-10">
                <img src={succesImage} alt="Imagem de check finalizado" />

                <span className="mt-2 text-xl">Agradecemos o feedback !</span>

                <button
                    type="button"
                    onClick={onFeedbackRestartRequested}
                    className="mt-6 rounded-md border-transparent bg-zinc-800 px-6 py-2 text-sm leading-6 transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:hover:bg-brand-500 "
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    );
}
