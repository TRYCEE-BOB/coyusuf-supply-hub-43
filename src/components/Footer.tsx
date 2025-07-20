import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for comprehensive general supplies. 
              Delivering efficiency, endlessly since 2019.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Limited Liability Company
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm">0111641355</p>
                  <p className="text-sm">0729147145</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <p className="text-sm">coyusufgeneralsuppliesltd@gmail.com</p>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <p className="text-sm">Kangundo Road - Umoja 3</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Office Supplies</li>
              <li>Cleaning & Janitorial</li>
              <li>Safety & PPE</li>
              <li>Technology & Electronics</li>
              <li>Furniture Solutions</li>
              <li>Customized Products</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Coyusuf General Supplies Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;