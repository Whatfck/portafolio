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
        {/* // Aqui tu experiencia mas reciente */}
        <article className="experience-item">
          <p className="experience-date">{dict.current_date}</p>
          <h3>{dict.current_role}</h3>
          <p className="experience-company">{dict.current_company}</p>
          <p>
            {dict.current_desc}
          </p>
        </article>

        {/* // Aqui tu universidad */}
        <article className="experience-item">
          <p className="experience-date">{dict.edu_date}</p>
          <h3>{dict.edu_role}</h3>
          <p className="experience-company">{dict.edu_company}</p>
          <p>
            {dict.edu_desc}
          </p>
        </article>
      </div>
    </section>
  )
}

