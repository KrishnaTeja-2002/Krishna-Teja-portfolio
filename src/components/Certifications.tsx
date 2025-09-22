// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Award, ExternalLink, Calendar, Building } from "lucide-react";

// const Certifications = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [flippedCard, setFlippedCard] = useState<number | null>(null);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const certifications = [
//     {
//       id: 1,
//       name: "Java Programming",
//       level: "Advanced",
//       issuer: "Oracle",
//       year: "2023",
//       credentialId: "OCP-JP-2023-001",
//       skills: ["Java 17", "Spring Framework", "JPA/Hibernate"],
//       color: "primary"
//     },
//     {
//       id: 2,
//       name: "React Developer",
//       level: "Professional",
//       issuer: "Meta",
//       year: "2023",
//       credentialId: "META-RD-2023-089",
//       skills: ["React 18", "Redux", "TypeScript"],
//       color: "accent-green"
//     },
//     {
//       id: 3,
//       name: "AWS Cloud Practitioner",
//       level: "Foundation",
//       issuer: "Amazon Web Services",
//       year: "2023",
//       credentialId: "AWS-CP-2023-456",
//       skills: ["EC2", "S3", "Lambda", "RDS"],
//       color: "accent-violet"
//     },
//     {
//       id: 4,
//       name: "Full Stack Development",
//       level: "Specialization",
//       issuer: "Coursera",
//       year: "2022",
//       credentialId: "COURSERA-FSD-2022",
//       skills: ["MERN Stack", "Node.js", "MongoDB"],
//       color: "secondary"
//     }
//   ];

//   const getColorClasses = (color: string) => {
//     const colorMap = {
//       primary: "border-primary/30 hover:border-primary/70 hover:glow-primary bg-primary/5",
//       "accent-green": "border-accent-green/30 hover:border-accent-green/70 hover:glow-green bg-accent-green/5",
//       "accent-violet": "border-accent-violet/30 hover:border-accent-violet/70 hover:glow-violet bg-accent-violet/5",
//       secondary: "border-secondary/30 hover:border-secondary/70 hover:shadow-glow bg-secondary/5",
//     };
//     return colorMap[color as keyof typeof colorMap] || colorMap.primary;
//   };

//   const getAccentColor = (color: string) => {
//     const colorMap = {
//       primary: "text-primary",
//       "accent-green": "text-accent-green",
//       "accent-violet": "text-accent-violet",
//       secondary: "text-secondary-glow",
//     };
//     return colorMap[color as keyof typeof colorMap] || colorMap.primary;
//   };

//   return (
//     <section id="certifications" ref={sectionRef} className="py-20 bg-muted/10">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
//             Certifications & Credentials
//           </h2>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//           {certifications.map((cert, index) => (
//             <motion.div
//               key={cert.id}
//               className="relative h-64 cursor-pointer"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               onHoverStart={() => setFlippedCard(cert.id)}
//               onHoverEnd={() => setFlippedCard(null)}
//             >
//               <motion.div
//                 className="relative w-full h-full preserve-3d"
//                 animate={{ rotateY: flippedCard === cert.id ? 180 : 0 }}
//                 transition={{ duration: 0.6, ease: "easeInOut" }}
//               >
//                 {/* Front of Card */}
//                 <motion.div
//                   className={`absolute inset-0 w-full h-full backface-hidden rounded-xl border-2 p-6 flex flex-col justify-center items-center text-center transition-all duration-300 ${getColorClasses(cert.color)}`}
//                   animate={{ 
//                     scale: flippedCard === cert.id ? 0.95 : 1 
//                   }}
//                 >
//                   <motion.div
//                     className={`p-4 rounded-full mb-4 ${cert.color === 'primary' ? 'bg-primary/20' : cert.color === 'accent-green' ? 'bg-accent-green/20' : cert.color === 'accent-violet' ? 'bg-accent-violet/20' : 'bg-secondary/20'}`}
//                     animate={{
//                       scale: flippedCard === cert.id ? [1, 1.1, 1] : 1
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Award className={`w-8 h-8 ${getAccentColor(cert.color)}`} />
//                   </motion.div>
                  
//                   <h3 className="text-lg font-bold text-foreground mb-2">
//                     {cert.name}
//                   </h3>
                  
