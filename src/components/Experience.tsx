import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Cyber Security Intern",
      company: "Tinkering Hub, Parul University",
      period: "2024",
      description: [
        "Developed and deployed malware detection systems using machine learning algorithms",
        "Built phishing detection tools to identify and prevent social engineering attacks",
        "Conducted security audits and vulnerability assessments for university infrastructure",
        "Collaborated with team on research projects focused on emerging threats"
      ]
    },
    {
      role: "Cyber Security Intern",
      company: "SkillVertex",
      period: "2024",
      description: [
        "Performed comprehensive Vulnerability Assessment and Penetration Testing (VAPT)",
        "Identified and documented security vulnerabilities in web applications and networks",
        "Created detailed vulnerability reports with risk ratings and remediation strategies",
        "Assisted in security awareness training for team members"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hands-on cybersecurity experience in real-world environments
          </p>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-3 pl-16">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-3 mt-1.5">▹</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
