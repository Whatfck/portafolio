'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dictionary } from '@/lib/dictionaries'

type ContactFormProps = {
  dict: Dictionary['contact']
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const onChange = (field: keyof typeof formState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error')
      setFeedback(dict.form_error_required)
      return
    }

    setStatus('sending')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error('Failed to submit contact form')
      }

      setStatus('success')
      setFeedback(dict.form_success)
      setFormState({ name: '', email: '', subject: '', message: '', website: '' })
    } catch (_error) {
      setStatus('error')
      setFeedback(dict.form_error)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Form Container */}
      <div className="lg:col-span-7 bg-[var(--surface)] border-2 border-[var(--ink)] p-8 md:p-12 shadow-[8px_8px_0px_0px_var(--ink)] relative">
        <div className="flex items-center justify-between pb-6 border-b-2 border-[var(--ink)] mb-8">
          <span className="font-mono-tech text-xs font-bold tracking-widest uppercase">
            {'//'} {dict.form_title}
          </span>
          <span className="font-mono-tech text-xs px-2 py-0.5 bg-[var(--ink)] text-[var(--bg)] font-bold">
            TLS ENCRYPTED
          </span>
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="font-mono-tech text-xs uppercase font-bold text-[var(--ink)] block">
                {dict.form_name_label} *
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                value={formState.name}
                onChange={(e) => onChange('name', e.target.value)}
                className="w-full bg-[var(--bg)] border-2 border-[var(--ink)] px-4 py-3 font-mono-tech text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all shadow-[2px_2px_0px_0px_var(--ink)]"
                placeholder="e.g. Alex Mercer"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="font-mono-tech text-xs uppercase font-bold text-[var(--ink)] block">
                {dict.form_email_label} *
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                value={formState.email}
                onChange={(e) => onChange('email', e.target.value)}
                className="w-full bg-[var(--bg)] border-2 border-[var(--ink)] px-4 py-3 font-mono-tech text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all shadow-[2px_2px_0px_0px_var(--ink)]"
                placeholder="alex@organization.org"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-subject" className="font-mono-tech text-xs uppercase font-bold text-[var(--ink)] block">
              {dict.form_subject_label}
            </label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              value={formState.subject}
              onChange={(e) => onChange('subject', e.target.value)}
              className="w-full bg-[var(--bg)] border-2 border-[var(--ink)] px-4 py-3 font-mono-tech text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all shadow-[2px_2px_0px_0px_var(--ink)]"
              placeholder="e.g. Cloud Infrastructure / Architecture Review"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-message" className="font-mono-tech text-xs uppercase font-bold text-[var(--ink)] block">
              {dict.form_message_label} *
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              value={formState.message}
              onChange={(e) => onChange('message', e.target.value)}
              className="w-full bg-[var(--bg)] border-2 border-[var(--ink)] p-4 font-mono-tech text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all shadow-[2px_2px_0px_0px_var(--ink)] resize-y min-h-[120px]"
              placeholder="Outline project scope, technical requirements, or system architecture inquiries..."
            />
          </div>

          {/* Honeypot field for bot mitigation - hidden from human view */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formState.website}
              onChange={(e) => onChange('website', e.target.value)}
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto font-mono-tech text-xs font-bold uppercase tracking-wider px-8 py-4 bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors border-2 border-[var(--ink)] shadow-[4px_4px_0px_0px_var(--ink)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <span>{status === 'sending' ? dict.form_sending_label : dict.form_submit_label}</span>
              <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </motion.button>

            <span className="font-mono-tech text-[11px] text-[var(--muted)]">
              {dict.privacy_notice}
            </span>
          </div>

          <AnimatePresence>
            {status === 'error' && feedback && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="p-4 bg-red-100 dark:bg-red-950/40 border-2 border-red-600 text-red-900 dark:text-red-200 font-mono-tech text-xs flex items-center gap-3 shadow-[3px_3px_0px_0px_red]"
              >
                <i className="fa-solid fa-circle-exclamation text-base"></i>
                <span>{feedback}</span>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 bg-[var(--accent)] text-[var(--accent-ink)] border-2 border-[var(--ink)] space-y-3 shadow-[4px_4px_0px_0px_var(--ink)]"
              >
                <div className="flex items-center gap-3 font-bold font-mono-tech text-sm">
                  <i className="fa-solid fa-check-double text-base"></i>
                  <span>{dict.form_success}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle')
                    setFeedback('')
                  }}
                  className="font-mono-tech text-xs uppercase underline font-bold hover:opacity-80"
                >
                  {dict.form_reset}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>

      {/* Verified Professional Channels Aside */}
      <aside className="lg:col-span-5 space-y-6">
        <div className="border-2 border-[var(--ink)] bg-[var(--surface)] p-8 shadow-[6px_6px_0px_0px_var(--ink)] space-y-6">
          <div className="flex items-center justify-between border-b-2 border-[var(--ink)] pb-4">
            <span className="font-mono-tech text-xs text-[var(--muted)] uppercase">01 {'//'} NETWORK NODE</span>
            <span className="font-mono-tech text-xs font-bold text-[var(--accent)] bg-[var(--ink)] px-2 py-0.5">
              VERIFIED
            </span>
          </div>
          <div>
            <span className="font-mono-tech text-xs text-[var(--muted)] block mb-1">
              {dict.linkedin_label}
            </span>
            <h4 className="font-display font-bold text-2xl tracking-tight mb-2">Daniel Pérez</h4>
            <p className="font-mono-tech text-xs text-[var(--muted)] mb-4">
              Estudiante de Ingeniería de Software · Cloud, DevOps & Backend Architecture
            </p>
            <a
              href={dict.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold uppercase px-4 py-2.5 bg-[var(--bg)] border-2 border-[var(--ink)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors shadow-[2px_2px_0px_0px_var(--ink)]"
            >
              <i className="fa-brands fa-linkedin text-sm"></i>
              <span>CONECTAR EN LINKEDIN</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
            </a>
          </div>
        </div>

        <div className="border-2 border-[var(--ink)] bg-[var(--surface)] p-8 shadow-[6px_6px_0px_0px_var(--ink)] space-y-6">
          <div className="flex items-center justify-between border-b-2 border-[var(--ink)] pb-4">
            <span className="font-mono-tech text-xs text-[var(--muted)] uppercase">02 {'//'} CODE BASE</span>
            <span className="font-mono-tech text-xs font-bold text-[var(--bg)] bg-[var(--ink)] px-2 py-0.5">
              PUBLIC
            </span>
          </div>
          <div>
            <span className="font-mono-tech text-xs text-[var(--muted)] block mb-1">
              {dict.github_label}
            </span>
            <h4 className="font-display font-bold text-2xl tracking-tight mb-2">@Whatfck</h4>
            <p className="font-mono-tech text-xs text-[var(--muted)] mb-4">
              Repositorios auditables, infraestructuras Terraform, homelabs y herramientas de sistemas.
            </p>
            <a
              href={dict.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold uppercase px-4 py-2.5 bg-[var(--bg)] border-2 border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors shadow-[2px_2px_0px_0px_var(--ink)]"
            >
              <i className="fa-brands fa-github text-sm"></i>
              <span>EXPLORAR REPOSITORIOS</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
            </a>
          </div>
        </div>
      </aside>
    </div>
  )
}

