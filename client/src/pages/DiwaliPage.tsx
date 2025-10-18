import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
}

export default function DiwaliPage() {
  const [isLit, setIsLit] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [fireworkCounter, setFireworkCounter] = useState(0);

  const fireworkColors = [
    "hsl(0, 100%, 60%)",
    "hsl(30, 100%, 60%)",
    "hsl(60, 100%, 60%)",
    "hsl(120, 100%, 60%)",
    "hsl(180, 100%, 60%)",
    "hsl(240, 100%, 60%)",
    "hsl(300, 100%, 60%)",
    "hsl(45, 100%, 70%)",
  ];

  const handleLightDiya = () => {
    setIsLit(true);
    setTimeout(() => setShowMessage(true), 2500);
    // Trigger initial fireworks burst
    triggerFireworksBurst();
  };

  const triggerFireworksBurst = () => {
    const newFireworks: Firework[] = [];
    const count = 6;
    
    for (let i = 0; i < count; i++) {
      newFireworks.push({
        id: fireworkCounter + i,
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 20,
        color: fireworkColors[Math.floor(Math.random() * fireworkColors.length)],
        delay: Math.random() * 0.5,
      });
    }
    
    setFireworks(prev => [...prev, ...newFireworks]);
    setFireworkCounter(prev => prev + count);

    // Clean up old fireworks after animation
    setTimeout(() => {
      setFireworks(prev => prev.filter(fw => !newFireworks.find(nfw => nfw.id === fw.id)));
    }, 2000);
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all ${
        isLit
          ? "bg-gradient-to-br from-[hsl(240,60%,15%)] via-[hsl(260,50%,20%)] to-[hsl(280,40%,18%)]"
          : "bg-[hsl(240,30%,8%)]"
      }`}
      style={{ transitionDuration: '3000ms' }}
    >
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

      {/* Light spreading effect */}
      {isLit && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            className="w-32 h-32 rounded-full bg-gradient-radial from-[hsl(45,100%,70%,0.3)] via-[hsl(45,90%,60%,0.1)] to-transparent animate-light-spread"
            style={{ width: '200vmax', height: '200vmax' }}
          />
        </div>
      )}

      {/* Fireworks */}
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute pointer-events-none will-change-transform"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
          }}
        >
          {/* Launch trail */}
          <div
            className="absolute w-2 h-16 rounded-full animate-firework-launch will-change-transform"
            style={{
              background: `linear-gradient(to top, ${firework.color}, transparent)`,
              animationDelay: `${firework.delay}s`,
            }}
          />
          
          {/* Burst particles */}
          {[...Array(16)].map((_, i) => {
            const angle = (i * 22.5) * Math.PI / 180;
            const distance = 50 + Math.random() * 30;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            return (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full animate-firework-burst will-change-transform"
                style={{
                  backgroundColor: firework.color,
                  left: '0',
                  top: '-60px',
                  transform: `translate(${x}px, ${y}px)`,
                  animationDelay: `${firework.delay + 0.8}s`,
                  boxShadow: `0 0 6px ${firework.color}`,
                }}
              />
            );
          })}
        </div>
      ))}

      {/* Ambient sparkles */}
      {isLit && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute will-change-transform"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Sparkles
                className="w-3 h-3 text-[hsl(50,100%,75%)] animate-sparkle"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="text-center space-y-12 max-w-4xl">
          <h1
            className={`font-playfair text-5xl md:text-7xl font-bold transition-all duration-1000 ${
              isLit
                ? "text-[hsl(45,95%,85%)] drop-shadow-[0_0_40px_rgba(255,215,0,0.6)]"
                : "text-[hsl(45,90%,85%)] drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            }`}
            data-testid="text-headline"
          >
            Happy Diwali Anvesha
          </h1>

          <div className="relative flex flex-col items-center space-y-8">
            {/* Diya with glow effect */}
            <div className="relative">
              {isLit && (
                <div className="absolute inset-0 -m-20 animate-glow-expand rounded-full" />
              )}
              
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                className="drop-shadow-2xl relative z-10"
              >
                <defs>
                  <radialGradient id="diyaGradientDiwali" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="hsl(35, 80%, 55%)" />
                    <stop offset="100%" stopColor="hsl(25, 70%, 45%)" />
                  </radialGradient>
                  <radialGradient id="flameGradientDiwali" cx="50%" cy="70%">
                    <stop offset="0%" stopColor="hsl(45, 100%, 70%)" />
                    <stop offset="40%" stopColor="hsl(35, 95%, 60%)" />
                    <stop offset="70%" stopColor="hsl(25, 90%, 55%)" />
                    <stop offset="100%" stopColor="hsl(15, 85%, 50%)" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <ellipse
                  cx="100"
                  cy="140"
                  rx="65"
                  ry="35"
                  fill="url(#diyaGradientDiwali)"
                  stroke="hsl(25, 60%, 35%)"
                  strokeWidth="2"
                />
                <ellipse
                  cx="100"
                  cy="130"
                  rx="50"
                  ry="20"
                  fill="hsl(45, 90%, 50%)"
                  opacity="0.3"
                />
                <rect
                  x="95"
                  y="90"
                  width="10"
                  height="40"
                  fill="hsl(40, 50%, 40%)"
                  rx="2"
                />

                {isLit && (
                  <g className="animate-flame-flicker origin-[100px_90px]" filter="url(#glow)">
                    <ellipse
                      cx="100"
                      cy="70"
                      rx="15"
                      ry="30"
                      fill="url(#flameGradientDiwali)"
                      opacity="0.9"
                    />
                    <ellipse
                      cx="100"
                      cy="65"
                      rx="10"
                      ry="20"
                      fill="hsl(50, 100%, 75%)"
                      opacity="0.8"
                    />
                    <ellipse
                      cx="100"
                      cy="60"
                      rx="5"
                      ry="10"
                      fill="hsl(55, 100%, 85%)"
                    />
                  </g>
                )}
              </svg>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center">
              {!isLit ? (
                <Button
                  onClick={handleLightDiya}
                  data-testid="button-light-diya"
                  size="lg"
                  className="bg-[hsl(45,85%,55%)] hover:bg-[hsl(45,85%,60%)] text-[hsl(45,30%,10%)] font-poppins font-semibold text-lg px-8 py-6 animate-float"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Light Diya
                </Button>
              ) : (
                <Button
                  onClick={triggerFireworksBurst}
                  data-testid="button-fireworks"
                  size="lg"
                  className="bg-gradient-to-r from-[hsl(0,100%,60%)] via-[hsl(45,100%,60%)] to-[hsl(280,100%,60%)] hover:opacity-90 text-white font-poppins font-semibold text-lg px-8 py-6 animate-pulse"
                >
                  🎆 Burst Fireworks
                </Button>
              )}
            </div>
          </div>

          {/* Message reveal */}
          {showMessage && (
            <div
              className="animate-fade-in-scale"
              style={{ animationDelay: "0.5s" }}
              data-testid="container-message"
            >
              <div className="bg-gradient-to-br from-[hsl(45,90%,95%,0.95)] to-[hsl(40,80%,90%,0.9)] backdrop-blur-md rounded-lg p-8 md:p-12 border-2 border-[hsl(45,85%,55%)] shadow-2xl">
                <p className="font-devanagari text-2xl md:text-3xl leading-relaxed text-[hsl(30,15%,15%)] font-medium">
                  Happy Diwali Anvesha! May this festival of lights bring endless joy, prosperity, and love into our lives. 🪔✨
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
