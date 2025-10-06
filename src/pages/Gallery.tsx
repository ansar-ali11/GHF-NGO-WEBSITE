import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import educationImg from "@/assets/education-program.jpg";
import healthcareImg from "@/assets/healthcare-program.jpg";
import foodImg from "@/assets/food-program.jpg";
import womenImg from "@/assets/women-program.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: educationImg,
      title: "Education Program",
      category: "Education",
    },
    {
      image: healthcareImg,
      title: "Healthcare Camp",
      category: "Healthcare",
    },
    {
      image: foodImg,
      title: "Food Distribution",
      category: "Food Distribution",
    },
    {
      image: womenImg,
      title: "Women Empowerment",
      category: "Empowerment",
    },
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
      title: "Community Event",
      category: "Events",
    },
    {
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800",
      title: "Volunteer Training",
      category: "Volunteers",
    },
    {
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800",
      title: "Children's Day Celebration",
      category: "Events",
    },
    {
      image: "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800",
      title: "Medical Checkup Drive",
      category: "Healthcare",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        <Hero
          title="Our Gallery"
          subtitle="Witness the impact of our work through these moments of hope, compassion, and transformation."
          showCTA={false}
        />

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-smooth hover-lift animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-2">
                          {item.category}
                        </div>
                        <h3 className="font-heading font-bold text-xl text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Join us in creating more moments of joy, hope, and transformation
              in communities across the region.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
