import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShoppingCart, 
  Truck, 
  CheckCircle, 
  HeadphonesIcon, 
  Globe, 
  TrendingUp 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Bulk Order Discounts",
      description: "Competitive pricing and loyalty discounts for repeat clients with special rates for large orders"
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Fast and efficient delivery systems with GPS tracking to minimize disruptions for our clients"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Dedicated team to inspect products before dispatching to ensure quality standards are met"
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Service Excellence",
      description: "Professional service with prompt response times and personalized solutions for every client"
    },
    {
      icon: Globe,
      title: "Wide Network",
      description: "Strategic partnerships with trusted suppliers ensuring high-quality products and competitive rates"
    },
    {
      icon: TrendingUp,
      title: "Business Growth Support",
      description: "Long-term supply contracts and customized solutions to support your business growth"
    }
  ];

  const marketTrends = [
    {
      title: "E-commerce Expansion",
      description: "Businesses increasingly rely on online suppliers for convenience and speed"
    },
    {
      title: "Sustainability Focus",
      description: "Growing preference for eco-friendly and sustainable products"
    },
    {
      title: "Health & Safety Demand",
      description: "Increased demand for sanitizing and protective equipment"
    },
    {
      title: "Customization & Bulk Orders",
      description: "Companies seek suppliers who can offer tailored solutions and large order capabilities"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to meet all your business supply needs with excellence and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Trends Section */}
        <div className="bg-background rounded-2xl p-8 shadow-elegant">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Market <span className="text-primary">Insights</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Understanding the evolving market trends that drive demand for our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketTrends.map((trend, index) => (
              <div key={index} className="flex items-start gap-4 animate-slide-in">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-foreground">{trend.title}</h4>
                  <p className="text-muted-foreground">{trend.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Gallery */}
        <div className="mt-16 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Professional <span className="text-primary">Delivery Service</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Reliable, efficient delivery by our professional team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg overflow-hidden shadow-elegant">
              <img 
                src="/lovable-uploads/0b4ecc53-e7d3-442b-ad31-19f8e90f3e46.png" 
                alt="Professional delivery service with packages"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-elegant">
              <img 
                src="/lovable-uploads/5b4d0013-11aa-4522-940c-e8d2449e3f20.png" 
                alt="Customer receiving delivery at home"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-elegant">
              <img 
                src="/lovable-uploads/f29f0a8b-3a71-495a-803f-38a525489615.png" 
                alt="Professional delivery team in action"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-elegant">
              <img 
                src="/lovable-uploads/14c997c4-7755-4894-848b-7ca1dc3c4a90.png" 
                alt="Logistics and package handling"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Operations Plan */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Operations</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold mb-2">Supplier Relationships</h4>
              <p className="text-sm text-muted-foreground">Reliable partnerships with trusted suppliers</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold mb-2">Inventory Management</h4>
              <p className="text-sm text-muted-foreground">Advanced software to track stock levels</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold mb-2">Delivery & Logistics</h4>
              <p className="text-sm text-muted-foreground">Fleet with GPS tracking systems</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold mb-2">Quality Control</h4>
              <p className="text-sm text-muted-foreground">Product inspection before dispatch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;