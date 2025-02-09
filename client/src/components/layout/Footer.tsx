import { SiFacebook, SiLinkedin, SiX } from "react-icons/si";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">DigiServ</h3>
            <p className="text-gray-400">
              Creating digital experiences that inspire and innovate.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contact@digiserv.com" className="hover:text-primary">
                  contact@digiserv.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Digital Street, Tech City</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <SiFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <SiLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <SiX className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DigiServ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}