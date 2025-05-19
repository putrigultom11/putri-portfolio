
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
    "Node.js", "Express", "MongoDB", "PostgreSQL", 
    "GraphQL", "RESTful APIs", "Tailwind CSS", "Sass", 
    "Git", "CI/CD", "Jest", "React Testing Library"
  ];

  return (
    <section id="about" className="bg-gray-950 py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-10">
          <div className="lg:col-span-3 opacity-0 animate-fade-in">
            <p className="text-gray-300 mb-4">
              Hello! I'm a passionate software engineer with a knack for creating elegant, efficient, and user-friendly applications. My journey in software development began during my Computer Science studies, where I discovered my love for turning complex problems into simple, intuitive solutions.
            </p>
            <p className="text-gray-300 mb-4">
              With over 5 years of experience, I've worked across the full technology stack, from crafting responsive front-end interfaces to building robust back-end systems. I thrive in collaborative environments and have a strong track record of delivering projects on time and exceeding expectations.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or exploring the latest technologies. I'm currently looking for new opportunities where I can bring my technical expertise and passion for innovation.
            </p>
          </div>
          
          <div className="lg:col-span-2 opacity-0 animate-fade-in animate-delay-200">
            <div className="p-6 bg-gray-900 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-white">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    className="bg-portfolio-purple/20 text-portfolio-purple hover:bg-portfolio-purple/30 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
