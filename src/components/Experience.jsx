import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    company: 'Brainito Marketing OS',
    role: 'UI/UX Designer',
    period: 'Feb 2026 – Present',
    type: 'Full-time',
    description: 'Designing comprehensive marketing operating system interfaces, user dashboards, and scalable component libraries for B2B SaaS products.',
    skills: ['UI Design', 'Design System', 'SaaS', 'Figma'],
    current: true,
    color: 'from-indigo-500 to-purple-600',
  },
  {
    company: 'Human Garage (USA)',
    role: 'UI/UX Designer',
    period: 'Aug 2025 – Oct 2025',
    type: 'Contract',
    description: 'Collaborated with a US-based wellness startup to redesign their digital platform. Created user flows, wireframes, and high-fidelity UI screens for their mobile and web products.',
    skills: ['Mobile Design', 'Web UI', 'Wireframing', 'Prototyping'],
    current: false,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    company: 'Parul University – SCOPE Cell',
    role: 'Graphic Design Intern',
    period: 'Feb 2025 – Aug 2025',
    type: 'Internship',
    description: 'Created digital marketing creatives, social media graphics, event branding, and visual assets for university entrepreneurship initiatives.',
    skills: ['Graphic Design', 'Branding', 'Social Media', 'Photoshop'],
    current: false,
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'Algorion Research and Analysis Pvt. Ltd.',
    role: 'UI Design Intern',
    period: 'Dec 2024 – Jan 2025',
    type: 'Internship',
    description: 'Designed user interfaces for research and analytics dashboards. Worked on data visualization components and complex UI patterns.',
    skills: ['Dashboard Design', 'Data Viz', 'UI Design', 'Figma'],
    current: false,
    color: 'from-green-500 to-teal-500',
  },
]

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">Journey</p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            A timeline of my professional journey in design and development.
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-400 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative pl-16 sm:pl-24 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-3 sm:left-5 top-6 w-7 h-7 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg z-10`}>
                  <div className="w-2.5 h-2.5 bg-white rounded-full" />
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-100 dark:border-slate-700/50 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{exp.period}</p>
                      <span className="inline-block mt-1 px-3 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-100 dark:border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
