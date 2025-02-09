import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management.",
    image: "https://via.placeholder.com/600x400",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Health & Wellness App",
    description:
      "Mobile application for tracking fitness goals and nutritional intake.",
    image: "https://via.placeholder.com/600x400",
    tags: ["React Native", "Firebase", "UI/UX"],
    link: "#",
  },
  {
    title: "Corporate Website Redesign",
    description:
      "Complete redesign and development of a corporate website with CMS integration.",
    image: "https://via.placeholder.com/600x400",
    tags: ["WordPress", "PHP", "SEO"],
    link: "#",
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listing and management platform with virtual tour capabilities.",
    image: "https://via.placeholder.com/600x400",
    tags: ["Vue.js", "Python", "AWS"],
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for tracking social media performance across platforms.",
    image: "https://via.placeholder.com/600x400",
    tags: ["Angular", "D3.js", "API Integration"],
    link: "#",
  },
  {
    title: "Educational Platform",
    description:
      "Online learning platform with video content and interactive assessments.",
    image: "https://via.placeholder.com/600x400",
    tags: ["Next.js", "MongoDB", "WebRTC"],
    link: "#",
  },
];

export default function Projects() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful digital projects that showcase our
            expertise and creativity.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
