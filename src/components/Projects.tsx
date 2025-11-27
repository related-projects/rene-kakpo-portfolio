import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CookIt",
      category: "Android",
      description: "A comprehensive recipe discovery app that helps users find, save, and cook delicious meals with detailed nutritional information.",
      longDescription: `CookIt is a feature-rich Android application designed to revolutionize home cooking. The app integrates 
      with the Spoonacular API to provide users with thousands of recipes, complete with step-by-step instructions, 
      ingredient lists, and nutritional breakdowns.`,
      problem: "Home cooks struggle to find recipes that match their dietary preferences and available ingredients, leading to repetitive meals and food waste.",
      solution: "Developed an intuitive recipe discovery platform with advanced search filters, ingredient-based search, and personalized recommendations.",
      role: "Solo Developer - Architecture, Development, UI/UX Implementation",
      architecture: "Implemented Clean Architecture with MVVM pattern, separating presentation, domain, and data layers for maintainability and testability.",
      technologies: ["Kotlin", "Android SDK", "Retrofit", "Room Database", "Material Design", "Picasso", "LiveData", "ViewModel"],
      challenges: "Efficiently managing large recipe datasets and implementing offline functionality for saved recipes.",
      outcome: "Created a polished app with smooth performance, offline support for favorites, and an intuitive user experience.",
      learned: "Deepened expertise in Android Architecture Components and API integration patterns.",
      github: "https://github.com/Renekakpo/cookIt",
    },
    {
      title: "WeatherWise",
      category: "Flutter",
      description: "An innovative weather forecasting app providing accurate real-time weather updates with beautiful visualizations and offline support.",
      longDescription: `WeatherWise delivers comprehensive weather information through an elegant, user-friendly interface. 
      The app provides current conditions, hourly forecasts, and 7-day predictions with detailed meteorological data.`,
      problem: "Users need reliable weather information with intuitive visualization and offline access for travel and planning.",
      solution: "Built a cross-platform weather app with real-time data, location services, multiple city tracking, and local caching.",
      role: "Lead Developer - Full-stack mobile development, API integration, UI/UX design",
      architecture: "Utilized Flutter's reactive framework with BLoC pattern for state management, ensuring predictable app behavior and easy testing.",
      technologies: ["Flutter", "Dart", "OpenWeather API", "Provider", "Geolocator", "Hive Database", "HTTP", "Flutter Animations"],
      challenges: "Implementing smooth animations for weather transitions and managing complex state across multiple weather locations.",
      outcome: "Delivered a performant, visually appealing app with offline support and seamless user experience across iOS and Android.",
      learned: "Mastered Flutter animations and advanced state management patterns for complex data flows.",
      github: "https://github.com/Renekakpo/WeatherWise",
    },
    {
      title: "Landmarks",
      category: "iOS",
      description: "An elegant iOS app showcasing beautiful landmarks with interactive maps, detailed information, and favorite management.",
      longDescription: `Landmarks demonstrates modern iOS development practices with SwiftUI, featuring a collection of natural 
      landmarks with rich imagery, interactive maps, and detailed descriptions. The app showcases smooth animations and 
      native iOS design patterns.`,
      problem: "Need for an educational iOS app demonstrating SwiftUI best practices and modern iOS development patterns.",
      solution: "Developed a showcase app implementing SwiftUI views, navigation, state management, and MapKit integration.",
      role: "iOS Developer - SwiftUI implementation, UI design, feature development",
      architecture: "Followed SwiftUI's declarative paradigm with ObservableObject for state management and Combine for reactive updates.",
      technologies: ["Swift", "SwiftUI", "MapKit", "Combine", "Xcode", "Core Location"],
      challenges: "Mastering SwiftUI's declarative syntax and implementing smooth view transitions and animations.",
      outcome: "Created a polished iOS app demonstrating proficiency in modern SwiftUI development and Apple's design guidelines.",
      learned: "Gained deep understanding of SwiftUI's view lifecycle, state management, and native iOS patterns.",
      github: "https://github.com/Renekakpo/landmarks",
    },
    {
      title: "Little Lemon Food Ordering",
      category: "iOS",
      description: "A sophisticated food ordering app for Little Lemon restaurant featuring menu browsing, cart management, and order tracking.",
      longDescription: `A full-featured restaurant ordering application built with SwiftUI, allowing users to browse menus, 
      customize orders, manage shopping carts, and track order status. The app emphasizes user experience with smooth 
      animations and intuitive navigation.`,
      problem: "Restaurants need modern mobile ordering solutions that provide seamless user experiences and efficient order management.",
      solution: "Developed a comprehensive food ordering system with menu categorization, item customization, and real-time order updates.",
      role: "iOS Developer - Full app development, UI/UX design, backend integration",
      architecture: "Implemented MVVM architecture with SwiftUI, separating business logic from UI and ensuring testable code.",
      technologies: ["Swift", "SwiftUI", "Core Data", "Combine", "URLSession", "UserDefaults"],
      challenges: "Managing complex cart state, implementing smooth animations, and handling asynchronous data operations.",
      outcome: "Delivered a production-ready food ordering app with excellent UX, efficient state management, and offline capabilities.",
      learned: "Enhanced skills in SwiftUI complex navigation flows, persistent storage, and API integration patterns.",
      github: "https://github.com/Renekakpo/little-lemon-food-ordering-app",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my best work showcasing expertise in mobile development, clean architecture, and user-centric design
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group p-8 bg-card border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="mt-2 border-primary/30">
                      {project.category}
                    </Badge>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-card-hover hover:bg-primary/10 transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>

              {/* Details */}
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Problem</h4>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Solution</h4>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">My Role</h4>
                  <p className="text-muted-foreground">{project.role}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Architecture</h4>
                  <p className="text-muted-foreground">{project.architecture}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Key Challenges</h4>
                  <p className="text-muted-foreground">{project.challenges}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Outcome</h4>
                  <p className="text-muted-foreground">{project.outcome}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">What I Learned</h4>
                  <p className="text-muted-foreground">{project.learned}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-border">
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary/10 group-hover:border-primary/30"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on GitHub
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
