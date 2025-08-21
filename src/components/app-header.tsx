import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import clsx from "clsx";
import AvatarWithDialog from "./avatar-with-dialog";
import { NAVIGATION } from "@/constants";

export default function Navbar() {
    const [active, setActive] = useState("Projets");
    const [scrolled, setScrolled] = useState(false);

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
                        ? "bg-gray-900"
                        : "bg-transparent"
                )}
            >
                <h1 className="text-4xl font-bold eagle-regular text-white">SETH</h1>
                <div className="hidden md:flex gap-10 text-md">
                    {NAVIGATION.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleClick(item.link)}
                            className={`flex cursor-pointer items-center gap-2 transition ${active === item.link ? "text-green-400" : "text-white"
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <AvatarWithDialog />
                    <ModeToggle />
                </div>
            </div>


            <div className="flex justify-center items-center gap-8 md:hidden fixed bottom-0 left-0 w-full h-[7%] bg-black border-t border-gray-700 z-50">
                    {NAVIGATION.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleClick(item.link)}
                            className={`flex cursor-pointer items-center gap-2 transition ${active === item.link ? "text-green-400" : "text-white"
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
            </div>
        </nav>
    );
}
