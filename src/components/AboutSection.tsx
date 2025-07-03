import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import aboutBackground from "@/assets/about-background.jpg";

const counters = [
  { label: "Years of Hospitality", value: 15, suffix: "" },
  { label: "Returning Guests", value: 89, suffix: "%" },
  { label: "Steps to Paradise Beach", value: 200, suffix: "" },
];

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCounters, setAnimatedCounters] = useState(
    counters.map(() => ({ current: 0, hasAnimated: false }))
  );

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    counters.forEach((counter, index) => {
      if (animatedCounters[index].hasAnimated) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = counter.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= counter.value) {
          current = counter.value;
          clearInterval(timer);
        }

        setAnimatedCounters(prev => 
          prev.map((item, i) => 
            i === index 
              ? { current: Math.floor(current), hasAnimated: current >= counter.value }
              : item
          )
        );
      }, duration / steps);
    });
  };

  return (
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${aboutBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 dark:from-black/90 dark:via-black/70 dark:to-black/90"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-white">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <h2 className="text-section-title font-playfair font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Nestled in the heart of Mykonos, Paradise Hotel embodies the timeless charm of 
                  Cycladic architecture while offering modern luxury that exceeds every expectation. 
                  Our boutique property features eight unique accommodations, each designed to capture 
                  the essence of this magical Greek island.
                </p>
                <p>
                  For over fifteen years, our family has been dedicated to creating unforgettable 
                  experiences for travelers from around the world. We believe that true hospitality 
                  comes from the heart, and every detail of your stay is carefully curated to ensure 
                  your time with us becomes a cherished memory.
                </p>
                <p>
                  From the moment you wake up to breathtaking Aegean Sea views until you fall asleep 
                  to the gentle sound of waves, Paradise Hotel offers an authentic taste of Mykonos 
                  that will leave you longing to return.
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="mt-8 bg-accent text-white hover:bg-accent/90 shadow-glow"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Experience Paradise
              </Button>
            </div>
          </div>

          {/* Stats Column */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8">
            {counters.map((counter, index) => (
              <div 
                key={counter.label}
                className={`text-center text-white transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-playfair font-bold text-accent mb-2">
                    {animatedCounters[index].current}{counter.suffix}
                  </div>
                  <div className="text-lg font-medium">
                    {counter.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};