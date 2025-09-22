import { useEffect, useState } from "react";
import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import profilePic from "/krrishnateja-profile-pic.jpeg"; // <- Add your image here

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    "Entry-Level Full-Stack Developer",
    "Java • Spring Boot • REST APIs",
    "React & Next.js Frontend",
    "IoT Dashboard Builder (ESP32)"
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setDisplayedText("");
        }, 2000);
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Code background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 grid-bg animate-grid-move opacity-20"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - Text */}
        <div className="animate-slide-up text-center md:text-left md:ml-10 mt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-neon">Krishna Teja</span>
            <br />
            <span className="text-foreground">Rangavajjala</span>
          </h1>

          <div className="h-16 ">
            <p className="text-xl md:text-2xl text-primary">
              {displayedText}
              <span className="animate-cursor-blink">|</span>
            </p>
          </div>

          <p className="text-lg md:text-sm text-muted-foreground mb-12 max-w-lg leading-relaxed">
          • Master&rsquo;s in Computer Science (May&nbsp;2025) • New Graduate
            <br />
          • Virtual Internships: WinWinLabs (Safe&nbsp;Sense) &amp; Walmart Forage

            <br />
             • Core Stack: Java, Spring Boot, React, Next.js, MySQL/PostgreSQL
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="KrishnaTeja_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="hero-button group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                View Resume
              </Button>
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - Image */}
        <div className="flex justify-center md:justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-primary shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <button onClick={scrollToAbout} className="text-primary hover:text-primary-glow transition-smooth">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;





// import { useEffect, useState } from "react";
// import { ChevronDown, Download } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import heroBackground from "@/assets/hero-background.jpg";
// import profilePic from "@/assets/krrishnateja-profile-pic.png"; // <- Add your image here

// const Hero = () => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Rotating titles tailored to Krishna Teja's profile (new grad + internship experience)
  // const texts = [
  //   "Entry-Level Full-Stack Developer",
  //   "Java • Spring Boot • REST APIs",
  //   "React & Next.js Frontend",
  //   "IoT Dashboard Builder (ESP32)"
  // ];

//   useEffect(() => {
//     const currentText = texts[currentIndex];
//     let charIndex = 0;

//     const typeInterval = setInterval(() => {
//       if (charIndex <= currentText.length) {
//         setDisplayedText(currentText.slice(0, charIndex));
//         charIndex++;
//       } else {
//         setTimeout(() => {
//           setCurrentIndex((prev) => (prev + 1) % texts.length);
//           setDisplayedText("");
//         }, 2000);
//         clearInterval(typeInterval);
//       }
//     }, 100);

//     return () => clearInterval(typeInterval);
//   }, [currentIndex]);

//   const scrollToAbout = () => {
//     const element = document.querySelector("#about");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src={heroBackground}
//           alt="Code background"
//           className="w-full h-full object-cover opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-hero"></div>
//         <div className="absolute inset-0 grid-bg animate-grid-move opacity-20"></div>
//       </div>

//       {/* Content Wrapper */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//         {/* LEFT SIDE - Text */}
//         <div className="animate-slide-up text-center md:text-left md:ml-10 mt-20">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             <span className="text-gradient-neon">Krishna Teja</span>
//             <br />
//             <span className="text-foreground">Rangavajjala</span>
//           </h1>

//           <div className="h-16 mb-8">
//             <p className="text-xl md:text-2xl text-primary">
//               {displayedText}
//               <span className="animate-cursor-blink">|</span>
//             </p>
//           </div>

//           {/* Updated subheading to reflect new graduate + internship experience */}
//           <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed">
//             Master&rsquo;s in Computer Science (May&nbsp;2025) • New Graduate
//             <br />
            // Virtual Internships: WinWinLabs (Safe&nbsp;Sense) &amp; Walmart Forage
//             <br />
//             Core Stack: Java, Spring Boot, React, Next.js, MySQL/PostgreSQL
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6">
//             {/* Use the PDF placed in your public/ folder. URL-encode spaces. */}
//             <a
//               href="/krishna%20Teja_Full%20Stack%20Developer_new.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button className="hero-button group">
//                 <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
//                 View Resume
//               </Button>
//             </a>
//           </div>
//         </div>

//         {/* RIGHT SIDE - Image */}
//         <div className="flex justify-center md:justify-end">
//           <img
//             src={profilePic}
//             alt="Krishna Teja Rangavajjala"
//             className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-primary shadow-lg object-cover"
//           />
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
//         <button onClick={scrollToAbout} className="text-primary hover:text-primary-glow transition-smooth">
//           <ChevronDown size={32} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;
