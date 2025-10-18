import { Link } from "wouter";
import { ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaceholderFestivalPageProps {
  festivalName: string;
}

export default function PlaceholderFestivalPage({ festivalName }: PlaceholderFestivalPageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[hsl(240,30%,8%)] to-[hsl(240,25%,12%)]">
      <Link to="/" data-testid="link-home">
        <Button
          variant="ghost"
          className="absolute top-6 left-6 z-50 text-[hsl(45,90%,80%)]"
          data-testid="button-back"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Gates
        </Button>
      </Link>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="text-center space-y-8 max-w-2xl">
          <div className="w-24 h-24 mx-auto rounded-full bg-[hsl(45,85%,55%,0.2)] border-2 border-[hsl(45,85%,55%)] flex items-center justify-center">
            <Construction className="w-12 h-12 text-[hsl(45,90%,70%)]" />
          </div>
          
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[hsl(45,90%,85%)] drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]" data-testid="text-festival-name">
            {festivalName}
          </h1>
          
          <p className="font-poppins text-xl text-[hsl(45,60%,75%)]">
            This celebration is being prepared with love...
          </p>
          
          <p className="font-poppins text-base text-[hsl(45,50%,65%)]">
            Come back soon to experience this special moment together.
          </p>
        </div>
      </div>
    </div>
  );
}
