import { useLayoutEffect } from "react"
import { animatePageIn } from "./lib/utils"

export default function Template({ children }: { children: React.ReactNode }) {

    useLayoutEffect(() => {
        animatePageIn()
    }, [])

    return (
        <div>
            <div
                id="banner-1"
                className="hidden md:flex min-h-screen fixed top-0 left-0 w-1/4 z-50
             bg-[oklch(14.139%_0.07186_309.138)] dark:bg-white
             items-center justify-center text-9xl font-bold select-none
             text-white dark:text-[oklch(14.139%_0.07186_309.138)]"
            >
                S
            </div>

            <div
                id="banner-2"
                className="hidden md:flex min-h-screen fixed top-0 left-1/4 w-1/4 z-50
             bg-[oklch(14.139%_0.07186_309.138)] dark:bg-white
             items-center justify-center text-9xl font-bold select-none
             text-white dark:text-[oklch(14.139%_0.07186_309.138)]"
            >
                E
            </div>

            <div
                id="banner-3"
                className="hidden md:flex min-h-screen fixed top-0 left-2/4 w-1/4 z-50
             bg-[oklch(14.139%_0.07186_309.138)] dark:bg-white
             items-center justify-center text-9xl font-bold select-none
             text-white dark:text-[oklch(14.139%_0.07186_309.138)]"
            >
                T
            </div>

            <div
                id="banner-4"
                className="hidden md:flex min-h-screen fixed top-0 left-3/4 w-1/4 z-50
             bg-[oklch(14.139%_0.07186_309.138)] dark:bg-white
             items-center justify-center text-9xl font-bold select-none
             text-white dark:text-[oklch(14.139%_0.07186_309.138)]"
            >
                H
            </div>
        
            {children}
        </div>
    )
}
