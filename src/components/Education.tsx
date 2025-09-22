import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      id: 1,
      degree: "Master of Science",
      field: "Computer Science",
      university: "Saint Louis University",
      location: "St. Louis, MO, USA",
      period: "2023 - 2025",
      gpa: "3.8/4.0",
      courses: [
        "Advanced Data Structures & Algorithms",
        "Software Engineering Principles",
        "Database Management Systems",
        "Machine Learning & AI",
        "Distributed Systems"
      ],
      side: "left"
    },
    {
      id: 2,
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      university: "CVR College of Engineering",
      location: "Hyderabad, India",
      period: "2019 - 2023",
      gpa: "3.7/4.0",
      courses: [
        "Object-Oriented Programming",
        "Web Technologies",
        "Operating Systems",
        "Computer Networks",
        "Database Systems"
      ],
      side: "right"
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Animated Blueprint Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-green/10" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, hsl(var(--primary)) 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, hsl(var(--accent-green)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)/0.1) 1px, transparent 1px),
              linear-gradient(0deg, hsl(var(--primary)/0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px, 150px 150px, 50px 50px, 50px 50px"
          }}
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px", "0px 0px"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
            Education Journey
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`flex items-center mb-16 ${
                edu.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col`}
              initial={{ 
                opacity: 0, 
                x: edu.side === "left" ? -100 : 100 
              }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                x: isVisible ? 0 : (edu.side === "left" ? -100 : 100) 
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                ease: "easeOut"
              }}
            >
              {/* Education Card */}
              <div className={`w-full md:w-5/12 ${edu.side === "right" ? "md:ml-auto" : ""}`}>
                <motion.div
                  className="glass-card p-8 hover:glow-primary transition-all duration-300"
                  whileHover={{ scale: 1.02, rotateY: edu.side === "left" ? -2 : 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/20 rounded-lg glow-primary">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-primary font-semibold mb-1">
                        {edu.field}
                      </p>
                      <p className="text-foreground font-medium mb-3">
                        {edu.university}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground md:col-span-2">
                      <Award className="w-4 h-4" />
                      <span>GPA: <span className="text-primary font-semibold">{edu.gpa}</span></span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                      Key Coursework
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {edu.courses.map((course, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                          transition={{ delay: (index * 0.3) + (idx * 0.1) + 0.5 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-green glow-green"></div>
                          <span>{course}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Connector */}
              <div className="w-full md:w-2/12 flex justify-center items-center py-8 md:py-0">
                <div className="relative">
                  <motion.div
                    className="w-4 h-4 bg-primary rounded-full glow-primary border-4 border-background"
                    initial={{ scale: 0 }}
                    animate={{ scale: isVisible ? 1 : 0 }}
                    transition={{ delay: index * 0.3 + 0.5, duration: 0.3 }}
                  />
                  {index < education.length - 1 && (
                    <motion.div
                      className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-primary to-transparent"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: isVisible ? 1 : 0 }}
                      transition={{ delay: index * 0.3 + 0.7, duration: 0.5 }}
                    />
                  )}
                </div>
              </div>

              {/* Spacer for alignment */}
              <div className="w-full md:w-5/12 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;