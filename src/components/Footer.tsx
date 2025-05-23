
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:hello@example.com"
    }
  ];

  return (
    <footer className="bg-white py-10 border-t border-gray-100 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="text-center md:text-left mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="font-bold text-xl text-portfolio-dark">
              <span className="text-portfolio-blue">Dev</span>Portfolio
            </a>
            <p className="text-portfolio-gray mt-2 text-sm">
              Crafting exceptional digital experiences
            </p>
          </motion.div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={link.name}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-gray hover:text-portfolio-blue transition-colors p-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-100 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-portfolio-gray text-sm">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-portfolio-gray/70 text-xs mt-2">
            Designed & Built with React, Tailwind CSS & ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
