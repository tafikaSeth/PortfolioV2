import { useTranslation } from "react-i18next";

interface ScrollProps {
  texts: string[]
}

export default function ScrollVelocityText({ texts }: ScrollProps) {
  const { t } = useTranslation();

  return (
    <div className="relative w-full overflow-hidden bg-foreground py-10 flex justify-center inset-shadow-sm inset-shadow-indigo-500/50">
      <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-lg lg:text-3xl xl:text-5xl font-extrabold text-background eagle-lake-regular">
        {texts.map((txt, index) => (
          <div
            key={index}
            className="whitespace-nowrap flex-shrink-0"
          >
            {t(`scrollText.${txt}`)}
          </div>
        ))}
      </div>
    </div>
  );
}
