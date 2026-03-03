const Home = () => {
  return (
    <div>

      {/* Sección principal */}
      <section className="hero">
        <h1>Bienvenido a <span className="resaltado">Creciendo Juntos</span></h1>
        <p>Cursos para niños, jóvenes y adultos.<br />Aprende a tu ritmo desde donde estés.</p>
        <a href="#cursos" className="btn-hero">Ver cursos</a>
      </section>

      {/* Catálogo de cursos */}
      <section className="cursos" id="cursos">
        <h2 className="seccion-titulo">Nuestros cursos</h2>
        <p className="seccion-sub">Encuentra el curso ideal para ti</p>
        <div className="cursos-grid">
          <div className="curso-card">
            <span className="curso-emoji">📐</span>
            <h3>Matemáticas</h3>
            <p>Aritmética, álgebra y lógica para todos los niveles.</p>
            <span className="etiqueta">6 - 17 años</span>
          </div>
          <div className="curso-card">
            <span className="curso-emoji">✏️</span>
            <h3>Lenguaje</h3>
            <p>Lectoescritura, gramática y comunicación efectiva.</p>
            <span className="etiqueta">6 - 12 años</span>
          </div>
          <div className="curso-card">
            <span className="curso-emoji">💻</span>
            <h3>Tecnología</h3>
            <p>Introducción a la computación y programación básica.</p>
            <span className="etiqueta">10 - 17 años</span>
          </div>
          <div className="curso-card">
            <span className="curso-emoji">🎨</span>
            <h3>Arte y Creatividad</h3>
            <p>Dibujo, música y escritura creativa para expresarte.</p>
            <span className="etiqueta">Todos los niveles</span>
          </div>
          <div className="curso-card">
            <span className="curso-emoji">🌱</span>
            <h3>Desarrollo Personal</h3>
            <p>Habilidades blandas, liderazgo e inteligencia emocional.</p>
            <span className="etiqueta">Todos los niveles</span>
          </div>
          <div className="curso-card">
            <span className="curso-emoji">🔬</span>
            <h3>Ciencias</h3>
            <p>Ciencias naturales y experimentos para curiosos.</p>
            <span className="etiqueta">8 - 14 años</span>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="porque">
        <h2 className="seccion-titulo">¿Por qué Creciendo Juntos?</h2>
        <div className="porque-grid">
          <div className="porque-card">
            <span className="porque-emoji">🎯</span>
            <h4>A tu ritmo</h4>
            <p>Accede a los contenidos cuando quieras, sin horarios fijos.</p>
          </div>
          <div className="porque-card">
            <span className="porque-emoji">🌍</span>
            <h4>Accesible</h4>
            <p>Cursos gratuitos y de pago para todos los bolsillos.</p>
          </div>
          <div className="porque-card">
            <span className="porque-emoji">🏆</span>
            <h4>Certificados</h4>
            <p>Obtén un certificado al completar cada curso.</p>
          </div>
          <div className="porque-card">
            <span className="porque-emoji">👥</span>
            <h4>Comunidad</h4>
            <p>Aprende junto a miles de estudiantes.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;