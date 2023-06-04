import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
    return (
        <Popover.Button
            className="absolute right-5 top-5 text-zinc-400 hover:text-zinc-100"
            title="Fechar formulario de feedback"
        >
            <X weight="bold" className="h-4 w-4" />
        </Popover.Button>
    );
}
