import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projectData = {
  krishivah: {
    title: 'KrishiVah',
    subtitle: 'Mobile App UX Case Study',
    type: 'Mobile App Design',
    year: '2025',
    duration: '6 Weeks',
    role: 'Lead UX/UI Designer',
    tools: ['Figma', 'FigJam', 'Adobe Illustrator'],
    prototypeLink: 'https://figma.com',
    heroImage: '/krishivah.png',
    color: 'from-green-400 to-emerald-600',
    tagColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    overview: 'KrishiVah is a farmer-first mobile application designed to bridge the digital divide in Indian agriculture. The app empowers small-scale farmers with accessible tools for crop monitoring, weather alerts, and marketplace access — all through a simple, intuitive interface.',
    sections: [
      {
        id: 'problem',
        title: '01 — Problem',
        icon: '🎯',
        content: 'Farmers lacked accessible digital tools for crop monitoring and marketplace access. Existing agricultural apps were too complex, required high data connectivity, and were designed without understanding the actual farmer workflow — leading to poor adoption rates in rural communities.',
      },
      {
        id: 'research',
        title: '02 — Research',
        icon: '🔍',
        content: 'Conducted 12 in-depth user interviews with small-scale farmers across Gujarat to understand their mobile usage patterns, pain points, and daily workflows. Findings revealed that farmers primarily used feature phones, had limited data plans, and preferred visual interfaces over text-heavy designs.',
        insights: [
          'Most farmers check weather 3+ times/day',
          '67% sell produce through middlemen due to lack of market access',
          'Voice-based interactions preferred over text input',
          'Low literacy rate requires icon-based navigation',
        ],
      },
      {
        id: 'persona',
        title: '03 — User Persona',
        icon: '👤',
        content: 'Primary User: Ramesh Patel, 42, small-scale wheat and cotton farmer from Anand, Gujarat. Owns 3 acres of farmland. Uses a budget Android smartphone. Has 8th-grade education with basic smartphone literacy. Key goals: knowing when to water crops, getting fair marketplace prices, and understanding weather forecasts.',
      },
      {
        id: 'wireframes',
        title: '04 — Wireframes',
        icon: '✏️',
        content: 'Early low-fidelity wireframes focused on radical simplicity. Navigation was reduced to 4 core screens: Home Dashboard, Crop Scanner, Weather Alerts, and Marketplace. Tab bar navigation with large touch targets (min 48px) was used throughout. Tested wireframes with 5 farmers using paper prototypes.',
      },
      {
        id: 'design-system',
        title: '05 — Design System',
        icon: '🎨',
        content: 'Created a comprehensive design system with earthy green and amber color tokens reflecting agricultural context. Typography used large sizes (min 16px body) for readability. Component library included: crop cards, weather widgets, marketplace listings, and a simplified bottom tab navigation. All components were designed for one-handed use.',
      },
      {
        id: 'ui-design',
        title: '06 — UI Design',
        icon: '🖥️',
        content: 'Designed 24 high-fidelity screens across 4 flows: Onboarding (3 screens with farmer profile setup), Crop Scanner (AI-powered crop health analysis with camera overlay), Weather Alerts (7-day forecast with regional language support), and Marketplace (buy/sell interface with simple cart flow). All screens designed for Android with Material You guidelines.',
      },
      {
        id: 'prototype',
        title: '07 — Prototype',
        icon: '▶️',
        content: 'Built an interactive Figma prototype covering the complete user journey from account creation to making a marketplace transaction. Prototype included micro-interactions, loading states, and error handling screens. Used for user testing sessions with 8 participants — resulting in a 92% task completion rate.',
      },
      {
        id: 'outcome',
        title: '08 — Outcome',
        icon: '✅',
        content: 'The redesigned KrishiVah experience delivered significant UX improvements. Task completion rate increased from 34% to 92%. Time-on-task for core flows reduced by 60%. 8 out of 8 test users rated the app as "easy to use." The simplified navigation and visual-first approach resonated strongly with the target audience.',
        metrics: [
          { label: 'Task Completion', value: '92%', improvement: '+58%' },
          { label: 'Time on Task', value: '45s', improvement: '-60%' },
          { label: 'User Satisfaction', value: '4.8/5', improvement: '+2.1' },
          { label: 'Screens Designed', value: '24', improvement: '' },
        ],
      },
    ],
  },
  quickswap: {
    title: 'Quick Swap',
    subtitle: 'Mobile App Redesign',
    type: 'App Redesign',
    year: '2025',
    duration: '4 Weeks',
    role: 'UI/UX Designer',
    tools: ['Figma', 'Principle', 'Adobe XD'],
    prototypeLink: 'https://figma.com',
    heroImage: '/quickswap.png',
    color: 'from-orange-400 to-rose-600',
    tagColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    overview: 'Quick Swap is a peer-to-peer item exchange platform that needed a complete visual and UX overhaul. The original app had high drop-off rates during the swap request flow and poor discovery mechanisms. This redesign focused on streamlining the exchange experience and improving product discoverability.',
    sections: [
      {
        id: 'problem',
        title: '01 — Problem',
        icon: '🎯',
        content: 'The original Quick Swap app had a 68% drop-off rate during the swap request flow. Users found it difficult to discover relevant items, the listing creation process was too lengthy (12 steps), and the swap negotiation UX was confusing with no clear status indicators.',
      },
      {
        id: 'research',
        title: '02 — Research',
        icon: '🔍',
        content: 'Analyzed app store reviews (400+ reviews), conducted heuristic evaluation against Nielsen 10 usability heuristics, and ran 6 usability testing sessions with target users aged 18-30. Key finding: users abandoned during item listing due to mandatory detailed descriptions and poor category taxonomy.',
        insights: [
          '68% drop-off during swap request flow',
          'Listing creation averaged 8 minutes (too long)',
          'Search returned irrelevant results',
          'No clear swap status tracking',
        ],
      },
      {
        id: 'persona',
        title: '03 — User Persona',
        icon: '👤',
        content: 'Primary User: Priya Sharma, 24, urban college student. Eco-conscious, loves thrifting and sustainable shopping. Wants to swap books, electronics, and clothes with others nearby. Frustrated by complicated apps and prefers quick, visual browsing. Uses mobile-first and values speed.',
      },
      {
        id: 'wireframes',
        title: '04 — Wireframes',
        icon: '✏️',
        content: 'Restructured the entire information architecture. Listing flow reduced from 12 to 5 steps using smart defaults and AI-assisted categorization. Introduced a card-based swap feed with visual matching. Added a real-time swap status timeline component. Wireframed 18 screens covering all primary flows.',
      },
      {
        id: 'design-system',
        title: '05 — Design System',
        icon: '🎨',
        content: 'Fresh brand refresh with warm orange (#FF6B35) as primary accent on clean white backgrounds. Bold, modern typography (Plus Jakarta Sans). Component library: item cards, swap request cards, user profiles, status badges, and notification chips. Dark mode support throughout.',
      },
      {
        id: 'ui-design',
        title: '06 — UI Design',
        icon: '🖥️',
        content: 'Designed 32 high-fidelity screens. Key improvements: visual-first item feed with large image cards, simplified 5-step listing wizard with camera-first flow, real-time swap status timeline, in-app chat with swap offer cards, and personalized recommendations based on swap history.',
      },
      {
        id: 'prototype',
        title: '07 — Prototype',
        icon: '▶️',
        content: 'Full interactive Figma prototype covering 3 core flows: Browse & Discover, Create Listing, and Swap Request & Negotiation. Prototype tested with 10 users — all completed the core swap flow in under 3 minutes compared to 8+ minutes for the original app.',
      },
      {
        id: 'outcome',
        title: '08 — Outcome',
        icon: '✅',
        content: 'The redesigned Quick Swap app demonstrated dramatic improvement in usability metrics. The simplified listing flow and visual-first approach resonated strongly with users. Prototype testing showed users completing swap requests 60% faster and satisfaction ratings jumped significantly.',
        metrics: [
          { label: 'Drop-off Rate', value: '12%', improvement: '-56%' },
          { label: 'Listing Time', value: '2.5 min', improvement: '-69%' },
          { label: 'User Satisfaction', value: '4.7/5', improvement: '+2.3' },
          { label: 'Screens Designed', value: '32', improvement: '' },
        ],
      },
    ],
  },
  designerviiew: {
    title: 'DesignerViiew',
    subtitle: 'Architecture Website UI',
    type: 'Website UI Design',
    year: '2025',
    duration: '3 Weeks',
    role: 'UI Designer',
    tools: ['Figma', 'Adobe Illustrator', 'Unsplash'],
    prototypeLink: 'https://figma.com',
    heroImage: '/designerviiew.png',
    color: 'from-slate-600 to-slate-900',
    tagColor: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
    overview: 'DesignerViiew is a premium architecture and interior design studio website UI concept. The design centers on bold large-format photography, elegant minimal typography, and a dark luxury aesthetic that positions the studio as a top-tier premium firm.',
    sections: [
      {
        id: 'problem',
        title: '01 — Brief',
        icon: '🎯',
        content: 'The architecture studio needed a website that conveyed luxury, quality, and creative vision. The existing site felt generic and failed to differentiate the firm from competitors. The new design needed to lead with stunning visual impact while maintaining clean navigation and strong conversion paths.',
      },
      {
        id: 'research',
        title: '02 — Inspiration Research',
        icon: '🔍',
        content: 'Analyzed 20 top architecture firm websites from Dezeen\'s recommended list. Identified common luxury design patterns: full-bleed hero images, minimal navigation, generous white space, serif typography for elegance, and single-column editorial layouts for project showcases.',
        insights: [
          'Dark themes signal luxury and exclusivity',
          'Large project imagery is more impactful than text',
          'Minimal navigation (4-5 items) preferred',
          'Awards & press logos build instant credibility',
        ],
      },
      {
        id: 'persona',
        title: '03 — Target Audience',
        icon: '👤',
        content: 'Primary Audience: High-net-worth individuals and corporate clients planning residential or commercial builds. Age 35-60. Values: craftsmanship, exclusivity, attention to detail. Decision factors: portfolio quality, project awards, team credentials. Behavior: extensive research before contact.',
      },
      {
        id: 'wireframes',
        title: '04 — Information Architecture',
        icon: '✏️',
        content: 'Designed a minimal 5-page structure: Home (hero + featured projects), Projects (gallery), Studio (about + team), Services, and Contact. Home page designed as an immersive editorial scroll experience with cinematic full-screen project showcases.',
      },
      {
        id: 'design-system',
        title: '05 — Design System',
        icon: '🎨',
        content: 'Luxury color palette: Deep Navy (#0C0E1A) backgrounds, Warm Gold (#C9A96E) accents, clean Off-White (#F4F1EC) text. Typography: Cormorant Garamond (headings) for editorial elegance, Inter (body) for readability. Components: project cards, team member cards, service tiles, and testimonial quotes.',
      },
      {
        id: 'ui-design',
        title: '06 — UI Design',
        icon: '🖥️',
        content: 'Designed 16 high-fidelity screens across 5 pages. Key design decisions: parallax hero with "Awards-Winning Architecture" headline, horizontal scroll for project gallery, split-screen team portraits, service cards with subtle hover animations, and a clean contact form with gold accent focus states.',
      },
      {
        id: 'prototype',
        title: '07 — Prototype',
        icon: '▶️',
        content: 'Figma prototype showcasing homepage scroll experience, project gallery navigation, and contact form interaction. Included smooth page transitions and hover state demonstrations for stakeholder presentation.',
      },
      {
        id: 'outcome',
        title: '08 — Outcome',
        icon: '✅',
        content: 'The DesignerViiew website concept successfully achieved a premium luxury positioning. Stakeholder feedback highlighted the strong visual identity, intuitive navigation, and how the design elevates the studio brand above competitors. The design is ready for development handoff.',
        metrics: [
          { label: 'Pages Designed', value: '5', improvement: '' },
          { label: 'Screens Total', value: '16', improvement: '' },
          { label: 'Stakeholder Rating', value: '5/5', improvement: '' },
          { label: 'Client Satisfaction', value: '100%', improvement: '' },
        ],
      },
    ],
  },
}

