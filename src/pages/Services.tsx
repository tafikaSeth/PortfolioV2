import ServiceCard from "@/components/services/service-card";
import { SERVICES_CONFIG } from '@/constants/service';
import { useTranslation } from "react-i18next";


export default function Services() {
    const { t } = useTranslation();
    const firstRow = SERVICES_CONFIG.slice(0, 2);
    const secondRow = SERVICES_CONFIG.slice(2);

    return (
        <div className="p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl mx-auto">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl sansation-bold font-bold text-center md:text-left">
                {t("serviceTitle")}
            </h1>
            
            <div className="flex flex-col gap-6 md:gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
                    {firstRow.map((service, index) => (
                        <div key={index} className="lg:col-span-3">
                            <ServiceCard
                                title={t(service.titleKey)}
                                description={t(service.descriptionKey)}
                                icon={service.icon}
                                iconColor={service.iconColor}
                            />
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
                    {secondRow.map((service, index) => (
                        <div key={index + 2} className="lg:col-span-2">
                            <ServiceCard
                                title={t(service.titleKey)}
                                description={t(service.descriptionKey)}
                                icon={service.icon}
                                iconColor={service.iconColor}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}