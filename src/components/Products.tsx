import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Droplets, 
  Shield, 
  Monitor, 
  Armchair, 
  Palette,
  Building2,
  GraduationCap,
  Hospital,
  Users
} from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      icon: FileText,
      title: "Office Supplies",
      description: "Paper, pens, folders, notebooks, office furniture, and more",
      items: ["Stationery", "Filing Systems", "Office Furniture", "Writing Materials"]
    },
    {
      icon: Droplets,
      title: "Cleaning & Janitorial",
      description: "Detergents, disinfectants, floor care, and cleaning tools",
      items: ["Morten Doom", "Dettol Antiseptic", "Harpic Toilet Cleaner", "Jik Bleach"]
    },
    {
      icon: Shield,
      title: "Safety & PPE",
      description: "Masks, gloves, safety goggles, and workwear",
      items: ["Protective Equipment", "Safety Gear", "Workwear", "Emergency Supplies"]
    },
    {
      icon: Monitor,
      title: "Technology & Electronics",
      description: "Printers, toner cartridges, calculators, and more",
      items: ["Printers", "Toner Cartridges", "Calculators", "Tech Accessories"]
    },
    {
      icon: Armchair,
      title: "Furniture",
      description: "Office desks, chairs, filing cabinets, and ergonomic accessories",
      items: ["Office Desks", "Ergonomic Chairs", "Filing Cabinets", "Storage Solutions"]
    },
    {
      icon: Palette,
      title: "Customized Products",
      description: "Custom-branded products to enhance your company's identity",
      items: ["Branded Items", "Custom Designs", "Corporate Gifts", "Promotional Materials"]
    }
  ];

  const targetMarkets = [
    {
      icon: Building2,
      title: "Corporate Offices",
      description: "Regular supplies to maintain daily operations"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Schools and colleges requiring teaching aids and administrative supplies"
    },
    {
      icon: Hospital,
      title: "Healthcare Sector",
      description: "Hospitals, clinics, and health centres needing medical supplies and PPE"
    },
    {
      icon: Users,
      title: "Government & NGOs",
      description: "Long-term supply contracts for various departments and initiatives"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Products Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide an extensive variety of general supplies for all your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {productCategories.map((category, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in card-3d">
              <CardHeader className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 icon-3d">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Success Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by <span className="text-yellow-300">500+</span> Happy Clients
            </h3>
            <p className="text-lg opacity-90">
              Serving businesses across Nairobi, Kenya with quality supplies and exceptional service
            </p>
          </div>
        </div>

        {/* Target Markets Section */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Who We <span className="text-primary">Serve</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Our trusted partners across various sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetMarkets.map((market, index) => (
              <div key={index} className="text-center animate-slide-in">
                <div className="bg-background rounded-xl p-6 shadow-elegant card-3d">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 icon-3d">
                    <market.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-bold mb-2">{market.title}</h4>
                  <p className="text-sm text-muted-foreground">{market.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Gallery */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Product Gallery</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              High-quality supplies we provide to meet all your business needs
            </p>
          </div>

          {/* Office Supplies & Furniture */}
          <div className="mb-12">
            <h4 className="text-xl font-bold mb-6 text-foreground">Office Supplies & Furniture</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/7dffe7bb-cae9-4041-a7ac-1caf4128c4d5.png" 
                  alt="Essential office supplies - ballpoint pens, colorful sticky notes, and permanent markers for daily office tasks"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/5cb858b4-4897-400f-86a4-f8d9a06a227e.png" 
                  alt="Complete office workstation with ergonomic desk, modern computer setup and comfortable office chair"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/ad252c50-d116-46d6-9373-2356d8bcecca.png" 
                  alt="Contemporary office furniture collection featuring sleek desks and modern seating solutions"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/7d934148-8979-4e7a-9106-7117013093cf.png" 
                  alt="Executive office chairs collection"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/e1acae63-e751-41eb-977b-2d2e0dd90f78.png" 
                  alt="Executive office desk and chair"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/68067fc5-d056-447d-a4df-b1cd591d999c.png" 
                  alt="Office equipment - printers and technology"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/620e5e14-510a-4e26-9ed5-633c3f571935.png" 
                  alt="Books and laptop for educational supplies"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/b2a9cf26-2304-47a0-be28-8da9b902cef5.png" 
                  alt="Windows 11 laptops and devices"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Technology & Electronics */}
          <div className="mb-12">
            <h4 className="text-xl font-bold mb-6 text-foreground">Technology & Electronics</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/0a0922b4-9e21-47e4-8fdd-36870aea3e57.png" 
                  alt="Casio scientific calculator blue"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/e434e6c1-4359-41be-888d-57c4a12fdd10.png" 
                  alt="Pink scientific calculator"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/7e80a114-5325-4dfc-9147-06264185e788.png" 
                  alt="Printer ink cartridges CMYK colors"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/0eff63e5-8384-414b-8e0f-3eee2e11f05e.png" 
                  alt="Color ink bottles and cartridges"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Cleaning & Safety Supplies */}
          <div className="mb-12">
            <h4 className="text-xl font-bold mb-6 text-foreground">Cleaning & Safety Supplies</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/9cbcd128-3201-4faa-88ed-00808f015baf.png" 
                  alt="Mortein insect spray"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/df6ee29d-6684-4a4d-b5ba-093dc872b2b1.png" 
                  alt="Cleaning supplies and equipment"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/0b85035b-0ce5-46e1-8fd3-5042dd8a6181.png" 
                  alt="Safety equipment and protective gear"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/a5ebf3cd-4ef8-4474-8f12-09171b39c2e2.png" 
                  alt="Harpic toilet cleaner products range"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/00f9f79b-6843-4b62-98a3-29028a997ed1.png" 
                  alt="Dettol antiseptic liquid"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/e38bcace-87a4-48b6-ae5b-93998058ac4c.png" 
                  alt="Harpic and Lysol cleaning products"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/ce59a075-234d-4758-afdb-a985c543b8be.png" 
                  alt="JIK bleach products collection"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/9cdd0ead-5cbe-47b8-be20-c0d69fddb770.png" 
                  alt="Beauty Clinic Fabric Softener - Fresh Spirit with unbelievable shine & freshness"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/378b0548-f5c5-41ef-8d6c-d67f6ee82c70.png" 
                  alt="Beauty Clinic Fabric Softener - Oudh with unbelievable shine & freshness"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/77ab3712-5cfc-445c-86f8-af7d3256c710.png" 
                  alt="Beauty Clinic Dishwash Liquid - Strawberry scent, kills 99.9% germs"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Personal Care & Hygiene */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-foreground">Personal Care & Hygiene</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/b162a9d2-e6c0-4632-9267-1db2257e78c6.png" 
                  alt="Dettol Cool Antibacterial Body wash - Icy Mint & Bergamot with 12hr odour protection"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/0c183d5a-e6ed-4035-a242-eeb4f8fb9767.png" 
                  alt="Dettol Fresh Antibacterial Body wash - Yuzu Citrus with 12hr odour protection"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/cefa51bb-2bac-47a2-a4eb-18091ab302d5.png" 
                  alt="Beauty Clinic Hair Removal Cream with Cucumber extracts"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/d4dcdd48-a31f-418d-99cc-5ee4bd0626d9.png" 
                  alt="Beauty Clinic Exfoliating Body Wash with Strawberry extracts"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/608bfb5d-8406-4b4f-a00e-e44c1d321011.png" 
                  alt="Beauty Clinic Hair Removal Cream with Lotus extracts"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/8a505816-138c-4e22-ba5b-3a579eba3db4.png" 
                  alt="Beauty Clinic Body Wash collection - various natural extracts"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/831dc2ac-51b2-4675-8275-2a79fcced422.png" 
                  alt="Beauty Clinic Nourishing Shampoo collection with natural extracts"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/9d820ee8-71a7-4d38-89fc-0f7e603c7388.png" 
                  alt="Beauty Clinic Exfoliating Body Wash with Strawberry extracts bottle"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/901db02a-5294-4640-baa5-47b526eccdd1.png" 
                  alt="Beauty Clinic Exfoliating Body Wash with Papaya extracts"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/31309762-8f63-47e7-b6ec-6a51c8fca2fb.png" 
                  alt="Beauty Clinic Hair Gel - Mega Hold premium quality"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/d5f123b9-764b-499a-a2f3-6f989cc71763.png" 
                  alt="Beauty Clinic Refreshing Face Wash with Lemon extracts"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/82292508-9a59-43d7-b8ec-8b578feabd5a.png" 
                  alt="Beauty Clinic SPF 90 Vitamin C Whitening Sunscreen"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/9760cc52-2899-4917-bb7f-34d874ac60e9.png" 
                  alt="Beauty Clinic Non-Foaming Shaving Gel for easy shave on all skin types"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/5754369d-7630-438b-802f-17129c6014f1.png" 
                  alt="Beauty Clinic Non-Foaming Shaving Gel 1000ml for perfect shave"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/663609c7-da89-4f4c-b31e-b01b83506500.png" 
                  alt="Beauty Clinic Non-Foaming Shaving Gel 1300ml with moisturizers"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/14929077-2e33-4e4f-ba16-2dcb0c549d5b.png" 
                  alt="Beauty Clinic After Shave Cologne - Deep Impact with protection & moisturizing"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/13d650e9-65e0-4ace-80be-65177c799a53.png" 
                  alt="Beauty Clinic Shower Gel - Ocean Blue with natural fragrance and moisturizing effect"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/d6573eb4-c270-4376-b197-33dd17aedf52.png" 
                  alt="Beauty Clinic Hair Gel - Regular Look premium quality"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/17161e24-74c6-4ef6-b33c-efebcc7ba59d.png" 
                  alt="Beauty Clinic Hot Oil Hair Treatment Cream - Mix Fruit for beautiful silky hair"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/298c22fc-2008-4311-a8e7-b3aa80ef024e.png" 
                  alt="Beauty Clinic Hot Oil Hair Treatment Cream - Aloe vera for beautiful silky hair"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/f1b3c650-09e0-411e-a8e3-49f7bc51b8d0.png" 
                  alt="Beauty Clinic Hot Oil Hair Treatment Cream - Snake natural hair care"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/fb0f5b7e-e530-40a6-bb88-e01251e0d8f5.png" 
                  alt="Beauty Clinic Brightening Exfoliating Body Wash - Strawberry Extract 1000ml"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/5f4c87b6-40fe-4023-9de0-56b96b8d9875.png" 
                  alt="Beauty Clinic Exfoliating Body Wash with Shea Butter extracts"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/99e3de35-9043-4987-a935-38869bd31adc.png" 
                  alt="Beauty Clinic Brightening Exfoliating Body Wash - Shea Butter Extract promotional"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/e4891c27-5549-4c7f-9b9b-97b7291c7428.png" 
                  alt="Beauty Clinic Exfoliating Body Wash with Milk extracts"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/3825969d-b2d2-444f-9c09-8a3e0a3b6caf.png" 
                  alt="Beauty Clinic Shower Gel collection - Lavender, Mix Fruit, Ocean Blue, Red Rose"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/38b655de-4446-4f6f-97f0-cd4653dd6b91.png" 
                  alt="Beauty Clinic Shower Gel - Mix Fruit with revitalizing gel and moisturizing effect"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/3ad25900-b701-4a84-8075-12ec37641140.png" 
                  alt="Beauty Clinic Shower Gel - Lavender with revitalizing gel and moisturizing effect"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant gallery-3d">
                <img 
                  src="/lovable-uploads/fe63601d-1240-4477-8780-7ef9141fc77f.png" 
                  alt="Beauty Clinic skincare collection - Beauty Serum, Glycerin, Rose Water, Vitamin C Lotion, Papaya Whitening Body Lotion"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;