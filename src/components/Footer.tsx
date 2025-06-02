
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/putriitr",
      color: "hover:text-portfolio-blue"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/putrigultom11",
      color: "hover:text-portfolio-blue"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/putrigultom07/",
      color: "hover:text-portfolio-purple"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:putriigultom11@gmail.comm",
      color: "hover:text-portfolio-blue"
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-portfolio-blue-100 via-white to-portfolio-purple-100 py-12 border-t border-white/50 shadow-soft relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-1/4 w-24 h-24 bg-gradient-to-r from-portfolio-blue-200 to-portfolio-purple-200 rounded-full blur-2xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-r from-portfolio-purple-200 to-portfolio-blue-200 rounded-full blur-2xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="text-center md:text-left mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#home" 
              className="font-bold text-2xl text-portfolio-dark hover:scale-105 transition-transform duration-300 inline-block"
              whileHover={{ rotate: 5 }}
            >
              <span className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent">
                Portfolio
              </span>
               ✨
            </motion.a>
            {/* <p className="text-portfolio-gray mt-3 text-base">
              Crafting exceptional digital experiences with passion 🎨
            </p> */}
          </motion.div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={link.name}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-portfolio-gray ${link.color} transition-all duration-300 p-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50 hover:shadow-soft hover:scale-110`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-10 pt-8 border-t border-white/30 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-portfolio-gray text-base flex items-center justify-center gap-2 mb-3">
            &copy; {currentYear} Putri Tamara Gultom. Build with 
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-400 fill-current" />
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
