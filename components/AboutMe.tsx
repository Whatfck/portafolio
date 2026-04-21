"use client"

import { motion } from 'framer-motion'
import { Locale, getDictionary } from '@/lib/dictionaries'

export default function AboutMe({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).about

  return (
    <section id="about" className="scroll-section">
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
            {dict.languages.map((language, index: number) => (
              <div key={index} className="language-item">
                <div className="language-info">
                  <span className="language-name">{language.name}</span>
                  <span className="language-level">{language.label}</span>
                </div>
                <div className="language-bar-bg">
                  <motion.div
                    className="language-bar-fill"
                    style={
                      {
                        '--bar-width': language.level,
                        // override width since Framer Motion controls it
                        width: undefined,
                      } as React.CSSProperties
                    }
                    initial={{ width: 0, opacity: 0.5 }}
                    whileInView={{ width: language.level, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      width: {
                        duration: 1.4,
                        delay: 0.2 + index * 0.15,
                        ease: [0.25, 0.8, 0.25, 1],
                      },
                      opacity: { duration: 0.4, delay: 0.2 + index * 0.15 },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className="about-side">
          {[
            { title: dict.pill1_title, text: dict.pill1_text },
            { title: dict.pill2_title, text: dict.pill2_text },
            { title: dict.pill3_title, text: dict.pill3_text },
          ].map((pill, i) => (
            <motion.article
              key={i}
              className="about-pill tech-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
            >
              <h3>{pill.title}</h3>
              <p>{pill.text}</p>
            </motion.article>
          ))}

          <motion.article
            className="about-pill tech-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3 }}
          >
            <h3>{dict.location_title}</h3>
            <p className="about-location-value">{dict.location_value}</p>
            <p className="about-location-note">{dict.location_note}</p>
          </motion.article>
        </aside>
      </div>
    </section>
  )
}
