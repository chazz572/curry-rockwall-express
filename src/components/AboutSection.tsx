import interiorImg from "@/assets/restaurant-interior.jpg";
import { Leaf, Baby, Star } from "lucide-react";

const features = [
  { icon: Leaf, label: "Vegan Options" },
  { icon: Baby, label: "High Chairs" },
  { icon: Star, label: "5★ on Facebook" },
];

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="rounded-xl overflow-hidden warm-shadow">
          <img src={interiorImg} alt="Curry Express restaurant interior" loading="lazy" width={1280} height={720} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">Our Story</p>
          <h2 className="font-display text-4xl text-foreground mb-5">A Taste of India in Rockwall</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Curry Express Indian Bistro brings authentic flavors from across India to the heart of Rockwall, Texas. 
            Our chefs use traditional recipes and the freshest spices to craft dishes that delight every palate — 
            from smoky tandoori grills to rich, aromatic curries.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Whether you're craving a quick lunch or a relaxed dinner, our welcoming atmosphere and friendly staff 
            make every visit a memorable experience.
          </p>
          <div className="flex gap-6">
            {features.map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