export default function ProjectPage({ darkMode, setDarkMode }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectData[id]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center dark:bg-slate-900">
        <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">Project not found</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-indigo-600 hover:underline">
          ← Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        {/* Gradient bar at top */}
        <div className={`h-1 bg-gradient-to-r ${project.color} w-full`} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-10 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </button>

          {/* Title area */}
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-12">
            <div className="space-y-5">
              <span className={`inline-block px-4 py-1.5 ${project.tagColor} text-sm font-bold rounded-full`}>
                {project.type}
              </span>
              <h1 className="font-heading font-black text-5xl sm:text-6xl text-slate-900 dark:text-white">
                {project.title}
              </h1>
              <p className="text-xl text-slate-500 dark:text-slate-400">{project.subtitle}</p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Calendar size={16} />, label: 'Year', value: project.year },
                { icon: <Tag size={16} />, label: 'Role', value: project.role },
                { icon: <Tag size={16} />, label: 'Duration', value: project.duration },
                { icon: <Tag size={16} />, label: 'Tools', value: project.tools.join(', ') },
              ].map((info) => (
                <div key={info.label} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-medium mb-2">
                    {info.icon}
                    {info.label}
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-700/50">
            <img
              src={project.heroImage}
              alt={`${project.title} preview`}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {project.sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              {/* Section header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">{section.icon}</span>
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                  {section.title}
                </h2>
              </div>

              {/* Section content */}
              <div className="bg-slate-50 dark:bg-slate-800/30 rounded-2xl p-8 border border-slate-100 dark:border-slate-700/30">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {section.content}
                </p>

                {/* Research insights */}
                {section.insights && (
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {section.insights.map((insight, i) => (
                      <li key={i} className="flex items-start gap-3 bg-white dark:bg-slate-700/30 rounded-xl p-4 border border-slate-100 dark:border-slate-600/30">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold shrink-0">→</span>
                        <span className="text-slate-700 dark:text-slate-200 text-sm">{insight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Outcome metrics */}
                {section.metrics && (
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {section.metrics.map((metric) => (
                      <div key={metric.label} className="text-center bg-white dark:bg-slate-700/30 rounded-xl p-4 border border-slate-100 dark:border-slate-600/30">
                        <p className="font-heading font-black text-2xl text-indigo-600 dark:text-indigo-400">{metric.value}</p>
                        {metric.improvement && (
                          <p className="text-xs text-green-600 dark:text-green-400 font-bold">{metric.improvement}</p>
                        )}
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Figma prototype CTA */}
          <div className={`rounded-2xl p-10 bg-gradient-to-br ${project.color} text-white text-center`}>
            <p className="text-white/70 text-sm mb-2 uppercase tracking-widest font-medium">Interactive Prototype</p>
            <h3 className="font-heading font-black text-3xl mb-4">View the Full Prototype</h3>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              Explore the complete interactive Figma prototype to see all screens, flows, and micro-interactions in action.
            </p>
            <a
              href={project.prototypeLink}
              target="_blank"
              rel="noopener noreferrer"
              id={`prototype-link-${id}`}
              className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-slate-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
                <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
                <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
                <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
                <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
              </svg>
              View Figma Prototype
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Navigation between projects */}
          <div className="flex justify-between pt-8 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group font-medium"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to All Projects
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView?.() || navigate('/#contact')}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all"
            >
              Let's Work Together →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
