import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import clsx from "clsx"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="secondary"
      size="icon"
      className="relative m-3 rounded-full cursor-pointer"
      aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
    >
      <Sun
        className={clsx(
          "h-[1.2rem] w-[1.2rem] absolute transition-all duration-500 ease-in-out",
          theme === "light"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-0"
        )}
      />
      <Moon
        className={clsx(
          "h-[1.2rem] w-[1.2rem] absolute transition-all duration-500 ease-in-out",
          theme === "dark"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0"
        )}
      />
    </Button>
  )
}
