import storefrontImg from "@/assets/storefront.jpg";
import curryImg from "@/assets/curry-dish.webp";
import feastImg from "@/assets/feast-spread.webp";
import samosasImg from "@/assets/samosas.webp";
import butterChickenImg from "@/assets/butter-chicken.webp";
import naanComboImg from "@/assets/naan-combo.jpeg";
import chicken65Img from "@/assets/chicken65.webp";
import biryaniImg from "@/assets/biryani-real.webp";
import buffetImg from "@/assets/buffet-line.jpg";
import diningImg from "@/assets/restaurant-dining.jpg";

const photos = [
  { src: feastImg, alt: "A feast of curries, rice, and naan at Curry Express", span: "md:col-span-2 md:row-span-2" },
  { src: biryaniImg, alt: "Fresh biryani garnished with herbs and lemon" },
  { src: samosasImg, alt: "Crispy homemade samosas" },
  { src: chicken65Img, alt: "Spicy Chicken 65 appetizer" },
  { src: butterChickenImg, alt: "Butter chicken over white rice" },
  { src: curryImg, alt: "Rich curry dish with cilantro" },
  { src: naanComboImg, alt: "Naan, biryani rice and veggie combo" },
  { src: buffetImg, alt: "Curry Express buffet line with fresh dishes" },
  { src: diningImg, alt: "Inside the Curry Express dining room", span: "md:col-span-2" },
  { src: storefrontImg, alt: "Curry Express Indian Bistro storefront in Rockwall, TX" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">From Our Kitchen</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground">Gallery</h2>
        <p className="text-muted-foreground mt-3">Real food, real flavors — see what's cooking</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
        {photos.map((photo) => (
          <div
            key={photo.alt}
            className={`group relative rounded-xl overflow-hidden ${photo.span || ""}`}
            style={{ boxShadow: "var(--warm-glow)" }}
          >
            <div className="aspect-square w-full h-full">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
