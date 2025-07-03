import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, ChevronDown } from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors: string[] = [];
    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!formData.email.includes("@")) errors.push("Valid email is required");
    if (!formData.checkin) errors.push("Check-in date is required");
    if (!formData.checkout) errors.push("Check-out date is required");
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      toast({
        title: "Please correct the following errors:",
        description: errors.join(", "),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Booking Request Submitted!",
        description: "Thank you for your interest. We'll contact you within 24 hours to confirm your reservation.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkin: "",
        checkout: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-secondary/30 to-background dark:from-secondary/10 dark:to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
            Book Your Stay
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience paradise? Contact us to reserve your perfect getaway in Mykonos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-2xl hover:shadow-2xl border border-border/50 bg-card/50 dark:bg-card/80 backdrop-blur-xl transition-all duration-300">
            <CardContent className="p-10">
              <h3 className="text-3xl font-playfair font-semibold text-primary mb-8">
                Reservation Request
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="+30 123 456 7890"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkin" className="block text-sm font-medium text-foreground mb-2">
                      Check-in Date *
                    </label>
                    <Input
                      id="checkin"
                      name="checkin"
                      type="date"
                      value={formData.checkin}
                      onChange={handleInputChange}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="checkout" className="block text-sm font-medium text-foreground mb-2">
                      Check-out Date *
                    </label>
                    <Input
                      id="checkout"
                      name="checkout"
                      type="date"
                      value={formData.checkout}
                      onChange={handleInputChange}
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Special Requests
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full h-32"
                    placeholder="Any special requests or preferences for your stay..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero py-3 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Reservation Request"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <Card className="shadow-soft hover:shadow-floating transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Location</h4>
                    <p className="text-muted-foreground">
                      Paradise Beach, Mykonos<br />
                      South Aegean, Greece 84600
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-floating transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Contact</h4>
                    <p className="text-muted-foreground">
                      reservations@paradisemykonos.gr<br />
                      +30 22890 23456
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Embedded Map */}
            <Card className="shadow-floating">
              <CardContent className="p-0">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.123456789!2d25.346546789!3d37.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sParadise%20Beach%2C%20Mykonos!5e0!3m2!1sen!2sgr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Paradise Hotel Mykonos Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h4 className="font-playfair font-semibold text-primary mb-4">Quick Information</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Check-in: 3:00 PM</li>
                  <li>• Check-out: 11:00 AM</li>
                  <li>• Airport transfer available</li>
                  <li>• Free WiFi throughout property</li>
                  <li>• 24/7 concierge service</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};