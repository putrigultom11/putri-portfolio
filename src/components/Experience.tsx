
import { useState } from 'react';
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, BriefcaseIcon, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: "tech-innovators",
      company: "Rakamin Academy",
      title: "Mobile Apps Developer Intern",
      date: "March 2025 - April 2025",
      description: [
        "Bank Mandiri x Rakamin Academy (Virtual Internship)",
        "Built an Android news application using Kotlin, integrating RESTful APIs from NewsAPI.org and implementing infinite scrolling for enhanced user experience.",
        "Designed and implemented mobile user interfaces, applied clean architecture, and ensured smooth performance across Android devices.",
        "Gained practical experience in Android development, API integration (Retrofit), and mobile UI/UX design within a collaborative development environment."
      ],
      technologies: ["Kotlin", "Retrofit", "RESTful API", "NewsAPI"]
    },
    {
      id: "digital-solutions",
      company: "PT Umalo Sedia Tekno",
      title: "Software Developer Inter",
      date: "Aug 2024 - Jan 2025",
      description: [
        "Developed a fully functional e-commerce website using PHP and Laravel, implementing core features such as product listings, shopping cart, checkout process, and admin dashboard, following MVC architecture.",
        "Built four responsive company profile websites as a Full-Stack Developer, managing both front-end (Blade, HTML/CSS, JavaScript) and back-end (Laravel, MySQL), and directly collaborating with clients to align technical solutions with business needs.",
        "Performed automated software testing using Robot Framework and Selenium to ensure system reliability and functionality across multiple projects.",
        "Contributed to UI/UX design using Figma, focusing on user-centered design principles to deliver intuitive and visually appealing interfaces."
      ],
      technologies: ["Laravel", "PHP", "CSS", "JavaScript", "MySQL", "Figma", "Selenium", "Robot Framework"]
    }
  ];

  const [defaultTab] = useState(experiences[0].id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="bg-gradient-to-br from-portfolio-purple-100 via-white to-portfolio-blue-100 py-20 relative overflow-hidden floating-shapes">
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-28 h-28 bg-gradient-to-r from-portfolio-purple-100 to-portfolio-blue-100 rounded-full blur-2xl opacity-60 animate-float"></div>
      <div className="absolute bottom-10 right-20 w-36 h-36 bg-gradient-to-r from-portfolio-blue-100 to-portfolio-purple-100 rounded-full blur-2xl opacity-60 animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="section-container relative z-10">
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work Experience 💼
        </motion.h2>
        <motion.p
          className="text-portfolio-dark max-w-3xl mx-auto text-center mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* My professional journey has allowed me to work with diverse teams and technologies,
          solving complex problems and creating impactful solutions. 🚀 */}
        </motion.p>

        <motion.div
          className="gen-z-card p-8 group"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="flex flex-col md:flex-row h-auto bg-gradient-to-r from-portfolio-blue-100 to-portfolio-purple-100 md:h-12 md:px-2 md:py-1 mb-8 rounded-2xl border border-white/50 shadow-soft">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <TabsTrigger
                    value={exp.id}
                    className="data-[state=active]:bg-white data-[state=active]:text-portfolio-blue data-[state=active]:shadow-soft py-3 px-6 mb-1 md:mb-0 w-full md:w-auto rounded-xl font-medium hover:scale-105 transition-all duration-300"
                  >
                    {exp.company}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>

            {experiences.map((exp) => (
              <TabsContent
                key={exp.id}
                value={exp.id}
                className="p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50 shadow-card"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Zap className="h-5 w-5 text-portfolio-purple" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-portfolio-dark">{exp.title}</h3>
                    </div>
                    <div className="flex items-center text-portfolio-gray">
                      <BriefcaseIcon className="h-4 w-4 mr-2 text-portfolio-blue" />
                      <span className="font-medium">{exp.company}</span>
                      <Separator orientation="vertical" className="mx-3 h-4 bg-portfolio-gray/30" />
                      <CalendarIcon className="h-4 w-4 mr-2 text-portfolio-purple" />
                      <span>{exp.date}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-6">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        className="text-portfolio-gray flex items-start leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <motion.span
                          className="text-portfolio-purple mr-3 mt-1 font-bold"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        >
                          ✨
                        </motion.span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {exp.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Badge className="technology-pill hover:scale-110 transition-all duration-300">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
