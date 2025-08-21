import type { ReactNode } from "react";
import Navbar from "@/components/app-header";
import Footer from "../app-footer";

interface MainLayoutProps {
    children: ReactNode;
    fullWidth?: boolean;
}

export default function MainLayout({ children, fullWidth = true }: MainLayoutProps) {
    console.log(fullWidth);

    return (
        <div className="bg-background">
            <Navbar />
            <div
                className={`flex-1 pb-10 md:pb-10 ${fullWidth ? "" : "flex justify-center items-center"
                    }`}
            >
                <div className={fullWidth ? "w-full" : "w-full max-w-7xl"}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
