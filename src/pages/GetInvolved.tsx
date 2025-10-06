import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, Calendar, Award } from "lucide-react";

const GetInvolved = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    availability: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you soon with volunteer opportunities.",
    });
    setFormData({
      name: "",
      email: "",
      skills: "",
      availability: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const testimonials = [
    {
      name: "Emily Roberts",
      role: "Volunteer",
      text: "Being part of Giving Hands has been incredibly rewarding. Seeing the impact we make together is truly inspiring.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      name: "David Kim",
      role: "Monthly Donor",
      text: "I'm proud to support an organization that's transparent, effective, and truly cares about making a difference.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      name: "Maria Garcia",
      role: "Education Volunteer",
      text: "Tutoring children through this program has been one of the most fulfilling experiences of my life.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
  ];

  const opportunities = [
    {
      icon: <Heart className="h-8 w-8 text-success" />,
      title: "Healthcare Volunteer",
      description: "Assist in medical camps and health awareness programs.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Education Mentor",
      description: "Help students with tutoring and career guidance.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-accent" />,
      title: "Event Coordinator",
      description: "Organize and manage community events and fundraisers.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Skill Trainer",
      description: "Teach vocational skills in our empowerment programs.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        <Hero
          title="Get Involved"
          subtitle="Join our community of passionate volunteers and make a real difference in people's lives."
          showCTA={false}
        />

        {/* Volunteer Opportunities */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-4xl mb-4 text-center">
              Volunteer Opportunities
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Choose from various roles that match your skills and availability.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunities.map((opp, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card shadow-card hover:shadow-hover transition-smooth hover-lift text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {opp.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">
                    {opp.title}
                  </h3>
                  <p className="text-muted-foreground">{opp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Form */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-4 text-center">
                Volunteer Signup
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Fill out the form below and we'll match you with opportunities
                that fit your interests and schedule.
              </p>

              <form
                onSubmit={handleSubmit}
                className="bg-card p-8 rounded-2xl shadow-card space-y-6"
              >
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Skills & Expertise
                  </label>
                  <Input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="e.g., Teaching, Healthcare, Event Management"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Availability
                  </label>
                  <Input
                    type="text"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    placeholder="e.g., Weekends, Evenings"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Why do you want to volunteer?
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your motivation..."
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-semibold"
                >
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-4xl mb-4 text-center">
              Volunteer Stories
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Hear from our amazing volunteers and supporters.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card shadow-card hover:shadow-hover transition-smooth"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-heading font-bold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>
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

export default GetInvolved;
