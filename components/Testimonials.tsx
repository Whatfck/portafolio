import { Locale, getDictionary } from '@/lib/dictionaries'

export default function Testimonials({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).testimonials

  return (
    <section id="testimonials" className="scroll-section">
      <div className="section-header">
        <h2>{dict.title}</h2>
        <p className="section-kicker">{dict.kicker}</p>
        <p className="section-intro">
          {dict.intro}
        </p>
      </div>

      <div className="testimonials-grid">
        {/* // Aqui el testimonio 1 */}
        <article className="testimonial-card">
          <span className="testimonial-quote-icon">"</span>
          <p>
            {dict.t1_text}
          </p>
          <p className="testimonial-author">{dict.t1_author}</p>
          <p className="testimonial-role">{dict.t1_role}</p>
        </article>

        {/* // Aqui el testimonio 2 */}
        <article className="testimonial-card">
          <span className="testimonial-quote-icon">"</span>
          <p>
            {dict.t2_text}
          </p>
          <p className="testimonial-author">{dict.t2_author}</p>
          <p className="testimonial-role">{dict.t2_role}</p>
        </article>

        {/* // Aqui el testimonio 3 */}
        <article className="testimonial-card">
          <span className="testimonial-quote-icon">"</span>
          <p>
            {dict.t3_text}
          </p>
          <p className="testimonial-author">{dict.t3_author}</p>
          <p className="testimonial-role">{dict.t3_role}</p>
        </article>
      </div>
    </section>
  )
}

