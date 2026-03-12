import { useInView } from 'react-intersection-observer'
import { Palette, Smartphone, Globe, Code, Brush } from 'lucide-react'

const services = [
  {
    icon: <Palette size={28} />,
    title: 'UI/UX Design',
    description: 'User research, wireframes, high fidelity UI and product usability testing. Creating seamless user journeys that convert.',
    tags: ['Figma', 'User Research', 'Prototyping'],
    color: 'from-indigo-500 to-purple-600',
    bgLight: 'bg-indigo-50',
    bgDark: 'dark:bg-indigo-950/30',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Mobile App Design',
    description: 'iOS and Android app interface design with scalable component systems. Intuitive mobile experiences from concept to handoff.',
    tags: ['iOS', 'Android', 'Components'],
    color: 'from-purple-500 to-pink-600',
    bgLight: 'bg-purple-50',
    bgDark: 'dark:bg-purple-950/30',
  },
  {
    icon: <Globe size={28} />,
    title: 'Website Design',
    description: 'Modern website UI design optimized for usability and conversions. Landing pages, dashboards, and SaaS platforms.',
    tags: ['Web UI', 'Landing Pages', 'SaaS'],
    color: 'from-blue-500 to-cyan-600',
    bgLight: 'bg-blue-50',
    bgDark: 'dark:bg-blue-950/30',
  },
  {
    icon: <Code size={28} />,
    title: 'React Development',
    description: 'Convert Figma designs into fast, responsive React websites. Clean code architecture with Tailwind CSS and modern tooling.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    color: 'from-cyan-500 to-teal-600',
    bgLight: 'bg-cyan-50',
    bgDark: 'dark:bg-cyan-950/30',
  },
  {
    icon: <Brush size={28} />,
    title: 'Branding & Visual Design',
    description: 'Logo design, brand identity, and digital marketing creatives. Building consistent visual languages for brands.',
    tags: ['Logo', 'Brand Identity', 'Graphics'],
    color: 'from-orange-500 to-rose-600',
    bgLight: 'bg-orange-50',
    bgDark: 'dark:bg-orange-950/30',
  },
]

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">What I Do</p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            End-to-end design and development expertise to bring your digital product from concept to reality.
          </p>
        </div>

        {/* Cards grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl p-8 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 card-hover overflow-hidden transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 ${service.bgLight} ${service.bgDark} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="rounded-2xl p-8 bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col justify-between card-hover">
            <div>
              <p className="text-indigo-200 text-sm font-medium mb-3">Ready to start?</p>
              <h3 className="font-heading font-bold text-2xl mb-4">Have a project in mind?</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">Let's collaborate and bring your vision to life with great design and clean code.</p>
            </div>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-6 bg-white text-indigo-600 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors w-fit"
            >
              Get in Touch →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
