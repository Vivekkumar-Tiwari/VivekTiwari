import { Github, Linkedin, Mail, Phone, MapPin, Dribbble, Heart } from 'lucide-react'

const footerLinks = {
  About: [
    { label: 'About Me', href: '#about' },
    { label: 'Design Process', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
  ],
  'Quick Links': [
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  'Social Links': [
    { label: 'GitHub', href: 'https://github.com/Vivekkumar-Tiwari/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vivektiwari02/' },
    { label: 'Dribbble', href: 'https://dribbble.com/Vivekkumar-09' },
    { label: 'Behance', href: 'https://www.behance.net/vivektiwari53' },
    { label: 'X (Twitter)', href: 'https://x.com/VivekTiwar07' },
  ],
}

const socials = [
  { icon: <Github size={18} />, href: 'https://github.com/Vivekkumar-Tiwari/', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/vivektiwari02/', label: 'LinkedIn' },
  { icon: <Dribbble size={18} />, href: 'https://dribbble.com/Vivekkumar-09', label: 'Dribbble' },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: 'https://x.com/VivekTiwar07',
    label: 'X',
  },
]

export default function Footer() {
  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold font-heading">
                VT
              </div>
              <span className="font-heading font-bold text-xl">Vivek Tiwari</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              UI/UX Designer & React Frontend Developer based in Gujarat, India. Crafting intuitive digital products for startups and growing businesses.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:tiwarivivek2511@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                <Mail size={15} className="text-indigo-400 shrink-0" />
                tiwarivivek2511@gmail.com
              </a>
              <a href="tel:+918767814110" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                <Phone size={15} className="text-indigo-400 shrink-0" />
                +91 8767814110
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin size={15} className="text-indigo-400 shrink-0" />
                Gujarat, India
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-heading font-bold text-sm text-white mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-indigo-400 transition-colors text-sm text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center">
            © 2026 Vivek Tiwari. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Designed & Built with <Heart size={13} className="text-rose-500 fill-current" /> by Vivek Tiwari
          </p>
        </div>
      </div>
    </footer>
  )
}
