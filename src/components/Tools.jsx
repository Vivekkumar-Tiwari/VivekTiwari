import { useInView } from 'react-intersection-observer'

const toolCategories = [
  {
    category: 'UI/UX Design',
    emoji: '🎨',
    tools: [
      { name: 'Figma', icon: '🎯' },
    ],
  },
  {
    category: 'Design Tools',
    emoji: '🖌️',
    tools: [
      { name: 'Photoshop', icon: '📷' },
      { name: 'Illustrator', icon: '✏️' },
      { name: 'Premiere Pro', icon: '🎬' },
    ],
  },
  {
    category: 'Frontend Dev',
    emoji: '💻',
    tools: [
      { name: 'React', icon: '⚛️' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '💨' },
    ],
  },
  {
    category: 'Android Dev',
    emoji: '📱',
    tools: [
      { name: 'Java', icon: '☕' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
]

const allTools = [
  { name: 'Figma', color: 'from-purple-500 to-pink-500', letter: 'F' },
  { name: 'React', color: 'from-cyan-400 to-blue-500', letter: 'R' },
  { name: 'Tailwind', color: 'from-teal-400 to-cyan-500', letter: 'T' },
  { name: 'Photoshop', color: 'from-blue-600 to-indigo-600', letter: 'Ps' },
  { name: 'Illustrator', color: 'from-orange-400 to-yellow-500', letter: 'Ai' },
  { name: 'HTML5', color: 'from-orange-500 to-red-500', letter: 'H5' },
  { name: 'CSS3', color: 'from-blue-400 to-indigo-500', letter: 'C3' },
  { name: 'Firebase', color: 'from-yellow-400 to-orange-500', letter: '🔥' },
  { name: 'Java', color: 'from-red-500 to-orange-600', letter: 'J' },
  { name: 'Premiere', color: 'from-purple-600 to-indigo-600', letter: 'Pr' },
  { name: 'VS Code', color: 'from-blue-500 to-sky-400', letter: '⚡' },
  { name: 'Git', color: 'from-orange-500 to-red-600', letter: 'G' },
]

export default function Tools() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">Tech & Tools</p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            The design and development stack I use to craft outstanding digital products.
          </p>
        </div>

        {/* Tools grid */}
        <div
          ref={ref}
          className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {allTools.map((tool, i) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-3 p-4 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 card-hover cursor-default"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                {tool.letter}
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium text-center leading-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Category breakdown */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolCategories.map((cat, i) => (
            <div
              key={cat.category}
              className={`bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100 + 400}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-sm">
                  {cat.category}
                </h3>
              </div>
              <div className="space-y-2">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                    <span>{tool.icon}</span>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
