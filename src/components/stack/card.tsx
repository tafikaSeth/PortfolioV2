import { Card } from "../ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface StackCardProps {
    icon: React.ReactNode;
    label: string;
    bg?: string;
}

export function StackCard({ icon, label, bg = "bg-blue-950" }: StackCardProps) {
    return (
        <Tooltip>
            <Card
                className={`
                    w-full h-[200px] max-w-sm flex justify-center items-center rounded-sm shadow-lg border-none p-0 ${bg}`}
            >
                <TooltipTrigger asChild>
                    <div className="transition-transform duration-500 hover:scale-140">
                        {icon}
                    </div>
                </TooltipTrigger>
            </Card>
            <TooltipContent>
                {label}
            </TooltipContent>
        </Tooltip>
    );
}
