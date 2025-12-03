import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/MetricCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { 
  TrendingUp, 
  Users, 
  Zap, 
  Target, 
  Award,
  Clock,
  Database,
  Rocket,
  Mail,
  Linkedin,
  FileText,
  ArrowRight,
  Sparkles,
  Brain,
  BarChart3
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container-custom px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-primary"
            >
              Jonathan Koffel
            </motion.div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("work")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Work
              </button>
              <button onClick={() => scrollToSection("expertise")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Expertise
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </button>
              <Button onClick={() => scrollToSection("contact")} size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        </div>
        
        <div className="container-custom px-4 md:px-8 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Product Leader Transforming Healthcare Through{" "}
              <span className="text-accent">Emerging Technology</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              I bridge complex technology and healthcare needs—delivering measurable impact through shipped products 
              that improve patient outcomes and operational efficiency
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
              >
                Let's Discuss Your Product Challenge
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection("work")}
                className="text-base px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View My Work ↓
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <MetricCard
                value="200%"
                label="Pharmacy Conversion Increase"
                icon={TrendingUp}
                variant="highlight"
                delay={0.2}
              />
              <MetricCard
                value="$20M"
                label="Budget Managed"
                icon={Target}
                variant="highlight"
                delay={0.3}
              />
              <MetricCard
                value="50%"
                label="Reduction in Disenrollments"
                icon={Award}
                variant="highlight"
                delay={0.4}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground"
          >
            Proven Impact
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard value="20+" label="Developers & Architects Led" icon={Users} delay={0.1} />
            <MetricCard value="3" label="Products Shipped (0-to-1)" icon={Rocket} delay={0.2} />
            <MetricCard value="66%" label="Faster Registration Time" icon={Clock} delay={0.3} />
            <MetricCard value="Top 1%" label="Research Citation Score" icon={Award} delay={0.4} />
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering measurable outcomes through strategic product leadership and emerging technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <CaseStudyCard
              title="Pharmacy Conversion Optimization"
              challenge="Low pharmacy conversion rates impacting patient medication adherence"
              approach="Led cross-functional team through rapid prototyping, customer experimentation, and data-driven iteration using Agile delivery"
              impact="200% increase in pharmacy conversion rates, improved patient medication access"
              tags={["Product Strategy", "Healthcare UX", "Data Analytics"]}
              delay={0.1}
            />
            <CaseStudyCard
              title="Patient Registration Transformation"
              challenge="Complex, time-consuming patient registration process creating friction"
              approach="0-to-1 product development from concept through launch, partnering with engineering to translate technical requirements into user-centered design"
              impact="66% reduction in form completion time, improved patient experience and operational efficiency"
              tags={["0-to-1 Development", "Patient Experience", "Process Optimization"]}
              delay={0.2}
            />
            <CaseStudyCard
              title="Enterprise AI Strategy"
              challenge="Organization needed systematic approach to identify and prioritize generative AI opportunities"
              approach="Led enterprise-wide AI opportunity assessment, developed stage-gating and valuation frameworks, presented strategic roadmap to C-suite"
              impact="Established clear AI strategy, secured executive buy-in, created foundation for $20M+ in AI investments"
              tags={["Executive Leadership", "Emerging Technology", "Strategic Planning"]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Expertise & Capabilities */}
      <section id="expertise" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Add Value</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                <Zap className="w-6 h-6 text-accent" />
                Product Leadership
              </h3>
              <ul className="space-y-4">
                {[
                  "Healthcare Product Management (enterprise-scale, patient-facing)",
                  "0-to-1 Product Development (concept through launch)",
                  "Cross-Functional Team Leadership",
                  "Agile/SAFe Methodologies & Continuous Delivery",
                  "Budget Management & Vendor Relations"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                Unique Differentiators
              </h3>
              <ul className="space-y-4">
                {[
                  "Emerging Technology Strategy (AI/ML, VR/AR)",
                  "Evidence-Based Practice & Research Methods",
                  "Healthcare Domain Expertise",
                  "Technical-to-Business Translation",
                  "Data-Driven Decision Making"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Brain className="w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-bold">Published Research & Industry Impact</h2>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Co-authored PRISMA-S: An official extension for reporting search strategies in systematic reviews
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">Top 1%</div>
                  <div className="text-sm opacity-90">Altmetric Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">119</div>
                  <div className="text-sm opacity-90">Citations (First 12 Months)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">44,000+</div>
                  <div className="text-sm opacity-90">Global Views</div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-lg opacity-90">
                5 published healthcare systematic reviews as co-author<br />
                20+ systematic reviews with contributed literature searches
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/20 text-accent-foreground hover:bg-white/20"
                onClick={() => window.open("https://pubmed.ncbi.nlm.nih.gov/?term=koffel+jb", "_blank")}
              >
                <FileText className="mr-2 h-5 w-5" />
                View Publications on PubMed
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Research to Product Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A unique journey combining evidence-based research, emerging technology innovation, and enterprise product delivery
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Lead Product Manager",
                description: "Enterprise AI, $20M budget, 20+ team members, shipped products",
                icon: Rocket
              },
              {
                title: "Director of Innovation",
                description: "Led 7 staff, $15M innovation projects, emerging tech strategy",
                icon: Target
              },
              {
                title: "Emerging Technology Strategist",
                description: "VR/AR labs, makerspaces, innovation programs",
                icon: Zap
              },
              {
                title: "Academic Health Sciences Librarian",
                description: "Evidence-based research and clinical support",
                icon: Database
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Philosophy */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Drives My Work</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I believe the best products sit at the intersection of deep domain expertise, emerging technology potential, 
                and measurable customer impact. My unique background—from evidence-based research through hands-on innovation 
                to enterprise product delivery—gives me a rare ability to evaluate emerging technologies critically and turn 
                the promising ones into shipped products.
              </p>

              <p>
                I excel at demystifying complex topics and building bridges between technical teams and business stakeholders. 
                Whether presenting to C-suite executives or collaborating with developers, I translate effectively across 
                audiences and ensure alignment with organizational priorities.
              </p>

              <p>
                My approach is always evidence-based and outcome-focused. I use rapid prototyping, customer experimentation, 
                and data-driven analysis to validate product-market fit and optimize performance.
              </p>
            </div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-secondary rounded-lg p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-center">Credentials & Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Certified SAFe® 6 Product Owner/Product Manager",
                  "Certified SAFe® Agilist",
                  "Artificial Intelligence: Business Strategy Certification",
                  "AI Agents Fundamentals",
                  "MSI, Library and Information Science - University of Michigan"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-lg mb-8 opacity-90">
              I'm interested in product leadership opportunities, strategic advisory roles, and speaking engagements 
              in healthcare technology and emerging tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                variant="outline"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
                onClick={() => window.location.href = "mailto:jbkoffel@gmail.com"}
              >
                <Mail className="mr-2 h-5 w-5" />
                jbkoffel@gmail.com
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-accent text-accent-foreground hover:bg-accent/90 border-0"
                onClick={() => window.open("https://linkedin.com/in/jbkoffel", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </div>

            <p className="text-sm opacity-75 flex items-center justify-center gap-2">
              <span>📍</span> Santa Cruz, California
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container-custom px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Jonathan Koffel. Built with passion for healthcare innovation.
            </p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => window.open("https://linkedin.com/in/jbkoffel", "_blank")}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                LinkedIn
              </button>
              <button 
                onClick={() => window.location.href = "mailto:jbkoffel@gmail.com"}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Email
              </button>
              <button 
                onClick={() => window.open("https://pubmed.ncbi.nlm.nih.gov/?term=koffel+jb", "_blank")}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Publications
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
