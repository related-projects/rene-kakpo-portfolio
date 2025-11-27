import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CookIt",
      category: "Android",
      description: "A comprehensive recipe discovery app that helps users find, save, and cook delicious meals with detailed nutritional information using the Spoonacular API.",
      problem: "Home cooks struggle to find recipes that match their dietary preferences and available ingredients, leading to repetitive meals and food waste.",
      solution: "Developed an intuitive recipe discovery platform with advanced search filters, ingredient-based search, personalized recommendations, and offline support for saved recipes.",
      role: "Solo Developer - Architecture, Development, UI/UX Implementation",
      architecture: "Implemented Clean Architecture with MVVM pattern, separating presentation, domain, and data layers for maintainability and testability.",
      technologies: ["Kotlin", "Android SDK", "Retrofit", "Room Database", "Material Design", "Picasso", "LiveData", "ViewModel"],
      challenges: "Efficiently managing large recipe datasets and implementing offline functionality for saved recipes while maintaining smooth performance.",
      outcome: "Created a polished app with smooth performance, offline support for favorites, and an intuitive user experience with comprehensive nutrition tracking.",
      learned: "Deepened expertise in Android Architecture Components and API integration patterns.",
      github: "https://github.com/Renekakpo/cookIt",
      screenshots: [
        "https://github.com/Renekakpo/cookIt/raw/main/screenshots/screenshot_homescreen.png",
        "https://github.com/Renekakpo/cookIt/raw/main/screenshots/screenshot_recipedetails.png",
        "https://github.com/Renekakpo/cookIt/raw/main/screenshots/screenshot_search_filter.png"
      ]
    },
    {
      title: "CurrencyX",
      category: "Android",
      description: "A real-time currency converter app providing accurate exchange rates for multiple currencies using the Open Exchange Rates API with offline support.",
      problem: "Users need quick, reliable currency conversion for travel and financial planning with support for multiple currencies and offline access.",
      solution: "Built a currency converter with real-time exchange rates, search functionality, and local caching for offline use with a clean, intuitive interface.",
      role: "Solo Developer - Full-stack mobile development, API integration, UI/UX design",
      architecture: "Utilized Clean Architecture with MVVM pattern for separation of concerns and comprehensive unit testing coverage.",
      technologies: ["Kotlin", "Android SDK", "Retrofit", "Room Database", "Material Design", "JUnit", "Open Exchange Rates API"],
      challenges: "Implementing efficient caching strategies for exchange rates and handling offline mode gracefully while maintaining data accuracy.",
      outcome: "Delivered a performant currency converter with reliable offline support, comprehensive unit tests, and seamless user experience.",
      learned: "Enhanced skills in unit testing, API integration patterns, and offline-first mobile architecture.",
      github: "https://github.com/Renekakpo/currencyX",
      screenshots: [
        "https://github.com/Renekakpo/currencyX/raw/main/screenshot/screenshot_currency_convert.png",
        "https://github.com/Renekakpo/currencyX/raw/main/screenshot/screenshot_search_currency.png"
      ]
    },
    {
      title: "HireTop",
      category: "Android",
      description: "A modern job recruitment platform featuring dual dashboards for job seekers and enterprises, built with Jetpack Compose and modern Android development practices.",
      problem: "Job seekers and enterprises need an efficient platform to connect, with tailored experiences for candidate exploration and enterprise talent management.",
      solution: "Developed a comprehensive recruitment app with separate dashboards for talents and enterprises, featuring real-time chat, application tracking, and employer branding tools.",
      role: "Lead Developer - Architecture, UI/UX with Jetpack Compose, feature development",
      architecture: "Implemented modern Android architecture with Jetpack Compose for declarative UI, following clean architecture principles and state management best practices.",
      technologies: ["Kotlin", "Jetpack Compose", "Android SDK", "Material Design 3", "Firebase", "Real-time Database"],
      challenges: "Managing complex state across dual dashboard experiences and implementing real-time features with smooth animations in Jetpack Compose.",
      outcome: "Created a polished recruitment platform with modern UI, real-time capabilities, and excellent UX for both job seekers and enterprises.",
      learned: "Mastered Jetpack Compose for complex UI implementations and advanced state management patterns for real-time applications.",
      github: "https://github.com/Renekakpo/hiretop",
      screenshots: [
        "https://github.com/Renekakpo/hiretop/raw/main/screenshots/candidate_dashboard_screen.png",
        "https://github.com/Renekakpo/hiretop/raw/main/screenshots/candidate_explorer_screen.png",
        "https://github.com/Renekakpo/hiretop/raw/main/screenshots/enterprise_dashboard_screen.png"
      ]
    },
    {
      title: "Landmarks",
      category: "iOS",
      description: "An elegant iOS app showcasing beautiful landmarks with interactive maps, detailed information, and favorite management using SwiftUI and MapKit.",
      problem: "Need for an educational iOS app demonstrating SwiftUI best practices and modern iOS development patterns with elegant UI and smooth interactions.",
      solution: "Developed a showcase app implementing SwiftUI views, navigation, state management, and MapKit integration with smooth animations.",
      role: "iOS Developer - SwiftUI implementation, UI design, feature development",
      architecture: "Followed SwiftUI's declarative paradigm with ObservableObject for state management and Combine for reactive updates.",
      technologies: ["Swift", "SwiftUI", "MapKit", "Combine", "Xcode", "Core Location"],
      challenges: "Mastering SwiftUI's declarative syntax and implementing smooth view transitions and animations while integrating MapKit effectively.",
      outcome: "Created a polished iOS app demonstrating proficiency in modern SwiftUI development and Apple's design guidelines with excellent performance.",
      learned: "Gained deep understanding of SwiftUI's view lifecycle, state management, and native iOS patterns for building production-quality apps.",
      github: "https://github.com/Renekakpo/landmarks",
      screenshots: [
        "https://github.com/Renekakpo/landmarks/raw/main/screenshots/screenshot_featuredscreen.png",
        "https://github.com/Renekakpo/landmarks/raw/main/screenshots/screenshot_detailscreen.png",
        "https://github.com/Renekakpo/landmarks/raw/main/screenshots/screenshot_listcreen.png"
      ]
    },
    {
      title: "WeatherWise",
      category: "Flutter",
      description: "An innovative weather forecasting app providing accurate real-time weather updates with beautiful visualizations, offline support, and multiple location tracking.",
      problem: "Users need reliable weather information with intuitive visualization, offline access for travel and planning, and support for tracking multiple locations.",
      solution: "Built a cross-platform weather app with real-time data, location services, multiple city tracking, local caching, and smooth animations.",
      role: "Lead Developer - Full-stack mobile development, API integration, UI/UX design",
      architecture: "Utilized Flutter's reactive framework with BLoC pattern for state management, ensuring predictable app behavior and easy testing.",
      technologies: ["Flutter", "Dart", "OpenWeather API", "Provider", "Geolocator", "Hive Database", "HTTP", "Flutter Animations"],
      challenges: "Implementing smooth animations for weather transitions and managing complex state across multiple weather locations with offline support.",
      outcome: "Delivered a performant, visually appealing app with offline support, seamless user experience across iOS and Android, and dynamic weather visualizations.",
      learned: "Mastered Flutter animations and advanced state management patterns for complex data flows in cross-platform applications.",
      github: "https://github.com/Renekakpo/WeatherWise",
      screenshots: [
        "https://github.com/Renekakpo/WeatherWise/raw/main/screenshots/home_screen.png",
        "https://github.com/Renekakpo/WeatherWise/raw/main/screenshots/settings_screen.png"
      ]
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

              {/* Screenshots */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="mb-6 grid grid-cols-3 gap-2">
                  {project.screenshots.map((screenshot, idx) => (
                    <div key={idx} className="aspect-[9/16] overflow-hidden rounded-lg border border-border">
                      <img 
                        src={screenshot} 
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}

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
