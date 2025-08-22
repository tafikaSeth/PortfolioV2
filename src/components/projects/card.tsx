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
                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:shadow-2xl"
                    plugins={[lazyload(), placeholder({ mode: "blur" })]}
                />
            </div>
            <CardFooter className="bg-background border border-b-gray-90/50 flex justify-center rounded-b-sm cursor-pointer w-full font-bold py-2">
                <Dialog>
                    <DialogTrigger asChild>
                        <span className="text-foreground sansation-bold">
                            {title}
                        </span>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[50%] border-none p-0">
                        <ModalProject {...props} />
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    );
}
