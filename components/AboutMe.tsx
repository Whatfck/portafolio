import { Locale, getDictionary } from '@/lib/dictionaries'

export default function AboutMe({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).about

  return (
    <section id="about" className="scroll-section about-section">
      <div className="about-header">
        <h2>{dict.title}</h2>
        <p className="about-kicker">{dict.kicker}</p>
      </div>

      <div className="about-layout">
        <article className="about-main">
          <p className="about-lead">
            {dict.lead}
          </p>

          <p>
            {dict.p1}
          </p>

          <p>
            {dict.p2}
          </p>

          <div className="about-highlight">
            <h3>{dict.highlight_title}</h3>
            <p>
              {dict.highlight_text}
            </p>
          </div>
        </article>

        <aside className="about-side">
          <article className="about-pill">
            <h3>{dict.pill1_title}</h3>
            <p>{dict.pill1_text}</p>
          </article>

          <article className="about-pill">
            <h3>{dict.pill2_title}</h3>
            <p>{dict.pill2_text}</p>
          </article>

          <article className="about-pill">
            <h3>{dict.pill3_title}</h3>
            <p>{dict.pill3_text}</p>
          </article>
        </aside>
      </div>
    </section>
  )
}

