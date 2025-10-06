import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Heart, Target, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Compassion",
      description: "We lead with empathy and care in everything we do.",
    },
    {
      icon: <Target className="h-8 w-8 text-success" />,
      title: "Integrity",
      description: "Transparency and honesty guide our actions and decisions.",
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Excellence",
      description: "We strive for the highest quality in all our programs.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community",
      description: "Together, we create stronger, more resilient communities.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      name: "Michael Chen",
      role: "Program Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      name: "Priya Patel",
      role: "Healthcare Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
    {
      name: "James Williams",
      role: "Education Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        <Hero
          title="About Giving Hands Foundation"
          subtitle="Building a better tomorrow through compassion, dedication, and community action."
          showCTA={false}
        />

        {/* Our Story */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-6 text-center">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Giving Hands Foundation emerged from a simple
                  yet powerful idea: that every person deserves access to basic
                  necessities, quality education, and opportunities to thrive.
                  What started as a small community initiative has grown into a
                  comprehensive organization serving thousands across multiple
                  communities.
                </p>
                <p>
                  Our journey began when our founder, Sarah Johnson, witnessed
                  firsthand the challenges faced by underserved communities. With
                  a team of dedicated volunteers and supporters, we launched our
                  first education program, providing school supplies and
                  scholarships to 50 children.
                </p>
                <p>
                  Today, we operate multiple programs spanning education,
                  healthcare, food distribution, and women empowerment, impacting
                  over 50,000 lives annually. Our success is built on the
                  foundation of community trust, transparent operations, and the
                  unwavering commitment of our volunteers and donors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-4xl mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card shadow-card hover:shadow-hover transition-smooth hover-lift text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-4xl mb-4 text-center">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Dedicated professionals committed to creating positive change in
              communities.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative mb-4 overflow-hidden rounded-2xl shadow-card group-hover:shadow-hover transition-smooth">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-smooth duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
