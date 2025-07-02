import { Award, Globe, Palette, Music, Bike, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CertificationsSection = () => {
  const languages = [
    { name: "English", level: "Professional Use", flag: "🇺🇸", proficiency: 95 },
    { name: "Malayalam", level: "Native Speaker", flag: "🇮🇳", proficiency: 100 },
    { name: "Tamil", level: "Intermediate", flag: "🇮🇳", proficiency: 70 },
    { name: "Hindi", level: "Beginner", flag: "🇮🇳", proficiency: 40 }
  ];

  const hobbies = [
    { name: "Learning new technologies", icon: Award, color: "text-blue-600" },
    { name: "Pencil drawing", icon: Palette, color: "text-purple-600" },
    { name: "Movies and music", icon: Music, color: "text-green-600" },
    { name: "Cycling", icon: Bike, color: "text-orange-600" },
    { name: "Badminton", icon: Gamepad2, color: "text-red-600" }
  ];

  return (
    <section className="portfolio-section bg-muted/30">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="h-8 w-8 text-primary" />
            Certifications
          </h2>
          
          <Card className="experience-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Selenium WebDriver with Java</div>
                  <div className="text-sm text-muted-foreground">Basics to Advanced</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Institution:</span>
                  <span className="font-medium">Rahul Shetty Academy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Platform:</span>
                  <span className="font-medium">Udemy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    Completed
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Globe className="h-8 w-8 text-primary" />
            Languages
          </h2>
          
          <div className="space-y-4">
            {languages.map((language, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{language.flag}</span>
                    <div>
                      <div className="font-semibold">{language.name}</div>
                      <div className="text-sm text-muted-foreground">{language.level}</div>
                    </div>
                  </div>
                  <div className="text-primary font-semibold">{language.proficiency}%</div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${language.proficiency}%` }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Hobbies & Interests */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Hobbies & Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <Card key={index} className="p-6 text-center hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 bg-muted rounded-full">
                    <IconComponent className={`h-6 w-6 ${hobby.color}`} />
                  </div>
                  <span className="text-sm font-medium text-center leading-tight">
                    {hobby.name}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;