import { Locale, getDictionary } from '@/lib/dictionaries'

export default function Projects({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).projects

  return (
    <section id="projects" className="scroll-section">
      <div className="section-header">
        <h2>{dict.title}</h2>
        <p className="section-kicker">{dict.kicker}</p>
        <p className="section-intro">
          {dict.intro}
        </p>
      </div>

      <div className="projects-grid">
        {/* // Aqui tu primer proyecto */}
        <article className="project-card">
          <h3>{dict.p1_title}</h3>
          <p>
            {dict.p1_desc}
          </p>
          <div className="project-links">
            <a href="#" className="project-link" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github" aria-hidden="true"></i> {dict.repo}
            </a>
            <a href="#" className="project-link" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-link" aria-hidden="true"></i> {dict.demo}
            </a>
          </div>
        </article>

        {/* // Aqui tu segundo proyecto */}
        <article className="project-card">
          <h3>{dict.p2_title}</h3>
          <p>
            {dict.p2_desc}
          </p>
          <div className="project-links">
            <a href="#" className="project-link" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github" aria-hidden="true"></i> {dict.repo}
            </a>
            <a href="#" className="project-link" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-link" aria-hidden="true"></i> {dict.demo}
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

