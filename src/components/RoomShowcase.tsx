import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import roomCycladic from "@/assets/room-cycladic-suite.jpg";
import roomAegean from "@/assets/room-aegean-view.jpg";
import roomParadise from "@/assets/room-paradise-suite.jpg";
import roomDeluxeSea from "@/assets/room-deluxe-sea.jpg";
import roomInfinitySuite from "@/assets/room-infinity-suite.jpg";
import roomStoneVilla from "@/assets/room-stone-villa.jpg";

const rooms = [
  {
    id: 1,
    title: "Cycladic Suite",
    description: "Traditional Cycladic architecture meets modern luxury with stunning sea views and private terrace. Experience the authentic charm of Paros while enjoying contemporary amenities.",
    images: [roomCycladic, roomDeluxeSea, roomInfinitySuite, roomStoneVilla],
    amenities: ["Sea View", "Private Terrace", "King Bed", "Marble Bathroom", "Mini Bar", "WiFi"],
    price: "€280",
    size: "45m²",
    guests: "2-3",
    featured: true
  },
  {
    id: 2,
    title: "Aegean View Room",
    description: "Elegant room with panoramic Aegean Sea views and contemporary Cycladic design. Perfect for couples seeking a romantic getaway with breathtaking vistas.",
    images: [roomAegean, roomParadise, roomCycladic],
    amenities: ["Sea View", "Balcony", "Queen Bed", "Air Conditioning", "Safe", "WiFi"],
    price: "€220",
    size: "35m²",
    guests: "2",
    featured: false
  },
  {
    id: 3,
    title: "Paradise Suite",
    description: "Our signature suite offering the ultimate luxury experience with infinity pool access. Indulge in unparalleled comfort and exclusive amenities.",
    images: [roomParadise, roomCycladic, roomAegean],
    amenities: ["Pool Access", "Sea View", "King Bed", "Living Area", "Jacuzzi", "Butler Service"],
    price: "€450",
    size: "65m²",
    guests: "2-4",
    featured: true
  },
  {
    id: 4,
    title: "Sunset Terrace Room",
    description: "Perfect for romantic getaways with west-facing terrace offering spectacular sunsets over the Aegean Sea. Watch the sky transform into a canvas of colors.",
    images: [roomCycladic, roomParadise, roomAegean],
    amenities: ["Sunset View", "Private Terrace", "Queen Bed", "Seating Area", "Mini Bar", "WiFi"],
    price: "€260",
    size: "40m²",
    guests: "2",
    featured: false
  },
  {
    id: 5,
    title: "Ocean Breeze Villa",
    description: "Spacious villa with panoramic ocean views and private infinity pool. Perfect for families or groups seeking ultimate privacy and luxury.",
    images: [roomParadise, roomAegean, roomCycladic],
    amenities: ["Private Pool", "Ocean View", "3 Bedrooms", "Kitchen", "Garden", "BBQ Area"],
    price: "€650",
    size: "120m²",
    guests: "6-8",
    featured: true
  },
  {
    id: 6,
    title: "Garden Retreat",
    description: "Peaceful retreat surrounded by Mediterranean gardens with mountain views. Ideal for those seeking tranquility and connection with nature.",
    images: [roomCycladic, roomAegean, roomParadise],
    amenities: ["Garden View", "Mountain View", "Patio", "Queen Bed", "Fireplace", "WiFi"],
    price: "€190",
    size: "30m²",
    guests: "2",
    featured: false
  },
  {
    id: 7,
    title: "Honeymoon Sanctuary",
    description: "Romantic sanctuary designed for couples with private jacuzzi and champagne terrace. Experience intimacy and luxury in perfect harmony.",
    images: [roomAegean, roomParadise, roomCycladic],
    amenities: ["Private Jacuzzi", "Champagne Terrace", "King Bed", "Romantic Lighting", "Butler Service", "Spa Access"],
    price: "€380",
    size: "50m²",
    guests: "2",
    featured: true
  },
  {
    id: 8,
    title: "Traditional Stone House",
    description: "Authentic Cycladic stone house with modern amenities. Experience traditional island living with all the comforts of contemporary luxury.",
    images: [roomParadise, roomCycladic, roomAegean],
    amenities: ["Stone Architecture", "Traditional Design", "2 Bedrooms", "Kitchen", "Courtyard", "WiFi"],
    price: "€320",
    size: "75m²",
    guests: "4",
    featured: false
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
        card.style.animationDelay = `${index * 0.2}s`;
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
    <section id="rooms" ref={sectionRef} className="py-32 bg-background dark:bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
            Discover Paradise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our collection of unique rooms and suites, each thoughtfully designed 
            to provide the perfect Mykonos experience with unparalleled luxury and comfort.
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {rooms.map((room, index) => (
            <Card
              key={room.id}
              ref={addToRefs}
              className="opacity-0 group cursor-pointer bg-card/50 dark:bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden hover:scale-105 hover:-translate-y-2"
            >
              <CardContent className="p-0">
                {/* Room Image Carousel */}
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {room.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex}>
                          <img
                            src={image}
                            alt={`${room.title} - ${imageIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border-white/30 text-white" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border-white/30 text-white" />
                  </Carousel>
                  
                  {/* Image Overlay with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Badges */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                    {room.featured && (
                      <Badge className="bg-accent text-white px-3 py-1 shadow-lg">
                        Featured
                      </Badge>
                    )}
                    <Badge className="bg-black/70 text-white px-3 py-1 backdrop-blur-sm">
                      {room.price}/night
                    </Badge>
                  </div>
                  
                  {/* Room Stats on Hover */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-10">
                    <div className="flex gap-4 text-white">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">
                        <div className="font-semibold">{room.size}</div>
                        <div className="opacity-80">Size</div>
                      </div>
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-sm">
                        <div className="font-semibold">{room.guests}</div>
                        <div className="opacity-80">Guests</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-8">
                  <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-primary mb-4">
                    {room.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Premium Amenities Display */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                      Amenities
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                      {room.amenities.map((amenity) => (
                        <div
                          key={amenity}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => alert(`Viewing details for ${room.title}`)}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-border hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300"
                    >
                      Check Availability
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center space-y-6 p-12 bg-card/30 dark:bg-card/50 backdrop-blur-xl rounded-3xl border border-border/50">
            <h3 className="text-2xl font-playfair font-semibold text-primary">
              Ready to Experience Paradise?
            </h3>
            <p className="text-muted-foreground max-w-md">
              Book your perfect room today and discover the magic of Mykonos luxury hospitality.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-12 py-4 text-lg shadow-2xl hover:shadow-accent/30 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Your Perfect Room
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};