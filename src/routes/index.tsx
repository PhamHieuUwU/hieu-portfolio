import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroVisual from "@/assets/profile.jpg";
import sampleTraTraiCay from "@/assets/sample-tra-trai-cay.png";
import sampleMatcha from "@/assets/sample-matcha.png";
import sampleTraSua from "@/assets/sample-tra-sua.png";
import sampleWorkshop from "@/assets/sample-workshop.png";
import sampleKickoff from "@/assets/sample-kickoff.png";
import sampleRecruitment from "@/assets/sample-recruitment.png";
import {
  Mail, Phone, MapPin, Linkedin, ArrowUpRight, Sparkles,
  Palette, Megaphone, ShoppingBag, Bot, Trophy, Users,
  Target, CheckCircle2, GraduationCap, Languages, X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "samples", label: "Work" },
  { id: "contact", label: "Contact" },
];

const HARD_SKILLS = [
  { icon: Megaphone, title: "Social Content", items: ["Content planning", "Hooks & captions", "Short-form video concepts", "Performance analysis"] },
  { icon: Palette, title: "Design", items: ["Canva-style social posts", "Posters & event visuals", "Basic UI/UX layout", "Brand-consistent visuals"] },
  { icon: ShoppingBag, title: "E-commerce & SEO", items: ["Livestream operations", "Keyword clustering", "Search intent mapping", "Topic cluster planning"] },
  { icon: Bot, title: "AI & Productivity", items: ["ChatGPT, Gemini, Claude", "NotebookLM research", "AI-assisted captions", "Content evaluation flows"] },
];

const SOFT_SKILLS = [
  "Creative thinking", "Team leadership", "Communication & presentation",
  "Time management", "Problem solving", "Cross-functional collaboration",
  "Data-minded mindset", "Adaptability",
];

const TOOLS = ["Canva", "CapCut", "PowerPoint", "TikTok", "Facebook", "Instagram", "Google Sheets", "Excel", "WordPress", "ChatGPT", "Gemini", "Claude", "NotebookLM"];

const EXPERIENCE = [
  {
    role: "Middle-level Management — Content & Operations Lead",
    org: "EcomIT Club — Lac Hong University",
    period: "2026 — Present",
    points: [
      "Lead a student community focused on e-commerce, digital business and livestream selling.",
      "Plan recruitment content, event communication and student-friendly social visuals.",
      "Coordinate livestream setup, equipment checks and live selling operations.",
      "Work cross-functionally with content, operations and product/order teams.",
    ],
  },
  {
    role: "Digital Business Competition Participant",
    org: "VECOM Digital Business 2024",
    period: "2024",
    points: [
      "Ranked 24th nationwide among hundreds of student teams.",
      "Built practical e-commerce ideas covering online sales, content direction and operations.",
      "Presented customer insights, marketing concepts and social media growth plans.",
    ],
  },
];

const PROJECTS = [
  {
    title: "VECOM Digital Business Project",
    role: "Member — Strategy & Content",
    goal: "Design a practical e-commerce business model and pitch it for the VECOM 2024 competition.",
    did: "Researched market & customer insight, structured the business model, shaped social marketing direction and prepared the pitch.",
    result: "Ranked 24th nationally — recognised for practical thinking on online sales and content strategy.",
    tags: ["E-commerce", "Strategy", "Pitching"],
  },
  {
    title: "Social Media Design Portfolio",
    role: "Designer & Content Creator",
    goal: "Build a consistent, modern visual system for EcomIT Club events and recruitment.",
    did: "Designed posters, kickoff visuals, room-change announcements, tea break/networking posts and themed e-commerce content.",
    result: "Unified visual identity across the club's channels and lifted engagement on student-facing posts.",
    tags: ["Canva", "Poster", "Social"],
  },
  {
    title: "SEO & Content Research",
    role: "SEO Researcher",
    goal: "Map a content plan for local market topics using search intent and topic clusters.",
    did: "Built keyword clusters, classified search intent, defined landing page types and outlined cluster-based content briefs.",
    result: "Delivered a ready-to-use content roadmap with clear hierarchy and targeting.",
    tags: ["SEO", "Research", "Content"],
  },
  {
    title: "AI-assisted Content System",
    role: "AI Workflow Builder",
    goal: "Speed up social content production with a repeatable AI-powered workflow.",
    did: "Combined ChatGPT, Gemini, Claude and NotebookLM for image reading, hook analysis, caption drafting and idea generation.",
    result: "Cut content drafting time noticeably while keeping a consistent brand voice.",
    tags: ["AI", "Workflow", "Productivity"],
  },
];

