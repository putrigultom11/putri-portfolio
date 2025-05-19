
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a href="#home" className="font-bold text-xl text-white">
              <span className="text-portfolio-purple">Dev</span>Portfolio
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              Crafting exceptional digital experiences
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed & Built with React, Tailwind CSS & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
