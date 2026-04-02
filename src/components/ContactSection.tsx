import { MapPin, Phone, Clock } from "lucide-react";

const hours = [
  { day: "Monday – Saturday", time: "11:00 AM – 9:00 PM" },
  { day: "Sunday", time: "11:00 AM – 9:00 PM" },
];

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">Visit Us</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground">Get in Touch</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-lg text-foreground mb-2">Address</h3>
          <p className="text-muted-foreground text-sm">2014 S Goliad St #140<br />Rockwall, TX 75087</p>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-lg text-foreground mb-2">Phone</h3>
          <a href="tel:4692647999" className="text-primary font-medium">(469) 264-7999</a>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-lg text-foreground mb-2">Hours</h3>
          {hours.map((h) => (
            <p key={h.day} className="text-muted-foreground text-sm">{h.day}<br />{h.time}</p>
          ))}
        </div>
      </div>

      <div className="rounded-xl overflow-hidden warm-shadow max-w-4xl mx-auto">
        <iframe
          title="Curry Express location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.5!2d-96.4598!3d32.8886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea5e5e5e5e5e5%3A0x0!2s2014+S+Goliad+St+%23140%2C+Rockwall%2C+TX+75087!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default ContactSection;
