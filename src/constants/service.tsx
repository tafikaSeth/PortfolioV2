import type { ServiceConfig } from "@/types";
import { Code, Plug, Smartphone } from "lucide-react";

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
        titleKey: "serviceApiIntegration",
        descriptionKey: "apiIntegrationDescription",
        icon: Plug,
        iconColor: "text-emerald-600"
    }
];