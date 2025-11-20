import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo-nobg.png";
import cyberBg from "@/assets/cyber-hero-bg.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Cyber background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${cyberBg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/30 to-background/50"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-mono text-primary border border-primary/30 px-4 py-2 rounded-full">
                Security • Research • Innovation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hari <span className="text-primary">Shankar</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Cybersecurity Student & <br />
              <span className="text-primary font-medium">Aspiring Security Analyst</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I'm a cybersecurity student specializing in Vulnerability Assessment & Penetration Testing (VAPT) 
              with hands-on experience in malware analysis, network security, and ethical hacking. 
              I build tools and projects focused on defense, automation, and threat detection.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="group" asChild>
                <a href="/Hari_Shankar_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a 
                href="https://github.com/harishankar3618" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/harishankar3618" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="mailto:harishankar3618@gmail.com"
                className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-end animate-fade-in-up">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer glow rings */}
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-[spin_20s_linear_infinite]"></div>
              
              {/* Circular portrait */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_50px_rgba(6,182,212,0.5)] animate-glow">
                <img 
                  src={profilePhoto} 
                  alt="Hari Shankar - Cybersecurity Student" 
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-primary animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-2 h-2 rounded-full bg-primary/80 animate-ping delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
