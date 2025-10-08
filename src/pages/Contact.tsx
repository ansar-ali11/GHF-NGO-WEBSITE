import { useState } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      content: "Sankarashanapuram Mudinepalli Mandal Eluru district Andhra pradesh",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+91 7989322634",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "info@givinghands.org",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      content: "Mon - Fri: 9:00 AM - 5:00 PM",
    },
  ];

  return (
    <>
        <Hero
          title="Contact Us"
          subtitle="Have questions or want to learn more? We'd love to hear from you."
          showCTA={false}
        />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="font-heading font-bold text-3xl mb-6">
                  Send Us a Message
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="bg-card p-8 rounded-2xl shadow-card space-y-6"
                >
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
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
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us more..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full font-semibold">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-3xl mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card shadow-card hover:shadow-hover transition-smooth"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="mt-8">
                  <h3 className="font-heading font-bold text-xl mb-4">
                    Find Us
                  </h3>
                  <div className="rounded-2xl overflow-hidden shadow-card h-[300px]">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40663.952253570416!2d81.073600910542!3d16.395869930267448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a361e81ebc5a9ad%3A0x87f0d57e83c29148!2sSankarshana%20Puram%2C%20Andhra%20Pradesh%20521325!5e0!3m2!1sen!2sin!4v1759912444848!5m2!1sen!2sin" 
                    width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Location Map"
                   />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Contact;
