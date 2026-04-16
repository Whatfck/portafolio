"use client"

import { useState } from 'react'
import { Locale, getDictionary } from '@/lib/dictionaries'

export default function Skills({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).skills
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

  const activeCategory = dict.categories[activeCategoryIndex] ?? dict.categories[0]

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

      <div className="skills-mobile-switcher" role="tablist" aria-label="Categorias de habilidades">
        {dict.categories.map((category: any, idx: number) => (
          <button
            key={`skills-tab-${idx}`}
            type="button"
            role="tab"
            aria-selected={activeCategoryIndex === idx}
            aria-controls="skills-mobile-panel"
            className={`skills-mobile-btn${activeCategoryIndex === idx ? ' is-active' : ''}`}
            onClick={() => setActiveCategoryIndex(idx)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <article id="skills-mobile-panel" className="skills-mobile-panel tech-card" key={activeCategoryIndex}>
        <h3>{activeCategory.title}</h3>
        <div className="skills-list">
          {activeCategory.items.map((item: string, itemIdx: number) => (
            <span key={`mobile-item-${itemIdx}`} className="skill-pill">{item}</span>
          ))}
        </div>
      </article>

      <div className="bento-grid">
        {dict.categories.map((category: any, idx: number) => {
          // Logic for bento sizing based on category title
          const titleLower = category.title.toLowerCase();
          const isMain = titleLower.includes('sistema') || titleLower.includes('infra');
          const isWide = titleLower.includes('desarrollo') || titleLower.includes('web');
          
          let bentoClass = 'bento-item';
          if (isMain) bentoClass += ' bento-wide tech-card';
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

