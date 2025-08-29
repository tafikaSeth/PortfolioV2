import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "@/components/ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { ModalProfil } from "./modals/profil";
import { BookOpen, CalendarRange, LanguagesIcon } from "lucide-react";

type Props = {
  className?: string
}

export default function AvatarWithDialog({ className }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Avatar className={`cursor-pointer ${className}`}>
                    <AvatarImage src="/assets/images/profile.webp" alt="profile" />
                    <AvatarFallback>Profile</AvatarFallback>
                </Avatar>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[35%] border-none">
                <div className="flex justify-center items-center gap-5 flex-col">
                    <ModalProfil />
                    <h1 className="text-2xl">MON PROFILE</h1>
                </div>
                <ScrollArea className="h-72 w-full">
                    <div className="flex flex-col items-center-safe">
                        <div className="p-4 border-1 border-white rounded-sm w-[90%]">
                            <div className=" flex flex-row items-center gap-5">
                                <Avatar>
                                    <AvatarImage src="/assets/images/profile.png" alt="profile" />
                                    <AvatarFallback>Profile</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h1 className="text-xl">SETH TAFIKA</h1>
                                    <p>Développeur Front & Mobile</p>
                                </div>
                            </div>
                            <Separator className="my-3" />
                            <div className=" flex flex-row items-center gap-5">
                                <Avatar>
                                    <LanguagesIcon />
                                </Avatar>
                                <div>
                                    <h1 className="text-xl">Langues</h1>
                                    <p>Français, Anglais</p>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-xl m-7 self-start md:self-start text-center md:text-left">Diplomes et certifications</h1>
                        <div className="p-4 border-1 border-white rounded-sm w-[90%]">
                            <div className=" flex flex-row items-center gap-5">
                                <Avatar>
                                    <BookOpen />
                                </Avatar>
                                <div>
                                    <h1 className="text-xl">2023: Licence en Informatique </h1>
                                    <p>EMIT-Ecole de Management et d'Innovation Technologique</p>
                                </div>
                            </div>
                            <Separator className="my-3" />
                            <div className=" flex flex-row items-center gap-5">
                                <Avatar>
                                    <CalendarRange />
                                </Avatar>
                                <div>
                                    <h1 className="text-xl">2024: Certification </h1>
                                    <p>2ème-Hackathon "Mois de l'innovation"</p>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-xl m-7 self-start md:self-start text-center md:text-left">Expériences</h1>
                        <div className="p-4 border-1 border-white rounded-sm w-[90%]">
                            <div className=" flex flex-row items-center gap-5">
                                <Avatar>
                                    <BookOpen />
                                </Avatar>
                                <div>
                                    <h1 className="text-xl">Avril 2025 - Maintenant: Développeur Front & mobile </h1>
                                    <p>ESN ARATO Antambohobe Fianarantsoa </p>
                                </div>
                            </div>
                            <Separator className="my-3" />
                            <div className=" flex flex-row items-center gap-5">
                                <Avatar>
                                    <CalendarRange />
                                </Avatar>
                                <div>
                                    <h1 className="text-xl">2024: Dévelopeur mobile</h1>
                                    <p>Projet PNUD</p>
                                </div>
                            </div>
                            <Separator className="my-3" />
                            <div className=" flex flex-row items-center gap-5">
                                <Avatar>
                                    <CalendarRange />
                                </Avatar>
                                <div>
                                    <h1 className="text-xl">2024: Dévelopeur Frontend</h1>
                                    <p>Hackathon "Mois de l'innovation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
