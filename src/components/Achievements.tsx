import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Star, Zap, Users, Code, Award } from "lucide-react";

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setConfettiActive(true), 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner",
      description: "First place in university-level coding competition",
      icon: Trophy,
      color: "primary",
      highlight: true,
      stats: "1st Place",
      category: "Competition"
    },
    {
      id: 2,
      title: "Perfect GPA Semester",
      description: "Achieved 4.0 GPA in Advanced Algorithms semester",
      icon: Star,
      color: "accent-green",
      highlight: false,
      stats: "4.0/4.0",
      category: "Academic"
    },
    {
      id: 3,
      title: "Open Source Contributor",
      description: "Contributed to 5+ open source projects on GitHub",
      icon: Code,
      color: "accent-violet",
      highlight: false,
      stats: "5+ Projects",
      category: "Development"
    },
    {
      id: 4,
      title: "Team Lead Success",
      description: "Led development team of 4 in capstone project",
      icon: Users,
      color: "secondary",
      highlight: false,
      stats: "4 Members",
      category: "Leadership"
    },
    {
      id: 5,
      title: "Innovation Award",
      description: "Recognition for IoT dashboard innovation",
      icon: Zap,
      color: "primary",
      highlight: false,
      stats: "Innovation",
      category: "Technology"
    },
    {
      id: 6,
      title: "Dean's List",
      description: "Multiple semesters academic excellence recognition",
      icon: Award,
      color: "accent-green",
      highlight: false,
      stats: "3 Semesters",
      category: "Academic"
    }
  ];

  const counters = [
    { label: "Projects Completed", value: 10, suffix: "+", color: "primary" },
    { label: "Hackathons Won", value: 1, suffix: "", color: "accent-green" },
    { label: "Technologies Learned", value: 15, suffix: "+", color: "accent-violet" },
    { label: "Team Collaborations", value: 8, suffix: "+", color: "secondary" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "border-primary/30 hover:border-primary/70 hover:glow-primary bg-primary/5",
      "accent-green": "border-accent-green/30 hover:border-accent-green/70 hover:glow-green bg-accent-green/5",
      "accent-violet": "border-accent-violet/30 hover:border-accent-violet/70 hover:glow-violet bg-accent-violet/5",
      secondary: "border-secondary/30 hover:border-secondary/70 hover:shadow-glow bg-secondary/5",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      primary: "text-primary",
      "accent-green": "text-accent-green",
      "accent-violet": "text-accent-violet",
      secondary: "text-secondary-glow",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  // Confetti Particles
  const ConfettiParticle = ({ delay, duration, color }: { delay: number, duration: number, color: string }) => (
    <motion.div
      className={`absolute w-2 h-2 ${color} rounded-full`}
      initial={{ 
        opacity: 0, 
        scale: 0, 
        x: Math.random() * window.innerWidth, 
        y: -20 
      }}
      animate={confettiActive ? {
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0.5],
        y: window.innerHeight + 20,
        rotate: Math.random() * 360
      } : {}}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    />
  );

  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Confetti Effect */}
      {confettiActive && (
        <div className="fixed inset-0 pointer-events-none z-20">
          {[...Array(50)].map((_, i) => (
            <ConfettiParticle
              key={i}
              delay={Math.random() * 2}
              duration={3 + Math.random() * 2}
              color={[
                "bg-primary", 
                "bg-accent-green", 
                "bg-accent-violet", 
                "bg-secondary-glow"
              ][Math.floor(Math.random() * 4)]}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
            Achievements & Milestones
          </h2>
        </motion.div>

        {/* Achievement Counters */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center hover:glow-primary transition-all duration-300"
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`text-3xl md:text-4xl font-bold mb-2 ${getIconColor(counter.color)}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
                transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
              >
                {counter.value}{counter.suffix}
              </motion.div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {counter.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            
            return (
              <motion.div
                key={achievement.id}
                className={`relative ${getColorClasses(achievement.color)} rounded-xl p-6 transition-all duration-300 ${
                  achievement.highlight ? 'ring-2 ring-primary/50' : ''
                }`}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : 50,
                  rotateX: isVisible ? 0 : -15
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Highlight Badge */}
                {achievement.highlight && (
                  <motion.div
                    className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: isVisible ? 1 : 0, rotate: isVisible ? 0 : -45 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    ★ FEATURED
                  </motion.div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className={`p-3 rounded-lg ${
                      achievement.color === 'primary' ? 'bg-primary/20' :
                      achievement.color === 'accent-green' ? 'bg-accent-green/20' :
                      achievement.color === 'accent-violet' ? 'bg-accent-violet/20' :
                      'bg-secondary/20'
                    }`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ 
                      scale: isVisible ? 1 : 0, 
                      rotate: isVisible ? 0 : -180 
                    }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <IconComponent className={`w-6 h-6 ${getIconColor(achievement.color)}`} />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {achievement.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full border ${
                        achievement.color === 'primary' 
                          ? 'border-primary/30 text-primary bg-primary/10'
                          : achievement.color === 'accent-green'
                          ? 'border-accent-green/30 text-accent-green bg-accent-green/10'
                          : achievement.color === 'accent-violet'
                          ? 'border-accent-violet/30 text-accent-violet bg-accent-violet/10'
                          : 'border-secondary/30 text-secondary-glow bg-secondary/10'
                      }`}>
                        {achievement.category}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {achievement.description}
                    </p>

                    <div className={`text-sm font-semibold ${getIconColor(achievement.color)}`}>
                      {achievement.stats}
                    </div>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <motion.div
                  className="w-full h-1 bg-muted rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <motion.div
                    className={`h-full ${
                      achievement.color === 'primary' ? 'bg-primary' :
                      achievement.color === 'accent-green' ? 'bg-accent-green' :
                      achievement.color === 'accent-violet' ? 'bg-accent-violet' :
                      'bg-secondary-glow'
                    }`}
                    initial={{ width: "0%" }}
                    animate={{ width: isVisible ? "100%" : "0%" }}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-muted-foreground mb-4">
            Constantly pushing boundaries and achieving new milestones
          </p>
          <motion.div
            className="inline-flex items-center gap-2 text-primary"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Target className="w-4 h-4" />
            <span className="text-sm font-semibold">Next Goal: Industry Impact</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;