import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Hailey Badovinac',
    company: 'Human Garage (USA)',
    role: 'Visual Director',
    rating: 4.5,
    review: "Vivek brought a fresh, thoughtful perspective to our design challenges. His ability to understand user needs while delivering visually stunning interfaces made a real difference to our product. He's professional, responsive, and genuinely talented.",
    avatar: 'HB',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Ronak Mogra',
    company: 'Independent Creator',
    role: 'Social Media Designer',
    rating: 4,
    review: "Working with Vivek was a great experience. He understood my brand vision quickly and delivered creative assets that perfectly matched my aesthetic. His designs stood out and got great engagement. Would definitely recommend!",
    avatar: 'RM',
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Divyang Patel',
    company: 'D Art Studio',
    role: 'Creative Director',
    rating: 5,
    review: "Absolutely exceptional work! Vivek designed a complete brand identity and website UI for our studio. Every detail was considered – from typography to color hierarchy. The final result was beyond our expectations. Highly recommended!",
    avatar: 'DP',
    color: 'from-green-400 to-emerald-500',
  },
  {
    name: 'Sarah Kim',
    company: 'TechVentures Inc.',
    role: 'Startup Founder',
    rating: 5,
    review: "Vivek designed the entire MVP UI for our startup in just two weeks. The onboarding flow he created was intuitive and our beta users loved it. He's a rare talent who combines designer sensibility with developer pragmatism.",
    avatar: 'SK',
    color: 'from-orange-400 to-rose-500',
  },
  {
    name: 'Arjun Mehta',
    company: 'ProductCore Labs',
    role: 'Product Manager',
    rating: 4.8,
    review: "Vivek consistently delivered high-quality UI mockups ahead of schedule. His design thinking approach helped us identify UX gaps we hadn't even considered. He's become our go-to designer for all frontend and design needs.",
    avatar: 'AM',
    color: 'from-indigo-400 to-blue-500',
  },
]

function StarRating({ rating }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<Star key={i} size={16} className="star-full fill-current" />)
    } else if (i - rating < 1 && i - rating > 0) {
      stars.push(<Star key={i} size={16} className="star-half" style={{ fill: 'url(#half-star)' }} />)
    } else {
      stars.push(<Star key={i} size={16} className="star-empty" />)
    }
  }
  return (
    <div className="flex items-center gap-1">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="half-star" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#CBD5E1" />
          </linearGradient>
        </defs>
      </svg>
      {stars}
      <span className="text-sm font-bold text-slate-700 dark:text-slate-200 ml-1">{rating}</span>
    </div>
  )
}

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Client <span className="gradient-text">Feedback</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            What clients and collaborators say about working with me.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-7 border border-slate-100 dark:border-slate-700/50 card-hover flex flex-col gap-4 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote mark */}
              <div className="text-5xl font-heading text-indigo-200 dark:text-indigo-800 leading-none select-none">"</div>

              {/* Review text */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-1">
                {t.review}
              </p>

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Author */}
              <div className="flex items-center gap-4 pt-2 border-t border-slate-100 dark:border-slate-700">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
