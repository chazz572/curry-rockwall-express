import { Leaf } from "lucide-react";
import samosasImg from "@/assets/menu-samosas.jpg";
import biryaniImg from "@/assets/menu-biryani.jpg";
import butterChickenImg from "@/assets/menu-butter-chicken.jpg";
import tandooriImg from "@/assets/menu-tandoori.jpg";

interface MenuItemData {
  name: string;
  price: string;
  desc?: string;
}

interface MenuCategoryData {
  name: string;
  note?: string;
  veg?: boolean;
  items: MenuItemData[];
}

const categories: MenuCategoryData[] = [
  {
    name: "Vegetarian Appetizers",
    veg: true,
    items: [
      { name: "Vegetable Samosas (2 pcs.)", price: "$4.99", desc: "Deep-fried savory pastry stuffed with potato and spice mixture - served with chutneys" },
      { name: "Mixed Veg Pakoras", price: "$7.49", desc: "Fresh veggies battered and deep-fried to order - served with chutneys" },
      { name: "Gobi Manchurian", price: "$12.99", desc: "Fried cauliflower florets battered and deep-fried - served sautéed in Manchurian sauce" },
      { name: "Chilli Paneer", price: "$13.99", desc: "Cheese cubes sautéed in intense chili sauce" },
      { name: "Papadam (3 pcs.)", price: "$2.99", desc: "Crispy lentil wafers - served with chutneys" },
    ],
  },
  {
    name: "Non-Vegetarian Appetizers",
    items: [
      { name: "Chicken 65", price: "$12.99", desc: "Fried chicken sautéed in a spicy yogurt sauce" },
      { name: "Chilli Chicken", price: "$12.99", desc: "Fried chicken sautéed in a chili sauce" },
      { name: "Chicken Manchurian", price: "$12.99", desc: "Fried chicken sautéed in Manchurian sauce" },
      { name: "Chilli Shrimp", price: "$14.99", desc: "Fried shrimp sautéed in a chili sauce" },
    ],
  },
  {
    name: "Rice Specialties",
    items: [
      { name: "White Rice", price: "$2.99" },
      { name: "Veg Biryani", price: "$13.99", desc: "Baked spiced rice with sautéed vegetables, served with raita" },
      { name: "Chicken Biryani", price: "$15.99", desc: "Baked spiced rice with sautéed chicken, served with raita" },
      { name: "Goat Biryani", price: "$16.99", desc: "Baked spiced rice with sautéed goat, served with raita" },
      { name: "Lamb Biryani", price: "$17.99", desc: "Baked spiced rice with sautéed lamb, served with raita" },
      { name: "Shrimp Biryani", price: "$17.99", desc: "Baked spiced rice with sautéed shrimp, served with raita" },
    ],
  },
  {
    name: "Specials",
    items: [
      { name: "Chole Batura", price: "$12.99", desc: "Channa masala served with a side of fried bread" },
      { name: "Raita", price: "$2.99" },
    ],
  },
  {
    name: "Vegetarian Entrees",
    veg: true,
    note: "Served with white rice or naan",
    items: [
      { name: "Daal Curry", price: "$13.99", desc: "Lentils and tomatoes stewed with spices" },
      { name: "Aloo Gobi", price: "$13.99", desc: "Potato and cauliflower sautéed with spices" },
      { name: "Daal Makhani", price: "$13.99", desc: "Creamy black lentils slow-cooked with butter and spices" },
      { name: "Channa Masala", price: "$13.99", desc: "Chickpeas stewed in a savory tomato sauce" },
      { name: "Palak Paneer", price: "$14.99", desc: "Paneer cubes and spinach in a rich cream sauce" },
      { name: "Kadai Paneer", price: "$14.99", desc: "Paneer cooked in kadai with a flavorful masala" },
      { name: "Paneer Butter Masala", price: "$15.99", desc: "Paneer cubes in a creamy tomato sauce" },
      { name: "Veg Kadai", price: "$13.99", desc: "Vibrant vegetables cooked with assorted spices" },
      { name: "Malai Kofta", price: "$15.99", desc: "Vegetable and paneer dumplings in a rich gravy" },
      { name: "Bhindi Masala", price: "$14.99", desc: "Okra fry with spices - Dry Entrée" },
      { name: "Veg Khoorma", price: "$13.99", desc: "Mixed vegetables in a creamy sauce" },
      { name: "Navratan Khurma", price: "$13.99", desc: "Assorted vegetables in a rich cashew-based gravy" },
      { name: "Mushroom Matter", price: "$13.99", desc: "Mushroom and peas sautéed with gravy" },
    ],
  },
  {
    name: "Non-Vegetarian Entrees",
    note: "Served with white rice or naan",
    items: [
      { name: "Chicken Tikka Masala", price: "$15.99", desc: "Chicken breast cooked in tandoor and served in a creamy tomato sauce" },
      { name: "Butter Chicken", price: "$15.99", desc: "Dark meat cooked in tandoor and served in a creamy tomato sauce" },
      { name: "Chicken Vindaloo", price: "$15.99", desc: "Boneless chicken served in a spicy vindaloo sauce with potatoes" },
      { name: "Chicken Khurma", price: "$15.99", desc: "Boneless chicken served in a savory korma sauce" },
      { name: "Chicken Saag", price: "$15.99", desc: "Boneless chicken served in a spinach cream sauce" },
      { name: "Methi Chicken", price: "$15.99", desc: "Boneless chicken served in a methi cream sauce" },
      { name: "Chicken Curry", price: "$15.99", desc: "Boneless chicken stewed in a tomato sauce" },
      { name: "Chicken Jalfrazi", price: "$15.99", desc: "Chicken in a tomato gravy finished with Garam masala" },
      { name: "Chicken Karahi", price: "$15.99", desc: "Chicken finished with Garam masala" },
      { name: "Goat Curry", price: "$16.99", desc: "Goat cubes cooked down in a spicy sauce" },
      { name: "Goat Vindaloo", price: "$16.99", desc: "Boneless goat served in a spicy vindaloo sauce with potatoes" },
      { name: "Rogan Josh", price: "$17.99", desc: "Lamb chunks slowly cooked with a rich aromatic gravy" },
      { name: "Lamb Vindaloo", price: "$17.99", desc: "Boneless lamb served in a spicy vindaloo sauce with potatoes" },
      { name: "Lamb Curry", price: "$17.99", desc: "Lamb cubes stewed in a savory sauce" },
      { name: "Lamb Kurma", price: "$17.99", desc: "Lamb cubes stewed in a savory sauce" },
      { name: "Lamb Tikka Masala", price: "$17.99", desc: "Lamb tikka stewed in a tomato sauce" },
      { name: "Lamb Saag", price: "$17.99", desc: "Lamb in a spinach sauce" },
      { name: "Fish Masala", price: "$17.99", desc: "Fish fillets cooked down in a tamarind and tomato stew" },
      { name: "Shrimp Curry", price: "$17.99", desc: "Shrimp and tomatoes stewed" },
      { name: "Shrimp Vindaloo", price: "$17.99", desc: "Spicy vindaloo sauce with shrimp and potatoes" },
      { name: "Shrimp Kurma", price: "$17.99", desc: "Shrimp in a creamy korma sauce" },
      { name: "Shrimp Tikka Masala", price: "$17.99", desc: "Shrimp cooked in a tamarind and tomato sauce" },
    ],
  },
  {
    name: "Breads",
    items: [
      { name: "Naan", price: "$2.99", desc: "Baked bread - made in tandoor" },
      { name: "Onion Kulcha", price: "$3.99", desc: "Onion stuffed bread - baked in tandoor" },
      { name: "Garlic Naan", price: "$3.99", desc: "Garlic stuffed bread - baked in tandoor" },
      { name: "Tandoori Roti", price: "$3.99", desc: "Whole wheat bread baked in tandoor" },
      { name: "Kashmiri Naan", price: "$4.49", desc: "Bread baked in tandoor with fruits and nuts" },
    ],
  },
  {
    name: "Tandoor Specialties",
    items: [
      { name: "Tandoori Chicken", price: "$14.99", desc: "Spiced chicken leg pieces cooked in tandoor" },
      { name: "Chicken Tikka Kabab", price: "$15.99", desc: "Spiced boneless chicken breast cooked in tandoor" },
      { name: "Lamb Boti Kabab", price: "$17.99", desc: "Spicy lamb cubes grilled" },
      { name: "Shrimp Kabab", price: "$17.99", desc: "Peeled shrimp skewered grilled" },
      { name: "Tandoori Mix Grill", price: "$18.99", desc: "All of the above presented as a sampler" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Kheer", price: "$2.50", desc: "Rice and tapioca pudding with cardamom" },
      { name: "Rasmalai", price: "$3.50", desc: "Soft and spongy cheese patties in a sweet spiced milk with nuts" },
      { name: "Gulab Jamun", price: "$3.50", desc: "Deep-fried balls made with milk solids and immersed in syrup" },
    ],
  },
  {
    name: "Drinks",
    items: [
      { name: "Sodas", price: "$1.49" },
      { name: "Ice Tea", price: "$1.99" },
      { name: "Mango Lassi", price: "$3.99", desc: "Mango pulp blended with yogurt" },
      { name: "Chai", price: "$1.99", desc: "Spiced black tea served with milk" },
      { name: "Coffee", price: "$2.99" },
    ],
  },
];

const MenuCategoryCard = ({ cat }: { cat: MenuCategoryData }) => (
  <div>
    <div className="flex items-center gap-2 mb-1">
      <h3 className="font-display text-2xl text-foreground">{cat.name}</h3>
      {cat.veg && <Leaf className="w-5 h-5 text-primary" />}
    </div>
    {cat.note && <p className="text-sm text-muted-foreground mb-4 italic">{cat.note}</p>}
    {!cat.note && <div className="border-b border-primary/30 mb-5 mt-1" />}
    <div className="space-y-4">
      {cat.items.map((item) => (
        <div key={item.name} className="flex justify-between gap-3">
          <div className="min-w-0">
            <span className="font-medium text-foreground text-sm">{item.name}</span>
            {item.desc && <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>}
          </div>
          <span className="text-primary font-semibold text-sm whitespace-nowrap">{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

const PhotoBanner = ({ images }: { images: { src: string; alt: string }[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-14 px-2">
    {images.map((img) => (
      <div key={img.alt} className="group relative rounded-2xl overflow-hidden border border-border/50" style={{ boxShadow: 'var(--warm-glow)' }}>
        <div className="aspect-[4/3]">
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            width={640}
            height={480}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent pointer-events-none" />
      </div>
    ))}
  </div>
);

// Group categories into sections with photo breaks
const sections = [
  { cats: categories.slice(0, 4) },   // Appetizers + Rice + Specials
  { cats: categories.slice(4, 6) },   // Veg & Non-Veg Entrees
  { cats: categories.slice(6, 10) },  // Breads, Tandoor, Desserts, Drinks
];

const MenuSection = () => (
  <section id="menu" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">Our Specialties</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground">The Menu</h2>
        <p className="text-muted-foreground mt-3">Vegan options available · Served fresh daily</p>
      </div>
      <div className="max-w-5xl mx-auto">
        {/* Section 1: Appetizers */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
          {sections[0].cats.map((cat) => (
            <MenuCategoryCard key={cat.name} cat={cat} />
          ))}
        </div>

        <PhotoBanner images={[
          { src: samosasImg, alt: "Crispy vegetable samosas with green chutney" },
          { src: biryaniImg, alt: "Aromatic chicken biryani in a copper pot" },
          { src: butterChickenImg, alt: "Butter chicken with fresh naan bread" },
          { src: tandooriImg, alt: "Smoky tandoori chicken fresh from the oven" },
        ]} />

        {/* Section 2: Entrees */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
          {sections[1].cats.map((cat) => (
            <MenuCategoryCard key={cat.name} cat={cat} />
          ))}
        </div>

        <div className="my-10" />

        {/* Section 3: Breads, Tandoor, Desserts, Drinks */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
          {sections[2].cats.map((cat) => (
            <MenuCategoryCard key={cat.name} cat={cat} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MenuSection;
