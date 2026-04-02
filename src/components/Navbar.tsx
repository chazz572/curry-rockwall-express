import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="font-display text-xl text-primary-foreground tracking-wide">
          Curry Express
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:4692647999" className="flex items-center gap-2 text-sm text-accent font-medium">
            <Phone className="w-4 h-4" /> (469) 264-7999
          </a>
        </div>
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-foreground/95 border-t border-muted-foreground/20 px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-primary-foreground/80 hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:4692647999" className="flex items-center gap-2 py-3 text-accent font-medium">
            <Phone className="w-4 h-4" /> (469) 264-7999
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
