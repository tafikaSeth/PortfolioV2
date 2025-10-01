import ServiceCard from "@/components/services/service-card";
import { SERVICES_CONFIG } from '@/constants/service';
import { useTranslation } from "react-i18next";


export default function Services() {
    const { t } = useTranslation();

    return (
        <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl mx-auto">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl sansation-bold font-bold text-center md:text-left">
                {t("serviceTitle")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {SERVICES_CONFIG.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={t(service.titleKey)}
                        description={t(service.descriptionKey)}
                        icon={service.icon}
                        iconColor={service.iconColor}
                    />
                ))}
            </div>
        </div>
    );
}