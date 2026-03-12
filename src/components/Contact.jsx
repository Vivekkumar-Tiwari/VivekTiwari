import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

// ─── EmailJS Config ────────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add a Gmail service  →  copy the Service ID below
// 3. Create an email template (see TEMPLATE SETUP comment below)  →  copy the Template ID
// 4. Go to Account → API Keys  →  copy your Public Key
const EMAILJS_SERVICE_ID  = 'service_q4ab5zn'
const EMAILJS_TEMPLATE_ID = 'DSqX1n7KRfQj6Vw3m'
const EMAILJS_PUBLIC_KEY  = 'v4GQFRk2fRpeXvnhM'

/*
  ── EMAILJS TEMPLATE SETUP ────────────────────────────────────────────────────
  In your EmailJS dashboard → Email Templates → Create New Template, set:

  To email:   tiwarivivek2511@gmail.com
  From name:  {{from_name}}
  Reply-To:   {{reply_to}}          ← so you can reply directly to the client
  Subject:    New Project Inquiry from {{from_name}} – {{service}}

  Body (Plain Text):
  ─────────────────────────────────────────────
  You received a new project inquiry from your portfolio website.

  Name:     {{from_name}}
  Email:    {{reply_to}}
  Company:  {{company}}
  Service:  {{service}}
  Budget:   {{budget}}

  Project Details:
  {{message}}

  ─────────────────────────────────────────────
  Sent via Vivek Tiwari Portfolio
  ─────────────────────────────────────────────
*/

// ─── USD Budget options ────────────────────────────────────────────────────────
const budgetOptions = [
  'Under $100',
  '$100 – $300',
  '$300 – $700',
  '$700 – $1,500',
  '$1,500 – $3,000',
  '$3,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  "Let's Discuss",
]

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    name:    '',
    email:   '',
    company: '',
    service: '',
    budget:  '',
    details: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Build a full message string that includes all form fields.
    // This maps to {{message}} in the EmailJS template so nothing is lost.
    const fullMessage = [
      formData.company ? `Company / Brand: ${formData.company}` : null,
      formData.service ? `Service Required: ${formData.service}` : null,
      formData.budget  ? `Project Budget: ${formData.budget}`   : null,
      '',
      'Project Details:',
      formData.details,
    ].filter((line) => line !== null).join('\n')

    // Variable names MUST match your EmailJS template exactly:
    //   {{name}}    ← client's name
    //   {{email}}   ← client's email  (also used as Reply-To)
    //   {{message}} ← everything else
    const templateParams = {
      name:    formData.name,
      email:   formData.email,
      message: fullMessage,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      )

      toast.success("Message sent! I'll get back to you within 24 hours. 🎉")
      setFormData({ name: '', email: '', company: '', service: '', budget: '', details: '' })
    } catch (err) {
      console.error('EmailJS error:', err)

      // Graceful fallback → open the user's mail client
      const subject = encodeURIComponent(
        `New Contact Form Message from ${formData.name}`
      )
      const body = encodeURIComponent(fullMessage)
      window.location.href = `mailto:tiwarivivek2511@gmail.com?subject=${subject}&body=${body}`

      toast("Opening your email client as a fallback… 📧", { icon: '📬' })
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    { icon: <Mail size={18} />, label: 'Email',    value: 'tiwarivivek2511@gmail.com', href: 'mailto:tiwarivivek2511@gmail.com' },
    { icon: <Phone size={18} />, label: 'Phone',   value: '+91 8767814110',            href: 'tel:+918767814110' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Gujarat, India',          href: null },
  ]

  const inputClass =
    'w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all'

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 dark:text-white">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Tell me about your project and I'll get back to you within 24 hours.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-5 gap-10 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >

          {/* ── Left: Contact info ── */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2">
                Ready to Start?
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Whether you need a complete product designed from scratch or want to
                improve an existing interface, I'd love to hear about your project.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white">
              <p className="font-heading font-bold text-lg mb-2">Prefer social media?</p>
              <p className="text-indigo-100 text-sm mb-4">
                Connect with me on LinkedIn or check out my design work on Dribbble and Behance.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/vivektiwari02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center text-sm font-semibold bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://dribbble.com/Vivekkumar-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center text-sm font-semibold bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                >
                  Dribbble
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-700/50 space-y-5"
            >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="contact-company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company (optional)"
                  className={inputClass}
                />
              </div>

              {/* Service (text input) + Budget (select) */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Service Required
                  </label>
                  <input
                    type="text"
                    name="service"
                    id="contact-service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="e.g. Mobile App Design"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                    Project Budget (USD)
                  </label>
                  <select
                    name="budget"
                    id="contact-budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project details */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                  Project Details *
                </label>
                <textarea
                  name="details"
                  id="contact-details"
                  required
                  rows={5}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell me about your project, goals, timeline and any other relevant details..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="contact-submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
