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
      { value: '3', label: "Années d'expérience" },
    { value: '10', label: 'Projets réalisés' },
    { value: '2', label: "Projets livrés" },
  ];

  const displayStats = stats || defaultStats;

  return (
    <Card className="relative overflow-hidden border-foreground p-0 hover:shadow-2xl transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="w-full h-[300px] md:h-[350px] lg:h-[400px] relative">
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

        <div className="py-8 px-6 bg-background">
          <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {displayStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-3 sansation-bold">
                  {stat.value}
                </div>
                <div className="text-base md:text-lg lg:text-xl text-foreground sansation-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;