//                   <p className={`text-sm font-semibold mb-2 ${getAccentColor(cert.color)}`}>
//                     {cert.level}
//                   </p>
                  
//                   <p className="text-sm text-muted-foreground">
//                     {cert.issuer}
//                   </p>

//                   <motion.div
//                     className="absolute bottom-4 right-4 opacity-50"
//                     animate={{ 
//                       opacity: flippedCard === cert.id ? 1 : 0.5,
//                       rotate: flippedCard === cert.id ? 360 : 0
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <ExternalLink className="w-4 h-4 text-muted-foreground" />
//                   </motion.div>
//                 </motion.div>

//                 {/* Back of Card */}
//                 <motion.div
//                   className={`absolute inset-0 w-full h-full backface-hidden rounded-xl border-2 p-6 flex flex-col justify-between transition-all duration-300 ${getColorClasses(cert.color)}`}
//                   style={{ transform: "rotateY(180deg)" }}
//                 >
//                   <div>
//                     <div className="flex items-center gap-2 mb-4">
//                       <Building className="w-4 h-4 text-muted-foreground" />
//                       <span className="text-sm text-foreground font-semibold">
//                         {cert.issuer}
//                       </span>
//                     </div>
                    
//                     <div className="flex items-center gap-2 mb-4">
//                       <Calendar className="w-4 h-4 text-muted-foreground" />
//                       <span className="text-sm text-muted-foreground">
//                         Issued {cert.year}
//                       </span>
//                     </div>

//                     <div className="mb-4">
//                       <p className="text-xs text-muted-foreground mb-1">Credential ID:</p>
//                       <p className="text-xs font-mono text-foreground break-all">
//                         {cert.credentialId}
//                       </p>
//                     </div>
//                   </div>

//                   <div>
//                     <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
//                       Key Skills
//                     </p>
//                     <div className="flex flex-wrap gap-1">
//                       {cert.skills.map((skill, idx) => (
//                         <span
//                           key={idx}
//                           className={`px-2 py-1 text-xs rounded-full border ${
//                             cert.color === 'primary' 
//                               ? 'border-primary/30 text-primary bg-primary/10'
//                               : cert.color === 'accent-green'
//                               ? 'border-accent-green/30 text-accent-green bg-accent-green/10'
//                               : cert.color === 'accent-violet'
//                               ? 'border-accent-violet/30 text-accent-violet bg-accent-violet/10'
//                               : 'border-secondary/30 text-secondary-glow bg-secondary/10'
//                           }`}
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Floating Achievement Stats */}
//         <motion.div
//           className="mt-16 text-center"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             {[
//               { label: "Certifications Earned", value: "4+", color: "primary" },
//               { label: "Technologies Mastered", value: "15+", color: "accent-green" },
//               { label: "Learning Hours", value: "200+", color: "accent-violet" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="glass-card p-6 text-center hover:glow-primary transition-all duration-300"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
//                 transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <motion.h3
//                   className={`text-3xl font-bold mb-2 ${getAccentColor(stat.color)}`}
//                   initial={{ scale: 0 }}
//                   animate={{ scale: isVisible ? 1 : 0 }}
//                   transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
//                 >
//                   {stat.value}
//                 </motion.h3>
//                 <p className="text-muted-foreground text-sm uppercase tracking-wider">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;



