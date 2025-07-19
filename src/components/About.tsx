import { Card, CardContent } from "@/components/ui/card";
import { Award, Building, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About <span className="text-primary">Coyusuf General Supplies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A dynamic and reliable general supplies company committed to providing high-quality products 
            with exceptional customer service and competitive pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              To supply a comprehensive range of products efficiently, ensuring timely deliveries and 
              exceptional customer service. With strong vendor partnerships and a dedicated team, 
              we aim to become a trusted supplier for companies across various sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We strive to deliver cost-effective solutions for all types of businesses, 
              from small enterprises to large corporations, maintaining the highest standards 
              of quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <Card className="shadow-elegant">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Established</h4>
                <p className="text-2xl font-bold text-primary">2019</p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Structure</h4>
                <p className="text-sm text-muted-foreground">Limited Liability Company</p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Location</h4>
                <p className="text-sm text-muted-foreground">Kangundo Road - Umoja 3</p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Quality</h4>
                <p className="text-sm text-muted-foreground">Certified Excellence</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="bg-background rounded-2xl p-8 shadow-elegant">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Why Choose <span className="text-primary">Coyusuf</span>?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold mb-2">Wide Product Selection</h4>
              <p className="text-sm text-muted-foreground">One-stop-shop for all business supply needs</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-bold mb-2">Timely Delivery</h4>
              <p className="text-sm text-muted-foreground">Fast and efficient delivery systems</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-bold mb-2">Customer-Centric</h4>
              <p className="text-sm text-muted-foreground">Building long-term relationships with personalized service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;