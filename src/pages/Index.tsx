import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Heart,
  Utensils,
  Users,
  ArrowRight,
} from "lucide-react";
import educationImg from "@/assets/education-program.jpg";
import healthcareImg from "@/assets/healthcare-program.jpg";
import foodImg from "@/assets/food-program.jpg";
import womenImg from "@/assets/women-program.jpg";

const Index = () => {
  const stats = [
    { value: 50000, label: "Lives Impacted" },
    { value: 15, label: "Active Programs" },
    { value: 500, label: "Volunteers", suffix: "+" },
    { value: 25, label: "Communities Served" },
  ];

  const featuredPrograms = [
    {
      title: "Education Initiative",
      description:
        "Providing quality education, school supplies, and scholarships to underprivileged children to build a brighter future.",
      image: educationImg,
      impact: "10,000+ Students",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      title: "Healthcare Services",
      description:
        "Free medical camps, health checkups, and essential medicines for communities with limited access to healthcare.",
      image: healthcareImg,
      impact: "25,000+ Treatments",
      icon: <Heart className="h-6 w-6 text-success" />,
    },
    {
      title: "Food Distribution",
      description:
        "Nutritious meals and food packages delivered to families facing food insecurity and hunger.",
      image: "src/assets/fd4.jpg",
      impact: "100,000+ Meals",
      icon: <Utensils className="h-6 w-6 text-accent" />,
    },
    {
      title: "Women Empowerment",
      description:
        "Skill development programs, vocational training, and financial literacy to empower women economically.",
      image: womenImg,
      impact: "5,000+ Women Trained",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <>
        {/* Hero Section */}
        <Hero
          title="Empowering Communities Through Care"
          subtitle="Join us in creating lasting change through education, healthcare, food distribution, and women empowerment initiatives."
        />

        {/* Mission & Vision */}
        <section className="py-16 bg-background" >
          <div className="container mx-auto px-4" >
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl bg-card shadow-card hover:shadow-hover transition-smooth" >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-3xl mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To create sustainable positive change by providing education,
                  healthcare, nutrition, and empowerment opportunities to
                  underserved communities, helping them break the cycle of
                  poverty.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card shadow-card hover:shadow-hover transition-smooth">
                <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-success" />
                </div>
                <h2 className="font-heading font-bold text-3xl mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every individual has access to basic necessities,
                  quality education, and opportunities to thrive—creating
                  communities that are healthy, educated, and self-sufficient.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        
        {/* Impact Statistics */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               
              <h2 className="font-heading font-bold text-4xl mb-4" >
                Our Impact
              </h2>
              
                
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Together, we've created meaningful change in thousands of lives
                across communities.
              </p>
              
            </div>
            <StatsCounter stats={stats} />
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <div data-aos="fade-right">
              <h2 className="font-heading font-bold text-4xl mb-4">
                Our Programs
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive initiatives designed to address critical needs and
                create lasting positive change.
              </p>
              </div>
            </div>

            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" >
              {featuredPrograms.map((program, index) => (
                <ProgramCard key={index} {...program} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/programs">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold hover-lift"
                >
                  View All Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
       <section className="relative py-24 gradient-hero text-white overflow-hidden">
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl floating"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl floating" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
                <span className="text-white font-semibold text-sm uppercase tracking-wider">Join Our Mission</span>
              </div>
               <div data-aos="fade-right">
              <h2 className="font-heading font-bold text-4xl lg:text-6xl mb-6 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
                Make a Difference <br className="hidden md:block" />
                <span className="relative">
                  Today
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full"></div>
                </span>
              </h2>
              </div>
              
               <div data-aos="fade-right">
              <p className="text-xl lg:text-2xl mb-10 max-w-2xl mx-auto opacity-95 animate-fade-in leading-relaxed" style={{ animationDelay: '1s' }}>
                Your support helps us reach more communities and create lasting
                change. Every contribution matters.
              </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Link to="/donate">
                  <Button
                  style={{backgroundColor:"goldenrod"}}
                    size="lg"
                    className="gradient-accent text-accent-foreground hover:opacity-90 font-bold text-lg px-10 py-7 rounded-full hover-lift hover-scale shadow-glow border-0"
                  >
                    Donate Now
                    <Heart className="ml-2 h-5 w-5 fill-current" />
                  </Button>
                </Link>
                <Link to="/get-involved">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-7 rounded-full hover-lift hover-scale shadow-elegant"
                  >
                    Become a Volunteer
                    <Users className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Wave Decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 50L60 45C120 40 240 30 360 35C480 40 600 60 720 65C840 70 960 60 1080 50C1200 40 1320 30 1380 25L1440 20V100H0V50Z" fill="hsl(var(--background))" fillOpacity="0.3"/>
              <path d="M0 70L60 65C120 60 240 50 360 55C480 60 600 80 720 85C840 90 960 80 1080 70C1200 60 1320 50 1380 45L1440 40V100H0V70Z" fill="hsl(var(--background))"/>
            </svg>
          </div>
        </section>
    </>
  );
};

export default Index;
