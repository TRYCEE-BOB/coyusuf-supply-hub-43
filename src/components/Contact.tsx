import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  Building 
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to partner with us? Get in touch for all your general supply needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                  <div>
                    <p className="text-muted-foreground">0720745010</p>
                    <p className="text-muted-foreground">0729147145</p>
                  </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">coyusufgeneralsuppliesltd@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">Kangundo Road - Umoja 3</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">Limited Liability Company</p>
                  <p className="text-muted-foreground text-sm">Established 2019</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Team */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Our Team</h3>
            
            <div className="space-y-6">
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center">
                      <User className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Regina Mamboleo</h4>
                      <p className="text-primary font-medium">Operations Manager</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">0718 377 432</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center">
                      <User className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Meshack Magaki</h4>
                      <p className="text-primary font-medium">Sales Manager</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">0111 641 366</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center shadow-elegant">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">
            Ready to Get Started?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join the many businesses, schools, hospitals, and government agencies that trust 
            Coyusuf General Supplies for their supply needs. Contact us today for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-accent hover:bg-accent-light text-accent-foreground shadow-glow"
              onClick={() => window.location.href = 'tel:0720745010'}
            >
              Call Now
            </Button>
            <Button 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.location.href = 'mailto:coyusufgeneralsuppliesltd@gmail.com'}
            >
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;