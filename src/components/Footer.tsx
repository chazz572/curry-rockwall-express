const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-xl text-primary-foreground mb-2">Curry Express Indian Bistro</p>
      <p className="text-primary-foreground/60 text-sm mb-4">2014 S Goliad St #140, Rockwall, TX 75087</p>
      <p className="text-primary-foreground/40 text-xs">© {new Date().getFullYear()} Curry Express Indian Bistro. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
