
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero-gradient min-h-screen flex items-center pt-20"
    >
      <div className="section-container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-portfolio-blue font-medium mb-4">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-portfolio-dark">
              <TypeAnimation
                sequence={[
                  'John Doe.',
                  2000,
                  'a Developer.',
                  1000,
                  'a Problem Solver.',
                  1000,
                  'John Doe.',
                  3000
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-gray mb-6">
              Software Engineer.
            </h2>
            <p className="text-portfolio-dark text-lg md:text-xl mb-8 max-w-2xl">
              I'm a software engineer specializing in building exceptional digital experiences. 
              Currently, I'm focused on creating accessible, user-centered products
              that solve real-world problems.
            </p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button className="btn-primary">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
              <Button className="btn-secondary">
                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-portfolio-blue shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop" 
                alt="John Doe" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-portfolio-blue/10 blur-xl -z-10 scale-90"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
