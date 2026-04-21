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

          <div className="about-languages">
            <h3>{dict.languages_title}</h3>
            {dict.languages.map((lang: any, index: number) => (
              <div key={index} className="language-item">
                <div className="language-info">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.label}</span>
                </div>
                <div className="language-bar-bg">
                  <div 
                    className="language-bar-fill" 
                    style={{ '--bar-width': lang.level } as React.CSSProperties}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className="about-side">
          <article className="about-pill tech-card">
            <h3>{dict.pill1_title}</h3>
            <p>{dict.pill1_text}</p>
          </article>

          <article className="about-pill tech-card">
            <h3>{dict.pill2_title}</h3>
            <p>{dict.pill2_text}</p>
          </article>

          <article className="about-pill tech-card">
            <h3>{dict.pill3_title}</h3>
            <p>{dict.pill3_text}</p>
          </article>

          <article className="about-pill tech-card">
            <h3>{dict.location_title}</h3>
            <p className="about-location-value">{dict.location_value}</p>
            <p className="about-location-note">{dict.location_note}</p>
          </article>
        </aside>
      </div>
    </section>
  )
}

