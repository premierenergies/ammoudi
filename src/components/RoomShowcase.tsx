import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import roomCycladic from "@/assets/room-cycladic-suite.jpg";
import roomAegean from "@/assets/room-aegean-view.jpg";
import roomParadise from "@/assets/room-paradise-suite.jpg";

const rooms = [
  {
    id: 1,
    title: "Cycladic Suite",
    description: "Traditional Cycladic architecture meets modern luxury with stunning sea views and private terrace.",
    image: roomCycladic,
    amenities: ["Sea View", "Private Terrace", "King Bed", "Marble Bathroom", "Mini Bar", "WiFi"],
    price: "€280",
    featured: true
  },
  {
    id: 2,
    title: "Aegean View Room",
    description: "Elegant room with panoramic Aegean Sea views and contemporary Cycladic design.",
    image: roomAegean,
    amenities: ["Sea View", "Balcony", "Queen Bed", "Air Conditioning", "Safe", "WiFi"],
    price: "€220",
    featured: false
  },
  {
    id: 3,
    title: "Paradise Suite",
    description: "Our signature suite offering the ultimate luxury experience with infinity pool access.",
    image: roomParadise,
    amenities: ["Pool Access", "Sea View", "King Bed", "Living Area", "Jacuzzi", "Butler Service"],
    price: "€450",
    featured: true
  },
  {
    id: 4,
    title: "Sunset Terrace Room",
    description: "Perfect for romantic getaways with west-facing terrace offering spectacular sunsets.",
    image: roomCycladic,
    amenities: ["Sunset View", "Private Terrace", "Queen Bed", "Seating Area", "Mini Bar", "WiFi"],
    price: "€260",
    featured: false
  },
  {
    id: 5,
    title: "Garden View Room",
    description: "Tranquil garden views with bougainvillea-covered terrace and traditional Cycladic charm.",
    image: roomAegean,
    amenities: ["Garden View", "Terrace", "King Bed", "Sitting Area", "Minibar", "WiFi"],
    price: "€190",
    featured: false
  },
  {
    id: 6,
    title: "Premium Ocean Suite",
    description: "Spacious suite with unobstructed ocean views and luxurious amenities.",
    image: roomParadise,
    amenities: ["Ocean View", "Large Terrace", "King Bed", "Living Room", "Premium Bathroom", "Concierge"],
    price: "€380",
    featured: true
  },
  {
    id: 7,
    title: "Little Venice View",
    description: "Charming room overlooking the famous Little Venice windmills and traditional harbor.",
    image: roomCycladic,
    amenities: ["Historic View", "Balcony", "Queen Bed", "Traditional Decor", "Mini Bar", "WiFi"],
    price: "€240",
    featured: false
  },
  {
    id: 8,
    title: "Honeymoon Suite",
    description: "Romantic retreat with private infinity pool and unparalleled privacy for couples.",
    image: roomAegean,
    amenities: ["Private Pool", "Sea View", "King Bed", "Champagne Service", "Couples Massage", "Butler"],
    price: "€520",
    featured: true
  }
];

export const RoomShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="rooms" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title font-playfair font-bold text-primary mb-4">
            Exquisite Accommodations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of eight unique rooms and suites, each thoughtfully designed 
            to provide the perfect Mykonos experience.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <Card
              key={room.id}
              ref={addToRefs}
              className="room-card opacity-0 group cursor-pointer"
            >
              <CardContent className="p-0">
                {/* Room Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="room-image w-full h-48 object-cover"
                  />
                  {room.featured && (
                    <Badge className="absolute top-3 left-3 bg-accent text-white">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-sm font-medium">
                    {room.price}/night
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                    {room.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {room.description}
                  </p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {room.amenities.slice(0, 4).map((amenity) => (
                      <Badge
                        key={amenity}
                        variant="secondary"
                        className="text-xs px-2 py-1"
                      >
                        {amenity}
                      </Badge>
                    ))}
                    {room.amenities.length > 4 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{room.amenities.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <Button className="w-full btn-primary">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="btn-hero px-8 py-3"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Your Perfect Room
          </Button>
        </div>
      </div>
    </section>
  );
};