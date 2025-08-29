import { useEffect, useState, type JSX } from "react";
import { Home, Briefcase, Layers, Mail } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import clsx from "clsx";
import AvatarWithDialog from "./avatar-with-dialog";
import { NAVIGATION } from "@/constants";
import LanguageSwitcher from "./language-switcher";
import { useTranslation } from "react-i18next";

const ICONS: Record<string, JSX.Element> = {
    home: <Home size={20} />,
    project: <Briefcase size={20} />,
    stack: <Layers size={20} />,
    contact: <Mail size={20} />,
};

export default function Navbar() {
    const [active, setActive] = useState("Projets");
    const [scrolled, setScrolled] = useState(false);
    const { t } = useTranslation();

    const handleClick = (id: string) => {
        setActive(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav className="text-white">

            <div
                className={clsx(
                    "flex fixed top-0 left-0 w-full justify-around items-center px-6 py-4 transition-colors duration-500 z-50",
                    scrolled
                        ? "bg-black"
                        : "bg-transparent"
                )}
            >
                <h1 className="text-4xl font-bold sansation-bold text-white">SETH</h1>
                <div className="hidden md:flex gap-10 text-md">
                    {NAVIGATION.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => handleClick(item.link)}
                            className={`flex cursor-pointer items-center sansation-regular gap-2 transition ${active === item.link ? "text-green-400" : "text-white"
                                }`}
                        >
                            <span className={`icon-${item.icon}`} />
                            {t(`nav.${item.key}`)}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-3">
                        <AvatarWithDialog />
                    </div>
                    <ModeToggle />
                    <LanguageSwitcher />
                </div>
            </div>


            <div className="flex justify-center items-center gap-8 md:hidden fixed bottom-0 left-0 w-full h-[7%] bg-black border-t border-gray-700 z-50">
                {NAVIGATION.map((item) => (
                    <button
                        key={item.key}
                        onClick={() => handleClick(item.link)}
                        className={`flex flex-col items-center cursor-pointer sansation-regular gap-1 transition ${active === item.link ? "text-green-400" : "text-white"
                            }`}
                    >
                        {ICONS[item.icon]}
                        <span className="text-xs">{t(`nav.${item.key}`)}</span>
                    </button>
                ))}
            </div>
            <div className="md:hidden fixed bottom-20 right-4 z-50">
                <AvatarWithDialog className="w-14 h-14 border-2 border-foreground"/>
            </div>
        </nav>
    );
}
