
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Ferry Ticket Reservation System 🛍️",
      description: "A cross-platform ticket booking system combining web (Laravel) and mobile (Flutter/Dart) platforms. Features include schedule management, individual ticket, vehicle ticket, real-time ticket availability, user authentication, and payment integration. Designed with responsive UI and RESTful API communication to ensure seamless booking experience.",
      image: "/putri/ferry.png",
      technologies: ["Flutter", "React.js", "Tailwind CSS", "Laravel", "RESTful API", "MySQL", "NLP"],
      demoLink: "https://github.com/ImmanuelPartogi/TA-Kel-13.git",
      githubLink: "#",
      gradient: "from-blue-100 to-purple-100"
    },
    {
      title: "Android News Application 📝",
      description: "A fully native Android application developed in Kotlin that delivers real-time news updates using the NewsAPI.org service. Designed with a modern, intuitive UI and seamless user experience, the app features categorized news feeds, top headlines, infinite scrolling, and detailed article views. The architecture with clean code practices, utilizing Retrofit for efficient network communication and data parsing.",
      image: "/putri/newsapp.png",
      technologies: ["Kotlin", "Retrofit", "API"],
      demoLink: "#",
      githubLink: "#",
      gradient: "from-purple-100 to-blue-100"
    },
    {
      title: "Company Profile Web Development 💰",
        description: "A comprehensive company profile website built with Laravel and MySQL, featuring a dynamic and responsive interface tailored for modern business needs. It includes an integrated admin dashboard, user authentication, product catalog management, and mobile-first design. Enhanced with JavaScript interactivity and thoroughly tested using automated testing frameworks such as Robot Framework and Selenium to ensure reliability and performance.",
      image: "/putri/compro.jpeg",
      technologies: ["Laravel", "MySQL", "JavaScript", "Robot Framework", "Selenium"],
      demoLink: "#",
      githubLink: "#",
      gradient: "from-blue-200 to-purple-200"
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section id="projects" className="bg-white py-20 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-portfolio-blue-100 to-portfolio-purple-100 rounded-full blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-portfolio-purple-100 to-portfolio-blue-100 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="section-container relative z-10">
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          My Projects 🚀
        </motion.h2>
        <motion.p
          className="text-portfolio-dark max-w-3xl mx-auto text-center mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* A collection of projects that showcase my skills and experience as a software engineer. 
          Each project reflects my ability to solve problems, work with different technologies, 
          and manage projects effectively. ✨ */}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`gen-z-card overflow-hidden h-full group cursor-pointer bg-gradient-to-br ${project.gradient}`}>
                <div className="h-48 overflow-hidden rounded-t-3xl">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-portfolio-dark group-hover:text-portfolio-blue transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-portfolio-gray leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                      >
                        <Badge
                          variant="outline"
                          className="technology-pill border-white/50 hover:shadow-soft"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end pt-0">
                  <motion.a
                    href={project.demoLink}
                    className="text-portfolio-blue hover:text-portfolio-purple transition-colors flex items-center gap-2 font-medium hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    <span>Code</span>
                    <ArrowUpRight size={18} />
                  </motion.a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
