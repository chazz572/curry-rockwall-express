import { Star } from "lucide-react";

const reviews = [
  {
    text: "Small variety of options but excellent quality, price, and serving size.",
    source: "Google Review",
    rating: 5,
  },
  {
    text: "Good prices and good food and nice staff as well as relaxed environment.",
    source: "Google Review",
    rating: 5,
  },
  {
    text: "Authentic flavors that remind me of home. The butter chicken is a must-try!",
    source: "Facebook",
    rating: 5,
  },
];

const platforms = [
  { name: "Facebook", rating: "5/5", votes: "43 votes" },
  { name: "Grubhub", rating: "4.5/5", votes: "10 votes" },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">What People Say</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground">Guest Reviews</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {reviews.map((r, i) => (
          <div key={i} className="bg-background rounded-xl p-6 warm-shadow">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground italic leading-relaxed mb-4">"{r.text}"</p>
            <p className="text-sm text-muted-foreground">{r.source}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-8">
        {platforms.map((p) => (
          <div key={p.name} className="text-center">
            <p className="font-display text-2xl text-foreground">{p.rating}</p>
            <p className="text-sm text-muted-foreground">{p.name} · {p.votes}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
