
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, BriefcaseIcon } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: "tech-innovators",
      company: "Tech Innovators",
      title: "Senior Software Engineer",
      date: "Jan 2022 - Present",
      description: [
        "Led development of a high-traffic e-commerce platform serving 50,000+ daily users, resulting in a 30% increase in conversion rates.",
        "Architected and implemented microservices using Node.js and TypeScript, improving system scalability and reducing server response time by 40%.",
        "Mentored a team of 5 junior developers, conducting code reviews and implementing best practices."
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Docker", "AWS"]
    },
    {
      id: "digital-solutions",
      company: "Digital Solutions",
      title: "Full Stack Developer",
      date: "Jun 2020 - Dec 2021",
      description: [
        "Developed and maintained multiple client-facing web applications using React and Redux.",
        "Created RESTful APIs and GraphQL endpoints for data retrieval and manipulation.",
        "Collaborated with UX/UI designers to implement responsive designs and improve user experience."
      ],
      technologies: ["React", "Redux", "Express.js", "PostgreSQL", "GraphQL", "Sass"]
    },
    {
      id: "web-pioneers",
      company: "Web Pioneers",
      title: "Frontend Developer",
      date: "Sep 2018 - May 2020",
      description: [
        "Built interactive user interfaces for web applications using modern JavaScript frameworks.",
        "Implemented responsive designs ensuring cross-browser compatibility and performance optimization.",
        "Participated in agile development cycles, including sprint planning and retrospectives."
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Vue.js", "Webpack", "Jest"]
    }
  ];

  const [defaultTab] = useState(experiences[0].id);

  return (
    <section id="experience" className="bg-gray-950 py-20">
      <div className="section-container">
        <h2 className="section-title">My Experience</h2>
        <p className="text-gray-300 max-w-3xl mb-10">
          My professional journey has allowed me to work with diverse teams and technologies,
          solving complex problems and creating impactful solutions.
        </p>
        
        <div className="bg-gray-900 rounded-lg p-1 lg:p-8 shadow-xl opacity-0 animate-fade-in">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="flex flex-col md:flex-row h-auto bg-gray-950 md:h-12 md:px-2 md:py-1 mb-6">
              {experiences.map((exp) => (
                <TabsTrigger 
                  key={exp.id}
                  value={exp.id}
                  className="data-[state=active]:bg-portfolio-purple data-[state=active]:text-white py-3 px-4"
                >
                  {exp.company}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {experiences.map((exp) => (
              <TabsContent 
                key={exp.id} 
                value={exp.id} 
                className="p-4 md:p-6 bg-gray-900 rounded-md opacity-0 animate-fade-in"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <div className="flex items-center text-gray-400 mt-1">
                    <BriefcaseIcon className="h-4 w-4 mr-2" />
                    <span className="font-medium">{exp.company}</span>
                    <Separator orientation="vertical" className="mx-2 h-4" />
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>{exp.date}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-portfolio-purple mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <Badge 
                      key={i}
                      className="bg-gray-800 hover:bg-gray-700 text-gray-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experience;
