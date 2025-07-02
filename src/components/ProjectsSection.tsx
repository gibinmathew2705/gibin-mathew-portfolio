import { ExternalLink, Github, Heart, Users, Database, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projectHighlights = [
    {
      icon: Users,
      title: "User Journey Validation",
      description: "Validated complex user journeys using detailed test cases and regression matrices"
    },
    {
      icon: Shield,
      title: "Cross-browser Testing",
      description: "Ensured consistent behavior across Chrome, Firefox, Edge browsers"
    },
    {
      icon: Database,
      title: "Data Integrity",
      description: "Verified API response integrity and backed it with SQL validation for complete data flow accuracy"
    }
  ];

  const technologies = [
    "Bugzilla", "Squash TM", "MySQL Developer", "Selenium with Java", 
    "JIRA", "Cross-browser Testing", "SQL Validation", "Test Case Design"
  ];

  const achievements = [
    "Authored concise and clear bug reports that helped reduce time-to-fix by 30%",
    "Wrote lightweight automation scripts to streamline repetitive test scenarios using Selenium and Java",
    "Played a key role in sprint-level planning and QA effort estimation"
  ];

  return (
    <section id="projects" className="portfolio-section">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Spotlight</h2>
        <p className="text-xl text-muted-foreground">
          Real-world impact through comprehensive testing solutions
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Main Project Card */}
        <Card className="experience-card border-l-4 border-l-primary mb-8">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold mb-2">
                    Healthcare Benefits Eligibility Platform
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Badge variant="secondary">QA Test Engineer</Badge>
                    <Badge variant="outline">Healthcare Domain</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Project Overview */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contributed to a <strong className="text-foreground">mission-critical healthcare benefits platform</strong>, 
                supporting eligibility processing across diverse user categories like maternity, disability, elderly care, and more. 
                The application handles sensitive data and real-time eligibility workflows, requiring precision and thorough testing at all levels.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Tech Stack & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Contributions */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Contributions</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {projectHighlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <Card key={index} className="p-4 bg-muted/50">
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold text-sm">{highlight.title}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">{highlight.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Impact & Achievements</h3>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Metrics */}
            <div className="grid md:grid-cols-4 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Test Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Critical Bugs Fixed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">30%</div>
                <div className="text-sm text-muted-foreground">Faster Resolution</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;