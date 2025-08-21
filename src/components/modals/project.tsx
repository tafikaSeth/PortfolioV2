import { Button } from "@/components/ui/button"
import { Badge } from "../ui/badge"
import type { ProjectProps } from "@/types"
import { getImage } from "@/lib/cloudinary";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";

export function ModalProject({ image, title, content, stack, client, year, url }: ProjectProps) {
    const cloudImage = getImage(image, 1000);
    return (
        <div className="rounded-sm overflow-hidden">
            <div className="w-full h-80">
                <AdvancedImage
                    cldImg={cloudImage}
                    className="w-full h-full object-cover"
                    plugins={[lazyload(), placeholder({ mode: "blur" })]}
                />
            </div>

            <div className="bg-background p-6 space-y-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-sm leading-relaxed">
                    {content}.
                </p>

                <div className="text-sm space-y-1">
                    {client && (
                        <p>
                            <span className="font-semibold">Client :</span> {client}
                        </p>
                    )}
                    <p>
                        <span className="font-semibold">Année :</span> {year}
                    </p>
                    <p>
                        <span className="font-semibold">URL :</span>{" "}
                        <a
                            href={url}
                            target="_blank"
                            className="text-blue-400 hover:underline"
                        >
                            {url.replace(/^https?:\/\//, "")}
                        </a>
                    </p>
                </div>

                <div className="flex gap-2">
                    {stack.map((tech) => (
                        <Badge key={tech} variant="destructive">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <Button
                    variant="secondary"
                    className="w-full bg-chart-4 hover:bg-purple-950 text-white font-bold"
                    asChild
                >
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visiter le site
                    </a>
                </Button>
            </div>
        </div>
    )
}
