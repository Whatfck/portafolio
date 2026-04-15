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
        <div className="section-focus-badge">
          <p>{dict.focus}</p>
        </div>
      </div>

      <div className="bento-grid">
        {dict.categories.map((category: any, idx: number) => {
          // Logic for bento sizing based on category title
          const titleLower = category.title.toLowerCase();
          const isMain = titleLower.includes('sistema') || titleLower.includes('infra');
          const isWide = titleLower.includes('desarrollo') || titleLower.includes('web');
          
          let bentoClass = 'bento-item';
          if (isMain) bentoClass += ' bento-large tech-card';
          else if (isWide) bentoClass += ' bento-wide';

          return (
            <article key={idx} className={bentoClass}>
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.items.map((item: string, itemIdx: number) => (
                  <span key={itemIdx} className="skill-pill">{item}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  )
}

