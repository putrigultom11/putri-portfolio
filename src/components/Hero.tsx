
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center pt-20 floating-shapes relative overflow-hidden"
    >
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-portfolio-blue-100 to-portfolio-purple-100 rounded-full blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-portfolio-purple-100 to-portfolio-blue-100 rounded-full blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-portfolio-blue-400 to-portfolio-purple-400 rounded-full blur-lg opacity-50 animate-bounce-gentle"></div>

      <div className="section-container relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-portfolio-blue font-medium mb-4 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hello, my name is
            </motion.p>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-portfolio-gray mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Putri Tamara Gultom
            </motion.h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-portfolio-dark">
              <TypeAnimation
                sequence={[
                  'Frontend Developer.',
                  2000,
                  'Backend Developer.',
                  1000,
                  'Quality Assurance.',
                  1000,
                  'Data Analyst.',
                  1000,
                  'UI/UX Designer.',
                  3000
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="bg-gradient-to-r from-portfolio-blue-400 to-portfolio-purple-400 bg-clip-text text-transparent"
              />
            </h1>

            <motion.p
              className="text-portfolio-dark text-justify text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              I'm a software engineer passionate about crafting impactful digital solutions. I focus on user-centered, accessible products that solve real-world challenges through thoughtful design and efficient development. Let's collaborate and build something meaningful!
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <a href="/putri/CV_Putri Tamara Gultom.pdf" download>
                <Button className="btn-primary animate-pulse-glow">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/putrigultom07/">
                <Button className="btn-secondary hover:animate-wiggle">
                  Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="w-100 h-100 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-glow relative z-10"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/putri/putri-2.jpg"
                alt="Putri Tamara Gultom"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolio-blue-400 to-portfolio-purple-400 blur-3xl opacity-30 scale-110 animate-pulse-glow"></div>
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-portfolio-blue-400 to-portfolio-purple-400 rounded-full animate-bounce-gentle"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-portfolio-purple-400 to-portfolio-blue-400 rounded-full animate-bounce-gentle"
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ animationDelay: '1s' }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
