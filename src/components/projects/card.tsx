import { Card, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ModalProject } from "../modals/project";
import type { ProjectProps } from "@/types";
import { getImage } from "@/lib/cloudinary";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";

export function ProjectCard(props: ProjectProps) {
    const { image, title } = props
    const cloudImage = getImage(image, 600);

    return (
        <Card className="w-full max-w-sm flex gap-0 flex-col overflow-hidden rounded-sm shadow-lg bg-blue-950 border-none p-0">
            <div className="group overflow-hidden">
                <AdvancedImage
                    cldImg={cloudImage}
                    alt="Background image"
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:shadow-2xl"
                    plugins={[lazyload(), placeholder({ mode: "sepia" })]}
                />
            </div>
            <CardFooter className="bg-background border border-b-gray-90/50 flex justify-center rounded-b-sm cursor-pointer w-full font-bold py-2">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="text-foreground sansation-bold w-full text-center cursor-pointer" aria-label={`Button voir le projet ${title}`}>
                            {title}
                        </button>
                    </DialogTrigger>
                    <DialogContent className="w-[95vw] max-w-sm xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl border-none p-0 max-h-[95vh] overflow-hidden">
                        <div className="max-h-[95vh] overflow-y-auto">
                            <ModalProject {...props} />
                        </div>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    );
}
