import { Locale, getDictionary } from '@/lib/dictionaries'

export default function Contact({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).contact

  return (
    <section id="contact" className="scroll-section contact-section">
      <div className="contact-header">
        <h2>{dict.title}</h2>
        <p className="contact-kicker">{dict.kicker}</p>
        <p className="contact-intro">
          {dict.intro}
        </p>
      </div>

      <div className="contact-grid">
        <aside className="contact-info">
          <article className="contact-card">
            <span className="contact-card-badge">01</span>
            <h3>{dict.c1_title}</h3>
            <p className="contact-card-line">{dict.c1_desc}</p>
            <a className="contact-card-link" href="mailto:danieleperez12@gmail.com">
              danieleperez12@gmail.com
            </a>
          </article>

          <article className="contact-card">
            <span className="contact-card-badge">02</span>
            <h3>{dict.c2_title}</h3>
            <p className="contact-card-line">{dict.c2_desc}</p>
            <a
              className="contact-card-link"
              href="https://www.linkedin.com/in/daniel-perez-blank"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/daniel-perez-blank
            </a>
          </article>

          <article className="contact-card">
            <span className="contact-card-badge">03</span>
            <h3>{dict.c3_title}</h3>
            <p className="contact-card-line">{dict.c3_desc}</p>
            <a className="contact-card-link" href="https://github.com/Whatfck" target="_blank" rel="noreferrer">
              github.com/Whatfck
            </a>
          </article>

          <div className="contact-bar">
            <p className="contact-note">{dict.note1}</p>
            <p className="contact-note">{dict.note2}</p>
          </div>
        </aside>
      </div>
    </section>
  )
}

