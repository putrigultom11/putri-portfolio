
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

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
    <section id="about" className="bg-gray-950 py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-10">
          <motion.div 
            className="lg:col-span-3" 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-portfolio-purple/20 p-3 rounded-full">
                <User className="h-6 w-6 text-portfolio-purple" />
              </div>
              <h3 className="text-2xl font-bold">My Background</h3>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              Hello! I'm a passionate software engineer with a knack for creating elegant, efficient, and user-friendly applications. My journey in software development began during my Computer Science studies, where I discovered my love for turning complex problems into simple, intuitive solutions.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              With over 5 years of experience, I've worked across the full technology stack, from crafting responsive front-end interfaces to building robust back-end systems. I thrive in collaborative environments and have a strong track record of delivering projects on time and exceeding expectations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or exploring the latest technologies. I'm currently looking for new opportunities where I can bring my technical expertise and passion for innovation.
            </p>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-gray-900 rounded-lg shadow-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      className="bg-portfolio-purple/20 text-portfolio-purple hover:bg-portfolio-purple/30 transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
