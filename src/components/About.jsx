import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const stats = [
    { value: '20+', label: 'Projects Completed' },
    { value: '2+', label: 'Years Experience' },
    { value: '10+', label: 'Happy Clients' },
    { value: '4', label: 'Internships' },
  ]

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left - Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main card */}
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 p-8 border border-indigo-100 dark:border-indigo-900/30">
                <div className="space-y-6">
                  {/* Profile header */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl font-heading shadow-lg">
                      V
                    </div>
                    <div>
                      <p className="font-heading font-bold text-xl text-slate-900 dark:text-white">Vivek Tiwari</p>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">UI/UX Designer · React Developer</p>
                    </div>
                  </div>

                  {/* Tools preview */}
                  <div className="grid grid-cols-2 gap-3">
                    {['Figma', 'React', 'Tailwind', 'Adobe XD'].map((tool) => (
                      <div key={tool} className="bg-white dark:bg-slate-800 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2 shadow-sm">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                        {tool}
                      </div>
                    ))}
                  </div>

                  {/* Availability */}
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/30 rounded-xl px-4 py-3 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-green-700 dark:text-green-400 font-medium">Currently available for new projects</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Gujarat, India
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-100 dark:border-slate-700/50 card-hover">
                    <p className="font-heading font-black text-3xl text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="space-y-8">
            <div>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">About Me</p>
              <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 dark:text-white leading-tight">
                Designing Digital
                <br />
                <span className="gradient-text">Experiences</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Vivek Tiwari is a <strong className="text-slate-900 dark:text-white">UI/UX Designer and React Frontend Developer</strong> based in Gujarat, India. He works with startups and digital products to create intuitive user experiences and scalable interface systems.
              </p>
              <p>
                He specializes in designing <strong className="text-slate-900 dark:text-white">mobile apps, web platforms, SaaS dashboards, and startup MVPs</strong>. By combining design thinking with frontend development, he helps transform product ideas into responsive and user-friendly digital experiences.
              </p>
              <p>
                His goal is simple: bridge the gap between beautiful design and functional code to create digital products that users love.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['UI/UX Design', 'Product Design', 'React Development', 'Mobile App Design', 'Design Systems', 'Figma'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full border border-indigo-100 dark:border-indigo-900/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all"
              >
                Work With Me
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:border-indigo-400 hover:text-indigo-600 transition-all"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
