import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'I offer UI/UX Design, Mobile App Design, Website UI Design, React Frontend Development, and Branding & Visual Design. Whether you need a full product redesign, a new mobile app interface, or a React-powered website built from a Figma file — I can help.',
  },
  {
    question: 'Do you work with startups?',
    answer: 'Absolutely! Startups are my favorite clients to work with. I understand the need to move fast, validate ideas quickly, and build MVPs that look polished without breaking the bank. I offer flexible engagement models suited to early-stage teams.',
  },
  {
    question: 'What tools do you use?',
    answer: 'For design: Figma (primary), Adobe Photoshop, Illustrator, and Premiere Pro. For development: React, Tailwind CSS, HTML5/CSS3, and Java + Firebase for Android. Project collaboration via Notion and Slack.',
  },
  {
    question: 'Can you build React websites from Figma designs?',
    answer: 'Yes! This is one of my core services. I can take your Figma designs (or create them from scratch) and translate them into clean, responsive React code using Tailwind CSS and modern component architecture. Pixel-perfect implementation is my standard.',
  },
  {
    question: 'How can we start a project together?',
    answer: "It's simple! Fill out the contact form below or email me at tiwarivivek2511@gmail.com. Tell me about your project — what you're building, timeline, and budget. I'll get back to you within 24 hours to schedule an intro call and discuss next steps.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Everything you need to know before we start working together.
          </p>
        </div>

        {/* Accordion */}
        <div ref={ref} className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border border-slate-100 dark:border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${openIndex === i ? 'bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-100 dark:border-indigo-900/30' : 'bg-white dark:bg-slate-800/30'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                id={`faq-${i}`}
              >
                <span className="font-heading font-semibold text-slate-900 dark:text-white text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-indigo-600 dark:text-indigo-400 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-64 pb-6' : 'max-h-0'
                }`}
              >
                <p className="px-6 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
