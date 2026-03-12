export default function CTA() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Floating blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-5 py-2 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Currently Available for Projects
        </div>

        {/* Headline */}
        <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
          Have a project
          <br />
          in mind?
        </h2>

        <p className="text-xl text-indigo-100 mb-4 font-medium">
          Let's build something amazing together.
        </p>
        <p className="text-indigo-200 max-w-xl mx-auto mb-12 text-sm leading-relaxed">
          From concept to launch — I bring design intuition and frontend expertise to every collaboration. Let's create something you'll be proud of.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            id="cta-lets-talk"
            className="group px-10 py-4 bg-white text-indigo-700 font-bold rounded-2xl hover:bg-indigo-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-lg"
          >
            Let's Talk
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
          <a
            href="https://www.linkedin.com/in/vivektiwari02/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
          {[
            { value: '24h', label: 'Response Time' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '20+', label: 'Projects Done' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading font-black text-3xl sm:text-4xl text-white">{stat.value}</p>
              <p className="text-indigo-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
