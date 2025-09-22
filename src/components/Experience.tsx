// import { useState, useEffect, useRef } from "react";
// import { Building, Award, Calendar, ExternalLink } from "lucide-react";

// const Experience = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   const experiences = [
//     {
//       type: "work",
//       title: "IoT Developer - Safe Sense Project",
//       company: "WinWinLabs",
//       period: "2023 - Present",
//       location: "Virtual Experience",
//       description: "Developed a comprehensive IoT safety monitoring system with real-time dashboard capabilities.",
//       achievements: [
//         "Built real-time IoT dashboard using Next.js and Tailwind CSS",
//         "Integrated multiple sensor data streams for safety monitoring",
//         "Implemented responsive design for mobile and desktop platforms",
//         "Created data visualization components for sensor analytics"
//       ],
//       technologies: ["Next.js", "Tailwind CSS", "IoT Sensors", "React", "JavaScript"],
//       color: "primary"
//     },
//     {
//       type: "work",
//       title: "Software Engineering Intern",
//       company: "Walmart USA (Forage Virtual Experience)",
//       period: "2023",
//       location: "Virtual Program",
//       description: "Completed advanced software engineering challenges focusing on data structures, UML design, and database schema creation.",
//       achievements: [
//         "Designed complex UML diagrams for e-commerce systems",
//         "Created optimized database schemas with ERD modeling",
//         "Implemented efficient data structure solutions",
//         "Delivered comprehensive technical documentation"
//       ],
//       technologies: ["Java", "UML", "Database Design", "Data Structures", "ERD"],
//       color: "accent-green"
//     }
//   ];

//   const certifications = [
//     {
//       title: "AWS Certified Solutions Architect",
//       issuer: "Amazon Web Services",
//       year: "2023",
//       status: "In Progress"
//     },
//     {
//       title: "Java Programming Certification",
//       issuer: "Oracle",
//       year: "2022",
//       status: "Completed"
//     },
//     {
//       title: "React Developer Certification",
//       issuer: "Meta",
//       year: "2023",
//       status: "Completed"
//     }
//   ];

//   const achievements = [
//     {
//       title: "Hackathon Winner",
//       description: "Won multiple hackathons with innovative IoT and web solutions",
//       icon: <Award className="w-8 h-8" />,
//       color: "accent-violet"
//     },
//     {
//       title: "Academic Excellence",
//       description: "Maintained strong academic performance throughout B.Tech and M.S. programs",
//       icon: <Building className="w-8 h-8" />,
//       color: "primary"
//     }
//   ];

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

//   const getColorClasses = (color: string) => {
//     const colorMap = {
//       primary: "border-primary/30 hover:border-primary/70 text-primary",
//       "accent-green": "border-accent-green/30 hover:border-accent-green/70 text-accent-green",
//       "accent-violet": "border-accent-violet/30 hover:border-accent-violet/70 text-accent-violet",
//       secondary: "border-secondary/30 hover:border-secondary/70 text-secondary-glow",
//     };
//     return colorMap[color as keyof typeof colorMap] || colorMap.primary;
//   };

//   return (
//     <section id="experience" ref={sectionRef} className="py-10 bg-card/5">
//       <div className="container mx-auto px-6">
//         <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}>
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
//             Experience & Achievements
//           </h2>

//           <div className="max-w-6xl mx-auto">
//             {/* Experience Timeline */}
//             <div className="mb-20">
//               <h3 className="text-2xl font-semibold mb-12 text-center text-foreground">
//                 Professional Experience
//               </h3>