import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // === Certifications strictly from the provided resume ===
  const certifications = [
    {
      id: 1,
      name: "Advanced Software Engineering Virtual Experience",
      level: "Program",
      issuer: "Walmart USA (Forage)",
      year: "2025",
      credentialId: "",
      skills: ["Data Structures (Java)", "UML", "ERD", "Systems Design"],
      color: "primary",
    },
    {
      id: 2,
      name: "Google Cloud Computing Certification",
      level: "Certification",
      issuer: "Google",
      year: "2024",
      credentialId: "",
      skills: ["Cloud Basics", "Compute", "Storage", "Networking"],
      color: "accent-green",
    },
    {
      id: 3,
      name: "Oracle SQL Certification",
      level: "Certification",
      issuer: "Oracle",
      year: "2023",
      credentialId: "",
      skills: ["SQL", "Schema Design", "Queries", "Optimization"],
      color: "accent-violet",
    },
    {
      id: 4,
      name: "PHP for WordPress",
      level: "Course",
      issuer: "LinkedIn Learning",
      year: "2020",
      credentialId: "",
      skills: ["PHP", "WordPress", "Theme/Plugin Basics"],
      color: "secondary",
    },
    // Included under certifications as per your list (treated as an Award card)
    {
      id: 5,
      name: "Technical Hackathon Winner",
      level: "Award",
      issuer: "—",
      year: "—",
      credentialId: "",
      skills: ["Rapid Prototyping", "Teamwork", "Problem Solving"],
      color: "primary",
    },
  ] as const;

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary:
        "border-primary/30 hover:border-primary/70 hover:glow-primary bg-primary/5",
      "accent-green":
        "border-accent-green/30 hover:border-accent-green/70 hover:glow-green bg-accent-green/5",
      "accent-violet":
        "border-accent-violet/30 hover:border-accent-violet/70 hover:glow-violet bg-accent-violet/5",
      secondary:
        "border-secondary/30 hover:border-secondary/70 hover:shadow-glow bg-secondary/5",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getAccentColor = (color: string) => {
    const colorMap = {
      primary: "text-primary",
      "accent-green": "text-accent-green",
      "accent-violet": "text-accent-violet",
      secondary: "text-secondary-glow",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
            Certifications & Credentials
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="relative h-64 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setFlippedCard(cert.id)}
              onHoverEnd={() => setFlippedCard(null)}
            >
              <motion.div
                className="relative w-full h-full preserve-3d"
                animate={{ rotateY: flippedCard === cert.id ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Front */}
                <motion.div
                  className={`absolute inset-0 w-full h-full backface-hidden rounded-xl border-2 p-6 flex flex-col justify-center items-center text-center transition-all duration-300 ${getColorClasses(
                    cert.color
                  )}`}
                  animate={{ scale: flippedCard === cert.id ? 0.95 : 1 }}
                >
                  <motion.div
                    className={`p-4 rounded-full mb-4 ${
                      cert.color === "primary"
                        ? "bg-primary/20"
                        : cert.color === "accent-green"
                        ? "bg-accent-green/20"
                        : cert.color === "accent-violet"
                        ? "bg-accent-violet/20"
                        : "bg-secondary/20"
                    }`}
                    animate={{
                      scale: flippedCard === cert.id ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className={`w-8 h-8 ${getAccentColor(cert.color)}`} />
                  </motion.div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {cert.name}
                  </h3>

                  <p
                    className={`text-sm font-semibold mb-2 ${getAccentColor(
                      cert.color
                    )}`}
                  >
                    {cert.level}
                  </p>

                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>

                  <motion.div
                    className="absolute bottom-4 right-4 opacity-50"
                    animate={{
                      opacity: flippedCard === cert.id ? 1 : 0.5,
                      rotate: flippedCard === cert.id ? 360 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </motion.div>
                </motion.div>

                {/* Back */}
                <motion.div
                  className={`absolute inset-0 w-full h-full backface-hidden rounded-xl border-2 p-6 flex flex-col justify-between transition-all duration-300 ${getColorClasses(
                    cert.color
                  )}`}
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-foreground font-semibold">
                        {cert.issuer}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Issued {cert.year}
                      </span>
                    </div>

                    {cert.credentialId ? (
                      <div className="mb-4">
                        <p className="text-xs text-muted-foreground mb-1">
                          Credential ID:
                        </p>
                        <p className="text-xs font-mono text-foreground break-all">
                          {cert.credentialId}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                      Key Skills
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 text-xs rounded-full border ${
                            cert.color === "primary"
                              ? "border-primary/30 text-primary bg-primary/10"
                              : cert.color === "accent-green"
                              ? "border-accent-green/30 text-accent-green bg-accent-green/10"
                              : cert.color === "accent-violet"
                              ? "border-accent-violet/30 text-accent-violet bg-accent-violet/10"
                              : "border-secondary/30 text-secondary-glow bg-secondary/10"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Certifications/Awards", value: "5", color: "primary" },
              { label: "Key Skill Areas", value: "12+", color: "accent-green" },
              { label: "Learning Hours", value: "200+", color: "accent-violet" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center hover:glow-primary transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  scale: isVisible ? 1 : 0.8,
                }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.h3
                  className={`text-3xl font-bold mb-2 ${getAccentColor(
                    stat.color
                  )}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
