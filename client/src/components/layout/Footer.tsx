import { SiFacebook, SiLinkedin } from "react-icons/si";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">DABAA</h3>
            <p className="text-gray-300 dark:text-gray-400">
              Your ideas, our expertise! Creating digital solutions with precision
              and creativity.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 group">
                <Mail className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                <a
                  href="mailto:hello@dabaa.digital"
                  className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  hello@dabaa.digital
                </a>
              </div>
              <div className="flex items-center gap-2 group">
                <Phone className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                <a
                  href="tel:+8801853450158"
                  className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  +880 1853 450158
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-300 dark:text-gray-400">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/dabaa333"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-transform hover:scale-110"
              >
                <SiFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/dabaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-transform hover:scale-110"
              >
                <SiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} DABAA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}