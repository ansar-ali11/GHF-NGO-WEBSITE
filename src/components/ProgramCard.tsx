import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  impact: string;
  icon: React.ReactNode;
}

const ProgramCard = ({
  title,
  description,
  image,
  impact,
  icon,
}: ProgramCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth hover-lift">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
        />
        <div className="absolute top-4 left-4 p-3 rounded-full bg-white shadow-lg">
          {icon}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Impact</div>
            <div className="font-semibold text-primary">{impact}</div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:text-primary hover:bg-primary/10"
          >
            Learn More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
