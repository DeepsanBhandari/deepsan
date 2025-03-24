
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-gradient">Deepsan Bhandari</h3>
            <p className="text-foreground/70 mt-2">Software Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-foreground/70">
              &copy; {currentYear} Deepsan Bhandari. All rights reserved.
            </p>
            <p className="text-sm text-foreground/60 mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
        
        <div className="border-t border-border my-8"></div>
        
        <div className="flex justify-center">
          <a 
            href="#home" 
            className="bg-primary/10 hover:bg-primary/20 transition-colors p-3 rounded-full"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