//               <div className="space-y-12">
//                 {experiences.map((exp, index) => (
//                   <div
//                     key={index}
//                     className={`glass-card relative ${getColorClasses(exp.color)} border-l-4 ${isVisible ? 'animate-slide-right' : 'opacity-0'
//                       }`}
//                     style={{ animationDelay: `${index * 0.2}s` }}
//                   >
//                     <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
//                       <div className="flex-1">
//                         <h4 className="text-xl font-bold text-foreground mb-2">
//                           {exp.title}
//                         </h4>
//                         <div className="flex items-center text-muted-foreground mb-2">
//                           <Building className="w-4 h-4 mr-2" />
//                           <span className="font-medium">{exp.company}</span>
//                         </div>
//                         <div className="flex items-center text-muted-foreground mb-4">
//                           <Calendar className="w-4 h-4 mr-2" />
//                           <span>{exp.period} • {exp.location}</span>
//                         </div>
//                       </div>
//                     </div>

//                     <p className="text-muted-foreground mb-4 leading-relaxed">
//                       {exp.description}
//                     </p>

//                     <div className="mb-4">
//                       <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
//                       <ul className="space-y-2">
//                         {exp.achievements.map((achievement, idx) => (
//                           <li key={idx} className="text-sm text-muted-foreground flex items-start">
//                             <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
//                             <span>{achievement}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="flex flex-wrap gap-2">
//                       {exp.technologies.map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground hover:bg-primary/20 hover:text-primary transition-smooth"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-12">
//               {/* Certifications */}
//               <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
//                 <h3 className="text-2xl font-semibold mb-8 text-accent-green">
//                   Certifications
//                 </h3>
//                 <div className="space-y-4">
//                   {certifications.map((cert, index) => (
//                     <div key={index} className="glass-card hover:glow-green group">
//                       <div className="flex items-start justify-between">
//                         <div className="flex-1">
//                           <h4 className="font-semibold text-foreground group-hover:text-accent-green transition-smooth">
//                             {cert.title}
//                           </h4>
//                           <p className="text-accent-green-glow text-sm">{cert.issuer}</p>
//                           <p className="text-muted-foreground text-xs mt-1">{cert.year}</p>
//                         </div>
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${cert.status === 'Completed'
//                             ? 'bg-accent-green/20 text-accent-green'
//                             : 'bg-primary/20 text-primary'
//                           }`}>
//                           {cert.status}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Achievements */}
//               <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
//                 <h3 className="text-2xl font-semibold mb-8 text-accent-violet">
//                   Key Achievements
//                 </h3>
//                 <div className="space-y-6">
//                   {achievements.map((achievement, index) => (
//                     <div key={index} className="glass-card hover:glow-violet group">
//                       <div className="flex items-start space-x-4">
//                         <div className={`p-3 rounded-lg bg-${achievement.color}/20 ${getColorClasses(achievement.color)} group-hover:animate-float`}>
//                           {achievement.icon}
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="font-semibold text-foreground group-hover:text-accent-violet transition-smooth">
//                             {achievement.title}
//                           </h4>
//                           <p className="text-muted-foreground text-sm mt-1">
//                             {achievement.description}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;


import { useState, useEffect, useRef } from "react";
import { Building, Award, Calendar } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // ===== Experience (Internships / Virtual Experience only) =====
  const experiences = [
    {
      type: "internship",
      title: "Software Engineering Intern (Virtual) — Safe Sense Project",
      company: "WinWinLabs",
      period: "Jun 2025 – Present",
      location: "Remote",
      description:
        "Contributing to a cloud-ready IoT safety monitoring solution with real-time dashboards and alerting for cold storage, logistics, and manufacturing.",
      achievements: [
        "Built modular interfaces using React.js, Next.js, and Tailwind CSS for real-time ESP32 sensor monitoring",
        "Integrated RESTful APIs to display live ambient and product-level readings",
        "Implemented temperature anomaly detection and alerting workflows",
        "Aligned solution approach with FDA food safety standards"
      ],
      technologies: ["React.js", "Next.js", "Tailwind CSS", "REST APIs", "JSON"],
      color: "primary",
    },
    {
      type: "internship",
      title: "Software Engineering Intern (Virtual Program)",
      company: "Walmart USA — Forage",
      period: "Jun 2025",
      location: "Remote",
      description:
        "Completed Walmart’s Forage virtual program focused on core CS design and data modeling for retail/logistics use cases.",
      achievements: [
        "Built a custom heap data structure in Java for shipping operations",
        "Designed a UML class diagram for a reusable data processing system",
        "Created an ERD from business requirements for the pet department"
      ],
      technologies: ["Java", "UML", "ERD", "Data Structures"],
      color: "accent-green",
    },
  ] as const;

  // ===== Certifications (kept strictly to resume) =====
  const certifications = [
    { title: "Advanced Software Engineering Virtual Experience", issuer: "Walmart USA (Forage)", year: "2025", status: "Completed" },
    { title: "Google Cloud Computing Certification", issuer: "Google", year: "—", status: "Completed" },
    { title: "Oracle SQL Certification", issuer: "Oracle", year: "—", status: "Completed" },
    { title: "PHP for WordPress", issuer: "LinkedIn Learning", year: "2020", status: "Completed" },
  ] as const;

  // ===== Achievements (from resume) =====
  const achievements = [
    {
      title: "Technical Hackathon Winner",
      description: "Won a technical hackathon; recognized for innovative solution design and rapid prototyping.",
      color: "accent-violet",
    },
    {
      title: "Academic Progress",
      description: "Pursuing M.S. in Computer Science (Saint Louis University) with GPA 3.5/4.0.",
      color: "primary",
    },
  ] as const;

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

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      primary: "border-primary/30 hover:border-primary/70 text-primary",
      "accent-green":
        "border-accent-green/30 hover:border-accent-green/70 text-accent-green",
      "accent-violet":
        "border-accent-violet/30 hover:border-accent-violet/70 text-accent-violet",
      secondary:
        "border-secondary/30 hover:border-secondary/70 text-secondary-glow",
    };
    return colorMap[color] || colorMap.primary;
  };

  // avoid dynamic Tailwind class pitfalls for backgrounds
  const getBgTint = (color: string) => {
    const bgMap: Record<string, string> = {
      primary: "bg-primary/20",
      "accent-green": "bg-accent-green/20",
      "accent-violet": "bg-accent-violet/20",
      secondary: "bg-secondary/20",
    };
    return bgMap[color] || bgMap.primary;
  };

  return (
    <section id="experience" ref={sectionRef} className="py-10 bg-card/5">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
            Internship Experience & Achievements
          </h2>

          <div className="max-w-6xl mx-auto">
            {/* Experience Timeline */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold mb-12 text-center text-foreground">
                Internships (Virtual)
              </h3>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={`${exp.company}-${index}`}
                    className={`glass-card relative ${getColorClasses(
                      exp.color
                    )} border-l-4 ${
                      isVisible ? "animate-slide-right" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h4>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>
                            {exp.period} • {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-2">
                        Key Contributions:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground hover:bg-primary/20 hover:text-primary transition-smooth"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Certifications */}
              <div
                className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-semibold mb-8 text-accent-green">
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={`${cert.title}-${index}`} className="glass-card hover:glow-green group">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-accent-green transition-smooth">
                            {cert.title}
                          </h4>
                          <p className="text-accent-green-glow text-sm">
                            {cert.issuer}
                          </p>
                          <p className="text-muted-foreground text-xs mt-1">
                            {cert.year}
                          </p>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            cert.status === "Completed"
                              ? "bg-accent-green/20 text-accent-green"
                              : "bg-primary/20 text-primary"
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div
                className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: "0.6s" }}
              >
                <h3 className="text-2xl font-semibold mb-8 text-accent-violet">
                  Key Achievements
                </h3>
                <div className="space-y-6">
                  {achievements.map((ach, index) => (
                    <div
                      key={`${ach.title}-${index}`}
                      className="glass-card hover:glow-violet group"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-3 rounded-lg ${getBgTint(
                            ach.color
                          )} ${getColorClasses(ach.color)} group-hover:animate-float`}
                        >
                          <Award className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-accent-violet transition-smooth">
                            {ach.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mt-1">
                            {ach.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* End grids */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
