import { Card } from "@/components/ui/card";
import { Award, Trophy } from "lucide-react";

const Achievements = () => {
  const certifications = [
    "EC-Council Ethical Hacking Essentials (EHE)",
    "IBM Cybersecurity Fundamentals",
    "AWS Cloud Essentials",
    "Google Cloud Fundamentals",
    "CISCO Introduction to Cybersecurity",
    "CompTIA Security+ Prep",
    "Python for Cybersecurity",
    "Network Security Fundamentals"
  ];

  const achievements = [
    {
      title: "HackArise CTF Competition",
      description: "3rd Place - National Level Capture The Flag Competition",
      year: "2024"
    },
    {
      title: "Security Research",
      description: "Published findings on emerging malware detection techniques",
      year: "2024"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and recognition in cybersecurity
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Trophy className="h-6 w-6 text-primary mr-3" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <span className="text-sm text-primary font-mono">{achievement.year}</span>
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="h-6 w-6 text-primary mr-3" />
              Certifications
            </h3>
            <Card className="p-6 bg-card/50 backdrop-blur border-border">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li 
                    key={index}
                    className="flex items-start text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span className="text-primary mr-3 mt-1 group-hover:scale-125 transition-transform">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
