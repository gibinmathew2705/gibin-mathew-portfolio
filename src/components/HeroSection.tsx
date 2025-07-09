import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/gibin-profile-new.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 portfolio-section text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative pt-4 px-4">
            <div className="relative inline-block">
              {/* Profile image with border */}
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 p-1">
                <img
                  src={profileImage}
                  alt="Gibin Mathew - QA Test Engineer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* QA Badge */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">QA</span>
              </div>

              {/* Available Badge */}
              <span className="absolute top-1/2 -translate-y-1/2 left-[-300px] bg-[#e6f4ea] text-[#0b6e4f] px-4 py-1.5 rounded-full font-semibold text-xs sm:text-sm border border-[#c3e9d5] shadow-md animate-pulse z-10 whitespace-nowrap">
                📢 Available for new opportunities
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Gibin</span> — a QA Engineer
            <br />
            building trust through{" "}
            <span className="text-gradient">tested software</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            2.5+ years in software testing, healthcare domain experience,
            automation with Selenium, and a sharp eye for quality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              className="btn-gradient text-lg px-8 py-3"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="outline" className="text-lg px-8 py-3" asChild>
              <a
                href="/Gibin_Mathew_QA_Test_Engineer_Resume.pdf"
                download="Gibin_Mathew_QA_Test_Engineer_Resume.pdf"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Manual Testing",
              "Selenium Automation",
              "Healthcare Domain",
              "Agile Methodology",
              "SQL Validation",
              "Quality Assurance",
            ].map((tag) => (
              <span key={tag} className="skill-badge">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
