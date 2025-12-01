"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";

interface HorizontalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function HorizontalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 40,
}: HorizontalMarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        className
      )}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Design",
  "Manufacturing",
  "Installation",
  "Lighting",
  "Sub Contractor",
  "Service",
  "Architect",
  "AI marketing",
];

interface CTAWithHorizontalMarqueeProps {
  headline?: string;
  description?: string;
}

export default function CTAWithHorizontalMarquee({ 
  headline = "Let your signboard do more than stand out, let it shine.",
  description = "From eye catching storefront signs to towering monument displays, we transform your brand vision into reality. Our expert team combines cutting edge technology with traditional craftsmanship to create signage that doesn't just attract attention it captivates, engages, and drives real results for your business."
}: CTAWithHorizontalMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll('.marquee-item-horizontal');
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);
        const maxDistance = containerRect.width / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.75;
        (item as HTMLElement).style.opacity = opacity.toString();
      });
    };

    const animationFrame = () => {
      updateOpacity();
      requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="w-full bg-background text-foreground flex items-center justify-center px-6 py-20 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url(/src/assets/signboard-texture.jpg)', backgroundSize: '600px 600px', backgroundRepeat: 'repeat' }}></div>
      <div className="w-full animate-fade-in-up relative z-10">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Top Content */}
          <div className="space-y-8 max-w-3xl mx-auto text-center px-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-accent animate-fade-in-up [animation-delay:200ms]">
              {headline}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up [animation-delay:400ms]">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up [animation-delay:600ms]">
              <button className="group relative px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="relative z-10">NEW SIGN REQUEST</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </button>
              <button className="group relative px-6 py-3 rounded-md font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg border border-[#263c4b]" style={{ backgroundColor: '#263c4b', color: 'white' }}>
                <span className="relative z-10">PRINTING & GRAPHICS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </button>
            </div>
          </div>

          {/* Bottom Marquee */}
          <div ref={marqueeRef} className="relative w-full animate-fade-in-up [animation-delay:800ms]">
            <div className="relative">
              <HorizontalMarquee speed={30}>
                {marqueeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight px-12 marquee-item-horizontal whitespace-nowrap"
                  >
                    {item}
                  </div>
                ))}
              </HorizontalMarquee>
              
              {/* Left vignette */}
              <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-64 bg-gradient-to-r from-background via-background/50 to-transparent z-10"></div>
              
              {/* Right vignette */}
              <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-64 bg-gradient-to-l from-background via-background/50 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
