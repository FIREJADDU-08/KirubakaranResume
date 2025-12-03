import { useState } from "react";
import { Mail, Linkedin, Github, Facebook, Instagram, Send } from "lucide-react";

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com",
      color: "text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com",
      color: "text-slate-900 dark:text-slate-100",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com",
      color: "text-pink-600",
    },
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://facebook.com",
      color: "text-blue-600",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-300 ${
        isDark
          ? "bg-slate-800 border-b border-slate-700"
          : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-lg transition-colors duration-300 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Let's discuss your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-lg transition-colors duration-300 ${
                  isDark ? "bg-blue-500/20" : "bg-blue-100"
                }`}
              >
                <Mail className="text-blue-500" size={24} />
              </div>
              <div>
                <h3
                  className={`font-semibold mb-1 transition-colors duration-300 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Email
                </h3>
                <a
                  href="mailto:kiruba.karan@example.com"
                  className={`transition-colors duration-300 ${
                    isDark ? "text-slate-400 hover:text-blue-400" : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  kiruba.karan@example.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-lg transition-colors duration-300 ${
                  isDark ? "bg-purple-500/20" : "bg-purple-100"
                }`}
              >
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3
                  className={`font-semibold mb-1 transition-colors duration-300 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Phone
                </h3>
                <a
                  href="tel:+919876543210"
                  className={`transition-colors duration-300 ${
                    isDark ? "text-slate-400 hover:text-purple-400" : "text-slate-600 hover:text-purple-600"
                  }`}
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-lg transition-colors duration-300 ${
                  isDark ? "bg-green-500/20" : "bg-green-100"
                }`}
              >
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h3
                  className={`font-semibold mb-1 transition-colors duration-300 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  Location
                </h3>
                <p
                  className={`transition-colors duration-300 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Bangalore, India
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3
                className={`font-semibold mb-4 transition-colors duration-300 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                        isDark
                          ? "bg-slate-700 hover:bg-blue-500/20"
                          : "bg-slate-100 hover:bg-blue-100"
                      }`}
                      aria-label={social.label}
                    >
                      <Icon size={20} className={social.color} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 border ${
                  isDark
                    ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                    : "bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 border ${
                  isDark
                    ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                    : "bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                placeholder="john@example.com"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 border ${
                  isDark
                    ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                    : "bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none`}
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 rounded-lg bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400">
                Thank you! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 rounded-lg bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-400">
                Something went wrong. Please try again.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
