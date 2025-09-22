import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedLoaderProps {
  onComplete: () => void;
}

const AnimatedLoader = ({ onComplete }: AnimatedLoaderProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1500),
      setTimeout(() => setStage(3), 2500),
      setTimeout(() => onComplete(), 3500)
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === 3 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* KT Monogram */}
        <motion.div
          className="text-8xl font-bold text-primary relative"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: stage >= 1 ? 1 : 0.5, 
            opacity: stage >= 1 ? 1 : 0 
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block"
            animate={{
              filter: stage >= 2 ? 
                ["drop-shadow(0 0 10px hsl(var(--primary)))", "drop-shadow(0 0 20px hsl(var(--primary)))", "drop-shadow(0 0 10px hsl(var(--primary)))"] :
                "none"
            }}
            transition={{ duration: 0.3, repeat: stage >= 2 ? 3 : 0 }}
          >
            KT
          </motion.span>
          
          {/* Glitch Effect */}
          {stage >= 2 && (
            <>
              <motion.span
                className="absolute inset-0 text-accent-green"
                initial={{ x: 0, y: 0 }}
                animate={{ x: [-2, 2, -1, 1, 0], y: [1, -1, 0, 1, 0] }}
                transition={{ duration: 0.1, repeat: 5 }}
              >
                KT
              </motion.span>
              <motion.span
                className="absolute inset-0 text-accent-violet"
                initial={{ x: 0, y: 0 }}
                animate={{ x: [1, -2, 2, -1, 0], y: [-1, 1, 0, -1, 0] }}
                transition={{ duration: 0.1, repeat: 5, delay: 0.05 }}
              >
                KT
              </motion.span>
            </>
          )}
        </motion.div>

        {/* Full Name Expansion */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: stage >= 2 ? 1 : 0,
            scale: stage >= 2 ? 1 : 0.8
          }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-2xl font-light text-gradient-primary tracking-[0.3em] whitespace-nowrap">
            KRISHNA TEJA RANGAVAJJALA
          </div>
        </motion.div>

        {/* Rotating Border */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/30"
          initial={{ rotate: 0, scale: 2 }}
          animate={{ 
            rotate: stage >= 1 ? 360 : 0,
            scale: stage >= 1 ? 1.5 : 2
          }}
          transition={{ duration: 2, ease: "linear" }}
        />

        {/* Particles */}
        {stage >= 2 && (
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full"
                initial={{ 
                  x: 0, 
                  y: 0, 
                  opacity: 0 
                }}
                animate={{
                  x: Math.cos(i * 30 * Math.PI / 180) * 150,
                  y: Math.sin(i * 30 * Math.PI / 180) * 150,
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Loading Text */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: stage >= 1 ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="text-muted-foreground text-sm tracking-wider">
          {stage === 1 && "INITIALIZING..."}
          {stage === 2 && "LOADING PORTFOLIO..."}
          {stage >= 3 && "WELCOME"}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLoader;