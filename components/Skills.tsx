import { Locale, getDictionary } from '@/lib/dictionaries'

export default function Skills({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).skills

  return (
    <section id="skills" className="scroll-section">
      <div className="section-header">
        <h2>{dict.title}</h2>
        <p className="section-kicker">{dict.kicker}</p>
        <p className="section-intro">
          {dict.intro}
        </p>
      </div>

      <div className="skills-grid">
        {/* // Categoria 1 */}
        <article className="skill-category">
          <h3>{dict.cat1_title}</h3>
          <div className="skills-list">
            <span className="skill-pill">React</span>
            <span className="skill-pill">Next.js</span>
            <span className="skill-pill">Tailwind CSS</span>
            <span className="skill-pill">JavaScript / TypeScript</span>
          </div>
        </article>

        {/* // Categoria 2 */}
        <article className="skill-category">
          <h3>{dict.cat2_title}</h3>
          <div className="skills-list">
            <span className="skill-pill">Node.js / Express</span>
            <span className="skill-pill">Docker</span>
            <span className="skill-pill">Linux</span>
            <span className="skill-pill">SQL</span>
          </div>
        </article>

        {/* // Categoria 3 */}
        <article className="skill-category">
          <h3>{dict.cat3_title}</h3>
          <div className="skills-list">
            {dict.skills_cat3.map((skill: string, index: number) => (
              <span key={index} className="skill-pill">{skill}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

