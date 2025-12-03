interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`transition-colors duration-300 ${
        isDark ? "bg-slate-900 border-t border-slate-700" : "bg-slate-50 border-t border-slate-200"
      }`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Kiruba
              </span>
            </h3>
            <p
              className={`text-sm transition-colors duration-300 ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Crafting digital experiences with code and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`font-semibold mb-4 transition-colors duration-300 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Portfolio", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`text-sm transition-colors duration-300 hover:text-blue-500 ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className={`font-semibold mb-4 transition-colors duration-300 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:kiruba.karan@example.com"
                  className={`transition-colors duration-300 hover:text-blue-500 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  kiruba.karan@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className={`transition-colors duration-300 hover:text-blue-500 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`border-t transition-colors duration-300 ${
            isDark ? "border-slate-700" : "border-slate-200"
          } my-8`}
        />

        {/* Copyright */}
        <div
          className={`text-center text-sm transition-colors duration-300 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          <p>
            © {currentYear} Kiruba Karan. All rights reserved. Built with React +
            TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
