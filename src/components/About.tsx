
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { User, Heart, Sparkles } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
    "Node.js", "Express", "MongoDB", "PostgreSQL", 
    "GraphQL", "RESTful APIs", "Tailwind CSS", "Sass", 
    "Git", "CI/CD", "Jest", "React Testing Library"
  ];
  
  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="bg-gradient-to-br from-portfolio-blue-100 via-white to-portfolio-purple-100 py-20 relative overflow-hidden floating-shapes">
      {/* Floating background elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-r from-portfolio-blue-100 to-portfolio-purple-100 rounded-full blur-2xl opacity-60 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-portfolio-purple-100 to-portfolio-blue-100 rounded-full blur-2xl opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="section-container relative z-10">
        <motion.h2 
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me 👨‍💻
        </motion.h2>
        <motion.p 
          className="text-portfolio-dark max-w-3xl mx-auto text-center mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <motion.div 
            className="lg:col-span-3" 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="gen-z-card p-8 group"
              whileHover={{ 
                y: -10, 
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.3 }
              }}
            >
              {/* <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="bg-gradient-to-r from-portfolio-blue-100 to-portfolio-purple-100 p-4 rounded-2xl text-portfolio-blue shadow-soft group-hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <User className="h-6 w-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-portfolio-dark group-hover:text-portfolio-blue transition-colors duration-300">
                  My Background 🚀
                </h3>
              </div> */}
              
              <div className="space-y-4 text-portfolio-gray text-justify">
                <motion.p 
                  className="leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Hello! I’m Putri, a final-year Information Technology student with a strong passion for software development and a solid background in competitive programming and algorithms. I love solving complex problems and transforming them into efficient, elegant, and user-friendly solutions. 💡
                </motion.p>
                <motion.p 
                  className="leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Throughout my academic journey, I’ve honed my skills in various programming languages and quickly adapt to new technologies. I thrive in both collaborative team settings and independent work, and I’m always eager to learn and grow. 🎯
                </motion.p>
                <motion.p 
                  className="leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                   With strong interpersonal communication skills and a deep interest in continuous improvement, I’m now seeking opportunities to apply my knowledge, contribute to real-world projects, and grow as a software engineer. 🌟
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
          
         
        </div>
      </div>
    </section>
  );
};

export default About;
