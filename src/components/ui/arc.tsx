export default function SvgArcText() {
    return (
        <svg
            viewBox="0 0 200 100"
            width="350"        // largeur fixe
            height="50"        // hauteur fixe
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                id="arcPath"
                fill="none"
                d="M 20 80 A 80 80 0 0 1 180 80"
            />
            <text
                fill="#A020F0"
                fontSize="20"
                fontWeight="bold"
                fontFamily="Anton, sans-serif"
            >
                <textPath href="#arcPath" startOffset="50%" textAnchor="middle">
                    SETH
                </textPath>
            </text>
        </svg>
    );
}
