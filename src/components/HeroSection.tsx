import heroImg from "@/assets/hero-food.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Delicious Indian food spread" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 hero-overlay" />
    <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in-up">
      <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-4">Indian Bistro · Rockwall, TX</p>
      <h1 className="font-display text-5xl md:text-7xl text-primary-foreground leading-tight mb-6">
        Curry Express
      </h1>
      <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl mx-auto">
        Classic Indian dishes, grilled chicken & kebabs — made with love and authentic spices.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#menu" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-primary-foreground font-medium hover:opacity-90 transition-opacity">
          View Our Menu
        </a>
        <a href="tel:4692647999" className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 px-8 py-3 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors">
          Order Now
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
