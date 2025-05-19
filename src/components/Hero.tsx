
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero-gradient min-h-screen flex items-center pt-20"
    >
      <div className="section-container">
        <div className="max-w-3xl opacity-0 animate-fade-in">
          <p className="text-portfolio-purple font-medium mb-4">
            Hi, my name is
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            John Doe.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 mb-6">
            I build things for the web.
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
            I'm a software engineer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating accessible, user-centered products
            that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary animate-fade-in animate-delay-200 opacity-0">
              My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="btn-secondary animate-fade-in animate-delay-300 opacity-0">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
