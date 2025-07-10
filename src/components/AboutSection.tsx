import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Award, Heart, MapPin, Users, Star, Calendar, Trophy } from "lucide-react";
import aboutBackground from "@/assets/about-background.jpg";

const counters = [
  { label: "Years of Excellence", value: 15, suffix: "+", icon: Award },
  { label: "Guest Satisfaction", value: 98, suffix: "%", icon: Heart },
  { label: "Steps to Paradise Beach", value: 50, suffix: "m", icon: MapPin },
  { label: "Perfect Days", value: 320, suffix: "", icon: Star },
];

const testimonials = [
  {
    text: "An absolutely magical experience. The staff made us feel like family, and the views are breathtaking.",
    author: "Maria & Andreas",
    location: "Germany",
    rating: 5
  },
  {
    text: "Paradise Hotel truly lives up to its name. Every detail was perfect, from the room to the dining.",
    author: "Sophie Laurent", 
    location: "France",
    rating: 5
  },
  {
    text: "The most romantic getaway we've ever had. We'll definitely be back for our anniversary!",
    author: "James & Emma",
    location: "United Kingdom", 
    rating: 5
  }
];

const features = [
  {
    icon: Calendar,
    title: "Authentic Experience",
    description: "Immerse yourself in genuine Greek culture with locally-sourced amenities and traditional hospitality."
  },
  {
    icon: Heart,
    title: "Personalized Service", 
    description: "Our dedicated team ensures every guest receives tailored attention and memorable experiences."
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Perfectly positioned between Paradise Beach and Paros Town for the ultimate island experience."
  }
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
      {/* Background with Enhanced Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={aboutBackground}
          alt="Paros Hotel Background"
          className="w-full h-full object-cover transform scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-accent/90"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="bg-white/20 text-white border-white/30 mb-6 px-6 py-2">
            Our Legacy
          </Badge>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            A Story of Passion & Paradise
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            For over a decade, we've been crafting extraordinary experiences in the heart of Paros, 
            where Greek hospitality meets modern luxury in perfect harmony.
          </p>
        </div>

        {/* Main Story Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <Quote className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-3xl font-playfair font-bold text-white mb-6">
                "Every guest is family, every stay a story"
              </h3>
              <div className="space-y-6 text-lg leading-relaxed text-white/90">
                <p>
                  Founded by the Alexandros family in 2008, our boutique hotel was born from a dream 
                  to share the authentic beauty of Paros with the world. What started as a vision 
                  has grown into a sanctuary where modern luxury embraces traditional Greek charm.
                </p>
                <p>
                  Located on the stunning coastline near Paradise Beach, every room tells a story 
                  of meticulous craftsmanship and attention to detail. From hand-selected local 
                  materials to curated artwork by island artisans, we celebrate the rich heritage 
                  of the Cyclades.
                </p>
                <p>
                  Today, our legacy continues through our commitment to sustainable luxury and 
                  creating memories that last a lifetime. We don't just offer accommodation—
                  we provide a gateway to the soul of Greece.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-white/20">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">The Alexandros Family</p>
                  <p className="text-white/70 text-sm">Founders & Hosts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-6">
            {counters.map((counter, index) => {
              const IconComponent = counter.icon;
              return (
                <Card
                  key={index}
                  className={`bg-white/10 border-white/20 backdrop-blur-xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${
                    isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8 text-center text-white">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-4xl font-playfair font-bold mb-2 text-white">
                      {animatedCounters[index].current}{counter.suffix}
                    </div>
                    <div className="text-lg font-semibold mb-2">
                      {counter.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Guest Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-bold text-white text-center mb-12">
            What Our Guests Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-white">
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <p className="text-white/90 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-white/70">{testimonial.location}</p>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-playfair font-bold mb-2">{feature.title}</h4>
                  <p className="text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-playfair font-bold text-white mb-6">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of guests who have discovered their own piece of paradise with us.
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-12 py-4 text-lg shadow-2xl hover:shadow-accent/30 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};