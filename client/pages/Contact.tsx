import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  FileText,
  User,
  MessageSquare
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  isLink?: boolean;
}

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [charCount, setCharCount] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const isDark = theme === "dark";

  // Contact information data
  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className={isDark ? "text-green-400" : "text-green-700"} size={22} />,
      title: "Email",
      value: "kirubajadu08@gmail.com",
      href: "mailto:kirubajadu08@gmail.com",
      isLink: true,
    },
    {
      icon: <Phone className={isDark ? "text-green-400" : "text-green-700"} size={22} />,
      title: "Phone",
      value: "+91 7603905056",
      href: "tel:+917603905056",
      isLink: true,
    },
    {
      icon: <MapPin className={isDark ? "text-green-400" : "text-green-700"} size={22} />,
      title: "Location",
      value: "Kunnathur - TN",
    },
    {
      icon: <Clock className={isDark ? "text-green-400" : "text-green-700"} size={22} />,
      title: "Response Time",
      value: "Within 24 hours",
    },
  ];

  // Social links data
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/kiruba-karan/",
      color: isDark ? "text-green-400" : "text-green-700",
      bgColor: isDark ? "bg-slate-900" : "bg-green-50",
      hoverColor: isDark ? "hover:bg-slate-800" : "hover:bg-green-100",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: "https://github.com/FIREJADDU-08",
      color: isDark ? "text-green-400" : "text-green-700",
      bgColor: isDark ? "bg-slate-900" : "bg-green-50",
      hoverColor: isDark ? "hover:bg-slate-800" : "hover:bg-green-100",
    },
  ];

  // Validate form on change
  useEffect(() => {
    const { name, email, message } = formData;
    const isValid = 
      name.trim().length >= 2 && 
      email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) !== null && 
      message.trim().length >= 10;
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (field: keyof FormData, value: string) => {
    if (field === "message") {
      setCharCount(value.length);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!isFormValid) return;
    
    setStatus("loading");

    // Simulate email sending
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setCharCount(0);
      
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 2000);
  };

  // Status message configuration
  const statusConfig = {
    success: {
      icon: <CheckCircle className="text-green-500" size={20} />,
      message: "Message sent successfully! I'll get back to you soon.",
      bgColor: isDark ? "bg-green-500/10 border border-green-500/20" : "bg-green-50 border border-green-200",
    },
    error: {
      icon: <AlertCircle className="text-red-500" size={20} />,
      message: "Failed to send message. Please try again or email me directly.",
      bgColor: isDark ? "bg-red-500/10 border border-red-500/20" : "bg-red-50 border border-red-200",
    },
    loading: {
      icon: (
        <div className={`animate-spin rounded-full h-5 w-5 border-b-2 ${isDark ? "border-green-400" : "border-green-700"}`}></div>
      ),
      message: "Sending your message...",
      bgColor: isDark ? "bg-green-500/10 border border-green-500/20" : "bg-green-50 border border-green-200",
    },
  };

  return (
    <div
      className={`min-h-screen py-16 transition-colors duration-300 ${
        isDark ? "bg-background" : "bg-slate-100"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* HEADER */}
        <p
          className={`text-center text-sm mb-2 ${
            isDark ? "text-green-400/70" : "text-green-700"
          }`}
        >
          📬 Get in Touch
        </p>

        <h1
          className={`text-center font-mono font-bold text-4xl sm:text-5xl mb-6 ${
            isDark ? "text-green-400" : "text-green-700"
          }`}
        >
          Let's Work Together
        </h1>

        <p
          className={`text-center text-base max-w-2xl mx-auto mb-12 ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}
        >
          Have a project in mind or want to discuss opportunities? 
          Feel free to reach out through any of these channels.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* CONTACT INFO SECTION */}
          <div className="lg:col-span-1">
            <div
              className={`rounded-xl p-8 h-full ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700"
                  : "bg-white border border-green-200"
              }`}
            >
              <h2
                className={`text-2xl font-mono font-semibold mb-6 flex items-center gap-2 ${
                  isDark ? "text-green-400" : "text-green-700"
                }`}
              >
                <span className="h-6 w-1 bg-green-400 rounded-full"></span>
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                      isDark
                        ? "bg-slate-900/50 hover:bg-slate-800/50"
                        : "bg-green-50 hover:bg-green-100/50"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isDark ? "bg-slate-900" : "bg-green-100"
                      }`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-1 ${
                          isDark ? "text-green-400" : "text-green-700"
                        }`}
                      >
                        {info.title}
                      </h3>
                      {info.isLink ? (
                        <a
                          href={info.href}
                          className={`text-sm hover:underline ${
                            isDark ? "text-slate-300 hover:text-green-400" : "text-slate-700 hover:text-green-700"
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p
                          className={`text-sm ${
                            isDark ? "text-slate-300" : "text-slate-700"
                          }`}
                        >
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="pt-6 border-t border-slate-700/30">
                  <h3
                    className={`font-semibold mb-4 ${
                      isDark ? "text-green-400" : "text-green-700"
                    }`}
                  >
                    Connect with me
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg flex items-center gap-2 transition-colors ${
                          social.bgColor
                        } ${social.hoverColor} ${social.color}`}
                      >
                        {social.icon}
                        <span className="text-sm font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM SECTION */}
          <div className="lg:col-span-2">
            <div
              className={`rounded-xl p-8 ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700"
                  : "bg-white border border-green-200"
              }`}
            >
              <h2
                className={`text-2xl font-mono font-semibold mb-6 flex items-center gap-2 ${
                  isDark ? "text-green-400" : "text-green-700"
                }`}
              >
                <span className="h-6 w-1 bg-green-400 rounded-full"></span>
                Send me a Message
              </h2>

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 flex items-center gap-2 ${
                      isDark ? "text-green-400" : "text-green-700"
                    }`}
                  >
                    <User size={16} />
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg transition-colors border focus:outline-none focus:ring-2 ${
                      isDark
                        ? "bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-green-400 focus:ring-green-400/30"
                        : "bg-white border-green-200 text-slate-900 placeholder-slate-400 focus:border-green-700 focus:ring-green-700/30"
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 flex items-center gap-2 ${
                      isDark ? "text-green-400" : "text-green-700"
                    }`}
                  >
                    <Mail size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg transition-colors border focus:outline-none focus:ring-2 ${
                      isDark
                        ? "bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-green-400 focus:ring-green-400/30"
                        : "bg-white border-green-200 text-slate-900 placeholder-slate-400 focus:border-green-700 focus:ring-green-700/30"
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label
                      className={`text-sm font-semibold flex items-center gap-2 ${
                        isDark ? "text-green-400" : "text-green-700"
                      }`}
                    >
                      <FileText size={16} />
                      Your Message
                    </label>
                    <span
                      className={`text-xs ${
                        charCount > 500 ? "text-red-500" : isDark ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      {charCount}/500
                    </span>
                  </div>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value.slice(0, 500))}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg transition-colors border focus:outline-none focus:ring-2 resize-none ${
                      isDark
                        ? "bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-green-400 focus:ring-green-400/30"
                        : "bg-white border-green-200 text-slate-900 placeholder-slate-400 focus:border-green-700 focus:ring-green-700/30"
                    }`}
                    placeholder="Hi Kiruba, I'd like to discuss a project opportunity..."
                  />
                </div>

                {/* Status Message */}
                {status !== "idle" && (
                  <div
                    className={`p-4 rounded-lg border flex items-center gap-3 transition-all duration-300 ${
                      statusConfig[status].bgColor
                    }`}
                  >
                    {statusConfig[status].icon}
                    <p
                      className={`font-medium text-sm ${
                        status === "success"
                          ? isDark ? "text-green-400" : "text-green-700"
                          : status === "error"
                          ? "text-red-500"
                          : isDark ? "text-green-400" : "text-green-700"
                      }`}
                    >
                      {statusConfig[status].message}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading" || !isFormValid}
                  className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isFormValid && status !== "loading"
                      ? isDark
                        ? "bg-green-400 text-slate-900 hover:bg-green-300 hover:shadow-lg hover:shadow-green-400/20"
                        : "bg-green-700 text-white hover:bg-green-600 hover:shadow-lg hover:shadow-green-700/20"
                      : isDark
                      ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {status === "loading" ? (
                    <>
                      <div className={`animate-spin rounded-full h-5 w-5 border-b-2 ${isDark ? "border-slate-900" : "border-white"}`}></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Form Disclaimer */}
                <p
                  className={`text-xs text-center pt-4 ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  By submitting this form, you agree to receive a response via email.
                  I respect your privacy and will not share your information.
                </p>
              </div>
            </div>

            {/* ALTERNATIVE CONTACT METHODS */}
            <div className="mt-12">
              <h3
                className={`text-xl font-mono font-semibold mb-6 flex items-center gap-2 ${
                  isDark ? "text-green-400" : "text-green-700"
                }`}
              >
                <span className="h-6 w-1 bg-green-400 rounded-full"></span>
                Other Ways to Connect
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Direct Email",
                    description: "Send me an email directly",
                    action: "Email Me",
                    href: "mailto:kirubajadu08@gmail.com",
                    icon: <Mail className={isDark ? "text-green-400" : "text-green-700"} size={18} />,
                    bgColor: isDark ? "bg-slate-900" : "bg-green-50",
                  },
                  {
                    title: "LinkedIn",
                    description: "Connect professionally",
                    action: "Message on LinkedIn",
                    href: "https://www.linkedin.com/in/kiruba-karan/",
                    icon: <Linkedin className={isDark ? "text-green-400" : "text-green-700"} size={18} />,
                    bgColor: isDark ? "bg-slate-900" : "bg-green-50",
                  },
                  {
                    title: "GitHub",
                    description: "Check out my projects",
                    action: "Visit GitHub",
                    href: "https://github.com/FIREJADDU-08",
                    icon: <Github className={isDark ? "text-green-400" : "text-green-700"} size={18} />,
                    bgColor: isDark ? "bg-slate-900" : "bg-green-50",
                  },
                  {
                    title: "Phone Call",
                    description: "Let's have a conversation",
                    action: "Call Me",
                    href: "tel:+917603905056",
                    icon: <Phone className={isDark ? "text-green-400" : "text-green-700"} size={18} />,
                    bgColor: isDark ? "bg-slate-900" : "bg-green-50",
                  },
                ].map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : "_self"}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`p-5 rounded-xl transition-all duration-300 border hover:-translate-y-1 ${
                      isDark
                        ? "border-slate-700 hover:border-green-400/50"
                        : "border-green-200 hover:border-green-700/50"
                    } ${method.bgColor}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg ${
                          isDark ? "bg-slate-800" : "bg-green-100"
                        }`}
                      >
                        {method.icon}
                      </div>
                      <div>
                        <h4
                          className={`font-semibold mb-1 ${
                            isDark ? "text-green-400" : "text-green-700"
                          }`}
                        >
                          {method.title}
                        </h4>
                        <p
                          className={`text-sm mb-2 ${
                            isDark ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {method.description}
                        </p>
                        <span
                          className={`text-sm font-medium ${
                            isDark ? "text-green-400" : "text-green-700"
                          }`}
                        >
                          {method.action} →
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}