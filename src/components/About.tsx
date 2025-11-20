import { GraduationCap, Target, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building secure systems and exploring cybersecurity challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all group">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">B.Tech Computer Science Engineering</strong><br />
              Cybersecurity Specialization<br />
              Parul University<br />
              <span className="text-sm text-primary">2022 - 2026</span>
            </p>
          </Card>
          
          <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all group">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Specialization</h3>
            <p className="text-muted-foreground leading-relaxed">
              Focused on <strong className="text-foreground">VAPT</strong>, ethical hacking, 
              malware analysis, and network security with hands-on experience in defensive research 
              and threat detection.
            </p>
          </Card>
          
          <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all group">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Interests</h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about ethical hacking, security analysis, defensive research, 
              automation tools, and building systems that protect against modern cyber threats.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
