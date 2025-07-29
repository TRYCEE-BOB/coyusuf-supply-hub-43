import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
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
  Users,
  ChevronDown,
  Star,
  Image as ImageIcon
} from "lucide-react";
import { useState } from "react";

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

        {/* Product Gallery Albums */}
        <ProductGalleryAlbums />
      </div>
    </section>
  );
};

const ProductGalleryAlbums = () => {
  const [openAlbums, setOpenAlbums] = useState<string[]>([]);

  const toggleAlbum = (albumId: string) => {
    setOpenAlbums(prev => 
      prev.includes(albumId) 
        ? prev.filter(id => id !== albumId)
        : [...prev, albumId]
    );
  };

  // Featured Products - displayed prominently
  const featuredProducts = [
    {
      image: "/lovable-uploads/7dffe7bb-cae9-4041-a7ac-1caf4128c4d5.png",
      title: "Essential Office Supplies",
      description: "Complete stationery collection with pens, markers, and sticky notes"
    },
    {
      image: "/lovable-uploads/00f9f79b-6843-4b62-98a3-29028a997ed1.png",
      title: "Dettol Antiseptic",
      description: "Professional grade antiseptic for complete hygiene protection"
    },
    {
      image: "/lovable-uploads/b162a9d2-e6c0-4632-9267-1db2257e78c6.png",
      title: "Dettol Body Wash",
      description: "Antibacterial body wash with 12-hour odor protection"
    },
    {
      image: "/lovable-uploads/5cb858b4-4897-400f-86a4-f8d9a06a227e.png",
      title: "Office Workstation",
      description: "Complete ergonomic office setup with desk and chair"
    }
  ];

  // Product Albums
  const productAlbums = [
    {
      id: "office-supplies",
      title: "Office Supplies & Furniture",
      icon: FileText,
      description: "Complete office solutions from stationery to furniture",
      featured: true,
      products: [
        { image: "/lovable-uploads/ad252c50-d116-46d6-9373-2356d8bcecca.png", alt: "Modern office furniture collection" },
        { image: "/lovable-uploads/7d934148-8979-4e7a-9106-7117013093cf.png", alt: "Executive office chairs" },
        { image: "/lovable-uploads/e1acae63-e751-41eb-977b-2d2e0dd90f78.png", alt: "Executive desk and chair set" },
        { image: "/lovable-uploads/68067fc5-d056-447d-a4df-b1cd591d999c.png", alt: "Office printers and technology" },
        { image: "/lovable-uploads/620e5e14-510a-4e26-9ed5-633c3f571935.png", alt: "Educational books and laptop" },
        { image: "/lovable-uploads/b2a9cf26-2304-47a0-be28-8da9b902cef5.png", alt: "Windows 11 laptops and devices" }
      ]
    },
    {
      id: "technology",
      title: "Technology & Electronics",
      icon: Monitor,
      description: "Modern technology solutions for your business needs",
      featured: false,
      products: [
        { image: "/lovable-uploads/0a0922b4-9e21-47e4-8fdd-36870aea3e57.png", alt: "Casio scientific calculator blue" },
        { image: "/lovable-uploads/e434e6c1-4359-41be-888d-57c4a12fdd10.png", alt: "Pink scientific calculator" },
        { image: "/lovable-uploads/7e80a114-5325-4dfc-9147-06264185e788.png", alt: "CMYK printer ink cartridges" },
        { image: "/lovable-uploads/0eff63e5-8384-414b-8e0f-3eee2e11f05e.png", alt: "Color ink bottles and cartridges" }
      ]
    },
    {
      id: "cleaning-safety",
      title: "Cleaning & Safety Supplies",
      icon: Shield,
      description: "Professional cleaning products and safety equipment",
      featured: false,
      products: [
        { image: "/lovable-uploads/9cbcd128-3201-4faa-88ed-00808f015baf.png", alt: "Mortein insect spray" },
        { image: "/lovable-uploads/df6ee29d-6684-4a4d-b5ba-093dc872b2b1.png", alt: "Professional cleaning supplies" },
        { image: "/lovable-uploads/0b85035b-0ce5-46e1-8fd3-5042dd8a6181.png", alt: "Safety protective gear" },
        { image: "/lovable-uploads/a5ebf3cd-4ef8-4474-8f12-09171b39c2e2.png", alt: "Harpic toilet cleaner range" },
        { image: "/lovable-uploads/e38bcace-87a4-48b6-ae5b-93998058ac4c.png", alt: "Harpic and Lysol products" },
        { image: "/lovable-uploads/ce59a075-234d-4758-afdb-a985c543b8be.png", alt: "JIK bleach collection" },
        { image: "/lovable-uploads/9cdd0ead-5cbe-47b8-be20-c0d69fddb770.png", alt: "Beauty Clinic Fabric Softener - Fresh Spirit" },
        { image: "/lovable-uploads/378b0548-f5c5-41ef-8d6c-d67f6ee82c70.png", alt: "Beauty Clinic Fabric Softener - Oudh" },
        { image: "/lovable-uploads/77ab3712-5cfc-445c-86f8-af7d3256c710.png", alt: "Beauty Clinic Dishwash Liquid - Strawberry" }
      ]
    },
    {
      id: "personal-care",
      title: "Personal Care & Beauty Clinic",
      icon: Droplets,
      description: "Premium personal care and hygiene products",
      featured: true,
      products: [
        { image: "/lovable-uploads/0c183d5a-e6ed-4035-a242-eeb4f8fb9767.png", alt: "Dettol Fresh Body wash - Yuzu Citrus" },
        { image: "/lovable-uploads/cefa51bb-2bac-47a2-a4eb-18091ab302d5.png", alt: "Beauty Clinic Hair Removal Cream - Cucumber" },
        { image: "/lovable-uploads/d4dcdd48-a31f-418d-99cc-5ee4bd0626d9.png", alt: "Beauty Clinic Exfoliating Body Wash - Strawberry" },
        { image: "/lovable-uploads/608bfb5d-8406-4b4f-a00e-e44c1d321011.png", alt: "Beauty Clinic Hair Removal Cream - Lotus" },
        { image: "/lovable-uploads/8a505816-138c-4e22-ba5b-3a579eba3db4.png", alt: "Beauty Clinic Body Wash collection" },
        { image: "/lovable-uploads/831dc2ac-51b2-4675-8275-2a79fcced422.png", alt: "Beauty Clinic Hair Treatment Cream" },
        { image: "/lovable-uploads/31309762-8f63-47e7-b6ec-6a51c8fca2fb.png", alt: "Beauty Clinic Papaya Body Wash" },
        { image: "/lovable-uploads/fb0f5b7e-e530-40a6-bb88-e01251e0d8f5.png", alt: "Beauty Clinic Rose Body Wash" },
        { image: "/lovable-uploads/3825969d-b2d2-444f-9c09-8a3e0a3b6caf.png", alt: "Beauty Clinic Aloe Vera Body Wash" },
        { image: "/lovable-uploads/17161e24-74c6-4ef6-b33c-efebcc7ba59d.png", alt: "Beauty Clinic Orange Body Wash" },
        { image: "/lovable-uploads/f1b3c650-09e0-411e-a8e3-49f7bc51b8d0.png", alt: "Beauty Clinic Lemon Body Wash" },
        { image: "/lovable-uploads/38b655de-4446-4f6f-97f0-cd4653dd6b91.png", alt: "Beauty Clinic Mixed Fruit Body Wash" },
        { image: "/lovable-uploads/13d650e9-65e0-4ace-80be-65177c799a53.png", alt: "Beauty Clinic Cucumber Body Wash" },
        { image: "/lovable-uploads/d6573eb4-c270-4376-b197-33dd17aedf52.png", alt: "Beauty Clinic Strawberry Body Wash" },
        { image: "/lovable-uploads/298c22fc-2008-4311-a8e7-b3aa80ef024e.png", alt: "Beauty Clinic Apple Body Wash" },
        { image: "/lovable-uploads/e4891c27-5549-4c7f-9b9b-97b7291c7428.png", alt: "Beauty Clinic Mixed Body Wash Set" },
        { image: "/lovable-uploads/3ad25900-b701-4a84-8075-12ec37641140.png", alt: "Beauty Clinic Body Wash Variety Pack" },
        { image: "/lovable-uploads/99e3de35-9043-4987-a935-38869bd31adc.png", alt: "Beauty Clinic Fruit Collection Body Wash" },
        { image: "/lovable-uploads/5754369d-7630-438b-802f-17129c6014f1.png", alt: "Beauty Clinic Natural Body Wash" },
        { image: "/lovable-uploads/fe63601d-1240-4477-8780-7ef9141fc77f.png", alt: "Beauty Clinic Premium Body Wash" },
        { image: "/lovable-uploads/ee072843-dce0-433f-9259-d010786859cc.png", alt: "Beauty Clinic Body Mist - Romantic Collection" },
        { image: "/lovable-uploads/8416f844-6e3f-40cb-94ce-328d9dcc759e.png", alt: "Beauty Clinic Perfumed Body Mist" },
        { image: "/lovable-uploads/ace3bd36-2f7d-46b9-a592-e493d5a70ba2.png", alt: "Beauty Clinic Romantic Body Mist" },
        { image: "/lovable-uploads/69ea5eb8-55cc-4f4f-9abf-1f059dd17988.png", alt: "Beauty Clinic Face Wash Collection" },
        { image: "/lovable-uploads/41050b6a-c693-413f-9e7a-23f082eee429.png", alt: "Beauty Clinic Facial Cleanser" },
        { image: "/lovable-uploads/d5f123b9-764b-499a-a2f3-6f989cc71763.png", alt: "Beauty Clinic Body Wash Bottles" },
        { image: "/lovable-uploads/47f982ff-1d97-4f25-bee8-994f4bff5bfb.png", alt: "Beauty Clinic Body Care Set" },
        { image: "/lovable-uploads/56cbe61e-d0d3-4ebe-9ab7-0d25ae624348.png", alt: "Beauty Clinic Complete Care" },
        { image: "/lovable-uploads/46d50362-b4ea-4851-bc09-88df0131043d.png", alt: "Beauty Clinic Skincare Products" },
        { image: "/lovable-uploads/82292508-9a59-43d7-b8ec-8b578feabd5a.png", alt: "Beauty Clinic Personal Care Collection" },
        { image: "/lovable-uploads/9d820ee8-71a7-4d38-89fc-0f7e603c7388.png", alt: "Beauty Clinic Body Treatment" },
        { image: "/lovable-uploads/2b87a2d7-4ce1-4525-b9cd-66aad51b9241.png", alt: "Beauty Clinic Shower Gel" },
        { image: "/lovable-uploads/7d1db3ed-3cdd-41b7-ab6a-ad2eef62c888.png", alt: "Beauty Clinic Hair Care" },
        { image: "/lovable-uploads/901db02a-5294-4640-baa5-47b526eccdd1.png", alt: "Beauty Clinic Body Lotion" },
        { image: "/lovable-uploads/9760cc52-2899-4917-bb7f-34d874ac60e9.png", alt: "Beauty Clinic Spa Collection" },
        { image: "/lovable-uploads/663609c7-da89-4f4c-b31e-b01b83506500.png", alt: "Beauty Clinic Professional Range" },
        { image: "/lovable-uploads/14929077-2e33-4e4f-ba16-2dcb0c549d5b.png", alt: "Beauty Clinic Luxury Collection" },
        { image: "/lovable-uploads/5f4c87b6-40fe-4023-9de0-56b96b8d9875.png", alt: "Beauty Clinic Premium Care" }
      ]
    }
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
          Our <span className="text-primary">Product Gallery</span>
        </h3>
        <p className="text-lg text-muted-foreground">
          Explore our comprehensive collection organized by categories
        </p>
      </div>

      {/* Featured Products Section */}
      <div className="mb-16">
        <div className="flex items-center justify-center mb-8">
          <Star className="h-6 w-6 text-yellow-500 mr-2" />
          <h4 className="text-xl font-bold text-foreground">Featured Products</h4>
          <Star className="h-6 w-6 text-yellow-500 ml-2" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 card-3d">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain bg-white hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h5 className="font-semibold mb-2 text-sm">{product.title}</h5>
                <p className="text-xs text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Product Albums */}
      <div className="space-y-6">
        <div className="flex items-center justify-center mb-8">
          <ImageIcon className="h-6 w-6 text-primary mr-2" />
          <h4 className="text-xl font-bold text-foreground">Product Albums</h4>
        </div>
        
        {productAlbums.map((album) => (
          <Card key={album.id} className="overflow-hidden shadow-elegant card-3d">
            <Collapsible>
              <CollapsibleTrigger 
                className="w-full"
                onClick={() => toggleAlbum(album.id)}
              >
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                        <album.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <CardTitle className="flex items-center gap-2">
                          {album.title}
                          {album.featured && <Badge variant="secondary" className="text-xs">Featured</Badge>}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{album.description}</p>
                        <Badge variant="outline" className="mt-2">
                          {album.products.length} Products
                        </Badge>
                      </div>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${openAlbums.includes(album.id) ? 'rotate-180' : ''}`} />
                  </div>
                </CardHeader>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {album.products.map((product, index) => (
                      <div key={index} className="group">
                        <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 gallery-3d">
                          <img 
                            src={product.image} 
                            alt={product.alt}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 text-center line-clamp-2">
                          {product.alt}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;