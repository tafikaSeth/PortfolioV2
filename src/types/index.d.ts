export interface ProjectProps {
    image: string
    title: string
    content: string
    client?: string
    year: number
    url: string
    stack: string[]
    type?: 'frontend' | 'mobile'
}
export interface ContactFormData {
    from_name: string
    email: string
    message: string
}
export interface VelocityTextProps {
    children: React.ReactNode;
    baseVelocity: number;
    scrollContainerRef?: React.RefObject<HTMLElement>;
    className?: string;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: VelocityMapping;
    parallaxClassName?: string;
    scrollerClassName?: string;
    parallaxStyle?: React.CSSProperties;
    scrollerStyle?: React.CSSProperties;
}

export interface ScrollVelocityProps {
    scrollContainerRef?: React.RefObject<HTMLElement>;
    texts: string[];
    velocity?: number;
    className?: string;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: VelocityMapping;
    parallaxClassName?: string;
    scrollerClassName?: string;
    parallaxStyle?: React.CSSProperties;
    scrollerStyle?: React.CSSProperties;
}

export interface ServiceConfig {
    titleKey: string;
    descriptionKey: string;
    icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    iconColor: string;
}
