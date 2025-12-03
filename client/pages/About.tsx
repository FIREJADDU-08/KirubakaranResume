import { useTheme } from "@/context/ThemeContext";
import { ExternalLink, Github, Smartphone, Globe, Store, ShoppingBag } from "lucide-react";
import { useState } from "react";

// Your JSON data
const portfolioData = {
  "title": {
    "locales": {
      "en": {
        "title_short": "Portfolio",
        "title_short_nav": "Portfolio",
        "title_long_prefix": "Take a look at",
        "title_long": "My Portfolio"
      }
    }
  },
  "articles": [
    {
      "id": 1,
      "component": "ArticlePortfolio",
      "locales": {
        "en": {
          "category_all": "All",
          "category_apps": "Apps",
          "category_web": "Web"
        }
      },
      "settings": {
        "categorize_by": [
          "category_apps",
          "category_web"
        ],
        "order_items_by": "id",
        "order_items_sort": "asc"
      },
      "items": [
        {
          "id": 2,
          "categoryId": "category_apps",
          "img": "images/pictures/portfolio-project-logo-7.png",
          "faIcon": "",
          "faIconColors": { "bg": "", "fill": "" },
          "preview": {
            "links": [
              {
                "href": "https://play.google.com/store/apps/details?id=com.bmg.bmgscheme",
                "tooltipString": "see_on_google_play",
                "faIcon": "fa-brands fa-google-play"
              }
            ],
            "screenshots": [],
            "screenshotsAspectRatio": "",
            "youtubeVideo": ""
          },
          "locales": {
            "en": {
              "title": "Digi Scheme",
              "text": "A customer-centric gold savings and scheme management app, helping users track installments, payments, maturity dates, and personalized gold plans.",
              "tags": ["Flutter", "Schemes", "Customer App"]
            }
          }
        },
        {
          "id": 3,
          "categoryId": "category_apps",
          "img": "images/pictures/portfolio-project-logo-6.png",
          "faIcon": "",
          "faIconColors": { "bg": "", "fill": "" },
          "preview": {
            "links": [
              {
                "href": "https://play.google.com/store/apps/details?id=com.akjgold.akj",
                "tooltipString": "see_on_google_play",
                "faIcon": "fa-brands fa-google-play"
              }
            ],
            "screenshots": [],
            "screenshotsAspectRatio": "",
            "youtubeVideo": ""
          },
          "locales": {
            "en": {
              "title": "AKJ Mini Gold",
              "text": "A lightweight gold investment companion app designed for fast scheme tracking, installment notifications, and user-friendly account management.",
              "tags": ["React Native", "Gold", "Schemes"]
            }
          }
        },
        {
          "id": 4,
          "categoryId": "category_web",
          "img": "images/pictures/portfolio-project-logo-1.png",
          "faIcon": "",
          "faIconColors": { "bg": "", "fill": "" },
          "preview": {
            "links": [
              {
                "href": "https://bmgjewellers.com/",
                "tooltipString": "open_website",
                "faIcon": "fa-solid fa-link"
              }
            ],
            "screenshots": [],
            "screenshotsAspectRatio": "",
            "youtubeVideo": ""
          },
          "locales": {
            "en": {
              "title": "BMG Jewellers – E-Commerce",
              "text": "A modern jewellery e-commerce platform with product browsing, gold rate integration, secured checkout, and multi-category catalogue management.",
              "tags": ["Next.js", "E-Commerce", "Jewellery"]
            }
          }
        },
        {
          "id": 6,
          "categoryId": "category_web",
          "img": "images/pictures/portfolio-project-logo-5.png",
          "faIcon": "",
          "faIconColors": { "bg": "", "fill": "" },
          "preview": {
            "links": [
              {
                "href": "https://nkvairamaaligai.com/",
                "tooltipString": "open_website",
                "faIcon": "fa-solid fa-link"
              }
            ],
            "screenshots": [],
            "screenshotsAspectRatio": "",
            "youtubeVideo": ""
          },
          "locales": {
            "en": {
              "title": "NK Viramaaligai",
              "text": "A clean, elegant business website crafted for a jewellery and retail chain, showcasing collections, store details, and customer engagement features.",
              "tags": ["WordPress", "Business", "Showcase"]
            }
          }
        }
      ]
    }
  ]
};

