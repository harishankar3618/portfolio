import { Card } from "@/components/ui/card";
import { Shield, Terminal, Cloud, Code } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Security Skills",
      skills: ["VAPT", "Network Security", "Malware Analysis", "Ethical Hacking", "Threat Detection"]
    },
    {
      icon: Terminal,
      title: "Tools & Platforms",
      skills: ["Nmap", "Burp Suite", "Metasploit", "Wireshark", "Nessus", "Kali Linux"]
    },
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "SQL", "Bash", "JavaScript", "React", "Node.js"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud", "Docker", "Git", "Linux Administration"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for cybersecurity and development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all group hover:scale-105"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">Additional Technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["MERN Stack", "Laravel", "Flask", "React Native", "REST APIs", "PostgreSQL", "MongoDB"].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-mono hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
