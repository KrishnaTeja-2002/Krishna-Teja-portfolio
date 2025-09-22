import { useState, useEffect, useRef } from "react";
import { Mail, Linkedin, Github, Send, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! ✨",
        description: "Thanks for reaching out! I'll get back to you soon.",
        duration: 5000,
      });

      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "krishna.teja@example.com",
      href: "mailto:krishna.teja@example.com",
      color: "primary"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/krishna-teja-rangavajjala/",
      href: "https://www.linkedin.com/in/krishna-teja-rangavajjala/",
      color: "accent-green"
    },
    // {
    //   icon: <Github className="w-6 h-6" />,
    //   label: "GitHub",
    //   value: "github.com/krishnateja",
    //   href: "https://github.com/krishnateja",
    //   color: "accent-violet"
    // }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "border-primary/30 hover:border-primary/70 hover:glow-primary text-primary",
      "accent-green": "border-accent-green/30 hover:border-accent-green/70 hover:glow-green text-accent-green",
      "accent-violet": "border-accent-violet/30 hover:border-accent-violet/70 hover:glow-violet text-accent-violet",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="contact" ref={sectionRef} className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
            Get In Touch
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects,
                  or simply chat about technology and innovation. Whether you're looking for a developer,
                  have a project in mind, or want to connect professionally, I'd love to hear from you!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-card p-4 flex items-center space-x-4 transition-all duration-300 group ${getColorClasses(info.color)}`}
                  >
                    <div className={`p-3 rounded-lg border ${getColorClasses(info.color)} group-hover:animate-float`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-current transition-smooth">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground text-sm group-hover:text-current transition-smooth">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="glass-card p-6 mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Quick Response
                </h4>
                <p className="text-muted-foreground text-sm">
                  I typically respond to messages within 24-48 hours. For urgent inquiries,
                  feel free to reach out via LinkedIn for faster communication.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="text-primary mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Send Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-muted/50 border-muted focus:border-primary transition-smooth"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-muted/50 border-muted focus:border-primary transition-smooth"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-muted/50 border-muted focus:border-primary transition-smooth resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full hero-button text-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional CTA */}

        </div>
      </div>
    </section>
  );
};

export default Contact;