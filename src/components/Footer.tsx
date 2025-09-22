import { useState, useEffect } from "react";
import { ChevronUp, Heart, Code } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-card/5 border-t border-primary/10">
      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 glass-card p-3 rounded-full hover:glow-primary transition-smooth group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-primary group-hover:animate-bounce" />
        </button>
      )}

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient-neon mb-2">
              Krishna Teja Rangavajjala
            </h3>
            <p className="text-muted-foreground">
              Full-Stack Developer | Java + Spring Boot | React & Next.js Expert
            </p>
          </div>

          {/* Quick Links */}


          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full text-sm text-muted-foreground">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span>© {currentYear} Krishna Teja Rangavajjala</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>

            <div className="flex items-center space-x-2">
              <span>Available for Hire — Full-Stack Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;