// import { useState, useEffect, useRef } from "react";
// import {
//   Code,
//   Server,
//   Database,
//   Cloud,
//   Cpu,
//   Palette
// } from "lucide-react";

// const Skills = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   const skillCategories = [
//     {
//       title: "Frontend",
//       icon: <Palette className="w-6 h-6" />,
//       color: "primary",
//       skills: [
//         { name: "React", level: 90 },
//         { name: "Next.js", level: 85 },
//         { name: "TypeScript", level: 80 },
//         { name: "Tailwind CSS", level: 95 },
//         { name: "JavaScript", level: 90 },
//       ]
//     },
//     {
//       title: "Backend",
//       icon: <Server className="w-6 h-6" />,
//       color: "primary",
//       skills: [
//         { name: "Java", level: 95 },
//         { name: "Spring Boot", level: 90 },
//         { name: "Node.js", level: 80 },
//         { name: "Python", level: 75 },
//         { name: "REST APIs", level: 90 },
//       ]
//     },
//     {
//       title: "Databases",
//       icon: <Database className="w-6 h-6" />,
//       color: "primary",
//       skills: [
//         { name: "MySQL", level: 85 },
//         { name: "PostgreSQL", level: 80 },
//         { name: "MongoDB", level: 75 },
//         { name: "Redis", level: 70 },
//       ]
//     },
//     {
//       title: "DevOps & Cloud",
//       icon: <Cloud className="w-6 h-6" />,
//       color: "primary",
//       skills: [
//         { name: "Docker", level: 80 },
//         { name: "AWS", level: 75 },
//         { name: "Git", level: 90 },
//         { name: "Linux", level: 85 },
//       ]
//     },
//     {
//       title: "IoT & Systems",
//       icon: <Cpu className="w-6 h-6" />,
//       color: "primary",
//       skills: [
//         { name: "Arduino", level: 85 },
//         { name: "Raspberry Pi", level: 80 },
//         { name: "IoT Protocols", level: 75 },
//         { name: "Real-time Systems", level: 80 },
//       ]
//     },
//     {
//       title: "Languages",
//       icon: <Code className="w-6 h-6" />,
//       color: "primary",
//       skills: [
//         { name: "Java", level: 95 },
//         { name: "JavaScript", level: 90 },
//         { name: "TypeScript", level: 80 },
//         { name: "Python", level: 75 },
//         { name: "C++", level: 70 },
//       ]
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const getColorClasses = (color: string) => {
//     const colorMap = {
//       primary: "text-primary border-primary/30 hover:border-primary/50",
//       "accent-green": "text-accent-green border-accent-green/30 hover:border-accent-green/50",
//       "accent-violet": "text-accent-violet border-accent-violet/30 hover:border-accent-violet/50",
//       secondary: "text-secondary-glow border-secondary/30 hover:border-secondary/50",
//     };
//     return colorMap[color as keyof typeof colorMap] || colorMap.primary;
//   };

//   const getProgressBarColor = (color: string) => {
//     const colorMap = {
//       primary: "bg-primary",
//       "accent-green": "bg-accent-green",
//       "accent-violet": "bg-accent-violet",
//       secondary: "bg-secondary-glow",
//     };
//     return colorMap[color as keyof typeof colorMap] || colorMap.primary;
//   };

//   return (
//     <section id="skills" ref={sectionRef} className="py-10 bg-card/5">
//       <div className="container mx-auto px-6">
//         <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}>
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
//             Technical Skills
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {skillCategories.map((category, categoryIndex) => (
//               <div
//                 key={category.title}
//                 className={`glass-card group hover:scale-105 transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'
//                   }`}
//                 style={{ animationDelay: `${categoryIndex * 0.1}s` }}
//               >
//                 <div className="flex items-center mb-6">
//                   <div className={`p-3 rounded-lg ${getColorClasses(category.color)} border mr-4 group-hover:animate-float`}>
//                     {category.icon}
//                   </div>
//                   <h3 className={`text-xl font-semibold ${getColorClasses(category.color)}`}>
//                     {category.title}
//                   </h3>
//                 </div>

//                 <div className="space-y-4">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div key={skill.name} className="group/skill">
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="text-foreground font-medium">{skill.name}</span>
//                         <span className="text-muted-foreground text-sm">{skill.level}%</span>
//                       </div>
//                       <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
//                         <div
//                           className={`h-full rounded-full transition-all duration-1000 ${getProgressBarColor(category.color)} 
//                             ${isVisible ? 'opacity-100' : 'opacity-0 w-0'} 
//                             hover:shadow-lg hover:shadow-current`}
//                           style={{
//                             width: isVisible ? `${skill.level}%` : '0%',
//                             transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
//                           }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Additional Tech Stack Badges */}
//           <div className="mt-16 text-center">
//             <h3 className="text-2xl font-semibold mb-8 text-foreground">
//               Technologies I Work With
//             </h3>
//             <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
//               {[
//                 "React", "Next.js", "TypeScript", "Java", "Spring Boot", "MySQL",
//                 "PostgreSQL", "MongoDB", "Docker", "AWS", "Git", "Linux",
//                 "Arduino", "Raspberry Pi", "Node.js", "Python", "RESTful APIs"
//               ].map((tech, index) => (
//                 <span
//                   key={tech}
//                   className={`skill-badge transition-all duration-500 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
//                     }`}
//                   style={{ animationDelay: `${index * 0.05}s` }}
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import { useState, useEffect, useRef } from "react";
import { Code, Server, Database, Palette } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Reorganized: Equal number of skills per category (6 each)
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      color: "primary",
      skills: [
        { name: "HTML5 / CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Bootstrap5", level: 80 },
        { name: "jQuery / Ajax", level: 70 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "primary",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "Spring MVC", level: 80 },
        { name: "Hibernate", level: 75 },
        { name: "Thymeleaf", level: 75 },
        { name: "Node.js", level: 70 },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "primary",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "JSON", level: 80 },
        { name: "XML", level: 70 },
        { name: "Redux", level: 75 },
      ],
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "primary",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 75 },
        { name: "PHP", level: 70 },
        { name: "C", level: 70 },
        { name: "Swift", level: 60 },
        { name: "HTML/CSS", level: 85 },
      ],
    },
  ];

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

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "text-primary border-primary/30 hover:border-primary/50",
      "accent-green":
        "text-accent-green border-accent-green/30 hover:border-accent-green/50",
      "accent-violet":
        "text-accent-violet border-accent-violet/30 hover:border-accent-violet/50",
      secondary:
        "text-secondary-glow border-secondary/30 hover:border-secondary/50",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getProgressBarColor = (color: string) => {
    const colorMap = {
      primary: "bg-primary",
      "accent-green": "bg-accent-green",
      "accent-violet": "bg-accent-violet",
      secondary: "bg-secondary-glow",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="skills" ref={sectionRef} className="py-10 bg-card/5">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`glass-card group hover:scale-105 transition-all duration-500 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-lg ${getColorClasses(
                      category.color
                    )} border mr-4 group-hover:animate-float`}
                  >
                    {category.icon}
                  </div>
                  <h3
                    className={`text-xl font-semibold ${getColorClasses(
                      category.color
                    )}`}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${getProgressBarColor(
                            category.color
                          )} ${
                            isVisible ? "opacity-100" : "opacity-0 w-0"
                          } hover:shadow-lg hover:shadow-current`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${
                              categoryIndex * 0.1 + skillIndex * 0.05
                            }s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Tech Stack Badges */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "Java", "Spring Boot", "Spring MVC", "Hibernate", "Thymeleaf",
                "React.js", "Next.js", "JavaScript", "Python", "PHP", "C", "Swift",
                "MySQL", "PostgreSQL", "MongoDB", "HTML5", "CSS3", "Bootstrap5",
                "jQuery", "Ajax", "JSON", "XML", "Redux"
              ].map((tech, index) => (
                <span
                  key={tech}
                  className={`skill-badge transition-all duration-500 ${
                    isVisible ? "animate-slide-up opacity-100" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
