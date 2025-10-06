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
      image: foodImg,
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
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl bg-card shadow-card hover:shadow-hover transition-smooth">
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
              <h2 className="font-heading font-bold text-4xl mb-4">
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
              <h2 className="font-heading font-bold text-4xl mb-4">
                Our Programs
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive initiatives designed to address critical needs and
                create lasting positive change.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">
              Make a Difference Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Your support helps us reach more communities and create lasting
              change. Every contribution matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 rounded-full hover-lift"
                >
                  Donate Now
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-foreground font-semibold text-lg px-8 py-6 rounded-full hover-lift"
                >
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </section>
    </>
  );
};

export default Index;
