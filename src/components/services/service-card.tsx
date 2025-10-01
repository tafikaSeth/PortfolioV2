import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  iconColor?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  iconColor = "text-blue-600"
}) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-accent-foreground h-full">
      <CardHeader className="space-y-4">
        <div className="flex justify-center">
          <div className="p-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
            <Icon className={`w-12 h-12 ${iconColor}`} strokeWidth={1.5} />
          </div>
        </div>
        <CardTitle className="text-xl md:text-2xl font-bold text-center text-foreground sansation-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-gray-600 text-sm md:text-base leading-relaxed sansation-regular">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;