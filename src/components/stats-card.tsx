import { Card, CardContent } from '@/components/ui/card';
import Waves from './prism';

interface StatItem {
    value: string | number;
    label: string;
}

interface StatsCardProps {
    stats?: StatItem[];
}

const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
    const defaultStats: StatItem[] = [
        { value: '03', label: "Années d'expérience" },
        { value: '12', label: 'Projets réalisés' },
        { value: '02', label: "Projets livrés" },
    ];

    const displayStats = stats || defaultStats;

    return (
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
            <Card className="relative overflow-hidden border-foreground p-0 max-w-6xl mx-auto">
                <CardContent className="p-0">
                    <div className="w-full h-[200px] sm:h-[250px] md:h-[320px] lg:h-[400px] relative">
                        <Waves
                            lineColor="#fff"
                            backgroundColor="black"
                            waveSpeedX={0.02}
                            waveSpeedY={0.01}
                            waveAmpX={40}
                            waveAmpY={20}
                            friction={0.9}
                            tension={0.01}
                            maxCursorMove={120}
                            xGap={12}
                            yGap={36}
                        />
                    </div>

                    <div className="py-6 sm:py-8 px-4 sm:px-6 bg-background">
                        <div
                            className="
                                flex flex-col sm:flex-row flex-wrap 
                                justify-center items-center 
                                gap-6 sm:gap-10 md:gap-12 lg:gap-16
                                text-center
                                w-full
                            "
                        >
                            {displayStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center min-w-[80px] flex-1"
                                >
                                    <div
                                        className="
                                            text-2xl sm:text-3xl md:text-5xl 
                                            lg:text-6xl xl:text-7xl
                                            font-bold text-foreground mb-1 sm:mb-2 sansation-bold
                                        "
                                    >
                                        {stat.value}
                                    </div>
                                    <div
                                        className="
                                            text-xs sm:text-sm md:text-lg 
                                            lg:text-xl text-foreground sansation-bold
                                            whitespace-nowrap
                                        "
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default StatsCard;
