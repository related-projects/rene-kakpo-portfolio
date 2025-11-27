import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Code, Database, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      skills: [
        "Swift & SwiftUI",
        "Kotlin",
        "iOS Development",
        "Android Development",
        "React Native",
        "Flutter",
        "Kotlin Multiplatform",
        "Expo",
      ],
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Architecture & Patterns",
      skills: [
        "Clean Architecture",
        "MVVM",
        "MVI",
        "Feature-based Modularity",
        "Dependency Injection",
        "Repository Pattern",
        "State Management",
        "Reactive Programming",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & APIs",
      skills: [
        "Firebase",
        "Supabase",
        "REST APIs",
        "GraphQL",
        "Retrofit",
        "URLSession",
        "Realm",
        "SQLite",
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Tools & Technologies",
      skills: [
        "Xcode",
        "Android Studio",
        "Git & GitHub",
        "Figma",
        "Postman",
        "CI/CD",
        "Unit Testing",
        "UI Testing",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional mobile experiences
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
