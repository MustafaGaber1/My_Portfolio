import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6.5 px-4 sm:px-6 md:px-8 lg:px-20 font-semibold bg-card relative border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Mustafa Gaber. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex-shrink-0"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
