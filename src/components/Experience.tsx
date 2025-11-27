import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Lead Mobile Developer",
      company: "RightCom",
      type: "Full-time",
      location: "Cotonou, Benin",
      period: "March 2024 - Present",
      achievements: [
        "Leading mobile development team, establishing best practices and architectural patterns",
        "Architected and maintained enterprise ticketing application with enhanced functionality and user experience",
        "Developed comprehensive mobile app for agents to manage tickets and customer calls with real-time updates",
        "Implemented Bluetooth printing modules for on-the-go receipt printing with POS printers",
        "Built robust backend integration layer for real-time ticketing data synchronization",
        "Optimized app performance and implemented offline mode with automatic data synchronization",
        "Reduced crash rate by 40% through comprehensive error handling and testing",
      ],
      technologies: ["React Native", "Expo", "Kotlin", "BLE", "Firebase", "REST APIs"],
    },
    {
      title: "Mobile Developer (Freelance)",
      company: "Hoxtel Group",
      type: "Freelance",
      location: "Tunis, Tunisia (Remote)",
      period: "October 2025 - November 2025",
      achievements: [
        "Developed Android tablet application for smart hotel room management system",
        "Integrated complete IoT system using MQTT for real-time device communication",
        "Implemented controls for doors, lights, curtains, and HVAC systems",
        "Developed custom Kotlin modules for advanced native functionality",
        "Created modern, intuitive UI optimized for large-screen displays",
        "Built REST API integration for centralized device management",
      ],
      technologies: ["React Native", "Expo", "Kotlin", "MQTT", "IoT", "REST APIs"],
    },
    {
      title: "Mobile Developer (Freelance)",
      company: "Ministry of Tourism of Benin",
      type: "Freelance",
      location: "Cotonou, Benin",
      period: "June 2025 - July 2025",
      achievements: [
        "Developed mobile app for rating tourist sites, hotels, and restaurants",
        "Implemented star-based rating system with user reviews",
        "Created intuitive interface for exploring tourism destinations",
        "Integrated geolocation features for discovering nearby attractions",
      ],
      technologies: ["React Native", "Firebase", "Google Maps API"],
    },
    {
      title: "Mobile Developer (Freelance)",
      company: "AgriBiz",
      type: "Freelance",
      location: "Cotonou, Benin",
      period: "October 2024 - December 2025",
      achievements: [
        "Developed comprehensive agriculture management mobile application",
        "Implemented farm site monitoring and statistics tracking system",
        "Built team management features with task assignment and progress tracking",
        "Integrated real-time chat functionality for team communication",
        "Created data visualization dashboards for farm analytics",
      ],
      technologies: ["React Native", "Firebase", "Charts", "Real-time Database"],
    },
    {
      title: "Mobile Engineer (Intern)",
      company: "RightCom",
      type: "Internship",
      location: "Cotonou, Benin",
      period: "November 2023 - February 2024",
      achievements: [
        "Developed mobile ticketing solution using React Native",
        "Created native modules for mobile printer integration",
        "Implemented pixel-perfect UI from design mockups",
        "Collaborated with backend team for API integration",
      ],
      technologies: ["React Native", "Native Modules", "REST APIs"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative mobile solutions across diverse industries
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-lg text-primary">
                      <Briefcase className="w-5 h-5" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary/30 w-fit">
                    {exp.type}
                  </Badge>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
