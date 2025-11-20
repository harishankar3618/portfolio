import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SecureScope",
      description: "Advanced web vulnerability scanner built with Flask and React. Automates security testing for web applications with comprehensive reporting.",
      tech: ["Flask", "React", "Python", "OWASP"],
      github: "https://github.com/harishankar3618",
      featured: true
    },
    {
      title: "RansomeWatch",
      description: "Intelligent malware detection web application using machine learning to identify and classify ransomware threats in real-time.",
      tech: ["Python", "ML", "Flask", "TensorFlow"],
      github: "https://github.com/harishankar3618",
      featured: true
    },
    {
      title: "Phishing Detector Plugin",
      description: "Browser extension that analyzes URLs and page content to detect phishing attempts and warn users before they interact with malicious sites.",
      tech: ["JavaScript", "Chrome API", "ML"],
      github: "https://github.com/harishankar3618",
      featured: false
    },
    {
      title: "Secure Chat App",
      description: "End-to-end encrypted messaging platform built with MERN stack, ensuring private and secure communication.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/harishankar3618",
      featured: false
    },
    {
      title: "Advanced Malware Detection System",
      description: "Windows-based antivirus solution with real-time monitoring, heuristic analysis, and automated threat response capabilities.",
      tech: ["C++", "Windows API", "Python"],
      github: "https://github.com/harishankar3618",
      featured: true
    },
    {
      title: "Network Traffic Analyzer",
      description: "Real-time network monitoring tool that captures and analyzes packets to identify suspicious activities and potential security breaches.",
      tech: ["Python", "Scapy", "Wireshark"],
      github: "https://github.com/harishankar3618",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building security tools and applications that make a difference
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {project.featured && (
                <span className="inline-block text-xs font-mono text-primary border border-primary/30 px-3 py-1 rounded-full mb-4">
                  Featured
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="group/btn" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    View Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
