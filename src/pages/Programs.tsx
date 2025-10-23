import Hero from "@/components/Hero";
import { GraduationCap, Heart, Utensils, Users } from "lucide-react";
import edu from '@/assets/ed4.jpg';
import healthcareImg from "@/assets/healthcare-program.jpg";
import foodImg from "@/assets/food-program.jpg";
import womenImg from "@/assets/women-program.jpg";
import wo from '@/assets/w5.jpg';
import fd from '@/assets/fd4.jpg';
import h1 from '@/assets/h1.jpg';

const Programs = () => {
  const programs = [
    {
      title: "Education Initiative",
      description:
        "Our education programs provide scholarships, school supplies, tutoring, and mentorship to underprivileged children. We believe education is the foundation for breaking the cycle of poverty and creating opportunities for future generations.",
      image: edu,
      impact: "10,000+ Students Supported",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      details: [
        "Free school supplies and uniforms",
        "After-school tutoring programs",
        "Scholarship funds for higher education",
        "Computer literacy training",
      ],
    },
    {
      title: "Healthcare Services",
      description:
        "We organize free medical camps, health screenings, and provide essential medicines to communities with limited healthcare access. Our mobile clinics reach remote areas, ensuring no one is left behind.",
      image: h1,
      impact: "25,000+ Medical Consultations",
      icon: <Heart className="h-6 w-6 text-success" />,
      details: [
        "Free health checkups and screenings",
        "Essential medicines distribution",
        "Maternal and child healthcare",
        "Health awareness workshops",
      ],
    },
    {
      title: "Food Distribution",
      description:
        "Through our food distribution program, we provide nutritious meals and food packages to families facing food insecurity. Our community kitchens serve hot meals daily to those in need.",
      image: fd,
      impact: "100,000+ Meals Served",
      icon: <Utensils className="h-6 w-6 text-accent" />,
      details: [
        "Daily community kitchen meals",
        "Monthly food package distribution",
        "Nutrition education programs",
        "Emergency food relief during crises",
      ],
    },
    {
      title: "Women Empowerment",
      description:
        "Our women empowerment programs focus on skill development, vocational training, financial literacy, and entrepreneurship support to help women achieve economic independence and confidence.",
      image: wo,
      impact: "5,000+ Women Trained",
      icon: <Users className="h-6 w-6 text-primary" />,
      details: [
        "Vocational skill training",
        "Financial literacy workshops",
        "Microfinance support",
        "Leadership development programs",
      ],
    },
  ];

  return (
    <>
        <Hero
          title="Our Programs"
          subtitle="Comprehensive initiatives designed to address critical needs and empower communities for sustainable growth."
          showCTA={false}
        />

        {/* Programs Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-16">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-8 items-center ${
                      index % 2 === 1 ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      } relative h-[400px] rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth group`}
                    >
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                      />
                      <div className="absolute top-6 left-6 p-4 rounded-full bg-white shadow-lg">
                        {program.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                      <h2 className="font-heading font-bold text-4xl mb-4">
                        {program.title}
                      </h2>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {program.description}
                      </p>

                      <div className="bg-primary/5 rounded-xl p-4 mb-6">
                        <div className="font-semibold text-primary text-lg">
                          {program.impact}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-heading font-semibold text-xl mb-3">
                          Key Features:
                        </h3>
                        {program.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {index < programs.length - 1 && (
                    <div className="mt-16 border-t border-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">
              Creating Lasting Impact
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95">
              Each program is designed with sustainability in mind, ensuring that
              the communities we serve can continue to thrive long after our
              direct involvement.
            </p>
          </div>
        </section>
    </>
  );
};

export default Programs;
