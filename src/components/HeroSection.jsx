import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [key, setKey] = useState(0); // used to restart Typed
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setKey((prev) => prev + 1); // restart animation each time it enters
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.6 } // when 60% of hero is visible
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    // ✅ cleanup function
    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block mb-2 opacity-0 animate-fade-in">
              Hi, I&apos;m
            </span>
            <span className="text-primary">
              {isVisible && (
                <ReactTyped
                  key={key} // 🔥 restart on re-enter
                  strings={["Mustafa Gaber", "a Junior Frontend Developer"]}
                  typeSpeed={80}
                  backSpeed={40}
                  loop
                />
              )}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create responsive and user-friendly web experiences using modern
            frontend technologies, always aiming to build interfaces that are
            both clean and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 flex flex-col items-center animate-bounce">
        <span className="flex items-center text-sm text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
