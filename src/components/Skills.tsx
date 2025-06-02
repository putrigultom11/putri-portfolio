
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Layers, 
  FileCode, 
  GitBranch
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["C", "C#", "PHP", "Go (Golang)", "JavaScript", "Python"],
      color: "from-portfolio-blue-100 to-portfolio-blue-200"
    },
    {
      name: "Web & Mobile Development",
      icon: <FileCode className="h-6 w-6" />,
      skills: ["Laravel (PHP)", "HTML/CSS", "React.js", "Tailwind CSS",  "Flutter (Dart)", ".NET", "Kotlin (Android Native)"],
      color: "from-portfolio-purple-100 to-portfolio-purple-200"
    },
    {
      name: "API & Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "MongoDB", "RESTful API", "Postman", "API Integration (Retrofit)", "Microservice Architecture"],
      color: "from-portfolio-blue-100 to-portfolio-purple-100"
    },
    {
      name: "Design",
      icon: <Layers className="h-6 w-6" />,
      skills: ["Figma", "Adobe XD"],
      color: "from-portfolio-purple-100 to-portfolio-blue-100"
    },
    {
      name: "Testing & Tools",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "Jira", "Android Studio", "Visual Studio Code", "Selenium", "Apache Netbeans"],
      color: "from-portfolio-blue-200 to-portfolio-purple-200"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="bg-gradient-blue py-20 relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-r from-portfolio-purple-100 to-portfolio-blue-100 rounded-full blur-2xl opacity-60 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-portfolio-blue-100 to-portfolio-purple-100 rounded-full blur-2xl opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="section-container relative z-10">
        <motion.h2 
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills ⚡
        </motion.h2>
        <motion.p 
          className="text-portfolio-dark max-w-3xl mx-auto text-center mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* I've worked with a wide range of technologies throughout my career.
          Here are some of the key skills and tools I've mastered. 🛠️ */}
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.name}
              variants={itemVariants}
              className="gen-z-card p-8 group cursor-pointer"
              whileHover={{ 
                y: -10, 
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.3 }
              }}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className={`bg-gradient-to-r ${category.color} p-4 rounded-2xl text-portfolio-blue shadow-soft group-hover:shadow-glow transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-portfolio-dark group-hover:text-portfolio-blue transition-colors duration-300">
                  {category.name}
                </h3>
              </div>

              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={skill} 
                    variants={badgeVariants}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <Badge className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-portfolio-blue-100 to-portfolio-purple-100 text-portfolio-dark border border-white/50 shadow-soft hover:scale-110 transition-all duration-300 cursor-pointer group-hover:animate-bounce-gentle">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
