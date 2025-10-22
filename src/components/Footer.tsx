import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/ghf-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Giving Hands Foundation Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="font-heading font-bold text-xl">
                Giving Hands foundation
              </span>
            </div>
            <p className="text-footer-foreground/80 mb-4">
              Empowering communities through education, healthcare, food
              distribution, and women empowerment initiatives.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-footer-foreground/10 hover:bg-footer-foreground/20 transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-footer-foreground/10 hover:bg-footer-foreground/20 transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-footer-foreground/10 hover:bg-footer-foreground/20 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-footer-foreground/10 hover:bg-footer-foreground/20 transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-footer-foreground/80 hover:text-footer-foreground transition-smooth"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-footer-foreground/80 hover:text-footer-foreground transition-smooth"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-footer-foreground/80 hover:text-footer-foreground transition-smooth"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  className="text-footer-foreground/80 hover:text-footer-foreground transition-smooth"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-footer-foreground/80 hover:text-footer-foreground transition-smooth"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/programs"
                  className="text-footer-foreground/80 hover:text-footer-foreground transition-smooth"
                >
                  Education Initiative
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-footer-foreground/80 hover:text-footer-foreground transition-smooth"
                >
                  Healthcare Services
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-footer-foreground/80 hover:text-footer-foreground transition-smooth"
                >
                  Food Distribution
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-footer-foreground/80 hover:text-footer-foreground transition-smooth"
                >
                  Women Empowerment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-footer-foreground/80">
                  Sankarashanapuram Mudinepalli Mandal Eluru district Andhra pradesh
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-footer-foreground/80 hover:text-footer-foreground transition-smooth"
                >
                  +91 7989322634
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@givinghands.org"
                  className="text-footer-foreground/80 hover:text-footer-foreground transition-smooth"
                >
                  ghfindia22@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 pt-6 text-center">
          <p className="text-footer-foreground/80">
            &copy; {new Date().getFullYear()} Giving Hands Foundation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
