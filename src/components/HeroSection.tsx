import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profileImage from '@/assets/gibin-profile.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 portfolio-section text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <Card className="inline-block p-2 shadow-elegant">
              <img
                src={profileImage}
                alt="Gibin Mathew - QA Test Engineer"
                className="w-48 h-48 rounded-xl object-cover mx-auto"
              />
            </Card>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Gibin</span> — a QA Engineer
            <br />
            building trust through <span className="text-gradient">tested software</span>
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
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Professional Summary Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Manual Testing',
              'Selenium Automation',
              'Healthcare Domain',
              'Agile Methodology',
              'SQL Validation',
              'Quality Assurance'
            ].map((tag) => (
              <span
                key={tag}
                className="skill-badge"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
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