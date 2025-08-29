import { ArrowBigRight } from "lucide-react";
import type { CustomArrowProps } from "react-slick";

export default function NextArrow({ onClick }: CustomArrowProps) {
    return (
        <button
            className="absolute top-1/2 right-8 -translate-y-1/2 z-10 bg-background p-2 rounded-full cursor-pointer"
            onClick={onClick}
            aria-label="Slide suivant"
        >
            <ArrowBigRight />
        </button>
    );
}