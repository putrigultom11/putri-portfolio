
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing using Stripe.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Finance Dashboard",
      description: "Interactive dashboard for personal finance tracking with data visualization and expense categorization.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL", "Prisma"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="text-gray-300 max-w-3xl mb-10">
          A collection of projects that showcase my skills and experience as a software engineer. 
          Each project reflects my ability to solve problems, work with different technologies, 
          and manage projects effectively.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gray-950 border border-gray-800 overflow-hidden card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i}
                      variant="outline" 
                      className="text-xs bg-transparent border-gray-700 text-gray-400"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a 
                  href={project.githubLink}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
                <a 
                  href={project.demoLink}
                  className="text-portfolio-purple hover:text-portfolio-blue-light transition-colors flex items-center gap-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight size={16} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
