
import { CalendarIcon, Award, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  const certifications = [
    {
      title: "Meta Web Development Professional Certificate",
      issuer: "Meta",
      date: "2023",
      description: "Comprehensive web development program covering front-end and back-end technologies, responsive design, and modern frameworks.",
      credential: "Credential ID: ABC123456",
      skills: ["React", "JavaScript", "Node.js", "API Integration", "UI/UX"],
    },
    {
      title: "IBM Software Development Professional Certificate",
      issuer: "IBM",
      date: "2022",
      description: "Professional certificate covering software development methodologies, programming fundamentals, and best practices for building applications.",
      credential: "Credential ID: XYZ789012",
      skills: ["Java", "Cloud Computing", "Software Design", "Testing", "DevOps"],
    },
    {
      title: "C Programming: Getting Started",
      issuer: "Dartmouth College & IMT",
      date: "2022",
      description: "Comprehensive course on C programming fundamentals, memory management, and efficient coding practices.",
      credential: "Credential ID: DEF345678",
      skills: ["C", "Memory Management", "Algorithms", "Debugging", "Performance Optimization"],
    },
    {
      title: "HackerRank Software Engineer Intern Certification",
      issuer: "HackerRank",
      date: "2021",
      description: "Certification validating programming skills, problem-solving abilities, and readiness for software engineering internships.",
      credential: "Credential ID: GHI901234",
      skills: ["Problem Solving", "Data Structures", "Algorithms", "Coding Challenges", "Time Complexity"],
    },
  ];

  const experiences = [
    {
      title: "Software Development Intern",
      company: "Tech Solutions Inc.",
      period: "June 2023 - August 2023",
      description: "Collaborated with senior developers to build and maintain web applications using Java and Spring Boot. Implemented RESTful APIs and contributed to database design.",
      achievements: [
        "Developed a feature that improved data retrieval speed by 30%",
        "Participated in code reviews and implemented feedback to improve code quality",
        "Collaborated with the QA team to identify and fix bugs",
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "Git", "Agile"],
    },
    {
      title: "Student Developer",
      company: "University Computer Science Club",
      period: "September 2022 - May 2023",
      description: "Led a team of students to develop a campus event management system. Designed the database schema and implemented the backend API.",
      achievements: [
        "Successfully deployed the application used by over 500 students",
        "Organized code workshops for junior students",
        "Implemented CI/CD pipeline to streamline development workflow",
      ],
      technologies: ["Java", "Spring MVC", "PostgreSQL", "React", "Docker"],
    },
  ];

  return (
    <section id="experience" className="section bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Certifications</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            My professional experience and certifications that have shaped my technical expertise.
          </p>
        </div>

        <Tabs defaultValue="certifications" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="certifications" className="text-base">Certifications</TabsTrigger>
            <TabsTrigger value="experience" className="text-base">Work Experience</TabsTrigger>
          </TabsList>

          <TabsContent value="certifications" className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card p-6 rounded-xl transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <p className="text-foreground/70 mb-3">{cert.issuer}</p>
                    <p className="text-sm text-foreground/80 mb-4 flex items-center gap-1">
                      <CalendarIcon size={16} className="text-primary" />
                      {cert.date}
                    </p>
                    <p className="mb-4">{cert.description}</p>
                    <p className="text-sm text-foreground/70 mb-4">{cert.credential}</p>
                  </div>
                  <div className="shrink-0">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Award size={40} className="text-primary" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="experience" className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="glass-card p-6 rounded-xl transition-all hover:shadow-md">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-foreground/70 mb-3">{exp.company}</p>
                    <p className="text-sm text-foreground/80 mb-4 flex items-center gap-1">
                      <CalendarIcon size={16} className="text-primary" />
                      {exp.period}
                    </p>
                    <p className="mb-4">{exp.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-medium">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-foreground/80">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Briefcase size={40} className="text-primary" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
