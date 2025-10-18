import { useState } from "react";
import { useLocation } from "wouter";
import { Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const festivals = [
  { id: "dhanteras", name: "Dhanteras", password: "dhanteras123" },
  { id: "choti-diwali", name: "Choti Diwali", password: "choti123" },
  { id: "diwali", name: "Diwali", password: "diwali123" },
  { id: "govardhan-pooja", name: "Govardhan Pooja", password: "govardhan123" },
];

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const [selectedFestival, setSelectedFestival] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGateClick = (festivalId: string) => {
    setSelectedFestival(festivalId);
    setPassword("");
    setError("");
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const festival = festivals.find((f) => f.id === selectedFestival);
    if (festival && password === festival.password) {
      setLocation(`/festival/${selectedFestival}`);
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[hsl(25,15%,15%)] to-[hsl(35,20%,10%)]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[hsl(50,90%,70%)] rounded-full animate-particle-float opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              "--float-x": `${(Math.random() - 0.5) * 200}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="text-center mb-12 space-y-4">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[hsl(45,90%,85%)] drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">
            Festival Celebration
          </h1>
          <p className="font-poppins text-lg md:text-xl text-[hsl(45,60%,75%)] max-w-2xl mx-auto">
            Step through the gates to celebrate the festivals together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {festivals.map((festival) => (
            <button
              key={festival.id}
              onClick={() => handleGateClick(festival.id)}
              data-testid={`gate-${festival.id}`}
              className="group relative bg-gradient-to-br from-[hsl(45,85%,55%,0.15)] to-[hsl(35,75%,60%,0.1)] border-2 border-[hsl(45,85%,55%)] rounded-lg p-8 min-h-[280px] flex flex-col items-center justify-center hover-elevate active-elevate-2 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(45,85%,55%,0.05)] to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 space-y-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[hsl(45,85%,55%,0.2)] border-2 border-[hsl(45,85%,55%)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-10 h-10 text-[hsl(45,90%,70%)]" />
                </div>
                
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-[hsl(45,90%,80%)]">
                  {festival.name}
                </h2>
                
                <div className="flex items-center gap-2 text-[hsl(45,70%,65%)]">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="font-poppins text-sm">Locked</span>
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={selectedFestival !== null} onOpenChange={() => setSelectedFestival(null)}>
        <DialogContent className="bg-[hsl(240,10%,12%)] border-[hsl(45,85%,55%)]">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl text-[hsl(45,90%,80%)]">
              Enter Password
            </DialogTitle>
            <DialogDescription className="font-poppins text-[hsl(45,60%,70%)]">
              Enter the password to unlock {festivals.find((f) => f.id === selectedFestival)?.name}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              data-testid="input-password"
              className="bg-[hsl(240,10%,18%)] border-[hsl(45,85%,55%,0.3)] text-[hsl(45,90%,85%)] placeholder:text-[hsl(45,40%,50%)]"
              autoFocus
            />
            {error && (
              <p className="text-destructive text-sm font-poppins" data-testid="text-error">
                {error}
              </p>
            )}
            <Button
              type="submit"
              data-testid="button-unlock"
              className="w-full bg-[hsl(45,85%,55%)] hover:bg-[hsl(45,85%,60%)] text-[hsl(45,30%,10%)] font-poppins font-semibold"
            >
              Unlock Gate
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
