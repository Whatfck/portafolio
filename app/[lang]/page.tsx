import Link from 'next/link'
import { getDictionary, Locale } from '@/lib/dictionaries'
import ThemeToggle from '@/components/ThemeToggle'

export default async function BrutalistPortfolio({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const dict = getDictionary(lang)
  const altLang = lang === 'en' ? 'es' : 'en'

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] font-sans antialiased transition-colors duration-300 selection:bg-[var(--accent)] selection:text-[var(--accent-ink)]">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 bg-[var(--bg)] border-b-2 border-[var(--ink)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-display font-black tracking-tighter text-xl">DANIEL PÉREZ</span>
            <span className="hidden md:inline-block font-mono-tech text-xs px-2.5 py-1 bg-[var(--ink)] text-[var(--bg)] font-bold">
              UCC · 2024–2027
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-mono-tech text-xs tracking-widest uppercase">
            <a href="#about" className="hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] px-2.5 py-1 transition-colors font-bold">01. Identity</a>
            <a href="#systems" className="hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] px-2.5 py-1 transition-colors font-bold">02. Systems</a>
            <a href="#evidence" className="hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] px-2.5 py-1 transition-colors font-bold">03. Evidence</a>
            <a href="#contact" className="hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] px-2.5 py-1 transition-colors font-bold">04. Contact</a>
          </nav>

          <div className="flex items-center gap-3 font-mono-tech text-xs">
            <Link
              href={`/${altLang}`}
              className="px-3 py-1.5 border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors font-bold"
            >
              {altLang.toUpperCase()}
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-40 border-b-2 border-[var(--ink)] bg-[var(--bg)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-9 space-y-10">
            <span className="font-mono-tech text-xs uppercase tracking-widest px-3 py-1.5 bg-[var(--surface)] border border-[var(--ink)] inline-block font-bold">
              {dict.hero.eyebrow}
            </span>
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[9.5rem] tracking-tighter leading-[0.88]">
              SYSTEMS <br />
              <span className="text-[var(--muted)]">WITH CHARACTER.</span>
            </h1>
            <p className="text-xl md:text-2xl font-normal leading-relaxed text-[var(--ink)] max-w-3xl">
              {dict.hero.copy}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#evidence"
                className="font-mono-tech text-xs uppercase font-bold px-8 py-4 bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors border-2 border-[var(--ink)] shadow-[4px_4px_0px_0px_var(--ink)]"
              >
                {dict.hero.btn_work}
              </a>
              <a
                href={dict.hero.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tech text-xs uppercase font-bold px-8 py-4 bg-[var(--surface)] border-2 border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors shadow-[4px_4px_0px_0px_var(--ink)]"
              >
                GITHUB / @Whatfck
              </a>
            </div>
          </div>
          <div className="lg:col-span-3 border-t-2 lg:border-t-0 lg:border-l-2 border-[var(--ink)] lg:pl-8 pt-8 lg:pt-0 space-y-6 font-mono-tech text-xs">
            <div>
              <span className="text-[var(--muted)] block mb-1">PRIMARY DOMAIN</span>
              <p className="text-sm font-bold uppercase">Backend & Cloud Infrastructure</p>
            </div>
            <div>
              <span className="text-[var(--muted)] block mb-1">CORE STACK</span>
              <p className="text-sm font-bold">Rust · Java · Python · Terraform · AWS</p>
            </div>
            <div>
              <span className="text-[var(--muted)] block mb-1">BASE LOCATION</span>
              <p className="text-sm font-bold">Pasto, Colombia (UTC-5)</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Surface Field) */}
      <section id="about" className="py-36 border-b-2 border-[var(--ink)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 sticky top-28">
              <span className="font-mono-tech text-xs text-[var(--muted)] block mb-2">{dict.about.kicker}</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-6">{dict.about.title}</h2>
              <p className="font-mono-tech text-xs text-[var(--muted)] leading-relaxed">
                Universidad Cooperativa de Colombia (UCC) · 2024–2027. Engineering rigor over superficial aesthetics.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <blockquote className="border-l-4 border-[var(--ink)] pl-8 font-display text-2xl md:text-4xl leading-tight">
                &ldquo;{dict.about.lead}&rdquo;
              </blockquote>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed">
                <div className="p-8 bg-[var(--bg)] border-2 border-[var(--ink)] space-y-4 shadow-[4px_4px_0px_0px_var(--ink)]">
                  <span className="font-mono-tech text-xs text-[var(--ink)] font-bold block">01 // ARCHITECTURAL INTENT</span>
                  <p>{dict.about.p1}</p>
                </div>
                <div className="p-8 bg-[var(--bg)] border-2 border-[var(--ink)] space-y-4 shadow-[4px_4px_0px_0px_var(--ink)]">
                  <span className="font-mono-tech text-xs text-[var(--ink)] font-bold block">02 // SYSTEMS MINDSET</span>
                  <p>{dict.about.p2}</p>
                </div>
              </div>

              <div className="p-8 border-2 border-[var(--ink)] bg-[var(--bg)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-[4px_4px_0px_0px_var(--ink)]">
                <div>
                  <span className="font-mono-tech text-xs text-[var(--muted)] block mb-1">ENGINEERING PRINCIPLE</span>
                  <p className="font-mono-tech text-sm font-bold">{dict.about.highlight_text}</p>
                </div>
                <div className="font-mono-tech text-xs px-4 py-2 bg-[var(--accent)] text-[var(--accent-ink)] font-bold whitespace-nowrap border-2 border-[var(--ink)] shadow-[2px_2px_0px_0px_var(--ink)]">
                  ANTI-SLOP DECLARED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills / Systems Section (Canvas Field) */}
      <section id="systems" className="max-w-7xl mx-auto px-6 py-36 border-b-2 border-[var(--ink)] bg-[var(--bg)]">
        <div className="mb-20">
          <span className="font-mono-tech text-xs text-[var(--muted)] block mb-2">{dict.skills.kicker}</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-6">{dict.skills.title}</h2>
          <p className="text-xl text-[var(--muted)] max-w-2xl">{dict.skills.intro}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {dict.skills.categories.map((cat, idx) => (
            <div key={idx} className="border-2 border-[var(--ink)] p-10 bg-[var(--surface)] flex flex-col justify-between space-y-8 shadow-[6px_6px_0px_0px_var(--ink)]">
              <div>
                <span className="font-mono-tech text-xs text-[var(--muted)] block mb-4">DOMAIN 0{idx + 1}</span>
                <h3 className="font-display font-bold text-2xl mb-8 tracking-tight">{cat.title}</h3>
                <ul className="space-y-4 font-mono-tech text-sm">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center justify-between border-b border-[var(--ink)] pb-3 font-semibold">
                      <span>{item}</span>
                      <span className="text-[var(--muted)] text-xs">VERIFIED</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work / Evidence Section (Surface Field) */}
      <section id="evidence" className="py-36 border-b-2 border-[var(--ink)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="font-mono-tech text-xs text-[var(--muted)] block mb-2">{dict.projects.kicker}</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-6">{dict.projects.title}</h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl">{dict.projects.intro}</p>
          </div>

          <div className="space-y-36">
            {dict.projects.items.map((project, idx) => (
              <article key={idx} className="border-t-2 border-[var(--ink)] pt-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-6 space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="font-mono-tech text-xs px-3 py-1 bg-[var(--bg)] border-2 border-[var(--ink)] font-bold shadow-[2px_2px_0px_0px_var(--ink)]">CASE STUDY 0{idx + 1}</span>
                    <span className="font-mono-tech text-xs text-[var(--muted)]">PRODUCTION GRADE</span>
                  </div>
                  <h3 className="font-display font-bold text-4xl md:text-5xl tracking-tight">{project.title}</h3>
                  <p className="text-xl text-[var(--muted)] leading-relaxed">{project.desc}</p>
                  
                  <div className="p-6 bg-[var(--bg)] border-2 border-[var(--ink)] space-y-3 shadow-[4px_4px_0px_0px_var(--ink)]">
                    <span className="font-mono-tech text-xs uppercase tracking-wider text-[var(--muted)] block">Architecture & Decision</span>
                    <p className="font-mono-tech text-sm leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="font-mono-tech text-xs px-3 py-1.5 bg-[var(--bg)] border-2 border-[var(--ink)] font-bold shadow-[2px_2px_0px_0px_var(--ink)]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 font-mono-tech text-xs uppercase tracking-wider px-8 py-4 bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors font-bold border-2 border-[var(--ink)] shadow-[4px_4px_0px_0px_var(--ink)]"
                    >
                      <span>{dict.projects.repo_label}</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="border-2 border-[var(--ink)] overflow-hidden bg-[var(--bg)] p-3 shadow-[8px_8px_0px_0px_var(--ink)]">
                    <img
                      src={project.image_url}
                      alt={project.image_alt}
                      className="w-full h-[450px] object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="p-4 font-mono-tech text-xs text-[var(--muted)] flex justify-between items-center border-t-2 border-[var(--ink)] mt-3">
                      <span>EVIDENCE REF: WHATFCK/{project.title}</span>
                      <span>VERIFIED REPO</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (Inverted Ink Black Field for maximum punch) */}
      <section id="contact" className="py-36 bg-[#171717] text-[#F2EFE8] border-b-2 border-[var(--ink)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono-tech text-xs text-[#A3A299] block">04 / COMUNICACIÓN</span>
              <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight">{dict.contact.title}</h2>
              <p className="text-xl text-[#A3A299]">{dict.contact.intro}</p>
            </div>
            <div className="lg:col-span-7">
              <div className="p-12 border-2 border-[#F2EFE8] bg-[#121210] space-y-8 shadow-[8px_8px_0px_0px_#F2EFE8]">
                <div>
                  <span className="font-mono-tech text-xs text-[#A3A299] block mb-2">DIRECT EMAIL CHANNEL</span>
                  <a href={`mailto:${dict.contact.email}`} className="font-display font-bold text-2xl md:text-4xl hover:text-[var(--accent)] transition-colors underline break-all">
                    {dict.contact.email}
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t-2 border-[#2E2E2A] font-mono-tech text-sm">
                  <div>
                    <span className="text-[#A3A299] block mb-1">LOCATION</span>
                    <p>{dict.contact.location}</p>
                  </div>
                  <div>
                    <span className="text-[#A3A299] block mb-1">GITHUB</span>
                    <a href={dict.contact.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--accent)]">
                      {dict.contact.github}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171717] text-[#F2EFE8] border-t-2 border-[#2E2E2A] py-16 px-6 font-mono-tech text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p>{dict.footer.rights}</p>
          <div className="flex items-center gap-6 text-[#A3A299]">
            <span>Systems with character</span>
            <span>·</span>
            <a href="https://github.com/Whatfck" target="_blank" rel="noopener noreferrer" className="hover:text-[#F2EFE8] transition-colors">GitHub (@Whatfck)</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
