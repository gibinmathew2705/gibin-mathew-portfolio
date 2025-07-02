import { Bug, Code, Database, Cog, TestTube, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Test Techniques",
      icon: TestTube,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      skills: [
        "Manual Testing", "Functional Testing", "Regression Testing", 
        "Sanity Testing", "Smoke Testing", "End-to-End Testing", 
        "Cross-Browser Testing", "Exploratory Testing"
      ]
    },
    {
      title: "Automation Skills",
      icon: Code,
      color: "text-green-600",
      bgColor: "bg-green-50",
      skills: [
        "Selenium WebDriver with Java", "TestNG", "Maven", 
        "Page Object Model (POM)", "BDD (Cucumber)", "Git", "Jenkins (Basic)"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Cog,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      skills: [
        "Bugzilla", "JIRA", "Squash TM", "Postman (Basic)", "MySQL Developer"
      ]
    },
    {
      title: "Processes",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      skills: [
        "Agile Scrum", "SDLC", "STLC", "Test Case Design", 
        "Defect Lifecycle", "RCA (Root Cause Analysis)"
      ]
    },
    {
      title: "Database & Backend",
      icon: Database,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      skills: [
        "SQL", "MySQL", "PostgreSQL", "Complex Queries", 
        "Data Validation", "Database Testing"
      ]
    },
    {
      title: "Bug Management",
      icon: Bug,
      color: "text-red-600",
      bgColor: "bg-red-50",
      skills: [
        "Bug Reporting", "Severity Assessment", "Priority Classification", 
        "Reproduction Steps", "Test Documentation"
      ]
    }
  ];

  return (
    <section id="skills" className="portfolio-section bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-xl text-muted-foreground">
          Comprehensive skill set spanning manual testing, automation, and quality assurance
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Card key={index} className="experience-card h-full hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${category.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Skills Summary */}
      <div className="mt-12 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">2.5+</div>
            <div className="text-sm text-muted-foreground">Years Testing</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Tools Mastered</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Testing Types</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">1</div>
            <div className="text-sm text-muted-foreground">Domain Expert</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;