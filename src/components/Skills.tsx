
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Docker, 
  File, 
  FileCode, 
  FolderGit, 
  React 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "SASS"]
    },
    {
      name: "Backend",
      icon: <FileCode className="h-6 w-6" />,
      skills: ["Node.js", "Express", "NestJS", "Python", "Django", "Java", "Spring Boot"]
    },
    {
      name: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Mongoose"]
    },
    {
      name: "DevOps",
      icon: <Docker className="h-6 w-6" />,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions", "Jenkins"]
    },
    {
      name: "Tools & Others",
      icon: <File className="h-6 w-6" />,
      skills: ["Git", "Webpack", "Vite", "Jest", "Testing Library", "Cypress", "Storybook"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="text-gray-300 max-w-3xl mb-12">
          I've worked with a wide range of technologies throughout my career.
          Here are some of the key skills and tools I've mastered.
        </p>
        
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
              className="bg-gray-950 p-6 rounded-lg border border-gray-800 hover:border-portfolio-purple/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-portfolio-purple/20 p-3 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>

              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill} variants={badgeVariants}>
                    <Badge className="bg-gray-800 hover:bg-gray-700 text-white py-1.5 px-2.5">
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
