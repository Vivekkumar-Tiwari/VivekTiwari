import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export const projects = [
  {
    id: 'krishivah',
    title: 'KrishiVah',
    subtitle: 'Mobile App UX Case Study',
    type: 'Mobile App',
    description: 'A farmer-first mobile app designed to simplify crop monitoring, weather alerts, and marketplace access for small-scale farmers across India.',
    image: '/krishivah.png',
    tags: ['UX Research', 'Mobile App', 'Figma'],
    color: 'from-green-400 to-emerald-600',
    year: '2025',
  },
  {
    id: 'quickswap',
    title: 'Quick Swap',
    subtitle: 'Mobile App Redesign',
    type: 'App Redesign',
    description: 'A redesigned peer-to-peer item exchange platform with a fresh UI, smoother swap request flows, and improved discovery experience.',
    image: '/quickswap.png',
    tags: ['App Redesign', 'UX/UI', 'Prototyping'],
    color: 'from-orange-400 to-rose-600',
    year: '2025',
  },
  {
    id: 'designerviiew',
    title: 'DesignerViiew',
    subtitle: 'Architecture Website UI',
    type: 'Web Design',
    description: 'A premium architecture agency website UI featuring large imagery, elegant dark typography, and a modern luxury aesthetic for a high-end studio.',
    image: '/designerviiew.png',
    tags: ['Website UI', 'Architecture', 'Luxury Design'],
    color: 'from-slate-600 to-slate-900',
    year: '2025',
  },
]

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const navigate = useNavigate()

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">My Work</p>
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 dark:text-white">
              Selected <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm">
            A curated selection of my design and development projects.
          </p>
        </div>

        {/* Projects grid */}
        <div ref={ref} className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 grid md:grid-cols-2 gap-0 transition-all duration-700 card-hover cursor-pointer ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              style={{ transitionDelay: `${i * 150}ms` }}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64 md:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-semibold text-sm flex items-center gap-2">
                    View Case Study <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-5">
                {/* Badge */}
                <div className="flex items-center gap-3">
                  <span className={`inline-block px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${project.color}`}>
                    {project.type}
                  </span>
                  <span className="text-sm text-slate-400 dark:text-slate-500">{project.year}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  id={`project-cta-${project.id}`}
                  className="w-fit flex items-center gap-2 font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all duration-200 group/btn"
                  onClick={(e) => { e.stopPropagation(); navigate(`/project/${project.id}`) }}
                >
                  View Case Study
                  <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
