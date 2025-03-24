
import { GraduationCap, Award, Coffee, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Building software solutions with passion and precision
            </h3>
            
            <p className="text-foreground/80">
              I'm a passionate software developer specializing in Java, Spring Boot, databases, and full-stack development. 
              My journey in software development has been driven by a desire to build robust, scalable, and efficient applications 
              that solve real-world problems.
            </p>
            
            <p className="text-foreground/80">
              With a strong foundation in computer science fundamentals and data structures, I focus on creating clean, 
              maintainable code that follows best practices. I enjoy working in collaborative environments where I can 
              contribute my technical expertise while continuously learning from others.
            </p>
            
            <p className="text-foreground/80">
              My career goal is to grow as a technical leader who can architect complex systems and mentor other 
              developers, while staying hands-on with code and continuously exploring new technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg">
                <Code size={24} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Languages</h4>
              <p className="text-foreground/80">Java, JavaScript, TypeScript, SQL, C, Python</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Education</h4>
              <p className="text-foreground/80">Computer Science with focus on software engineering</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg">
                <Award size={24} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Certifications</h4>
              <p className="text-foreground/80">Meta Web Dev, IBM Software Dev, HackerRank</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="mb-4 bg-primary/10 w-12 h-12 flex items-center justify-center rounded-lg">
                <Coffee size={24} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Hobbies</h4>
              <p className="text-foreground/80">Coding challenges, learning new tech, problem-solving</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
