import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-mykonos.jpg";

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
        }
      });
    }, observerOptions);

    if (headlineRef.current) observer.observe(headlineRef.current);
    if (subheadlineRef.current) observer.observe(subheadlineRef.current);
    if (chevronRef.current) observer.observe(chevronRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToRooms = () => {
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Paradise Mykonos Hotel - Luxury Boutique Experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div
          ref={headlineRef}
          className="opacity-0 mb-6"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-hero font-playfair font-bold mb-4 text-white drop-shadow-2xl">
            Paradise in Paros
          </h1>
          <p className="text-xl md:text-2xl font-light mb-2 text-white/90 drop-shadow-lg">
            The Hidden Gem of the Aegean
          </p>
        </div>

        <div
          ref={subheadlineRef}
          className="opacity-0 mb-8"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed text-white/85 drop-shadow-lg">
            Experience luxury redefined in our boutique hotel, where Cycladic elegance meets modern comfort 
            just steps away from Paradise Beach.
          </p>
        </div>

        <div
          className="opacity-0 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          style={{ animationDelay: "1s" }}
        >
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg font-medium shadow-2xl hover:shadow-accent/30 transition-all duration-300"
            onClick={() => document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Rooms
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 text-lg font-medium bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm shadow-xl transition-all duration-300"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Your Stay
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={chevronRef}
          className="opacity-0 absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ animationDelay: "1.4s" }}
        >
          <button
            onClick={scrollToRooms}
            className="animate-pulse-soft p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
            aria-label="Scroll to rooms section"
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};