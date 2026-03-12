import { useInView } from 'react-intersection-observer'
import { Search, Layout, Palette, Play, Code } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Research',
    description: 'Understanding user needs, product goals, and market context.',
    icon: <Search size={24} />,
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-100 dark:border-blue-900/30',
  },
  {
    number: '02',
    title: 'Wireframing',
    description: 'Creating low-fidelity layouts to structure the product experience.',
    icon: <Layout size={24} />,
    color: 'from-indigo-500 to-purple-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    border: 'border-indigo-100 dark:border-indigo-900/30',
  },
  {
    number: '03',
    title: 'UI Design',
    description: 'Designing high fidelity interfaces with scalable components.',
    icon: <Palette size={24} />,
    color: 'from-purple-500 to-pink-600',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    border: 'border-purple-100 dark:border-purple-900/30',
  },
  {
    number: '04',
    title: 'Prototype',
    description: 'Building interactive prototypes to validate design flows.',
    icon: <Play size={24} />,
    color: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    border: 'border-pink-100 dark:border-pink-900/30',
  },
  {
    number: '05',
    title: 'Development',
    description: 'Transforming UI into responsive frontend experiences using React.',
    icon: <Code size={24} />,
    color: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50 dark:bg-green-950/30',
    border: 'border-green-100 dark:border-green-900/30',
  },
]

export default function DesignProcess() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 section-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">My Approach</p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 dark:text-white">
            My Design <span className="gradient-text">Process</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            A structured approach that transforms ideas into beautiful, functional digital products.
          </p>
        </div>

        <div
          ref={ref}
          className="relative"
        >
          {/* Horizontal connector line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 dark:from-blue-900/50 dark:via-purple-900/50 dark:to-green-900/50 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`${step.bg} border ${step.border} rounded-2xl p-6 text-center card-hover transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                  {step.icon}
                </div>

                {/* Step number */}
                <span className={`text-xs font-bold tracking-widest bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                  STEP {step.number}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mt-2 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
