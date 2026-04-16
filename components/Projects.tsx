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
        {dict.items.map((project: any, index: number) => (
          <article key={index} className="project-card">
            <div className="project-placeholder" aria-hidden="true">
              <span>Preview</span>
            </div>
            <h3>{project.title}</h3>
            <p>
              {project.desc}
            </p>
            <div className="project-links">
              <a href={project.repo} className="project-link" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github" aria-hidden="true"></i> {dict.repo_label}
              </a>
              {project.demo !== '#' && (
                <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-link" aria-hidden="true"></i> {dict.demo_label}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