const SAMPLES = [
  {
    title: "Fruit Tea Campaign Poster",
    type: "Social Post",
    image: sampleTraTraiCay,
    goal: "Promote a refreshing fruit tea product line for a young, energetic audience.",
    did: "Designed key visual, headline typography, ingredient highlights and CTA layout in Canva.",
    result: "A vibrant poster ready for Facebook & Instagram with a clear hero product and CTA.",
    tags: ["Canva", "Poster", "F&B"],
  },
  {
    title: "Umami Matcha Latte Launch",
    type: "Social Post",
    image: sampleMatcha,
    goal: "Launch a new Matcha Latte for Umami Tea & Coffee with a clean, premium feel.",
    did: "Built a soft natural scene, product spotlight, price tag and combo suggestion module.",
    result: "Launch-ready social post with strong product focus and clear pricing.",
    tags: ["Canva", "Product Launch", "F&B"],
  },
  {
    title: "Tea Day Iced Milk Tea Promo",
    type: "Social Post",
    image: sampleTraSua,
    goal: "Push a 10% promotion for Tea Day's iced milk tea during summer season.",
    did: "Created bold typography, splash effects, benefit icons and a strong promo badge.",
    result: "Eye-catching promo post built to drive walk-ins and online orders.",
    tags: ["Canva", "Promo", "F&B"],
  },
  {
    title: "EcomIT Recruitment Campaign",
    type: "Club Campaign",
    image: sampleRecruitment,
    goal: "Recruit new members for EcomIT Club across Content, Design, Livestream and Operations.",
    did: "Designed the key visual, value-props checklist and open-position grid with a clear CTA.",
    result: "Boosted application reach across student groups and clarified the four open tracks.",
    tags: ["Recruitment", "Branding", "Club"],
  },
  {
    title: "EcomIT Kickoff Poster",
    type: "Event Visual",
    image: sampleKickoff,
    goal: "Announce the EcomIT Club kickoff event and drive student attendance.",
    did: "Built the hero composition, time/location info block and event highlight icons.",
    result: "Strong on-campus turnout for the first official EcomIT meetup.",
    tags: ["Event", "Poster", "Club"],
  },
  {
    title: "Workshop Recap — Dannie Linh Đan",
    type: "Workshop Recap",
    image: sampleWorkshop,
    goal: "Recap the TikTok content workshop with TikToker Dannie Linh Đan for e-commerce students.",
    did: "Designed the recap layout: key topics, thank-you note, speaker card and event photos.",
    result: "Delivered a clean recap post that extended reach and credibility of the workshop.",
    tags: ["Workshop", "Recap", "Club"],
  },
];

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Samples />
      <Objective />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          PCH<span className="text-gradient">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-muted-foreground hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity">
          Let's talk <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-primary opacity-20 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-soft border border-border text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent-green" />
            Available for Internship · 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Pham Cong<br />
            <span className="text-gradient">Hieu</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-display font-medium mb-4">
            Design-driven Social Media &amp; Digital Marketing Intern
          </p>
          <p className="text-base text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Information Technology student blending creative content, social design, e-commerce
            operations and AI tools to build marketing that actually performs.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
              View projects <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-medium hover:bg-muted transition-colors">
              Get in touch
            </a>
          </div>
          <div className="flex gap-8 mt-12 pt-8 border-t border-border">
            <Stat value="24th" label="VECOM 2024" />
            <Stat value="7.88" label="GPA / 10" />
            <Stat value="13+" label="Tools mastered" />
          </div>
        </div>
        <div className="relative animate-float">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30" />
          <img
            src={heroVisual}
            alt="Creative digital marketing visual"
            width={1280}
            height={1280}
            className="relative rounded-3xl shadow-elegant w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-display font-bold text-gradient">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

