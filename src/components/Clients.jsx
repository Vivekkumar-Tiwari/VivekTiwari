const clients = [
  { name: 'Human Garage', abbr: 'HG', color: 'from-blue-500 to-indigo-600' },
  { name: 'Parul University', abbr: 'PU', color: 'from-red-500 to-orange-500' },
  { name: 'Algorion Research', abbr: 'AR', color: 'from-purple-500 to-indigo-500' },
  { name: 'Brainito', abbr: 'BR', color: 'from-green-500 to-teal-500' },
  { name: 'D Art Studio', abbr: 'DA', color: 'from-pink-500 to-rose-500' },
  { name: 'SCOPE Cell', abbr: 'SC', color: 'from-yellow-500 to-orange-500' },
]

// Duplicate for seamless loop
const allClients = [...clients, ...clients]

export default function Clients() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">Collaborations</p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Companies & <span className="gradient-text">Collaborations</span>
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10" />

        <div className="flex animate-marquee gap-8" style={{ width: 'max-content' }}>
          {allClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center gap-4 bg-white dark:bg-slate-800/50 rounded-2xl px-8 py-5 border border-slate-100 dark:border-slate-700/50 shadow-sm shrink-0 min-w-max"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-sm`}>
                {client.abbr}
              </div>
              <span className="font-heading font-semibold text-slate-700 dark:text-slate-200 text-base whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
