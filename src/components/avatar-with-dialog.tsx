import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"
import { ModalProfil } from "./modals/profil"
import { BookOpen, CalendarRange, LanguagesIcon } from "lucide-react"
import { QuestionResponse } from "./chat/chat"
import { useTranslation } from "react-i18next"

type Props = {
    className?: string
}

export default function AvatarWithDialog({ className }: Props) {
    const [openDialog, setOpenDialog] = useState<"profil" | "chat" | null>(null)
    const { t } = useTranslation();

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className={`cursor-pointer ${className}`}>
                        <AvatarImage src="/assets/images/profile.webp" alt="profile" />
                        <AvatarFallback>Profile</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => setOpenDialog("profil")}>
                        {t("viewMyprofile")}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpenDialog("chat")}>
                        Questions ?
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={openDialog === "profil"} onOpenChange={() => setOpenDialog(null)}>
                <DialogContent className="w-[95vw] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl border-none max-h-[90vh] overflow-hidden">
                    <div className="flex justify-center items-center gap-3 sm:gap-5 flex-col">
                        <ModalProfil />
                        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">MON PROFILE</h1>
                    </div>
                    <ScrollArea className="h-64 sm:h-72 md:h-80 lg:h-96 w-full">
                        <div className="flex flex-col items-center px-2 sm:px-4">
                            <div className="p-3 sm:p-4 border border-white rounded-sm w-full max-w-lg">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <AvatarImage src="/assets/images/profile.webp" alt="profile" />
                                        <AvatarFallback>Profile</AvatarFallback>
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-lg sm:text-xl font-semibold">SETH TAFIKA</h1>
                                        <p className="text-sm sm:text-base">Développeur Front & Mobile</p>
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <LanguagesIcon />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-lg sm:text-xl font-semibold">Langues</h1>
                                        <p className="text-sm sm:text-base">Français, Anglais</p>
                                    </div>
                                </div>
                            </div>

                            <h1 className="text-lg sm:text-xl font-semibold m-4 sm:m-7 self-start text-center sm:text-left w-full">
                                Diplomes et certifications
                            </h1>
                            <div className="p-3 sm:p-4 border border-white rounded-sm w-full max-w-lg">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <BookOpen />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-base sm:text-xl font-semibold">2023: Licence en Informatique</h1>
                                        <p className="text-sm sm:text-base">EMIT-Ecole de Management et d'Innovation Technologique</p>
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <CalendarRange />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-base sm:text-xl font-semibold">2024: Certification</h1>
                                        <p className="text-sm sm:text-base">2ème-Hackathon "Mois de l'innovation"</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section Expériences */}
                            <h1 className="text-lg sm:text-xl font-semibold m-4 sm:m-7 self-start text-center sm:text-left w-full">
                                Expériences
                            </h1>
                            <div className="p-3 sm:p-4 border border-white rounded-sm w-full max-w-lg mb-4">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <BookOpen />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-sm sm:text-xl font-semibold">Avril 2025 - Maintenant: Développeur Front & mobile</h1>
                                        <p className="text-sm sm:text-base">ESN ARATO Antambohobe Fianarantsoa</p>
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <CalendarRange />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-sm sm:text-xl font-semibold">2024: Développeur mobile</h1>
                                        <p className="text-sm sm:text-base">Projet PNUD</p>
                                    </div>
                                </div>
                                <Separator className="my-3" />
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                                    <Avatar className="flex-shrink-0">
                                        <CalendarRange />
                                    </Avatar>
                                    <div className="text-center sm:text-left">
                                        <h1 className="text-sm sm:text-xl font-semibold">2024: Développeur Frontend</h1>
                                        <p className="text-sm sm:text-base">Hackathon "Mois de l'innovation"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                </DialogContent>
            </Dialog>

            <Dialog open={openDialog === "chat"} onOpenChange={() => setOpenDialog(null)}>
                <DialogContent className="w-[95vw] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                    <QuestionResponse />
                </DialogContent>
            </Dialog>
        </>
    )
}