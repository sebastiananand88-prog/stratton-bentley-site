import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import BookingModal from "@/components/BookingModal";
import { 
  Building2, 
  Users, 
  Search, 
  Layout, 
  Mail, 
  Bot, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  MapPin, 
  FileText, 
  Menu, 
  X,
  Sparkles,
  Award,
  Zap,
  Activity,
  Calendar,
  Megaphone,
  TrendingUp,
  ExternalLink,
  MousePointerClick,
  Target,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  // Asset URLs from image generation
  const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663402750534/jKcSiGLjXcpLnLKBUxsV6Q/premium_boutique_optician-jo235CBeuPo5ymZwvCGkeQ.webp";
  const octScannerImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663402750534/jKcSiGLjXcpLnLKBUxsV6Q/clinical_oct_scanner-WAXpNH24dQpdgPSoeFyzwm.webp";
  const chromagenImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663402750534/jKcSiGLjXcpLnLKBUxsV6Q/chromagen_visual_stress-DMiXahvqodjEbf3EbXJWvK.webp";

  const navigationItems = [
    { id: "overview", label: "Overview", icon: Building2 },
    { id: "competitors", label: "Competitor Intelligence", icon: Users },
    { id: "seo", label: "Local SEO & Content", icon: Search },
    { id: "redesign", label: "Redesign & Roadmap", icon: Layout },
    { id: "funnels", label: "Lead Generation", icon: Mail },
    { id: "ai", label: "AI Opportunities", icon: Bot },
    { id: "paid-social", label: "Paid Social Intel", icon: Megaphone },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary/30 selection:text-primary flex flex-col">
      
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
          <div className="flex flex-col shrink-0 min-w-0">
            <span className="font-serif text-base lg:text-lg font-bold tracking-tight text-primary whitespace-nowrap">
              STRATTON & BENTLEY
            </span>
            <span className="text-[8px] uppercase tracking-[0.15em] text-secondary font-semibold whitespace-nowrap mt-0.5 hidden sm:block">
              Growth Audit
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navigationItems.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium tracking-wide transition-all duration-200 whitespace-nowrap ${
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Call to Action */}
          <div className="hidden lg:flex items-center shrink-0">
            <a 
              href="/Stratton_Bentley_Audit_Report.pdf" 
              download
              className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-200 shadow-sm whitespace-nowrap"
            >
              <FileText className="w-3 h-3" />
              Download PDF
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-background border-b border-primary/10 px-6 py-4 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-3 transition-all ${
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-primary/10 flex flex-col gap-2">
              <a 
                href="/Stratton_Bentley_Audit_Report.pdf" 
                download
                className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 py-3 rounded-lg text-sm font-semibold tracking-wide"
              >
                <FileText className="w-4 h-4" />
                Download PDF Report
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 lg:py-32">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img 
            src={heroImage} 
            alt="Boutique Optician Storefront" 
            className="w-full h-full object-cover object-center scale-105 animate-pulse"
            style={{ animationDuration: "10s" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Exclusive Growth Audit
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
              Transitioning to a <span className="text-secondary italic">Premium, Boutique</span> Independent Brand
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Prepared specifically for **Jaspal Chaggar**, owner of Stratton Opticians (Billericay) and Bentley Opticians (Leigh-on-Sea). A strategic, actionable roadmap to capture the affluent Essex private patient market.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => setActiveTab("competitors")}
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-secondary/10"
              >
                Explore Competitors
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setActiveTab("ai")}
                className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/20 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all"
              >
                View AI Opportunities
              </button>
              <button 
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center gap-2 bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-secondary/40 text-secondary px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book Demo Appointment
              </button>
            </div>
          </div>
          
          {/* Visual Highlight Card */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10 bg-background/5 backdrop-blur-sm p-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img 
                  src={heroImage} 
                  alt="Luxury Eyewear Display" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-2 text-left">
                <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">The Vision</p>
                <h4 className="font-serif text-lg font-semibold">"No Ordinary Optician"</h4>
                <p className="text-xs text-primary-foreground/70 leading-relaxed">
                  Moving from standard "high street" commodity eye care to an ultra-premium, design-led retail and clinical styling experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-16 w-full">
        
        {/* Navigation Tabs (Sync with Header) */}
        <div className="hidden lg:flex border-b border-primary/10 mb-12">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`pb-4 px-6 font-serif text-base font-medium tracking-wide border-b-2 transition-all flex items-center gap-2 -mb-[2px] ${
                  activeTab === item.id
                    ? "border-secondary text-primary font-semibold"
                    : "border-transparent text-muted-foreground hover:text-primary"
                }`}
              >
                <Icon className="w-4 h-4 text-secondary" />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Switching */}
        <div className="space-y-16">
          
          {/* Tab 1: Overview & Baseline */}
          {activeTab === "overview" && (
            <div className="space-y-12 animate-in fade-in duration-300">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-secondary text-secondary">Section 1</Badge>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Prospect Overview</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                    The Stratton Opticians Baseline Audit
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    An in-depth analysis of the current Stratton Opticians digital footprint reveals a clear mismatch between the owner’s vision of a premium, boutique brand and the actual online patient experience. While the storefront is physically impressive, the digital front door introduces severe friction points.
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-serif text-lg font-semibold text-primary">Key Gaps Identified:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm text-muted-foreground">
                        <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        <span><strong>The Broken Booking Journey:</strong> The "Book an Appointment" form is a static contact form. In 2026, premium private patients expect real-time API booking. Delaying booking confirmation by 12-24 hours leads to massive patient drop-off.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-muted-foreground">
                        <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        <span><strong>Missing Service Authority:</strong> High-value specialist services like 3D OCT scans and Visual Stress Assessments are relegated to simple bullet points, severely limiting SEO and clinical positioning.</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm text-muted-foreground">
                        <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        <span><strong>Static Trust Signals:</strong> Google Reviews are displayed as static, unlinked images rather than a dynamic, live-updated trust widget, raising authenticity questions.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <Card className="border-primary/10 shadow-xl shadow-primary/5 bg-card">
                    <CardHeader className="bg-primary/5 border-b border-primary/5 text-left">
                      <CardTitle className="font-serif text-primary text-xl">The Broken Booking Funnel</CardTitle>
                      <CardDescription>Visualizing the current friction points causing drop-offs</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <div className="relative pl-6 border-l-2 border-dashed border-primary/20 space-y-6 text-left">
                        <div className="relative">
                          <div className="absolute -left-[31px] top-0.5 bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">1</div>
                          <h5 className="font-semibold text-sm">Patient Lands on Website</h5>
                          <p className="text-xs text-muted-foreground">Patient searches for premium eye care or local optician and lands on Stratton.</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[31px] top-0.5 bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">2</div>
                          <h5 className="font-semibold text-sm">Sees Basic Service List</h5>
                          <p className="text-xs text-muted-foreground">Services are unlinked. No details on OCT scans, Dry Eye clinics, or bespoke styling.</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[31px] top-0.5 bg-destructive text-destructive-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">3</div>
                          <h5 className="font-semibold text-sm text-destructive">Static Request Form</h5>
                          <p className="text-xs text-muted-foreground">Patient clicks "Book Appointment" and is confronted with a generic form asking for preferred times.</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[31px] top-0.5 bg-destructive text-destructive-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">4</div>
                          <h5 className="font-semibold text-sm text-destructive">Friction & Abandonment</h5>
                          <p className="text-xs text-muted-foreground">Realizing they must wait for a callback, the patient abandons the site and books with a competitor offering live calendar slots.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Website Strengths & Weaknesses Table */}
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-serif font-bold text-primary">Strategic Baseline Analysis</h3>
                <div className="overflow-x-auto rounded-xl border border-primary/10">
                  <table className="w-full text-left border-collapse bg-card">
                    <thead>
                      <tr className="bg-primary text-primary-foreground font-serif">
                        <th className="p-4 text-sm font-semibold">Website Feature</th>
                        <th className="p-4 text-sm font-semibold">Current Strengths</th>
                        <th className="p-4 text-sm font-semibold">Critical Weaknesses & Gaps</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/10 text-sm">
                      <tr>
                        <td className="p-4 font-semibold text-primary">Design & UX</td>
                        <td className="p-4 text-muted-foreground">Clean, uncluttered layout; professional typography; uses high-quality images of Billericay storefront.</td>
                        <td className="p-4 text-muted-foreground">Feels dated and clinical rather than luxury/boutique. The dark grey header and basic color scheme lack the warmth of premium brands.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-primary">Mobile Performance</td>
                        <td className="p-4 text-muted-foreground">Basic responsive layout is present.</td>
                        <td className="p-4 text-muted-foreground">Poor loading speeds on mobile devices. Heavy, uncompressed images severely degrade mobile performance.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-primary">SEO Structure</td>
                        <td className="p-4 text-muted-foreground">Basic keyword optimization for "Opticians in Billericay" on the homepage.</td>
                        <td className="p-4 text-muted-foreground">No dedicated service pages for specialist offerings. High-value search terms are completely unrepresented in site architecture.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-primary">Booking Flow</td>
                        <td className="p-4 text-muted-foreground">Simple contact form exists on the "Book an Appointment" page.</td>
                        <td className="p-4 text-muted-foreground">Completely broken user journey. Static request form requires manual staff follow-up, causing high patient drop-off.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Competitor Intelligence */}
          {activeTab === "competitors" && (
            <div className="space-y-12 animate-in fade-in duration-300">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-secondary text-secondary">Section 2</Badge>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Direct Competitor Intelligence</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  How the Top Essex Competitors Position Themselves
                </h2>
                <p className="text-muted-foreground max-w-3xl leading-relaxed">
                  To capture the affluent private patient market, we analyzed three top-performing independent opticians in comparable regional markets. These practices represent the benchmark of digital experience and brand positioning required to win.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                
                {/* Competitor 1 */}
                <Card className="border-primary/10 shadow-lg hover:shadow-2xl hover:border-secondary/50 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <CardHeader className="bg-primary/5 border-b border-primary/5">
                      <div className="flex justify-between items-start">
                        <CardTitle className="font-serif text-primary text-xl">Templeman Opticians</CardTitle>
                        <Badge className="bg-secondary text-secondary-foreground text-[10px]">Brentwood</Badge>
                      </div>
                      <CardDescription className="text-xs">Ultra-Premium Luxury Brand Association</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-semibold text-xs uppercase tracking-wider text-secondary">The Strategy</h5>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Utilizes a sophisticated dark color palette and elegant serif typography. They position around "Protect Your Vision, Perfect Your Look," showcasing high-end brands like <strong>Chanel, Lindberg, Prada, and Tom Ford</strong> prominently with official brand logos.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-xs uppercase tracking-wider text-secondary">Booking Experience</h5>
                        <p className="text-xs text-muted-foreground">
                          Uses a modern, interactive multi-step booking request form (Adult, Child, Contact Lenses) with an integrated date picker.
                        </p>
                      </div>
                    </CardContent>
                  </div>
                  <div className="p-6 bg-primary/5 border-t border-primary/5 rounded-b-xl space-y-2">
                    <h5 className="font-semibold text-xs text-primary flex items-center gap-1">
                      <Zap className="w-3 h-3 text-secondary" /> Outperformance Opportunity
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Templeman's booking system is still a "request form." Stratton can win by implementing a <strong>live, real-time booking calendar API</strong> (MySight/Acuitas) for instant confirmation.
                    </p>
                  </div>
                </Card>

                {/* Competitor 2 */}
                <Card className="border-primary/10 shadow-lg hover:shadow-2xl hover:border-secondary/50 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <CardHeader className="bg-primary/5 border-b border-primary/5">
                      <div className="flex justify-between items-start">
                        <CardTitle className="font-serif text-primary text-xl">James Bryan Opticians</CardTitle>
                        <Badge className="bg-secondary text-secondary-foreground text-[10px]">Chelmsford</Badge>
                      </div>
                      <CardDescription className="text-xs">Clinical Excellence & Seamless Tech</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-semibold text-xs uppercase tracking-wider text-secondary">The Strategy</h5>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Focuses heavily on their 20+ year heritage, trust, and advanced clinical technology. They feature highly optimized, dedicated landing pages for core clinical offerings, such as their <strong>OCT Eye Scan</strong>.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-xs uppercase tracking-wider text-secondary">Booking Experience</h5>
                        <p className="text-xs text-muted-foreground">
                          Seamless, live online booking integration powered by <strong>MySight</strong>. Patients can select appointment types and optometrists, booking a live time slot instantly.
                        </p>
                      </div>
                    </CardContent>
                  </div>
                  <div className="p-6 bg-primary/5 border-t border-primary/5 rounded-b-xl space-y-2">
                    <h5 className="font-semibold text-xs text-primary flex items-center gap-1">
                      <Zap className="w-3 h-3 text-secondary" /> Outperformance Opportunity
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Their design, while clean, is somewhat corporate and lacks a "boutique, luxury eyewear" feel. Stratton can win on the <strong>retail styling experience</strong> by emphasizing a personalized "Spectacle Styling Consultation."
                    </p>
                  </div>
                </Card>

                {/* Competitor 3 */}
                <Card className="border-primary/10 shadow-lg hover:shadow-2xl hover:border-secondary/50 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <CardHeader className="bg-primary/5 border-b border-primary/5">
                      <div className="flex justify-between items-start">
                        <CardTitle className="font-serif text-primary text-xl">Chelmer Village Opticians</CardTitle>
                        <Badge className="bg-secondary text-secondary-foreground text-[10px]">Chelmsford</Badge>
                      </div>
                      <CardDescription className="text-xs">Clinical Specialist & Pediatric Focus</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-semibold text-xs uppercase tracking-wider text-secondary">The Strategy</h5>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Exceptional service page architecture. They have dedicated pages for <strong>Myopia Management</strong> (Essilor Stellest, HOYA MiYOSMART, Zeiss MyoCare), Orthokeratology, and Dyslexia/Visual Stress.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-xs uppercase tracking-wider text-secondary">Booking Experience</h5>
                        <p className="text-xs text-muted-foreground">
                          Uses a standard booking request form, backed by a strong call to action to call the practice directly. Showcase <strong>230+ 5-star Google Reviews</strong> dynamically.
                        </p>
                      </div>
                    </CardContent>
                  </div>
                  <div className="p-6 bg-primary/5 border-t border-primary/5 rounded-b-xl space-y-2">
                    <h5 className="font-semibold text-xs text-primary flex items-center gap-1">
                      <Zap className="w-3 h-3 text-secondary" /> Outperformance Opportunity
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Their design is heavily clinical and lacks luxury retail appeal. Stratton can easily capture the premium eyewear market by combining Chelmer's clinical depth with an ultra-premium, boutique design aesthetic.
                    </p>
                  </div>
                </Card>

              </div>
            </div>
          )}

          {/* Tab 3: Local SEO & Content */}
          {activeTab === "seo" && (
            <div className="space-y-12 animate-in fade-in duration-300">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-secondary text-secondary">Section 3</Badge>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Local SEO & Content Opportunity</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                    The Hub-and-Spoke SEO Architecture
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Google cannot rank a website for high-value search terms like "Dry Eye Treatment Leigh-on-Sea" or "Visual Stress Assessment Billericay" if those services only appear as single bullet points. We recommend moving to a <strong>hub-and-spoke SEO architecture</strong>, creating 8 dedicated, high-performance landing pages.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <h5 className="font-serif font-semibold text-primary mb-1">1. OCT Eye Scans Page</h5>
                      <p className="text-xs text-muted-foreground">Targeting: "OCT Eye Scan Billericay" / "Advanced Eye Test Essex". Highlight 3D retinal scanning.</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <h5 className="font-serif font-semibold text-primary mb-1">2. Visual Stress Assessments</h5>
                      <p className="text-xs text-muted-foreground">Targeting: "Visual Stress Assessment Billericay". Highlight ChromaGen tinted lenses.</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <h5 className="font-serif font-semibold text-primary mb-1">3. Dry Eye Services</h5>
                      <p className="text-xs text-muted-foreground">Targeting: "Dry Eye Treatment Leigh-on-Sea". Focus on meibomian gland dysfunction.</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <h5 className="font-serif font-semibold text-primary mb-1">4. Emergency Appointments</h5>
                      <p className="text-xs text-muted-foreground">Targeting: "Emergency Optician Billericay". Direct, same-day urgency landing page.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/10 relative aspect-video">
                    <img 
                      src={octScannerImage} 
                      alt="Clinical OCT Scanner" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-primary border border-primary/10 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-secondary" /> Clinical Technology Page Highlight
                    </div>
                  </div>
                  
                  <Card className="border-primary/10 shadow-lg bg-card">
                    <CardHeader className="bg-primary/5 border-b border-primary/5 text-left">
                      <CardTitle className="font-serif text-primary text-lg">Google Business Profile (GBP) Checklist</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3 text-left">
                      <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                        <span>Ensure 100% NAP (Name, Address, Phone) consistency across both locations.</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                        <span>Add all 8 specialist services manually to the GBP Services Menu.</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                        <span>Upload high-resolution, geo-tagged photos of boutique interiors and diagnostic tech.</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 3 Content Pillars */}
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-serif font-bold text-primary">Three Premium Content Pillars</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-card border border-primary/10 rounded-xl space-y-3">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-secondary">
                      <Award className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-primary">1. The Art of Eyewear Styling</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Frame selection is not transactional; it is an art form. We will create content around "How to choose frames for your face shape," "The history of handcrafted eyewear," and "Behind the design of Silhouette frames."
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-primary/10 rounded-xl space-y-3">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-secondary">
                      <Activity className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-primary">2. The Science of Sight</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Advanced clinical technology protects your quality of life. Educate patients on "What happens during a 3D OCT scan?", "The parent's guide to Myopia Management," and "Why dry eyes occur and how to treat them."
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-primary/10 rounded-xl space-y-3">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-secondary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-primary">3. Essex Lifestyle & Community</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Celebrating local heritage, active lifestyles, and community health. Create topics like "Protecting your eyes during outdoor activities in Essex" and "Spotlight on independent businesses in Billericay."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Redesign & Technical Roadmap */}
          {activeTab === "redesign" && (
            <div className="space-y-12 animate-in fade-in duration-300">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-secondary text-secondary">Section 4</Badge>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Redesign & Roadmap</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                    The Technical & Visual Rebuild
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To transition to a premium brand, the technical infrastructure must match the visual aesthetic. We recommend a complete rebuild of the website on modern, managed WordPress hosting, replacing the restrictive IONOS setup.
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-serif text-lg font-semibold text-primary">Why Move Away from IONOS?</h4>
                    <div className="grid sm:grid-cols-2 gap-4 text-xs text-muted-foreground">
                      <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/10 space-y-2">
                        <span className="font-bold text-destructive flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> The Problem with IONOS
                        </span>
                        <p>Slow server response times (TTFB), poor resource allocation leading to slow mobile speeds, and lack of specialized WordPress staging environments.</p>
                      </div>
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 space-y-2">
                        <span className="font-bold text-primary flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-secondary" /> Managed Hosting (Kinsta / WP Engine)
                        </span>
                        <p>Google Cloud infrastructure, built-in global CDN, automatic image optimization, and staging environments. Guarantees lightning-fast mobile speeds.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-6 text-left">
                  <Card className="border-primary/10 shadow-xl bg-card">
                    <CardHeader className="bg-primary/5 border-b border-primary/5">
                      <CardTitle className="font-serif text-primary text-lg">Online Booking Integration Options</CardTitle>
                      <CardDescription>Replacing the static form with real-time scheduling</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4 text-xs">
                      <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <h5 className="font-bold text-primary flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> Option A: MySight Integration (Recommended)
                        </h5>
                        <p className="text-muted-foreground mt-1">A dedicated patient portal and online booking widget built specifically for independent opticians. Integrates directly with your in-practice PMS diary.</p>
                      </div>
                      <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <h5 className="font-bold text-primary flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> Option B: Acuitas 3 OmniChannel (Ocuco)
                        </h5>
                        <p className="text-muted-foreground mt-1">An enterprise-grade, all-in-one optical software platform. Integrates clinical records, retail inventory, and online booking across both Billericay & Leigh-on-Sea locations.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Lead Generation Funnels */}
          {activeTab === "funnels" && (
            <div className="space-y-12 animate-in fade-in duration-300">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-secondary text-secondary">Section 5</Badge>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Lead Generation Funnels</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  Dedicated Landing Pages for Paid Traffic
                </h2>
                <p className="text-muted-foreground max-w-3xl leading-relaxed">
                  To actively generate new patient leads independently of organic search, we recommend deploying dedicated, high-converting landing pages separate from the main informational website. These funnels are designed to capture contact details using highly targeted offers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-left">
                
                {/* Funnel 1 */}
                <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-video rounded-t-xl overflow-hidden">
                    <img 
                      src={octScannerImage} 
                      alt="Dry Eye Clinic" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-primary-foreground">
                      <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Paid Search Funnel</span>
                      <h4 className="font-serif text-lg font-bold">The Premium "Dry Eye Relief" Program</h4>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4 text-sm">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">Target Audience</span>
                      <p className="text-xs text-muted-foreground">Adults aged 45+ in Essex suffering from chronic dry, gritty, or watery eyes.</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">The Hook</span>
                      <p className="text-xs text-muted-foreground">"Stop struggling with dry eyes. Experience our clinical 3-step dry eye assessment and get a personalized relief plan."</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">The Offer</span>
                      <p className="text-xs text-muted-foreground">A comprehensive Dry Eye Assessment for a fixed fee (e.g., £75), including tear-film osmolarity testing, meibomian gland imaging, and a complimentary premium dry eye starter kit.</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">Conversion Goal</span>
                      <p className="text-xs text-muted-foreground">Direct booking of the assessment slot or capturing name, email, and phone number to download a free guide: "The Essex Guide to Chronic Dry Eye Relief."</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Funnel 2 */}
                <Card className="border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-video rounded-t-xl overflow-hidden">
                    <img 
                      src={heroImage} 
                      alt="Bespoke Styling" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-primary-foreground">
                      <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Social Media Funnel</span>
                      <h4 className="font-serif text-lg font-bold">The "Luxury Eyewear Styling" Experience</h4>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4 text-sm">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">Target Audience</span>
                      <p className="text-xs text-muted-foreground">Affluent professionals and fashion-conscious individuals in Billericay and Leigh-on-Sea.</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">The Hook</span>
                      <p className="text-xs text-muted-foreground">"Stop guessing which glasses suit you. Book a private, 45-minute bespoke eyewear styling consultation."</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">The Offer</span>
                      <p className="text-xs text-muted-foreground">A complimentary Bespoke Eyewear Styling Consultation (normally £50) with a certified dispensing optician, including a personalized color analysis and £50 credit towards any premium frame purchase.</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">Conversion Goal</span>
                      <p className="text-xs text-muted-foreground">Booking a specific time slot for the styling consultation.</p>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          )}

          {/* Tab 6: AI Opportunities */}
          {activeTab === "ai" && (
            <div className="space-y-12 animate-in fade-in duration-300">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-secondary text-secondary">Section 6</Badge>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">AI Implementation Opportunities</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                    AI Solutions to Scale Operations & Bookings
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Integrating artificial intelligence into Stratton and Bentley Opticians can dramatically increase revenue, save staff time, and reduce operational costs. We have identified four highly specific, actionable AI opportunities.
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-serif text-lg font-semibold text-primary">Specific AI Workflows:</h4>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="font-serif text-primary text-base hover:text-secondary">
                          1. AI Patient Triage & Booking Assistant
                        </AccordionTrigger>
                        <AccordionContent className="text-xs text-muted-foreground leading-relaxed space-y-2">
                          <p><strong>Impact:</strong> MAKES MONEY & SAVES TIME</p>
                          <p>A 24/7 intelligent voice and text assistant (using platforms like <strong>ViveoAI</strong> or <strong>GoHighLevel AI</strong>) integrated into the website and phone system. It answers patient queries, explains advanced eye tests (like OCT), and books appointments directly into your diary.</p>
                          <p className="p-2 bg-primary/5 rounded border border-primary/10 italic">Workflow: [Patient Calls Out-of-Hours] ➔ [AI Assistant Answers] ➔ [Triage: "I have sudden red eye"] ➔ [AI Flags as Emergency & Sends Direct Booking Link]</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="font-serif text-primary text-base hover:text-secondary">
                          2. Automated Review Acquisition & Response System
                        </AccordionTrigger>
                        <AccordionContent className="text-xs text-muted-foreground leading-relaxed space-y-2">
                          <p><strong>Impact:</strong> MAKES MONEY</p>
                          <p>Automatically sending personalized, SMS-based review requests post-appointment and using AI to write professional, keyword-rich responses to Google Reviews. Built on GoHighLevel or Birdeye AI Agents.</p>
                          <p><strong>Estimated Impact:</strong> Boosts Google Review volume by <strong>40-60% within 90 days</strong>, dramatically improving local Map Pack rankings.</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="font-serif text-primary text-base hover:text-secondary">
                          3. AI-Driven Local SEO Content Engine
                        </AccordionTrigger>
                        <AccordionContent className="text-xs text-muted-foreground leading-relaxed space-y-2">
                          <p><strong>Impact:</strong> SAVES MONEY & MAKES MONEY</p>
                          <p>Utilizing specialized AI writing tools (Jasper AI / SurferSEO AI) to generate highly optimized, medically accurate local service pages and blog posts, polished by your clinical team.</p>
                          <p><strong>Estimated Impact:</strong> Reduces the cost of outsourcing copywriting by <strong>80%</strong> (saving £2,000 - £4,000 in agency fees).</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger className="font-serif text-primary text-base hover:text-secondary">
                          4. AI Patient Recall & Reactivation Campaigns
                        </AccordionTrigger>
                        <AccordionContent className="text-xs text-muted-foreground leading-relaxed space-y-2">
                          <p><strong>Impact:</strong> SAVES MONEY & MAKES MONEY</p>
                          <p>Using AI to analyze patient databases, identify patients who are overdue for eye exams, and send highly personalized, conversational SMS/email recall campaigns that feel human.</p>
                          <p><strong>Estimated Impact:</strong> Reactivates <strong>5-10% of dormant patients</strong>, generating immediate recurring revenue without cold ad spend.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/10 relative aspect-video">
                    <img 
                      src={chromagenImage} 
                      alt="AI Visual Stress Assessment" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-primary border border-primary/10 flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-secondary animate-bounce" /> Smart Clinical Workflows
                    </div>
                  </div>

                  <Card className="border-primary/10 shadow-lg bg-card">
                    <CardHeader className="bg-primary/5 border-b border-primary/5 text-left">
                      <CardTitle className="font-serif text-primary text-lg">AI Impact Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4 text-xs text-left">
                      <div className="flex justify-between items-center border-b border-primary/5 pb-2">
                        <span className="font-semibold text-primary">Voice/SMS Assistant</span>
                        <Badge className="bg-secondary text-secondary-foreground">Makes Money & Saves Time</Badge>
                      </div>
                      <div className="flex justify-between items-center border-b border-primary/5 pb-2">
                        <span className="font-semibold text-primary">Auto-Review Acquisition</span>
                        <Badge className="bg-secondary text-secondary-foreground">Makes Money</Badge>
                      </div>
                      <div className="flex justify-between items-center border-b border-primary/5 pb-2">
                        <span className="font-semibold text-primary">Local SEO Content Engine</span>
                        <Badge className="bg-secondary text-secondary-foreground">Saves Money & Makes Money</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-primary">Patient Reactivation Campaigns</span>
                        <Badge className="bg-secondary text-secondary-foreground">Saves Money & Makes Money</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Tab 7: Paid Social Intelligence */}
          {activeTab === "paid-social" && (
            <div className="space-y-12 animate-in fade-in duration-300">

              {/* Header */}
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-secondary text-secondary">Section 7</Badge>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Paid Social Intelligence</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  Who Is Running Facebook Ads — and What They're Doing
                </h2>
                <p className="text-muted-foreground max-w-3xl leading-relaxed">
                  A live audit of the Facebook Ad Library (May 2026) reveals 14 independent UK opticians currently running active paid social campaigns. The strategic patterns are clear — and the Essex market is completely uncontested.
                </p>
              </div>

              {/* Critical Finding Banner */}
              <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/30 flex items-start gap-4 text-left">
                <AlertTriangle className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-primary text-base">Critical Market Gap Identified</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>No independent optician in Essex is currently running Facebook ads for patient acquisition.</strong> The only Essex practice in the Ad Library is Patrick & Menzies in West Mersea — and they are running a recruitment ad, not a patient-facing campaign. Billericay and Leigh-on-Sea are completely uncontested on paid social. Stratton & Bentley could own the entire Essex independent optician paid social space right now with zero direct competition.
                  </p>
                </div>
              </div>

              {/* Ad Patterns Summary */}
              <div className="grid md:grid-cols-4 gap-4 text-left">
                <div className="p-5 bg-card border border-primary/10 rounded-xl space-y-2">
                  <div className="w-9 h-9 bg-primary/5 rounded-full flex items-center justify-center text-secondary">
                    <Target className="w-4 h-4" />
                  </div>
                  <h5 className="font-serif font-bold text-primary text-sm">Anti-Chain Hook</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">4 of 14 practices lead with "tired of chains?" messaging. Eye Club, Crowborough, Eyesite, and Stephen John all use this as their primary angle.</p>
                </div>
                <div className="p-5 bg-card border border-primary/10 rounded-xl space-y-2">
                  <div className="w-9 h-9 bg-primary/5 rounded-full flex items-center justify-center text-secondary">
                    <Award className="w-4 h-4" />
                  </div>
                  <h5 className="font-serif font-bold text-primary text-sm">Heritage & Trust</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">Cecil Amey (since 1924), Welbourne (1933), and Geoff Steven (1946) all lead with founding year as the core trust signal.</p>
                </div>
                <div className="p-5 bg-card border border-primary/10 rounded-xl space-y-2">
                  <div className="w-9 h-9 bg-primary/5 rounded-full flex items-center justify-center text-secondary">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h5 className="font-serif font-bold text-primary text-sm">Discount Hook</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">Eyesite's "£30 off if you tested elsewhere" prescription portability ad is the sharpest bottom-of-funnel play — directly converts Specsavers patients.</p>
                </div>
                <div className="p-5 bg-card border border-primary/10 rounded-xl space-y-2">
                  <div className="w-9 h-9 bg-primary/5 rounded-full flex items-center justify-center text-secondary">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h5 className="font-serif font-bold text-primary text-sm">Designer Brand Halo</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">Geoff Steven (Theo), Seen (Lapima), and Observatory (lool) use exclusive brand names to signal premium positioning without stating it directly.</p>
                </div>
              </div>

              {/* Competitor Ad Cards */}
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-serif font-bold text-primary">The 13 Independents Running Patient Acquisition Ads</h3>
                <div className="overflow-x-auto rounded-xl border border-primary/10">
                  <table className="w-full text-left border-collapse bg-card text-xs">
                    <thead>
                      <tr className="bg-primary text-primary-foreground font-serif">
                        <th className="p-3 font-semibold">Practice</th>
                        <th className="p-3 font-semibold">Location</th>
                        <th className="p-3 font-semibold">Running Since</th>
                        <th className="p-3 font-semibold">Primary Ad Angle</th>
                        <th className="p-3 font-semibold">CTA</th>
                        <th className="p-3 font-semibold">Format</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/10">
                      {[
                        { name: "Eye Club Opticians", location: "Caversham, Reading", since: "May 2026", angle: "Anti-chain, styling, 2-for-1 offer", cta: "Book Appointment", format: "Carousel (5 variants)" },
                        { name: "Crowborough Opticians", location: "East Sussex", since: "Feb 2026", angle: "Anti-chain, OCT scans, 1-on-1 care", cta: "Learn More", format: "Static image" },
                        { name: "Stephen John Eyecare", location: "UK (boutique)", since: "May 2026", angle: "Personalisation, boutique, anti-chain", cta: "Website", format: "Video carousel" },
                        { name: "Eyesite Opticians", location: "Halton", since: "May 2026", angle: "£30 off — prescription portability hook", cta: "Learn More", format: "Static (bold graphic)" },
                        { name: "Stotts Opticians", location: "Unsworth, Manchester", since: "May 2026", angle: "Luxury — \"does things differently\"", cta: "Book Now", format: "Video" },
                        { name: "Urquhart Opticians", location: "Ayrshire & Glasgow", since: "Mar 2026", angle: "Local pride, 11 practices, independence", cta: "Book Now", format: "Video" },
                        { name: "Geoff Steven & Sons", location: "Ponteland & Hexham", since: "May 2026", angle: "Designer brand (Theo), heritage 1946", cta: "Website", format: "Video" },
                        { name: "Cecil Amey Opticians", location: "Norfolk & Suffolk", since: "Jan 2026", angle: "Heritage (since 1924), hearing + eye", cta: "Learn More", format: "Advertorial (via EDP24)" },
                        { name: "Observatory The Opticians", location: "Muswell Hill, London", since: "May 2026", angle: "Luxury brand event (lool, 20% off)", cta: "Facebook Event", format: "Event promotion" },
                        { name: "Wardale Williams", location: "Sudbury, Suffolk", since: "May 2026", angle: "In-store event (WOLF brand day)", cta: "Facebook Event", format: "Event promotion" },
                        { name: "Seen Opticians", location: "UK (boutique)", since: "Active", angle: "New brand launch (Lapima)", cta: "In-store/online", format: "Video" },
                        { name: "Welbourne Opticians", location: "Lancaster", since: "Apr 2026", angle: "Heritage (since 1933), local awareness", cta: "Book Now", format: "Static image" },
                        { name: "Costspex Opticians", location: "Durham", since: "Feb 2026", angle: "Sale (£100 off), designer brands", cta: "Learn More", format: "Video (via Northern Echo)" },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-primary/[0.02]"}>
                          <td className="p-3 font-semibold text-primary">{row.name}</td>
                          <td className="p-3 text-muted-foreground">{row.location}</td>
                          <td className="p-3 text-muted-foreground">{row.since}</td>
                          <td className="p-3 text-muted-foreground">{row.angle}</td>
                          <td className="p-3"><Badge variant="outline" className="border-secondary text-secondary text-[10px]">{row.cta}</Badge></td>
                          <td className="p-3 text-muted-foreground">{row.format}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Ace & Tate Booking System Deep Dive */}
              <div className="grid lg:grid-cols-12 gap-10 items-start text-left">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-secondary text-secondary">Benchmark</Badge>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Ace & Tate Booking System Analysis</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    How the Best-in-Class Chain Books Appointments
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Ace & Tate's booking system at <span className="font-mono text-xs bg-primary/5 px-1 py-0.5 rounded">aceandtate.com/gb/book-appointment</span> is the gold standard independent opticians are being compared against. It is a fully custom-built, multi-step wizard — not a third-party widget — that delivers an experience most independents cannot match.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-serif font-semibold text-primary">The 4-Step Booking Flow:</h4>
                    <div className="relative pl-6 border-l-2 border-secondary/30 space-y-5">
                      <div className="relative">
                        <div className="absolute -left-[31px] top-0.5 bg-secondary text-secondary-foreground rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">1</div>
                        <h5 className="font-semibold text-sm text-primary">Location — Country + Store Selector</h5>
                        <p className="text-xs text-muted-foreground mt-1">Dropdown selects country (flag shown), then store. Immediately shows a "View on map" Google Maps link and a clear eligibility note: "Free with purchase, 16+ only." The live appointment summary panel on the right updates in real time.</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[31px] top-0.5 bg-secondary text-secondary-foreground rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">2</div>
                        <h5 className="font-semibold text-sm text-primary">Date & Time — Live Calendar with Availability Indicators</h5>
                        <p className="text-xs text-muted-foreground mt-1">A full interactive calendar renders with colour-coded availability: green dots for open days, orange for limited slots. Time slots appear below the calendar as pill buttons (e.g. "15:20"). The right panel updates instantly: "Wednesday, May 27, 2026 • 15:20." No page reload.</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[31px] top-0.5 bg-secondary text-secondary-foreground rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">3</div>
                        <h5 className="font-semibold text-sm text-primary">Personal Details — Email, Name, DOB, Phone</h5>
                        <p className="text-xs text-muted-foreground mt-1">Collects email, first name, last name, date of birth (with a reassuring note: "for compliance only, not stored"), and telephone with a country code dropdown. Clean, minimal form — no unnecessary fields.</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[31px] top-0.5 bg-secondary text-secondary-foreground rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">4</div>
                        <h5 className="font-semibold text-sm text-primary">Confirmation — Review & Confirm</h5>
                        <p className="text-xs text-muted-foreground mt-1">Final summary before committing. Instant confirmation — no "we'll call you back" delay. The patient leaves knowing their slot is locked.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 space-y-2">
                    <h5 className="font-semibold text-sm text-primary flex items-center gap-2">
                      <MousePointerClick className="w-4 h-4 text-secondary" /> Key UX Details Worth Copying
                    </h5>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      <li>• Persistent right-hand summary panel updates live as each step is completed — no uncertainty about what you've selected</li>
                      <li>• "Edit" links on completed steps allow going back without losing progress</li>
                      <li>• Breadcrumb progress indicator at top: Location → Date & Time → Personal Details → Confirmation</li>
                      <li>• Eye test positioned as free with purchase — the £25 fee is reimbursed as a gift code, removing price friction entirely</li>
                      <li>• Cookiebot consent banner uses Cybot — a GDPR compliance tool, not a booking system</li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <Card className="border-primary/10 shadow-xl bg-card">
                    <CardHeader className="bg-primary/5 border-b border-primary/5">
                      <CardTitle className="font-serif text-primary text-lg">What System Does Ace & Tate Use?</CardTitle>
                      <CardDescription>Technology stack behind their booking flow</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4 text-xs">
                      <div className="space-y-1">
                        <span className="font-bold text-secondary uppercase tracking-wider">Booking Engine</span>
                        <p className="text-muted-foreground">Custom-built proprietary system — not Calendly, Acuity, or a third-party widget. The flow is served from their own Next.js frontend with a bespoke API. This is a significant investment that independents cannot replicate directly.</p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-bold text-secondary uppercase tracking-wider">The Independent Alternative</span>
                        <p className="text-muted-foreground">For Stratton & Bentley, <strong>MySight</strong> (by Ocuco) or <strong>Acuitas 3</strong> replicates this experience at a fraction of the cost. Both integrate directly with the practice management diary and offer live slot selection — the exact functionality Ace & Tate built from scratch.</p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-bold text-secondary uppercase tracking-wider">The Gap Right Now</span>
                        <p className="text-muted-foreground">Stratton's current booking form is a static contact form requiring manual staff follow-up. Ace & Tate confirms a slot instantly. This single difference is responsible for the majority of patient drop-off at the booking stage.</p>
                      </div>
                      <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                        <p className="font-semibold text-primary">Recommendation</p>
                        <p className="text-muted-foreground mt-1">Implement MySight or Acuitas before running any paid social ads. Sending paid traffic to a static form is burning budget — every patient who clicks an ad and hits a "we'll call you back" form is lost revenue.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/10 shadow-lg bg-card">
                    <CardHeader className="bg-primary/5 border-b border-primary/5">
                      <CardTitle className="font-serif text-primary text-base">Recommended First Facebook Ad for Stratton</CardTitle>
                    </CardHeader>
                    <CardContent className="p-5 space-y-3 text-xs">
                      <div className="space-y-1">
                        <span className="font-bold text-secondary uppercase tracking-wider">Hook (first 3 seconds)</span>
                        <p className="text-muted-foreground italic">"Tired of feeling like just another number at Specsavers?"</p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-bold text-secondary uppercase tracking-wider">Body</span>
                        <p className="text-muted-foreground">At Stratton Opticians in Billericay, you get a private 1-on-1 eye test with hospital-grade 3D OCT scanning — not a 15-minute conveyor belt. Book your slot online in 60 seconds.</p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-bold text-secondary uppercase tracking-wider">CTA</span>
                        <p className="text-muted-foreground">Book Now → live calendar (MySight)</p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-bold text-secondary uppercase tracking-wider">Target Audience</span>
                        <p className="text-muted-foreground">Essex, 30–65, interests: healthcare, luxury goods, homeownership. Exclude: Specsavers/Vision Express employees.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Call to Action Section */}
        <section className="mt-24 p-8 md:p-12 rounded-2xl bg-primary text-primary-foreground relative overflow-hidden text-left border border-primary-foreground/10">
          <div className="absolute inset-0 opacity-5 mix-blend-overlay">
            <img 
              src={heroImage} 
              alt="Luxury Boutique Optician Storefront" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="relative z-10 max-w-3xl space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold">Ready to Elevate Your Practices?</h3>
            <p className="text-primary-foreground/80 text-sm md:text-base font-light leading-relaxed">
              This audit report is just the beginning. By implementing these clinical, visual, and technical changes, Stratton Opticians (Billericay) and Bentley Opticians (Leigh-on-Sea) can command the premium Essex market. Let's schedule a call to walk through the implementation plan.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all active:scale-[0.97]"
              >
                Book a Demo Appointment
                <ArrowRight className="w-4 h-4" />
              </button>
              <a 
                href="/Stratton_Bentley_Audit_Report.pdf" 
                download
                className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-primary-foreground/20 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all"
              >
                <FileText className="w-4 h-4" />
                Download Full PDF Audit
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Premium Footer */}
      <footer className="bg-primary text-primary-foreground/70 border-t border-primary-foreground/10 py-12 mt-auto text-left">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <span className="font-serif text-lg font-bold tracking-tight text-primary-foreground">
              STRATTON & BENTLEY
            </span>
            <p className="text-xs leading-relaxed text-primary-foreground/60 max-w-sm">
              Transitioning independent opticians from traditional high-street practices to premium, design-led clinical styling experiences.
            </p>
          </div>
          
          <div className="space-y-3">
            <h5 className="font-serif text-sm font-semibold text-primary-foreground">Locations</h5>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                Stratton Opticians: 14 The Pantiles, Queens Park Avenue, Billericay CM12 0UA
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                Bentley Opticians: Leigh-on-Sea, Essex
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-serif text-sm font-semibold text-primary-foreground">Growth Audit Report</h5>
            <p className="text-xs text-primary-foreground/60">
              Prepared for **Jaspal Chaggar** by Senior Growth Strategist. All rights reserved. &copy; 2026.
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
}
