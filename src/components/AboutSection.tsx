import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="portfolio-section bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-xl text-muted-foreground">
          Passionate about quality, precision, and delivering exceptional
          software experiences
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Bio Content */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a{" "}
            <strong className="text-foreground">
              Bangalore-based QA Automation Engineer
            </strong>{" "}
            with 3+ years of experience delivering robust, scalable software
            across banking and healthcare. I moved from manual testing into web,
            mobile and API automation, and I'm currently contributing to a
            Selenium-Cucumber to Playwright-Cucumber migration.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Known for my{" "}
            <strong className="text-foreground">
              structured testing mindset
            </strong>{" "}
            and collaborative approach, I thrive in Agile teams and continuously
            upskill through hands-on learning. My expertise spans functional
            testing, regression analysis, and automation frameworks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="btn-gradient" asChild>
              <a
                href="/Gibin Mathew_QA_Test_Engineer_Resume.pdf"
                download="Gibin Mathew_QA_Test_Engineer_Resume.pdf"
                className="flex items-center gap-2"
              >
                Download Resume
              </a>
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Education Card */}
        <div className="space-y-6">
          <Card className="experience-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="pb-4 border-b border-border">
                <h3 className="font-semibold text-lg">
                  Master of Computer Applications (MCA)
                </h3>
                <p className="text-primary font-medium">
                  Indira Gandhi National Open University (IGNOU)
                </p>
                <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  2025 – Present
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Bachelor of Computer Application (BCA)
                </h3>
                <p className="text-primary font-medium">
                  Santhigiri College of Computer Sciences, Kerala
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    2019 – 2022
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Kerala, India
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">
                Test Cases Written
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
