import { Flame, Leaf } from "lucide-react";

const categories = [
  {
    name: "Appetizers",
    items: [
      { name: "Samosa (2 pcs)", price: "$5", desc: "Crispy pastry filled with spiced potatoes & peas", vegan: true },
      { name: "Chicken Pakora", price: "$7", desc: "Tender chicken strips in a spiced chickpea batter" },
      { name: "Paneer Tikka", price: "$8", desc: "Grilled cottage cheese with bell peppers & onions", vegan: false },
    ],
  },
  {
    name: "Kebabs & Grills",
    items: [
      { name: "Chicken Tikka", price: "$12", desc: "Boneless chicken marinated in yogurt & spices, char-grilled", popular: true },
      { name: "Seekh Kebab", price: "$13", desc: "Minced lamb kebabs with herbs & aromatic spices" },
      { name: "Tandoori Chicken", price: "$14", desc: "Half chicken marinated overnight, cooked in tandoor", popular: true },
    ],
  },
  {
    name: "Curries",
    items: [
      { name: "Butter Chicken", price: "$13", desc: "Tender chicken in a creamy tomato-butter sauce", popular: true },
      { name: "Lamb Rogan Josh", price: "$15", desc: "Slow-cooked lamb in a rich Kashmiri spice gravy" },
      { name: "Chana Masala", price: "$11", desc: "Chickpeas simmered in a tangy tomato-onion sauce", vegan: true },
      { name: "Palak Paneer", price: "$12", desc: "Cottage cheese cubes in a vibrant spinach gravy" },
    ],
  },
  {
    name: "Biryani & Rice",
    items: [
      { name: "Chicken Biryani", price: "$14", desc: "Fragrant basmati rice layered with spiced chicken" },
      { name: "Vegetable Biryani", price: "$12", desc: "Seasonal vegetables with aromatic saffron rice", vegan: true },
    ],
  },
];

const MenuSection = () => (
  <section id="menu" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">Our Specialties</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground">The Menu</h2>
        <p className="text-muted-foreground mt-3">$10–20 per person · Vegan options available</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.name}>
            <h3 className="font-display text-2xl text-foreground mb-6 pb-2 border-b border-primary/30">{cat.name}</h3>
            <div className="space-y-5">
              {cat.items.map((item) => (
                <div key={item.name} className="flex justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{item.name}</span>
                      {item.popular && <Flame className="w-4 h-4 text-primary" />}
                      {item.vegan && <Leaf className="w-4 h-4 text-green-600" />}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                  <span className="text-primary font-semibold whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuSection;
