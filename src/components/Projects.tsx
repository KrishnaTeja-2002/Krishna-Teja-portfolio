// import { useState, useEffect, useRef } from "react";
// import { Github, Code, Database, Globe } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // Importing project images
// import project1 from "@/assets/project1.png";
// import project2 from "@/assets/project2.png";
// import project3 from "@/assets/project3.png";
// import project4 from "@/assets/project4.png";

// const Projects = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   const projects = [
//     {
//       id: 1,
//       title: "Job Portal Web Application",
//       description:
//         "Full-stack job portal with advanced search, application tracking, and real-time notifications. Built with modern web technologies for seamless user experience.",
//       image: project1,
//       technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
//       category: "Full-Stack",
//       color: "primary",
//       features: [
//         "User Authentication & Authorization",
//         "Advanced Job Search & Filtering",
//         "Real-time Application Status",
//         "Admin Dashboard for Job Management",
//       ],
//     },
//     {
//       id: 2,
//       title: "Book Store Management System",
//       description:
//         "Comprehensive inventory and sales management system with user-friendly interface, payment integration, and detailed analytics.",
//       image: project2,
//       technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
//       category: "Backend",
//       color: "accent-green",
//       features: [
//         "Inventory Management",
//         "Sales Tracking & Analytics",
//         "Customer Management",
//         "Payment Processing Integration",
//       ],
//     },
//     {
//       id: 3,
//       title: "Movie Recommendation System",
//       description:
//         "AI-powered recommendation engine using collaborative filtering and content-based algorithms to suggest personalized movie recommendations.",
//       image: project3,
//       technologies: ["Python", "Pandas", "Scikit-learn", "Flask", "React"],
//       category: "Machine Learning",
//       color: "accent-violet",
//       features: [
//         "Collaborative Filtering Algorithm",
//         "Content-based Recommendations",
//         "User Rating System",
//         "Machine Learning Model Training",
//       ],
//     },
//     {
//       id: 4,
//       title: "Safe Sense IoT Dashboard",
//       description:
//         "Real-time IoT monitoring dashboard for safety sensors with Next.js frontend, displaying live data from multiple sensor networks.",
//       image: project4,
//       technologies: ["Next.js", "Tailwind CSS", "IoT Sensors", "WebSocket", "Chart.js"],
//       category: "IoT",
//       color: "secondary",
//       features: [
//         "Real-time Sensor Data Visualization",
//         "Alert System for Safety Thresholds",
//         "Historical Data Analytics",
//         "Mobile-Responsive Design",
//       ],
//     },
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
//       primary: "border-primary/30 hover:border-primary/70 hover:glow-primary",
//       "accent-green": "border-accent-green/30 hover:border-accent-green/70 hover:glow-green",
//       "accent-violet": "border-accent-violet/30 hover:border-accent-violet/70 hover:glow-violet",
//       secondary: "border-secondary/30 hover:border-secondary/70 hover:shadow-glow",
//     };
//     return colorMap[color as keyof typeof colorMap] || colorMap.primary;
//   };

//   const getCategoryColor = (color: string) => {
//     const colorMap = {
//       primary: "text-primary bg-primary/10",
//       "accent-green": "text-accent-green bg-accent-green/10",
//       "accent-violet": "text-accent-violet bg-accent-violet/10",
//       secondary: "text-secondary-glow bg-secondary/10",
//     };
//     return colorMap[color as keyof typeof colorMap] || colorMap.primary;
//   };

//   return (
//     <section id="projects" ref={sectionRef} className="py-10 bg-background">
//       <div className="container mx-auto px-6">
//         <div
//           className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
//             Featured Projects
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//             {projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 className={`project-card group ${getColorClasses(project.color)} ${isVisible ? "animate-scale-in" : "opacity-0"
//                   }`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 {/* Project Image */}
//                 <div className="relative overflow-hidden rounded-lg mb-6">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-auto object-cover rounded-lg"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
//                 </div>

