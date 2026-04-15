import { Locale, getDictionary } from '@/lib/dictionaries'

export default function Experience({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).experience

  return (
    <section id="experience" className="scroll-section">
      <div className="section-header">
        <h2>{dict.title}</h2>
        <p className="section-kicker">{dict.kicker}</p>
        <p className="section-intro">
          {dict.intro}
        </p>
      </div>

      <div className="experience-timeline">
        {dict.items.map((item: any, idx: number) => (
          <article key={idx} className="experience-item tech-card">
            <p className="experience-date">{item.date}</p>
            <h3>{item.role}</h3>
            <p className="experience-company">{item.company}</p>
            <p>
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

