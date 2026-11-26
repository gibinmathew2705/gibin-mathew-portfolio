import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const roles = [
  {
    title: "Software Quality Engineer",
    company: "Infosys, Bengaluru",
    period: "Jan 2026 – Present",
    badge: "Current",
    achievements: [
      "Developed and maintained Appium, Java and TestNG automation for banking applications",
      "Ran cross-device testing on Android and iOS real devices through Perfecto",
      "Built and maintained Selenium WebDriver, Java and Cucumber (BDD) web automation",
      "Contributing to the migration from Selenium-Cucumber to Playwright-Cucumber",
      "Developed and executed API scenarios in ReadyAPI, with manual API validation in Bruno",
      "Covered functional, regression, smoke, sanity and end-to-end testing across web and mobile",
      "Ran automated regression through Jenkins, investigated failures and debugged scripts to improve stability",
      "Managed defects in JIRA with developers and cross-functional teams; took part in Agile Scrum ceremonies",
    ],
  technologies: ["Appium", "Selenium", "Playwright", "Java", "TestNG", "Cucumber (BDD)", "ReadyAPI", "Bruno", "REST", "SOAP", "Perfecto", "Jenkins", "JIRA", "Git", "Bitbucket"],
  stats: [
    { value: "Web · Mobile · API", label: "Test automation coverage" },
    { value: "Android + iOS", label: "Real-device testing" },
    { value: "Credo Award", label: "Client recognition" },
  ],
  },
  {
    title: "QA Test Engineer",
    company: "Deloitte USI, Bengaluru",
    period: "Feb 2023 – Jun 2025",
    badge: "2+ Years",
    achievements: [
      "Designed, executed and maintained 600+ functional and regression test cases for a healthcare eligibility system",
      "Ran end-to-end testing across multiple healthcare benefit programs to confirm accurate eligibility determination",
      "Developed Selenium WebDriver scripts using Java, TestNG and Page Object Model",
      "Validated backend data with SQL queries across multiple MySQL databases",
      "Executed functional, regression, smoke and cross-browser testing across application workflows",
      "Logged defects in Bugzilla with reproduction steps, screenshots and severity, and tracked them through retest and verification",
      "Managed test artifacts in Squash TM; worked with onshore and offshore teams on planning, triage and releases",
      "Ran knowledge transfer sessions and helped onboard new QA team members",
    ],
    technologies: ["Selenium", "Java", "TestNG", "POM", "SQL", "MySQL", "Bugzilla", "Squash TM", "JIRA", "Cross-browser Testing", "Agile Scrum"],
    stats: [{ value: "600+", label: "Test cases written" }, { value: "2x", label: "Spot Award" }],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="portfolio-section">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
      <p className="text-xl text-muted-foreground">
        Building quality software through hands-on automation and thorough testing
      </p>
    </div>

    <div className="max-w-4xl mx-auto space-y-8">
      {roles.map((role) => (
        <Card key={role.title} className="experience-card border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl font-bold text-primary mb-2">{role.title}</CardTitle>
                <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                  <Building2 className="h-5 w-5 text-muted-foreground" />
                  {role.company}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                  <div className="flex items-center gap-1"><Calendar className="h-4 w-4" />{role.period}</div>
                  <div className="flex items-center gap-1"><MapPin className="h-4 w-4" />Bengaluru, India</div>
                </div>
              </div>
              <Badge variant="secondary" className="text-sm font-medium px-4 py-2">{role.badge}</Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Key Achievements</h3>
              <div className="space-y-3">
                {role.achievements.map((a) => (
                  <div key={a} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {role.technologies.map((t) => (
                  <Badge key={t} variant="outline" className="px-3 py-1">{t}</Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              {role.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