export default function Portfolio() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeFilter, setActiveFilter] = useState("All");

  // Extract data from JSON
  const portfolioArticle = portfolioData.articles[0];
  const portfolioItems = portfolioArticle.items;
  const locales = portfolioArticle.locales.en;
  const titleLocales = portfolioData.title.locales.en;

  // Helper function to get appropriate icon based on category
  const getIconForProject = (categoryId) => {
    switch (categoryId) {
      case "category_apps":
        return <Smartphone className={`${isDark ? "text-green-400" : "text-green-700"}`} />;
      case "category_web":
        return <Globe className={`${isDark ? "text-green-400" : "text-green-700"}`} />;
      default:
        return <Globe className={`${isDark ? "text-green-400" : "text-green-700"}`} />;
    }
  };

  // Helper function to get category label
  const getCategoryLabel = (categoryId) => {
    switch (categoryId) {
      case "category_apps":
        return "Apps";
      case "category_web":
        return "Web";
      default:
        return "Other";
    }
  };

  // Helper function to get subcategory description
  const getSubcategoryText = (project) => {
    const tags = project.locales.en.tags;
    if (tags.length > 0) {
      return tags.map(tag => tag.toLowerCase()).join(", ");
    }
    return project.categoryId === "category_apps" ? "mobile application" : "web application";
  };

  // Build filters from JSON data
  const filters = [
    { 
      id: "All", 
      label: locales.category_all, 
      count: portfolioItems.length 
    },
    { 
      id: "category_apps", 
      label: locales.category_apps, 
      count: portfolioItems.filter(p => p.categoryId === "category_apps").length 
    },
    { 
      id: "category_web", 
      label: locales.category_web, 
      count: portfolioItems.filter(p => p.categoryId === "category_web").length 
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "All" 
    ? portfolioItems.sort((a, b) => 
        portfolioArticle.settings.order_items_sort === "asc" ? a.id - b.id : b.id - a.id
      )
    : portfolioItems
        .filter(item => item.categoryId === activeFilter)
        .sort((a, b) => 
          portfolioArticle.settings.order_items_sort === "asc" ? a.id - b.id : b.id - a.id
        );

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
          🚀 My Projects
        </p>

        <h1
          className={`text-center font-mono font-bold text-4xl sm:text-5xl mb-6 ${
            isDark ? "text-green-400" : "text-green-700"
          }`}
        >
          {titleLocales.title_long_prefix} {titleLocales.title_long.replace("{{Portfolio}}", "Portfolio")}
        </h1>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? isDark
                    ? "bg-green-400 text-slate-900"
                    : "bg-green-700 text-white"
                  : isDark
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  : "bg-white text-slate-700 hover:bg-green-50 border border-green-200"
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-xl overflow-hidden transition-all duration-300 ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700 hover:border-green-400/30"
                  : "bg-white border border-green-200 hover:border-green-700/50"
              }`}
            >
              {/* Project Header */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-lg ${
                        isDark ? "bg-slate-900" : "bg-green-50"
                      }`}
                    >
                      {getIconForProject(project.categoryId)}
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-mono font-semibold ${
                          isDark ? "text-green-400" : "text-green-700"
                        }`}
                      >
                        {project.locales.en.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className={`text-sm font-medium px-3 py-1 rounded-full ${
                            isDark
                              ? "bg-slate-900 text-green-400"
                              : "bg-green-50 text-green-700"
                          }`}
                        >
                          {getCategoryLabel(project.categoryId)}
                        </span>
                        <span className="text-sm text-slate-500">•</span>
                        <span
                          className={`text-sm ${
                            isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          {getSubcategoryText(project)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`mb-6 leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {project.locales.en.text}
                </p>

                {/* Separator */}
                <div
                  className={`h-px mb-6 ${
                    isDark ? "bg-slate-700" : "bg-green-200"
                  }`}
                ></div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.locales.en.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        isDark
                          ? "bg-slate-900 text-green-400 border border-slate-700"
                          : "bg-green-50 text-green-700 border border-green-200"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {/* Check if there are preview links */}
                  {project.preview.links && project.preview.links.length > 0 ? (
                    project.preview.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                          link.faIcon.includes("google-play")
                            ? isDark
                              ? "bg-green-400 text-slate-900 hover:bg-green-300"
                              : "bg-green-700 text-white hover:bg-green-600"
                            : isDark
                            ? "bg-slate-900 text-green-400 hover:bg-slate-800"
                            : "bg-green-50 text-green-700 hover:bg-green-100"
                        }`}
                        title={link.tooltipString}
                      >
                        {link.faIcon.includes("google-play") ? (
                          <>
                            <ExternalLink size={18} />
                            View on Play Store
                          </>
                        ) : (
                          <>
                            <ExternalLink size={18} />
                            Visit Website
                          </>
                        )}
                      </a>
                    ))
                  ) : (
                    <>
                      <a
                        href="#"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                          isDark
                            ? "bg-slate-900 text-green-400 hover:bg-slate-800"
                            : "bg-green-50 text-green-700 hover:bg-green-100"
                        }`}
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href="#"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                          isDark
                            ? "bg-green-400 text-slate-900 hover:bg-green-300"
                            : "bg-green-700 text-white hover:bg-green-600"
                        }`}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Hover Effect Background */}
              <div
                className={`h-1 w-0 group-hover:w-full transition-all duration-500 ${
                  isDark ? "bg-green-400" : "bg-green-700"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* STATS SECTION */}
        <div className="mt-20">
          <h2
            className={`text-2xl font-mono font-semibold mb-8 flex items-center gap-2 ${
              isDark ? "text-green-400" : "text-green-700"
            }`}
          >
            <span className="h-6 w-1 bg-green-400 rounded-full"></span>
            Project Stats
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div
              className={`p-6 rounded-xl text-center ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700"
                  : "bg-white border border-green-200"
              }`}
            >
              <div
                className={`text-3xl font-bold mb-2 ${
                  isDark ? "text-green-400" : "text-green-700"
                }`}
              >
                {portfolioItems.length}
              </div>
              <div
                className={`text-sm ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Total Projects
              </div>
            </div>

            <div
              className={`p-6 rounded-xl text-center ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700"
                  : "bg-white border border-green-200"
              }`}
            >
              <div
                className={`text-3xl font-bold mb-2 ${
                  isDark ? "text-green-400" : "text-green-700"
                }`}
              >
                {portfolioItems.filter(p => p.categoryId === "category_apps").length}
              </div>
              <div
                className={`text-sm ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Mobile Apps
              </div>
            </div>

            <div
              className={`p-6 rounded-xl text-center ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700"
                  : "bg-white border border-green-200"
              }`}
            >
              <div
                className={`text-3xl font-bold mb-2 ${
                  isDark ? "text-green-400" : "text-green-700"
                }`}
              >
                {portfolioItems.filter(p => p.categoryId === "category_web").length}
              </div>
              <div
                className={`text-sm ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Web Projects
              </div>
            </div>

            <div
              className={`p-6 rounded-xl text-center ${
                isDark
                  ? "bg-slate-800/40 border border-slate-700"
                  : "bg-white border border-green-200"
              }`}
            >
              <div
                className={`text-3xl font-bold mb-2 ${
                  isDark ? "text-green-400" : "text-green-700"
                }`}
              >
                100%
              </div>
              <div
                className={`text-sm ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}