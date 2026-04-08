export default function AboutMe() {
  return (
    <section id="about" className="scroll-section about-section">
      <div className="about-header">
        <h2>Sobre mi</h2>
        <p className="about-kicker">Perfil tecnico</p>
      </div>

      <div className="about-layout">
        <article className="about-main">
          <p className="about-lead">
            Soy Daniel Perez, estudiante de ingenieria de software con interes en construir
            soluciones solidas y entender los sistemas de forma integral.
          </p>

          <p>
            Me motiva comprender como funciona una aplicacion de extremo a extremo: logica,
            rendimiento, redes y arquitectura de servidores en entornos reales.
          </p>

          <p>
            Estoy fortaleciendo mis bases tecnicas mediante proyectos que conectan desarrollo
            con infraestructura, priorizando estabilidad, eficiencia y escalabilidad.
          </p>

          <div className="about-highlight">
            <h3>Ahora mismo</h3>
            <p>
              Aprendiendo a disenar sistemas mas robustos, mejorar rendimiento y tomar
              decisiones tecnicas con enfoque de largo plazo.
            </p>
          </div>
        </article>

        <aside className="about-side">
          <article className="about-pill">
            <h3>Intereses</h3>
            <p>Redes, arquitectura de servidores, ciberseguridad y rendimiento.</p>
          </article>

          <article className="about-pill">
            <h3>Enfoque</h3>
            <p>Comprender el por que de cada solucion, no solo que funcione.</p>
          </article>

          <article className="about-pill">
            <h3>Objetivo</h3>
            <p>Construir software confiable, escalable y bien pensado.</p>
          </article>
        </aside>
      </div>
    </section>
  )
}
