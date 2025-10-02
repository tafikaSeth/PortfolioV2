import type { ServiceConfig } from "@/types";
import { Briefcase, Code, Globe, Plug, Smartphone } from "lucide-react";

export const SERVICES_CONFIG: ServiceConfig[] = [
    {
        titleKey: "serviceWebDev",
        descriptionKey: "webDevDescription",
        icon: Code,
        iconColor: "text-blue-600"
    },
    {
        titleKey: "serviceMobileDev",
        descriptionKey: "mobileDevDescription",
        icon: Smartphone,
        iconColor: "text-purple-600"
    },
    {
        titleKey: "servicePortfolio",
        descriptionKey: "portfolioDescription",
        icon: Briefcase,
        iconColor: "text-orange-600"
    },
    {
        titleKey: "serviceShowcase",
        descriptionKey: "showcaseDescription",
        icon: Globe,
        iconColor: "text-cyan-600"
    },
    {
        titleKey: "serviceApiIntegration",
        descriptionKey: "apiIntegrationDescription",
        icon: Plug,
        iconColor: "text-emerald-600"
    }
];