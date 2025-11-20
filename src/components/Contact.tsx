import { Card } from "@/components/ui/card";
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations about cybersecurity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a 
                    href="mailto:harishankar3618@gmail.com"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    harishankar3618@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-medium">Ongole, Andhra Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                  <a 
                    href="https://github.com/harishankar3618"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors font-medium inline-flex items-center gap-1"
                  >
                    harishankar3618
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Portfolio</p>
                  <a 
                    href="https://harishankar3618.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors font-medium inline-flex items-center gap-1"
                  >
                    harishankar3618.github.io
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Quick Actions */}
          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
            
            <div className="space-y-4">
              <Button className="w-full justify-start text-left h-auto py-4" variant="outline" asChild>
                <a href="mailto:harishankar3618@gmail.com">
                  <Mail className="mr-3 h-5 w-5" />
                  <div>
                    <p className="font-semibold">Send Email</p>
                    <p className="text-xs text-muted-foreground">Drop me a message directly</p>
                  </div>
                </a>
              </Button>
              
              <Button className="w-full justify-start text-left h-auto py-4" variant="outline" asChild>
                <a href="https://linkedin.com/in/harishankar3618" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-3 h-5 w-5" />
                  <div>
                    <p className="font-semibold">Connect on LinkedIn</p>
                    <p className="text-xs text-muted-foreground">Let's build our network</p>
                  </div>
                </a>
              </Button>
              
              <Button className="w-full justify-start text-left h-auto py-4" variant="outline" asChild>
                <a href="https://github.com/harishankar3618" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-3 h-5 w-5" />
                  <div>
                    <p className="font-semibold">View GitHub Profile</p>
                    <p className="text-xs text-muted-foreground">Check out my projects</p>
                  </div>
                </a>
              </Button>
              
              <Button className="w-full justify-start text-left h-auto py-4" asChild>
                <a href="/Hari_Shankar_Resume.pdf" download>
                  <ExternalLink className="mr-3 h-5 w-5" />
                  <div>
                    <p className="font-semibold">Download Resume</p>
                    <p className="text-xs">Get my complete CV</p>
                  </div>
                </a>
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Footer */}
        <div className="mt-16 text-center text-muted-foreground">
          <p className="mb-4">Open to internships, full-time opportunities, and security research collaborations</p>
          <p className="text-sm">
            © 2025 Hari Shankar. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
