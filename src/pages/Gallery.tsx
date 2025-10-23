import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";
import healthcareImg from "@/assets/healthcare-program.jpg";
import foodImg from "@/assets/food-program.jpg";
import womenImg from "@/assets/women-program.jpg";
import fd1 from "@/assets/fd1.jpg";
import fd2 from "@/assets/fd2.jpg";
import fd3 from "@/assets/fd3.jpg";
import fd4 from "@/assets/fd4.jpg";
import ed1 from "@/assets/ed1.jpg";
import ed2 from "@/assets/ed2.jpg";
import ed3 from "@/assets/ed3.jpg";
import ed4 from "@/assets/ed4.jpg";
import h1 from "@/assets/h1.jpg";
import ed5 from "@/assets/ed5.jpg";
import wo from '@/assets/w5.jpg';

interface GalleryItem {
  image: string;
  title: string;
  category: string;
  size: string;
}

const GalleryCard = ({ item, index, onClick }: { item: GalleryItem; index: number; onClick: () => void }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const getSizeClasses = () => {
    switch (item.size) {
      case "large":
        return "sm:col-span-2 aspect-[16/10]";
      case "tall":
        return "aspect-[3/4]";
      default:
        return "aspect-square";
    }
  };

  return (
    <div
      ref={ref}
      className={`break-inside-avoid mb-6 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-700`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        style={{
          transform: `perspective(1000px) rotateX(${-mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg) scale(${mousePosition.x || mousePosition.y ? 1.02 : 1})`,
        }}
      >
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse"></div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold mb-3 shadow-lg border border-primary-foreground/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse"></span>
              {item.category}
            </div>
            <h3 className="font-heading font-bold text-2xl text-white drop-shadow-2xl mb-2">
              {item.title}
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
          </div>

          {/* Zoom Icon */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 shadow-xl border border-border/50">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>

          {/* Decorative Corner Element */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "All",
    "Education",
    "Healthcare",
    "Food Distribution",
    "Empowerment",
    "Events",
    "Volunteers",
  ];

  const galleryItems: GalleryItem[] = [
    {
      image: fd4,
      title: "Food Distribution",
      category: "Food Distribution",
      size: "large",
    },
    {
      image: fd1,
      title: "Food & Clothes Distribution",
      category: "Food Distribution",
      size: "medium",
    },
    {
      image: ed4,
      title: "Children's Day",
      category: "Education",
      size: "tall",
    },
    {
      image: fd2,
      title: "Food & Clothes Distribution",
      category: "Food Distribution",
      size: "medium",
    },
    {
      image: h1,
      title: "Blood Donation",
      category: "Healthcare",
      size: "large",
    },
    {
      image: fd3,
      title: "Food & Clothes Distribution",
      category: "Food Distribution",
      size: "medium",
    },
    {
      image: wo,
      title: "Women Empowerment",
      category: "Empowerment",
      size: "tall",
    },
    {
      image: ed1,
      title: "Scholarship Ceremony",
      category: "Education",
      size: "medium",
    },
    {
      image: ed2,
      title: "Motivation Session",
      category: "Education",
      size: "large",
    },
    {
      image: ed3,
      title: "Children's Day Celebration",
      category: "Education",
      size: "tall",
    },
    {
      image: healthcareImg,
      title: "Healthcare Camp",
      category: "Healthcare",
      size: "large",
    },
    {
      image: ed5,
      title: "Skill Development",
      category: "Education",
      size: "medium",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredItems.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <>
      <Hero
        title="Our Gallery"
        subtitle="Witness the impact of our work through these moments of hope, compassion, and transformation."
        showCTA={false}
      />

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter with Enhanced Design */}
          <div className="mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-3xl -z-10"></div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Explore Our Impact</span>
              </div>
              <h2 className="font-heading font-bold text-4xl mb-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Browse by Category
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="lg"
                  onClick={() => setActiveCategory(category)}
                  className={`font-semibold transition-all duration-300 ${
                    activeCategory === category 
                      ? "scale-105 shadow-lg" 
                      : "hover:scale-105 hover:border-primary/50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Images Count with Animation */}
          <div className="text-center mb-12">
            <p className="text-muted-foreground text-lg font-medium animate-fade-in">
              Showing <span className="text-primary font-bold">{filteredItems.length}</span>{" "}
              {activeCategory === "All" ? "" : activeCategory}{" "}
              {filteredItems.length === 1 ? "moment" : "moments"}
            </p>
          </div>

          {/* Masonry Gallery Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No images found in this category.
                </p>
              </div>
            ) : (
              filteredItems.map((item, index) => (
                <GalleryCard
                  key={`${item.title}-${index}`}
                  item={item}
                  index={index}
                  onClick={() => handleImageClick(index)}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-xl border-0">
          <DialogTitle className="sr-only">
            {selectedImage !== null ? filteredItems[selectedImage]?.title : "Image viewer"}
          </DialogTitle>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          {selectedImage !== null && (
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <img
                src={filteredItems[selectedImage].image}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
              />
              
              {/* Navigation Buttons */}
              {selectedImage > 0 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              
              {selectedImage < filteredItems.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-4">
                <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-2">
                  {filteredItems[selectedImage].category}
                </div>
                <h3 className="font-heading font-bold text-xl">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Image {selectedImage + 1} of {filteredItems.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Call to Action */}
      <section className="py-16 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Join us in creating more moments of joy, hope, and transformation in
            communities across the region.
          </p>
        </div>
      </section>
    </>
  );
};

export default Gallery;
