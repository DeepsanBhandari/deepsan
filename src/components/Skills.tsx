
import { CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      name: "Backend Development",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "Hibernate", level: 80 },
        { name: "RESTful APIs", level: 85 },
        { name: "Microservices", level: 75 },
      ],
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "Angular", level: 65 },
      ],
    },
    {
      name: "Database & DevOps",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 65 },
      ],
    },
    {
      name: "Computer Science",
      skills: [
        { name: "Data Structures", level: 90 },
        { name: "Algorithms", level: 85 },
        { name: "System Design", level: 75 },
        { name: "Problem Solving", level: 90 },
        { name: "OOP Concepts", level: 85 },
      ],
    },
  ];

  const otherSkills = [
    "Git", "Maven", "Gradle", "JUnit", "Mockito",
    "AWS", "Agile/Scrum", "Design Patterns", "SOLID Principles",
    "Code Review", "Technical Documentation", "API Design"
  ];

  return (
    <section id="skills" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            My technical skills and areas of expertise developed through projects and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/70">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Skills</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {otherSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