function SectionHead({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl mb-14">
      <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent-green mb-3">{kicker}</div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      {sub && <p className="text-muted-foreground text-lg">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHead kicker="01 — About" title="A creator at the intersection of tech, design and storytelling." />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-soft border border-border">
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm an Information Technology student at <strong className="text-foreground">Lac Hong University</strong> with
              a clear focus on social media marketing and visual design. My approach is hands-on:
              I write hooks and captions, design social posts, run e-commerce livestreams,
              cluster SEO keywords and use AI to scale creative output without losing brand voice.
            </p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              I want to join a creative international team where I can ship real content,
              learn fast, and grow into a well-rounded marketer.
            </p>
          </div>
          <div className="p-6 rounded-3xl border border-border space-y-5">
            <Info icon={GraduationCap} label="Education" value="B.Sc. Information Technology · Lac Hong University · GPA 7.88/10" />
            <Info icon={Trophy} label="Achievement" value="VECOM Digital Business 2024 — Ranked 24th · Merit Scholarship 2024" />
            <Info icon={Languages} label="Languages" value="Vietnamese (Native) · English (working proficiency)" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof Trophy; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium mt-0.5 leading-snug">{value}</div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SectionHead kicker="02 — Skills" title="Hard skills, soft skills, the tools to back them." />

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Hard Skills</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HARD_SKILLS.map((g) => (
              <div key={g.title} className="group p-6 rounded-2xl bg-background border border-border hover:border-accent-green/50 hover:shadow-elegant transition-all">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <g.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-semibold mb-3">{g.title}</h3>
                <ul className="space-y-2">
                  {g.items.map((i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-accent-green mt-1">•</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Soft Skills</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="flex flex-wrap gap-2.5">
            {SOFT_SKILLS.map((s) => (
              <span key={s} className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium hover:border-accent-blue/50 hover:text-accent-blue transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Tools</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="flex flex-wrap gap-2.5">
            {TOOLS.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHead kicker="03 — Experience" title="Where I've learned by doing." />
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent-green via-accent-blue to-transparent" />
          {EXPERIENCE.map((e) => (
            <div key={e.role} className="relative mb-12 last:mb-0">
              <div className="absolute -left-8 md:-left-12 top-2 w-4 h-4 rounded-full bg-gradient-primary ring-4 ring-background" />
              <div className="p-6 md:p-8 rounded-2xl border border-border hover:border-accent-blue/40 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-display font-semibold">{e.role}</h3>
                  <span className="text-sm text-accent-blue font-medium">{e.period}</span>
                </div>
                <div className="text-muted-foreground mb-4">{e.org}</div>
                <ul className="space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SectionHead kicker="04 — Projects" title="Selected work — role, goal, what I did, and the result." />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <article key={p.title} className="group p-7 rounded-3xl bg-background border border-border hover:shadow-elegant transition-all">
              <div className="flex items-start justify-between mb-5">
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-green group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">{p.title}</h3>
              <div className="text-sm text-accent-blue font-medium mb-5">{p.role}</div>
              <div className="space-y-3 text-sm">
                <Row icon={Target} label="Goal" text={p.goal} />
                <Row icon={Users} label="What I did" text={p.did} />
                <Row icon={Trophy} label="Result" text={p.result} />
              </div>
              <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-border">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ icon: Icon, label, text }: { icon: typeof Target; label: string; text: string }) {
  return (
    <div className="flex gap-3">
      <Icon className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
      <div>
        <span className="font-semibold">{label}: </span>
        <span className="text-foreground/75">{text}</span>
      </div>
    </div>
  );
}

function Samples() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? SAMPLES[active] : null;

  return (
    <section id="samples" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHead
          kicker="05 — Work Samples"
          title="A glimpse of recent visuals."
          sub="Click any post to see the full project."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SAMPLES.map((s, i) => (
            <button
              type="button"
              key={s.title}
              onClick={() => setActive(i)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-muted text-left focus:outline-none focus:ring-2 focus:ring-accent-green"
            >
              <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-xs uppercase tracking-wider opacity-80 mb-1">{s.type}</div>
                <div className="font-display font-semibold text-lg">{s.title}</div>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-up"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-5xl w-full grid md:grid-cols-[1.2fr_1fr] gap-6 bg-background rounded-3xl overflow-hidden border border-border shadow-elegant max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center hover:bg-muted"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="bg-muted flex items-center justify-center max-h-[50vh] md:max-h-[90vh] overflow-hidden">
              <img src={current.image} alt={current.title} className="w-full h-full object-contain" />
            </div>
            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent-green mb-3">{current.type}</div>
              <h3 className="text-2xl font-display font-bold mb-4">{current.title}</h3>
              <div className="space-y-3 text-sm">
                <Row icon={Target} label="Goal" text={current.goal} />
                <Row icon={Users} label="What I did" text={current.did} />
                <Row icon={Trophy} label="Result" text={current.result} />
              </div>
              <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-border">
                {current.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Objective() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent-green mb-4">06 — Career Objective</div>
        <p className="text-3xl md:text-4xl font-display font-medium leading-snug">
          To join a <span className="text-gradient">creative international team</span> as a junior
          designer or social media marketing intern — contribute practical content ideas and grow in
          visual design, content strategy, social analytics and AI marketing tools.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl bg-foreground text-background p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-primary opacity-30 rounded-full blur-3xl" />
        <div className="relative">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent-green mb-4">07 — Contact</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl">
            Let's build something <span className="text-gradient">together</span>.
          </h2>
          <p className="text-background/70 text-lg mb-10 max-w-xl">
            Open to internship opportunities in design, social media and digital marketing.
            I reply within 24 hours.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <ContactCard icon={Mail} label="Email" value="phamconghieu151025@gmail.com" href="mailto:phamconghieu151025@gmail.com" />
            <ContactCard icon={Phone} label="Phone" value="0933 238 362" href="tel:+84933238362" />
            <ContactCard icon={MapPin} label="Location" value="Bien Hoa, Dong Nai, Vietnam" />
            <ContactCard icon={Linkedin} label="LinkedIn" value="Connect with me" href="#" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      {...(href ? { href } : {})}
      className="group flex items-center gap-4 p-5 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-accent-green/40 transition-all"
    >
      <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-wider text-background/50">{label}</div>
        <div className="font-medium truncate">{value}</div>
      </div>
      {href && <ArrowUpRight className="w-4 h-4 text-background/40 group-hover:text-accent-green transition-colors" />}
    </Tag>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <div>© 2026 Pham Cong Hieu. Design-driven by intent.</div>
        <div className="font-mono text-xs">Bien Hoa · VN</div>
      </div>
    </footer>
  );
}
