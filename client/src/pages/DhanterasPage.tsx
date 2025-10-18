import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DhanterasPage() {
  const [isLit, setIsLit] = useState(false);
  const [showCoins, setShowCoins] = useState(false);

  const handleLightDiya = () => {
    setIsLit(true);
    setTimeout(() => setShowCoins(true), 500);
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-[2000ms] ${
        isLit
          ? "bg-gradient-to-br from-[hsl(40,70%,50%)] via-[hsl(45,60%,65%)] to-[hsl(50,65%,75%)]"
          : "bg-[hsl(240,30%,8%)]"
      }`}
    >
      <Link to="/" data-testid="link-home">
        <Button
          variant="ghost"
          className={`absolute top-6 left-6 z-50 ${
            isLit ? "text-[hsl(30,15%,20%)]" : "text-[hsl(45,90%,80%)]"
          }`}
          data-testid="button-back"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Gates
        </Button>
      </Link>

      {showCoins && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(45,85%,60%)] to-[hsl(35,90%,55%)] border-2 border-[hsl(45,90%,50%)] flex items-center justify-center text-[hsl(45,30%,20%)] font-bold text-xs animate-coin-fall will-change-transform"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 1}s`,
              }}
            >
              ₹
            </div>
          ))}
        </div>
      )}

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
                className="w-4 h-4 text-[hsl(50,100%,75%)] animate-sparkle"
                style={{
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 1}s`,
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
                ? "text-[hsl(30,15%,15%)] drop-shadow-lg"
                : "text-[hsl(45,90%,85%)] drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            }`}
            data-testid="text-headline"
          >
            Happy Dhanteras Anvesha
          </h1>

          <div className="relative flex flex-col items-center space-y-8">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="drop-shadow-2xl"
            >
              <defs>
                <radialGradient id="diyaGradient" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="hsl(35, 80%, 55%)" />
                  <stop offset="100%" stopColor="hsl(25, 70%, 45%)" />
                </radialGradient>
                <radialGradient id="flameGradient" cx="50%" cy="70%">
                  <stop offset="0%" stopColor="hsl(45, 100%, 70%)" />
                  <stop offset="40%" stopColor="hsl(35, 95%, 60%)" />
                  <stop offset="70%" stopColor="hsl(25, 90%, 55%)" />
                  <stop offset="100%" stopColor="hsl(15, 85%, 50%)" />
                </radialGradient>
              </defs>

              <ellipse
                cx="100"
                cy="140"
                rx="65"
                ry="35"
                fill="url(#diyaGradient)"
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
                <g className="animate-flame-flicker origin-[100px_90px]">
                  <ellipse
                    cx="100"
                    cy="70"
                    rx="15"
                    ry="30"
                    fill="url(#flameGradient)"
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

            {!isLit && (
              <Button
                onClick={handleLightDiya}
                data-testid="button-light-diya"
                size="lg"
                className="bg-[hsl(45,85%,55%)] hover:bg-[hsl(45,85%,60%)] text-[hsl(45,30%,10%)] font-poppins font-semibold text-lg px-8 py-6 animate-float"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Light Diya
              </Button>
            )}
          </div>

          {isLit && (
            <div
              className="animate-fade-in-scale"
              style={{ animationDelay: "1s" }}
              data-testid="container-message"
            >
              <div className="bg-gradient-to-br from-[hsl(45,90%,95%,0.95)] to-[hsl(40,80%,90%,0.9)] backdrop-blur-md rounded-lg p-8 md:p-12 border-2 border-[hsl(45,85%,55%)] shadow-2xl animate-glow-pulse">
                <p className="font-devanagari text-2xl md:text-3xl leading-relaxed text-[hsl(30,15%,15%)] font-medium">
                  Kripya Maa Lakshmi, humare pyaar par apna ashirvaad banaye rakhe aur humein sukh, shanti aur dhan se bhara jeevan pradan kare. 🙏🏻
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
