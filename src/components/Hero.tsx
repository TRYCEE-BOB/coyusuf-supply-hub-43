import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Users } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-primary-foreground animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Trusted <span className="text-accent">Timely</span> Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Your reliable partner for comprehensive general supplies. Delivering efficiency, endlessly.
            </p>
            <p className="text-lg mb-8 text-primary-foreground/80">
              Serving businesses, schools, hospitals, and government agencies with high-quality products since 2019.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={() => scrollToSection('products')}
                className="bg-accent hover:bg-accent-light text-accent-foreground shadow-glow text-lg px-8 py-6"
              >
                View Products
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
              >
                Get Quote
              </Button>
            </div>

            {/* Key features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-accent" />
                <span className="text-primary-foreground/90">Quality Products</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-accent" />
                <span className="text-primary-foreground/90">Timely Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-accent" />
                <span className="text-primary-foreground/90">Trusted Service</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-accent" />
                <span className="text-primary-foreground/90">Expert Team</span>
              </div>
            </div>
          </div>

          {/* Right content - Logo showcase */}
          <div className="flex justify-center lg:justify-end animate-slide-in">
            <div className="bg-background/10 backdrop-blur-sm rounded-3xl p-8 shadow-elegant">
              <img 
                src="/lovable-uploads/f63bcfbe-a396-4c10-b8cb-8ec108c8e53d.png" 
                alt="Coyusuf General Supplies" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;