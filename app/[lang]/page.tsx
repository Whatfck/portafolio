import Link from 'next/link'
import { getDictionary, Locale } from '@/lib/dictionaries'
import ThemeToggle from '@/components/ThemeToggle'
import ContactForm from '@/components/ContactForm'
import ArchitectureSchematics from '@/components/ArchitectureSchematics'

export default async function BrutalistPortfolio({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dict = getDictionary(lang)
  const altLang = lang === 'en' ? 'es' : 'en'

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] font-sans antialiased transition-colors duration-300 selection:bg-[var(--accent)] selection:text-[var(--accent-ink)]">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 bg-[var(--bg)] border-b-2 border-[var(--ink)] backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="#hero" className="font-display font-black tracking-tighter text-xl hover:text-[var(--accent)] transition-colors">
              DANIEL PÉREZ
            </a>
            <span className="hidden md:inline-block font-mono-tech text-xs px-2.5 py-1 bg-[var(--ink)] text-[var(--bg)] font-bold">
              UCC · 2024–2027
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 font-mono-tech text-xs tracking-widest uppercase">
            <a href="#domains" className="hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] px-2 py-1 transition-colors font-bold">
              {dict.navbar.skills}
            </a>
            <a href="#architecture" className="hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] px-2 py-1 transition-colors font-bold">
              {dict.navbar.architecture}
            </a>
            <a href="#evidence" className="hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] px-2 py-1 transition-colors font-bold">
              {dict.navbar.projects}
            </a>
            <a href="#philosophy" className="hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] px-2 py-1 transition-colors font-bold">
              {dict.navbar.about}
            </a>
            <a href="#contact" className="hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] px-2 py-1 transition-colors font-bold">
              {dict.navbar.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3 font-mono-tech text-xs">
            <Link
              href={`/${altLang}`}
              className="px-3 py-1.5 border-2 border-[var(--ink)] bg-[var(--surface)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors font-bold shadow-[2px_2px_0px_0px_var(--ink)]"
            >
              {altLang.toUpperCase()}
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="max-w-7xl mx-auto px-6 pt-24 pb-36 border-b-2 border-[var(--ink)] bg-[var(--bg)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-9 space-y-10">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-mono-tech text-xs uppercase tracking-widest px-3 py-1 bg-[var(--surface)] border-2 border-[var(--ink)] inline-block font-bold shadow-[2px_2px_0px_0px_var(--ink)]">
                {dict.hero.eyebrow}
              </span>
              <span className="font-mono-tech text-xs px-3 py-1 bg-[var(--ink)] text-[var(--accent)] font-bold">
                {dict.hero.role}
              </span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] tracking-tighter leading-[0.88]">
              {dict.hero.headline_p1} <br />
              <span className="text-[var(--muted)]">{dict.hero.headline_p2}</span>
            </h1>

            <p className="text-xl md:text-2xl font-normal leading-relaxed text-[var(--ink)] max-w-3xl">
              {dict.hero.copy}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#evidence"
                className="font-mono-tech text-xs uppercase font-bold px-8 py-4 bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors border-2 border-[var(--ink)] shadow-[4px_4px_0px_0px_var(--ink)] inline-flex items-center gap-3"
              >
                <span>{dict.hero.btn_work}</span>
                <i className="fa-solid fa-arrow-down text-[10px]"></i>
              </a>

              <a
                href="#architecture"
                className="font-mono-tech text-xs uppercase font-bold px-8 py-4 bg-[var(--surface)] border-2 border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors shadow-[4px_4px_0px_0px_var(--ink)] inline-flex items-center gap-3"
              >
                <span>{dict.hero.btn_schematics}</span>
                <i className="fa-solid fa-network-wired text-[10px]"></i>
              </a>

              <a
                href={dict.hero.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tech text-xs uppercase font-bold px-6 py-4 bg-[var(--bg)] border-2 border-[var(--ink)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors shadow-[4px_4px_0px_0px_var(--ink)] inline-flex items-center gap-2"
              >
                <i className="fa-brands fa-github text-sm"></i>
                <span>GITHUB</span>
              </a>

              <a
                href={dict.hero.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tech text-xs uppercase font-bold px-6 py-4 bg-[var(--bg)] border-2 border-[var(--ink)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors shadow-[4px_4px_0px_0px_var(--ink)] inline-flex items-center gap-2"
              >
                <i className="fa-brands fa-linkedin text-sm"></i>
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* Right Aside Specs */}
          <div className="lg:col-span-3 border-t-2 lg:border-t-0 lg:border-l-2 border-[var(--ink)] lg:pl-8 pt-8 lg:pt-0 space-y-6 font-mono-tech text-xs">
            <div className="p-4 bg-[var(--surface)] border-2 border-[var(--ink)] shadow-[3px_3px_0px_0px_var(--ink)]">
              <span className="text-[var(--muted)] block mb-1 uppercase">{'//'} {dict.hero.meta_domain_label}</span>
              <p className="text-sm font-bold text-[var(--ink)]">{dict.hero.meta_domain_val}</p>
            </div>
            <div className="p-4 bg-[var(--surface)] border-2 border-[var(--ink)] shadow-[3px_3px_0px_0px_var(--ink)]">
              <span className="text-[var(--muted)] block mb-1 uppercase">{'//'} {dict.hero.meta_stack_label}</span>
              <p className="text-sm font-bold text-[var(--ink)]">{dict.hero.meta_stack_val}</p>
            </div>
            <div className="p-4 bg-[var(--surface)] border-2 border-[var(--ink)] shadow-[3px_3px_0px_0px_var(--ink)]">
              <span className="text-[var(--muted)] block mb-1 uppercase">{'//'} {dict.hero.meta_base_label}</span>
              <p className="text-sm font-bold text-[var(--ink)]">{dict.hero.meta_base_val}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01: Systems & Core Capabilities */}
      <section id="domains" className="py-32 border-b-2 border-[var(--ink)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono-tech text-xs text-[var(--muted)] block mb-2">{dict.skills.kicker}</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-4">{dict.skills.title}</h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl">{dict.skills.intro}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dict.skills.categories.map((cat, idx) => (
              <div
                key={idx}
                className="border-2 border-[var(--ink)] p-8 bg-[var(--bg)] flex flex-col justify-between space-y-8 shadow-[6px_6px_0px_0px_var(--ink)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b-2 border-[var(--ink)] pb-4 mb-6">
                    <span className="font-mono-tech text-xs text-[var(--muted)]">{cat.tag}</span>
                    <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[var(--ink)] text-[var(--accent)] font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-6 tracking-tight">{cat.title}</h3>
                  <ul className="space-y-4 font-mono-tech text-xs">
                    {cat.items.map((item, i) => (
                      <li key={i} className="border-b border-[var(--ink)]/20 pb-3">
                        <span className="font-bold text-sm block text-[var(--ink)]">{item.name}</span>
                        <span className="text-[var(--muted)] mt-0.5 block leading-snug">{item.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02: Architecture & Engineering Schematics */}
      <section id="architecture" className="max-w-7xl mx-auto px-6 py-32 border-b-2 border-[var(--ink)] bg-[var(--bg)]">
        <div className="mb-16">
          <span className="font-mono-tech text-xs text-[var(--muted)] block mb-2">{dict.architecture.kicker}</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-4">{dict.architecture.title}</h2>
          <p className="text-xl text-[var(--muted)] max-w-2xl">{dict.architecture.intro}</p>
        </div>

        <ArchitectureSchematics schematics={dict.architecture.schematics} />
      </section>

      {/* Section 03: Selected Work & Evidence (Dominant Case Study + Secondary Systems) */}
      <section id="evidence" className="py-32 border-b-2 border-[var(--ink)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="border-b-2 border-[var(--ink)] pb-12">
            <span className="font-mono-tech text-xs text-[var(--muted)] block mb-2">{dict.projects.kicker}</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-4">{dict.projects.title}</h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl">{dict.projects.intro}</p>
          </div>

          {/* FEATURED CASE STUDY (Dominant Visual Treatment) */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[var(--accent)] border-2 border-[var(--ink)]"></span>
              <span className="font-mono-tech text-xs font-bold uppercase tracking-widest">
                {dict.projects.featured_label}
              </span>
            </div>

            <article className="border-2 border-[var(--ink)] bg-[var(--bg)] p-8 md:p-14 shadow-[10px_10px_0px_0px_var(--ink)] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="font-mono-tech text-xs px-3 py-1 bg-[var(--surface)] border-2 border-[var(--ink)] font-bold shadow-[2px_2px_0px_0px_var(--ink)] inline-block mb-3">
                    {dict.projects.featured.kicker}
                  </span>
                  <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight">
                    {dict.projects.featured.title}
                  </h3>
                  <p className="font-mono-tech text-sm text-[var(--muted)] mt-2 font-semibold">
                    {dict.projects.featured.subtitle}
                  </p>
                </div>

                <p className="text-xl text-[var(--ink)] leading-relaxed">
                  {dict.projects.featured.desc}
                </p>

                {/* Structured Investigation: Problem & Constraints */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-6 bg-[var(--surface)] border-2 border-[var(--ink)] space-y-2 shadow-[3px_3px_0px_0px_var(--ink)]">
                    <span className="font-mono-tech text-xs font-bold uppercase text-[var(--muted)] block">
                      01 {'//'} CONTEXT & PROBLEM
                    </span>
                    <p className="font-mono-tech text-xs leading-relaxed">
                      {dict.projects.featured.problem}
                    </p>
                  </div>

                  <div className="p-6 bg-[var(--surface)] border-2 border-[var(--ink)] space-y-2 shadow-[3px_3px_0px_0px_var(--ink)]">
                    <span className="font-mono-tech text-xs font-bold uppercase text-[var(--muted)] block">
                      02 {'//'} TECHNICAL CONSTRAINTS
                    </span>
                    <ul className="space-y-1.5 font-mono-tech text-xs">
                      {dict.projects.featured.constraints.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[var(--accent-ink)] bg-[var(--accent)] px-1 text-[9px] font-bold mt-0.5">✓</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Architecture & Tradeoffs */}
                <div className="p-6 bg-[var(--surface)] border-2 border-[var(--ink)] space-y-4 shadow-[3px_3px_0px_0px_var(--ink)]">
                  <div>
                    <span className="font-mono-tech text-xs font-bold uppercase text-[var(--muted)] block mb-1">
                      03 {'//'} ARCHITECTURAL CONTRIBUTION
                    </span>
                    <p className="font-mono-tech text-xs leading-relaxed">
                      {dict.projects.featured.architecture}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[var(--ink)]/30">
                    <span className="font-mono-tech text-xs font-bold uppercase text-amber-700 dark:text-amber-400 block mb-1">
                      04 {'//'} SYSTEM TRADE-OFFS
                    </span>
                    <p className="font-mono-tech text-xs leading-relaxed">
                      {dict.projects.featured.trade_offs}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {dict.projects.featured.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono-tech text-xs px-3 py-1 bg-[var(--surface)] border-2 border-[var(--ink)] font-bold shadow-[2px_2px_0px_0px_var(--ink)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href={dict.projects.featured.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-mono-tech text-xs uppercase tracking-wider px-8 py-4 bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors font-bold border-2 border-[var(--ink)] shadow-[4px_4px_0px_0px_var(--ink)]"
                  >
                    <span>{dict.projects.repo_label}</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                </div>
              </div>

              {/* Visual Panel for Featured Project */}
              <div className="lg:col-span-5 space-y-6">
                <div className="border-2 border-[var(--ink)] overflow-hidden bg-[var(--bg)] p-3 shadow-[8px_8px_0px_0px_var(--ink)]">
                  <img
                    src={dict.projects.featured.image_url}
                    alt={dict.projects.featured.image_alt}
                    className="w-full h-[400px] object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="p-4 font-mono-tech text-xs text-[var(--muted)] flex justify-between items-center border-t-2 border-[var(--ink)] mt-3">
                    <span>EVIDENCE REF: WHATFCK/{dict.projects.featured.title}</span>
                    <span className="font-bold text-[var(--ink)]">VERIFIED SOURCE</span>
                  </div>
                </div>

                <div className="p-6 bg-[var(--bg)] border-2 border-[var(--ink)] shadow-[4px_4px_0px_0px_var(--ink)] space-y-2">
                  <span className="font-mono-tech text-xs uppercase font-bold text-[var(--muted)] block">
                    05 {'//'} VALIDATED OUTCOME
                  </span>
                  <p className="font-mono-tech text-xs leading-relaxed">
                    {dict.projects.featured.outcome}
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* SUPPORTING SYSTEMS (Secondary Grid Format) */}
          <div className="space-y-8 pt-8">
            <div className="flex items-center gap-3 border-t-2 border-[var(--ink)] pt-12">
              <span className="w-3 h-3 bg-[var(--ink)]"></span>
              <span className="font-mono-tech text-xs font-bold uppercase tracking-widest">
                {dict.projects.supporting_label}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dict.projects.supporting.map((project, idx) => (
                <article
                  key={idx}
                  className="border-2 border-[var(--ink)] bg-[var(--bg)] p-8 shadow-[6px_6px_0px_0px_var(--ink)] flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b-2 border-[var(--ink)] pb-3">
                      <span className="font-mono-tech text-xs font-bold text-[var(--muted)]">
                        {project.category}
                      </span>
                      <span className="font-mono-tech text-xs px-2 py-0.5 bg-[var(--ink)] text-[var(--bg)] font-bold">
                        0{idx + 2}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-3xl tracking-tight text-[var(--ink)]">
                      {project.title}
                    </h4>

                    <p className="text-base text-[var(--muted)] leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="p-4 bg-[var(--surface)] border-2 border-[var(--ink)] space-y-1.5 shadow-[2px_2px_0px_0px_var(--ink)]">
                      <span className="font-mono-tech text-[10px] uppercase font-bold text-[var(--muted)] block">
                        Architecture Design
                      </span>
                      <p className="font-mono-tech text-xs leading-snug">
                        {project.architecture}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="font-mono-tech text-[11px] px-2.5 py-1 bg-[var(--surface)] border border-[var(--ink)] font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-[var(--ink)] flex items-center justify-between">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-tech text-xs uppercase font-bold text-[var(--ink)] hover:text-[var(--accent)] underline inline-flex items-center gap-2"
                    >
                      <span>AUDITAR REPOSITORIO</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                    </a>
                    <span className="font-mono-tech text-[10px] text-[var(--muted)]">WHATFCK</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Philosophy & Foundations */}
      <section id="philosophy" className="max-w-7xl mx-auto px-6 py-32 border-b-2 border-[var(--ink)] bg-[var(--bg)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 sticky top-28">
            <span className="font-mono-tech text-xs text-[var(--muted)] block mb-2">{dict.about.kicker}</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-6">{dict.about.title}</h2>
            <p className="font-mono-tech text-xs text-[var(--muted)] leading-relaxed">
              Universidad Cooperativa de Colombia (UCC) · 2024–2027. Rigor conceptual y experimentación empírica.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <blockquote className="border-l-4 border-[var(--ink)] pl-8 font-display text-2xl md:text-3xl leading-snug">
              &ldquo;{dict.about.lead}&rdquo;
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base leading-relaxed">
              <div className="p-8 bg-[var(--surface)] border-2 border-[var(--ink)] space-y-4 shadow-[4px_4px_0px_0px_var(--ink)]">
                <span className="font-mono-tech text-xs text-[var(--ink)] font-bold block">
                  01 {'//'} ARCHITECTURAL INTENT
                </span>
                <p>{dict.about.p1}</p>
              </div>

              <div className="p-8 bg-[var(--surface)] border-2 border-[var(--ink)] space-y-4 shadow-[4px_4px_0px_0px_var(--ink)]">
                <span className="font-mono-tech text-xs text-[var(--ink)] font-bold block">
                  02 {'//'} SYSTEMS MINDSET
                </span>
                <p>{dict.about.p2}</p>
              </div>
            </div>

            <div className="p-8 border-2 border-[var(--ink)] bg-[var(--surface)] space-y-6 shadow-[4px_4px_0px_0px_var(--ink)]">
              <div className="flex items-center justify-between border-b-2 border-[var(--ink)] pb-4">
                <span className="font-mono-tech text-xs text-[var(--muted)] uppercase font-bold">
                  {dict.about.languages_title}
                </span>
                <span className="font-mono-tech text-xs px-2 py-0.5 bg-[var(--ink)] text-[var(--bg)] font-bold">
                  DOCUMENTATION PROFICIENT
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dict.about.languages.map((langItem, idx) => (
                  <div key={idx} className="p-4 bg-[var(--bg)] border-2 border-[var(--ink)] flex items-center justify-between">
                    <div>
                      <p className="font-mono-tech text-sm font-bold">{langItem.name}</p>
                      <p className="font-mono-tech text-xs text-[var(--muted)]">{langItem.level}</p>
                    </div>
                    <span className="font-mono-tech text-xs font-bold px-2.5 py-1 bg-[var(--accent)] text-[var(--accent-ink)] border border-[var(--ink)]">
                      {langItem.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Direct Transmission Channel (Interactive Brutalist Contact Form) */}
      <section id="contact" className="py-32 bg-[var(--bg)] border-b-2 border-[var(--ink)]">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div>
            <span className="font-mono-tech text-xs text-[var(--muted)] block mb-2">{dict.contact.kicker}</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-4">{dict.contact.title}</h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl">{dict.contact.intro}</p>
          </div>

          <ContactForm dict={dict.contact} />
        </div>
      </section>

      {/* Publication Footer */}
      <footer className="bg-[#171717] text-[#F2EFE8] border-t-2 border-[var(--ink)] py-16 px-6 font-mono-tech text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p>{dict.footer.rights}</p>
          <div className="flex items-center gap-6 text-[#A3A299]">
            <span>{dict.footer.engineering_creed}</span>
            <span>·</span>
            <a
              href="https://github.com/Whatfck"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2EFE8] transition-colors underline"
            >
              GitHub (@Whatfck)
            </a>
            <span>·</span>
            <a
              href="https://linkedin.com/in/daniel-perez-blank"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2EFE8] transition-colors underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