//                 {/* Project Content */}
//                 <div className="space-y-4">
//                   <div className="flex items-start justify-between">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-2">
//                         <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
//                         <span
//                           className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
//                             project.color
//                           )}`}
//                         >
//                           {project.category}
//                         </span>
//                       </div>
//                       <p className="text-muted-foreground leading-relaxed mb-4">
//                         {project.description}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Features */}
//                   <div className="mb-4">
//                     <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
//                     <ul className="grid grid-cols-1 gap-1">
//                       {project.features.slice(0, 2).map((feature, idx) => (
//                         <li key={idx} className="text-sm text-muted-foreground flex items-center">
//                           <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground hover:bg-primary/20 hover:text-primary transition-smooth"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>


//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

// Project images
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Kept strictly within the candidate's stated skills & resume bullets
  const projects = [
    {
      id: 1,
      title: "Job Portal Web Application",
      description:
        "Secure, role-based job portal implementing login/registration, access control, and robust backend workflows for posts, search, and application management.",
      image: project1,
      technologies: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "Thymeleaf", "Spring Security", "MySQL"],
      category: "Full-Stack",
      color: "primary",
      features: [
        "User authentication & role-based authorization (admin/user)",
        "Optimized Hibernate queries → ~20% faster reads",
        "Job posting, search, and application management flows",
        "Configurable access controls for protected routes",
      ],
    },
    {
      id: 2,
      title: "Book Store Management System",
      description:
        "End-to-end inventory management with clean CRUD flows, responsive views, and streamlined data retrieval for book catalog operations.",
      image: project2,
      technologies: ["Java", "Spring Boot", "Thymeleaf", "Bootstrap5", "MySQL"],
      category: "Backend",
      color: "accent-green",
      features: [
        "Designed relational schema & implemented CRUD for books",
        "Responsive UI with Thymeleaf templates",
        "Streamlined queries → ~15% faster retrieval",
        "Admin-friendly forms for add/update/delete",
      ],
    },
    {
      id: 3,
      title: "Movie Recommendation System",
      description:
        "Recommendation engine leveraging data preprocessing and cosine similarity to suggest relevant titles from user viewing history.",
      image: project3,
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      category: "Machine Learning",
      color: "accent-violet",
      features: [
        "Data cleaning: duplicates removal & missing-value handling",
        "Cosine similarity for content-based recommendations",
        "Preprocessing pipelines improving accuracy by ~15%",
        "Reproducible notebooks for training & evaluation",
      ],
    },
    {
      id: 4,
      title: "Safe Sense IoT Dashboard",
      description:
        "Real-time dashboard for monitoring ESP32-based sensor readings with anomaly awareness for cold-chain safety use cases.",
      image: project4,
      technologies: ["Next.js", "React.js", "Tailwind CSS", "REST APIs", "JSON"],
      category: "IoT",
      color: "secondary",
      features: [
        "Modular UI for live ambient & product-level metrics",
        "Sensor data integration via REST (JSON) endpoints",
        "Threshold-based alerts for temperature anomalies",
        "Cloud-ready frontend with responsive layouts",
      ],
    },
  ];

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
    const colorMap = {
      primary: "border-primary/30 hover:border-primary/70 hover:glow-primary",
      "accent-green": "border-accent-green/30 hover:border-accent-green/70 hover:glow-green",
      "accent-violet": "border-accent-violet/30 hover:border-accent-violet/70 hover:glow-violet",
      secondary: "border-secondary/30 hover:border-secondary/70 hover:shadow-glow",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getCategoryColor = (color: string) => {
    const colorMap = {
      primary: "text-primary bg-primary/10",
      "accent-green": "text-accent-green bg-accent-green/10",
      "accent-violet": "text-accent-violet bg-accent-violet/10",
      secondary: "text-secondary-glow bg-secondary/10",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="projects" ref={sectionRef} className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-primary">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card group ${getColorClasses(project.color)} ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img src={project.image} alt={project.title} className="w-full h-auto object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.color)}`}>
                          {project.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-1 gap-1">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground hover:bg-primary/20 hover:text-primary transition-smooth"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
