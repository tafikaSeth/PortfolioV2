import { Button } from "@/components/ui/button"
import { Badge } from "../ui/badge"
import type { ProjectProps } from "@/types"
import { getImage } from "@/lib/cloudinary";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";

export function ModalProject({ image, title, content, stack, client, year, url }: ProjectProps) {
    const cloudImage = getImage(image, 1000);

    return (
        <div className="rounded-sm overflow-hidden w-full max-w-full">
            {/* Image responsive */}
            <div className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96">
                <AdvancedImage
                    cldImg={cloudImage}
                    alt="Background home image"
                    className="w-full h-full object-cover"
                    plugins={[lazyload(), placeholder({ mode: "blur" })]}
                />
            </div>
            
            {/* Contenu responsive */}
            <div className="bg-background p-3 xs:p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                {/* Titre responsive */}
                <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold sansation-bold leading-tight">
                    {title}
                </h1>
                
                {/* Description responsive */}
                <p className="text-xs xs:text-sm sm:text-base leading-relaxed sansation-regular">
                    {content}.
                </p>
                
                {/* Informations du projet */}
                <div className="text-xs xs:text-sm sm:text-base space-y-1 sm:space-y-2">
                    {client && (
                        <p className="break-words">
                            <span className="font-semibold sansation-bold">Client :</span> {client}
                        </p>
                    )}
                    <p>
                        <span className="font-semibold sansation-bold">Année :</span> {year}
                    </p>
                    <p className="break-all">
                        <span className="font-semibold sansation-bold">URL :</span>{" "}
                        <a
                            href={url}
                            target="_blank"
                            className="text-blue-400 hover:underline transition-colors duration-200"
                        >
                            {url.replace(/^https?:\/\//, "")}
                        </a>
                    </p>
                </div>
                
                {/* Stack badges responsive */}
                <div className="flex flex-wrap gap-1 xs:gap-2">
                    {stack.map((tech) => (
                        <Badge 
                            key={tech} 
                            variant="destructive"
                            className="text-xs xs:text-sm px-2 py-1"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
                
                {/* Bouton responsive */}
                <Button
                    variant="secondary"
                    className="w-full bg-background font-bold sansation-bold text-sm xs:text-base sm:text-lg py-2 sm:py-3 mt-4 sm:mt-6"
                    aria-label="Button visiter le site"
                    asChild
                >
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visiter
                    </a>
                </Button>
            </div>
        </div>
    )
}