import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const achievements = [
    "Spearheaded manual testing efforts for a large-scale healthcare eligibility platform used by thousands of individuals",
    "Executed functional, regression, smoke, sanity, and cross-browser testing to validate complex workflows",
    "Ensured data integrity by running advanced SQL validations across benefit modules",
    "Logged high-impact bugs with detailed reproduction steps, screenshots, and severity tagging using Bugzilla",
    "Collaborated closely with developers and product managers in Agile sprints, improving defect resolution timelines",
    "Managed test artifacts through Squash TM, and actively contributed in retrospectives and sprint reviews",
    "Applied automation knowledge by scripting reusable Selenium test components in Java, enhancing test efficiency for repetitive flows"
  ];

  const technologies = [
    "Bugzilla", "Squash TM", "MySQL Developer", "Selenium WebDriver", 
    "Java", "JIRA", "Agile Scrum", "Cross-browser Testing"
  ];

  return (
    <section id="experience" className="portfolio-section">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
        <p className="text-xl text-muted-foreground">
          Building quality software through comprehensive testing strategies
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="experience-card border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl font-bold text-primary mb-2">
                  QA Test Engineer
                </CardTitle>
                <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                  <Building2 className="h-5 w-5 text-muted-foreground" />
                  Deloitte, Bangalore
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Feb 2023 – May 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Bangalore, India
                  </div>
                </div>
              </div>
              <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                2+ Years
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Key Achievements */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Key Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">30%</div>
                <div className="text-sm text-muted-foreground">Faster Bug Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Test Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Critical Bugs Found</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;