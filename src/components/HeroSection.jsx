import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <section
      id="hero"
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
              <ReactTyped
                strings={["Mustafa Gaber", "a Frontend Developer"]}
                typeSpeed={80}
                backSpeed={40}
                loop
              />
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

      <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
