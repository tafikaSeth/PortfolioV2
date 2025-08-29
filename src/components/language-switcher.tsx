import { Button } from "@/components/ui/button"
import clsx from "clsx"
import ReactCountryFlag from "react-country-flag"
import { useTranslation } from "react-i18next"

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  const toggleLang = () => {
    i18n.changeLanguage(currentLang === "fr" ? "en" : "fr")
  }

  return (
    <Button
      onClick={toggleLang}
      variant='secondary'
      size="icon"
      className="relative rounded-full cursor-pointer"
      aria-label="Changer la langue"
    >

      <span
        className={clsx(
          "absolute text-lg transition-all duration-500 ease-in-out",
          currentLang === "fr"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0"
        )}
      >
        <ReactCountryFlag
          countryCode="FR"
          svg
          style={{ width: "1.0em", height: "1.5em" }}
          aria-label="French"
        />
      </span>

      <span
        className={clsx(
          "absolute text-lg transition-all duration-500 ease-in-out",
          currentLang === "en"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-0"
        )}
      >
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{ width: "1.0em", height: "1.5em" }}
          aria-label="English"
        />
      </span>
    </Button>
  )
}
