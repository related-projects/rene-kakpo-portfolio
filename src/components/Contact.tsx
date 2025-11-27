import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin, Briefcase } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "renkakpo@gmail.com",
      href: "mailto:renkakpo@gmail.com",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "@Renekakpo",
      href: "https://github.com/Renekakpo",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "René Kakpo",
      href: "https://www.linkedin.com/in/renekakpo/",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Cotonou, Benin",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to freelance projects and full-time opportunities
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border animate-fade-up">
            <div className="space-y-8">
              {/* Availability Badge */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Available for New Opportunities</span>
                </div>
              </div>

              {/* Description */}
              <div className="text-center space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm actively seeking new opportunities to contribute my expertise in iOS and mobile development. 
                  Whether you have a project in mind, need technical consultation, or want to discuss potential 
                  collaboration, I'd love to hear from you.
                </p>
                <p className="text-muted-foreground">
                  Open to both <span className="text-primary font-semibold">freelance projects</span> and{" "}
                  <span className="text-primary font-semibold">full-time positions</span>
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-xl bg-card-hover hover:bg-secondary/20 border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-semibold text-foreground hover:text-primary transition-colors break-words"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-semibold text-foreground">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
                  asChild
                >
                  <a href="mailto:renkakpo@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Me an Email
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
