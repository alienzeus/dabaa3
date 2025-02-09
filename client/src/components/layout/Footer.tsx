import { SiFacebook, SiLinkedin } from "react-icons/si";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DABAA</h3>
            <p className="text-gray-400">
              Your ideas, our expertise! Creating digital solutions with precision
              and creativity.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:hello@dabaa.digital"
                  className="hover:text-primary transition-colors"
                >
                  hello@dabaa.digital
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:+8801853450158"
                  className="hover:text-primary transition-colors"
                >
                  +880 1853 450158
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/dabaa333"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <SiFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/dabaa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <SiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DABAA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}