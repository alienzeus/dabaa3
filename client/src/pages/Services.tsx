import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Palette,
  Globe,
  BarChart,
  Search,
} from "lucide-react";

const services = [
  {
    icon: <Code />,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "Content Management Systems",
      "Progressive Web Apps",
    ],
  },
  {
    icon: <Smartphone />,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "Native iOS & Android Apps",
      "Cross-platform Development",
      "App Store Optimization",
      "Mobile UI/UX Design",
    ],
  },
  {
    icon: <Palette />,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create engaging experiences.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
  },
  {
    icon: <Globe />,
    title: "Digital Marketing",
    description:
      "Strategic digital marketing solutions to grow your online presence.",
    features: [
      "Social Media Marketing",
      "Content Strategy",
      "Email Marketing",
      "PPC Campaigns",
    ],
  },
  {
    icon: <BarChart />,
    title: "Analytics & Optimization",
    description:
      "Data-driven insights and optimization strategies for better performance.",
    features: [
      "Performance Monitoring",
      "Conversion Optimization",
      "User Behavior Analysis",
      "A/B Testing",
    ],
  },
  {
    icon: <Search />,
    title: "SEO Services",
    description:
      "Comprehensive SEO solutions to improve your search engine rankings.",
    features: [
      "Keyword Research",
      "On-page Optimization",
      "Technical SEO",
      "Link Building",
    ],
  },
];

export default function Services() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs.
            We combine creativity and technology to deliver exceptional results.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
