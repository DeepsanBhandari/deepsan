
import { useState } from "react";
import { GithubIcon, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with secure payment integration, user authentication, and product management.",
      image: "/placeholder.svg",
      tags: ["Java", "Spring Boot", "MySQL", "React", "Redux"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management System",
      description: "A collaborative task management system with real-time updates, role-based access control, and activity tracking.",
      image: "/placeholder.svg",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Angular", "WebSockets"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Financial Dashboard",
      description: "A data visualization dashboard for financial metrics with interactive charts and customizable widgets.",
      image: "/placeholder.svg",
      tags: ["Java", "Spring Boot", "MongoDB", "React", "D3.js"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "API Gateway Service",
      description: "A microservice API gateway with rate limiting, request routing, and authentication middleware.",
      image: "/placeholder.svg",
      tags: ["Java", "Spring Cloud", "Docker", "Kubernetes", "Redis"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="section bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            A selection of my recent projects showcasing my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className={`h-full transition-all duration-300 ${
                hoveredIndex === index ? 'transform scale-[1.02] shadow-lg' : ''
              }`}>
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                      <GithubIcon size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <GithubIcon size={20} />
              <span>View More on GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
