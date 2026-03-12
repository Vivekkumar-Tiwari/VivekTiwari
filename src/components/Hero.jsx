import { useEffect, useRef } from 'react'
import { Github, Linkedin, ExternalLink, ArrowDown, MapPin, Dribbble } from 'lucide-react'

const socialLinks = [
  { icon: <Github size={20} />, href: 'https://github.com/Vivekkumar-Tiwari/', label: 'GitHub' },
  { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/vivektiwari02/', label: 'LinkedIn' },
  { icon: <Dribbble size={20} />, href: 'https://dribbble.com/Vivekkumar-09', label: 'Dribbble' },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.372 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
    href: 'https://www.behance.net/vivektiwari53',
    label: 'Behance'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: 'https://x.com/VivekTiwar07',
    label: 'X (Twitter)'
  },
]

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroRef.current?.classList.add('opacity-100')
          heroRef.current?.classList.remove('opacity-0', 'translate-y-8')
        }
      },
      { threshold: 0.1 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-green-500/8 rounded-full blur-3xl" />
        <div className="section-pattern absolute inset-0 opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            ref={heroRef}
            className="opacity-0 translate-y-8 transition-all duration-700 space-y-8"
          >
            {/* Availability Badge */}
            <div className="badge-available w-fit">
              <span className="dot" />
              Available for Freelance & Startup Collaborations
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
              <MapPin size={15} className="text-indigo-500" />
              Gujarat, India
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl leading-tight text-slate-900 dark:text-white">
                UI/UX Designer
                <br />
                <span className="gradient-text">&</span>
                <br />
                <span className="gradient-text">React Developer</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg font-medium">
              I help startups and growing businesses design intuitive digital products through thoughtful UI/UX design and modern web development.
            </p>

            {/* Description */}
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
              From user research and onboarding flows to scalable design systems and responsive React websites, I build digital products that are both beautiful and functional.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                id="hero-view-projects"
                className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToContact}
                id="hero-lets-talk"
                className="group px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-1 transition-all duration-300"
              >
                Let's Talk
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-400 dark:text-slate-500">Connect:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-1 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side – Mockup */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative animate-float">
              {/* Main mockup card */}
              <div className="relative w-full max-w-md">
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-white/20 dark:border-slate-700/50">
                  <img
                    src="/hero_mockup.png"
                    alt="UI/UX Design Portfolio Preview"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating stats cards */}
                <div className="absolute -left-12 top-1/4 glass rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                  <p className="text-2xl font-black font-heading text-indigo-600 dark:text-indigo-400">20+</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Projects Done</p>
                </div>

                <div className="absolute -right-8 bottom-1/4 glass rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <p className="text-2xl font-black font-heading text-green-600 dark:text-green-400">2y+</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Experience</p>
                </div>

                <div className="absolute -top-6 right-4 glass rounded-2xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-sm font-semibold text-slate-700 dark:text-white">Open to Work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background blob */}
            <div className="absolute inset-0 -z-10">
              <div className="blob absolute w-72 h-72 bg-gradient-to-br from-indigo-300/30 to-purple-300/30 dark:from-indigo-800/30 dark:to-purple-800/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 animate-bounce">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </div>
      </div>
    </section>
  )
}
