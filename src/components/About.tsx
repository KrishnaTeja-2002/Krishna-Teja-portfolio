// import { useState, useEffect, useRef } from "react";
// import { GraduationCap, Code, Trophy } from "lucide-react";

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [counters, setCounters] = useState({
//     experience: 0,
//     projects: 0,
//     hackathons: 0,
//   });

//   const sectionRef = useRef<HTMLElement>(null);

//   const finalValues = {
//     experience: 2,
//     projects: 10,
//     hackathons: 100,
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isVisible) {
//           setIsVisible(true);
//           // Animate counters
//           Object.keys(finalValues).forEach((key) => {
//             const finalValue = finalValues[key as keyof typeof finalValues];
//             let current = 0;
//             const increment = Math.ceil(finalValue / 30);
//             const timer = setInterval(() => {
//               current += increment;
//               if (current >= finalValue) {
//                 current = finalValue;
//                 clearInterval(timer);
//               }
//               setCounters(prev => ({ ...prev, [key]: current }));
//             }, 50);
//           });
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, [isVisible]);

//   return (
//     <section id="about" ref={sectionRef} className="py-10 bg-background">
//       <div className="container mx-auto px-6">
//         <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}>
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
//             About Me
//           </h2>

//           <div className="grid md:grid-cols-2 gap-12 mb-16">
//             <div className="animate-slide-right">
//               <h3 className="text-2xl font-semibold mb-6 text-accent-green">
//                 Academic Journey
//               </h3>
//               <div className="space-y-6">
//                 <div className="glass-card hover:glow-green">
//                   <div className="flex items-start space-x-4">
//                     <GraduationCap className="text-accent-green mt-1" size={24} />
//                     <div>
//                       <h4 className="text-lg font-semibold text-foreground">
//                         Master of Science - Computer Science
//                       </h4>
//                       <p className="text-accent-green-glow">Saint Louis University</p>
//                       <p className="text-muted-foreground text-sm">Expected 2024</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="glass-card hover:glow-violet">
//                   <div className="flex items-start space-x-4">
//                     <GraduationCap className="text-accent-violet mt-1" size={24} />
//                     <div>
//                       <h4 className="text-lg font-semibold text-foreground">
//                         Bachelor of Technology - Computer Science
//                       </h4>
//                       <p className="text-accent-violet-glow">CVR College of Engineering</p>
//                       <p className="text-muted-foreground text-sm">2019 - 2023</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
//               <h3 className="text-2xl font-semibold mb-6 text-primary">
//                 Technical Journey
//               </h3>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 I'm a passionate full-stack developer with a strong foundation in backend technologies,
//                 particularly Java and Spring Boot. My journey began with a curiosity for how systems work,
//                 which led me to explore both the robust world of server-side development and the creative
//                 realm of frontend user experiences.
//               </p>
//               <p className="text-muted-foreground leading-relaxed">
//                 Currently pursuing my Master's in Computer Science at Saint Louis University,
//                 I combine academic rigor with practical experience to build scalable,
//                 user-centric applications. My expertise spans from IoT systems to modern web applications,
//                 always with a focus on clean code and exceptional user experiences.
//               </p>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="glass-card text-center group hover:glow-primary">
//               <Code className="mx-auto text-primary mb-4 group-hover:animate-float" size={48} />
//               <div className="text-3xl font-bold text-primary mb-2">
//                 {counters.experience}+
//               </div>
//               <p className="text-muted-foreground">Years Development Experience</p>
//             </div>

//             <div className="glass-card text-center group hover:glow-green">
//               <Trophy className="mx-auto text-accent-green mb-4 group-hover:animate-float" size={48} />
//               <div className="text-3xl font-bold text-accent-green mb-2">
//                 {counters.projects}+
//               </div>
//               <p className="text-muted-foreground">Projects Completed</p>
//             </div>

//             <div className="glass-card text-center group hover:glow-violet">
//               <GraduationCap className="mx-auto text-accent-violet mb-4 group-hover:animate-float" size={48} />
//               <div className="text-3xl font-bold text-accent-violet mb-2">
//                 {counters.hackathons}%
//               </div>
//               <p className="text-muted-foreground">Hackathon Success Rate</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import { useState, useEffect, useRef } from "react";
import { GraduationCap, Code, Trophy } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    internships: 0,
    projects: 0,
    hackathons: 0,
  });

  const sectionRef = useRef<HTMLElement>(null);

  // Updated with Krishna Teja's actual background
  const finalValues = {
    internships: 2, // WinWinLabs + Walmart Forage (virtual internships)
    projects: 3, // Job Portal, Book Store, Movie Recommender
    hackathons: 1, // Hackathon winner
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          Object.keys(finalValues).forEach((key) => {
            const finalValue = finalValues[key as keyof typeof finalValues];
            let current = 0;
            const increment = Math.ceil(finalValue / 30) || 1;
            const timer = setInterval(() => {
              current += increment;
              if (current >= finalValue) {
                current = finalValue;
                clearInterval(timer);
              }
              setCounters((prev) => ({ ...prev, [key]: current }));
            }, 50);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="about" ref={sectionRef} className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Academic Journey */}
            <div className="animate-slide-right">
              <h3 className="text-2xl font-semibold mb-6 text-accent-green">
                Academic Journey
              </h3>
              <div className="space-y-6">
                <div className="glass-card hover:glow-green">
                  <div className="flex items-start space-x-4">
                    <GraduationCap
                      className="text-accent-green mt-1"
                      size={24}
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        Master of Science - Computer Science
                      </h4>
                      <p className="text-accent-green-glow">
                        Saint Louis University, Saint Louis, MO
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Aug 2023 – May 2025 | GPA: 3.5/4.0
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card hover:glow-violet">
                  <div className="flex items-start space-x-4">
                    <GraduationCap
                      className="text-accent-violet mt-1"
                      size={24}
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        Bachelor of Technology - Information Technology
                      </h4>
                      <p className="text-accent-violet-glow">
                        CVR College of Engineering, Hyderabad, India
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Aug 2019 – May 2023 | GPA: 3.1/4.0
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Journey */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Technical Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I’m Krishna Teja Rangavajjala, a Computer Science graduate
                student passionate about building scalable, user-friendly
                applications. My core expertise lies in Java, Spring Boot, and
                React, with hands-on experience in API development, databases,
                and cloud-native systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through virtual internships at WinWinLabs and Walmart Forage, I
                worked on IoT dashboards, custom data structures, and scalable
                systems aligned with real-world industry needs. My academic
                projects span web apps, inventory systems, and machine learning,
                showcasing a balance of backend rigor and frontend creativity.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card text-center group hover:glow-primary">
              <Code
                className="mx-auto text-primary mb-4 group-hover:animate-float"
                size={48}
              />
              <div className="text-3xl font-bold text-primary mb-2">
                {counters.internships}+
              </div>
              <p className="text-muted-foreground">Internships Completed</p>
            </div>

            <div className="glass-card text-center group hover:glow-green">
              <Trophy
                className="mx-auto text-accent-green mb-4 group-hover:animate-float"
                size={48}
              />
              <div className="text-3xl font-bold text-accent-green mb-2">
                {counters.projects}+
              </div>
              <p className="text-muted-foreground">Major Projects</p>
            </div>

            <div className="glass-card text-center group hover:glow-violet">
              <GraduationCap
                className="mx-auto text-accent-violet mb-4 group-hover:animate-float"
                size={48}
              />
              <div className="text-3xl font-bold text-accent-violet mb-2">
                {counters.hackathons}
              </div>
              <p className="text-muted-foreground">Hackathon Wins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
