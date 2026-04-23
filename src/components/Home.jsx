import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const slides = [
  {
    tag: '🎓 Plataforma educativa',
    title: 'Aprende sin límites con Creciendo Juntos',
    text: 'Cursos para niños, jóvenes y adultos. Estudia a tu ritmo, desde cualquier lugar y sin costo inicial.',
  },
  {
    tag: '📚 +6 cursos disponibles',
    title: 'Matemáticas, Arte, Tecnología y mucho más',
    text: 'Explora un catálogo completo de cursos diseñados para cada edad y nivel de conocimiento.',
  },
  {
    tag: '🏆 Certificados incluidos',
    title: 'Obtén tu certificado al completar cada curso',
    text: 'Demuestra lo que aprendiste con certificados que puedes compartir con el mundo.',
  },
];

const cursos = [
  { emoji: '📐', nombre: 'Matemáticas',        desc: 'Aritmética, álgebra y lógica para todos los niveles.',           edad: '6–17 años',        duracion: '8 semanas' },
  { emoji: '✏️', nombre: 'Lenguaje',            desc: 'Lectoescritura, gramática y comunicación efectiva.',             edad: '6–12 años',        duracion: '6 semanas' },
  { emoji: '💻', nombre: 'Tecnología',          desc: 'Introducción a la computación y programación básica.',           edad: '10–17 años',       duracion: '10 semanas' },
  { emoji: '🎨', nombre: 'Arte y Creatividad',  desc: 'Dibujo, música y escritura creativa para expresarte.',           edad: 'Todos los niveles', duracion: '6 semanas' },
  { emoji: '🌱', nombre: 'Desarrollo Personal', desc: 'Habilidades blandas, liderazgo e inteligencia emocional.',       edad: 'Todos los niveles', duracion: '5 semanas' },
  { emoji: '🔬', nombre: 'Ciencias',            desc: 'Biología, física y experimentos para mentes curiosas.',          edad: '8–14 años',        duracion: '8 semanas' },
];

const testimonios = [
  { emoji: '👩', nombre: 'Laura M.', lugar: 'Medellín, Colombia', texto: 'Gracias a los cursos de matemáticas mi hija pasó de temer los números a amarlos. Los profesores son increíbles y el contenido es muy claro.' },
  { emoji: '👨', nombre: 'Carlos R.', lugar: 'Bogotá, Colombia',  texto: 'Tomé el curso de Tecnología y en pocas semanas ya tenía mis primeros proyectos funcionando. Súper recomendado para principiantes.' },
  { emoji: '👩', nombre: 'Sofía T.',  lugar: 'Cali, Colombia',    texto: 'La plataforma es muy intuitiva y el contenido de Desarrollo Personal me ayudó a mejorar mi confianza y mis habilidades de liderazgo.' },
];

const pasos = [
  { num: '1', titulo: 'Crea tu cuenta',     desc: 'Regístrate gratis en minutos. Solo necesitas tu correo electrónico.' },
  { num: '2', titulo: 'Elige tu curso',     desc: 'Explora el catálogo y elige el curso que más te interese.' },
  { num: '3', titulo: 'Aprende a tu ritmo', desc: 'Accede al contenido cuando quieras, desde cualquier dispositivo.' },
  { num: '4', titulo: 'Certifícate',        desc: 'Completa el curso y obtén tu certificado para compartir.' },
];

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === slides.length - 1 ? 0 : c + 1));

  const handleCTA = () => navigate(isAuthenticated ? '/dashboard' : '/login');

  return (
    <div>

      {/* ── CARRUSEL ── */}
      <div className="carousel-wrapper">
        <button className="carousel-btn prev" onClick={prev} aria-label="Anterior">&#8249;</button>

        {slides.map((s, i) => (
          <div key={i} className={`carousel-slide ${i === current ? 'active' : ''}`}>
            <span className="slide-tag">{s.tag}</span>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
            <button onClick={handleCTA} className="btn-hero">
              {isAuthenticated ? 'Ir a mis cursos' : 'Comenzar gratis'}
            </button>
          </div>
        ))}

        <button className="carousel-btn next" onClick={next} aria-label="Siguiente">&#8250;</button>

        <div className="carousel-dots">
          {slides.map((_, i) => (
            <span key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="stats-bar">
        <div className="stat-item"><span className="stat-number">+5.000</span><span className="stat-label">Estudiantes activos</span></div>
        <div className="stat-item"><span className="stat-number">6</span><span className="stat-label">Cursos disponibles</span></div>
        <div className="stat-item"><span className="stat-number">100%</span><span className="stat-label">Aprendizaje flexible</span></div>
        <div className="stat-item"><span className="stat-number">Gratis</span><span className="stat-label">Acceso básico sin costo</span></div>
      </div>

      {/* ── CURSOS ── */}
      <section className="cursos-section" id="cursos">
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <span className="seccion-pill">📚 Catálogo</span>
        </div>
        <h2 className="seccion-titulo">Nuestros cursos</h2>
        <p className="seccion-sub">Encuentra el curso ideal para ti — todos diseñados por expertos</p>

        <div className="cursos-grid">
          {cursos.map((c, i) => (
            <div className="curso-card" key={i}>
              <span className="curso-emoji">{c.emoji}</span>
              <h3>{c.nombre}</h3>
              <p>{c.desc}</p>
              <div className="curso-meta">
                <span className="etiqueta">{c.edad}</span>
                <span className="curso-duracion">⏱ {c.duracion}</span>
              </div>
              <button className="btn-curso" onClick={handleCTA}>Ver curso →</button>
            </div>
          ))}
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section className="como-funciona-section">
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <span className="seccion-pill">🚀 Proceso</span>
        </div>
        <h2 className="seccion-titulo">¿Cómo funciona?</h2>
        <p className="seccion-sub">En solo 4 pasos empieza a aprender desde donde estés</p>

        <div className="pasos-grid">
          {pasos.map((p, i) => (
            <div className="paso-card" key={i}>
              <div className="paso-numero">{p.num}</div>
              <h4>{p.titulo}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="testimonios-section">
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <span className="seccion-pill-gold">⭐ Testimonios</span>
        </div>
        <h2 className="seccion-titulo-white">Lo que dicen nuestros estudiantes</h2>
        <p className="seccion-sub-white">Miles de personas ya están transformando su futuro con Creciendo Juntos</p>

        <div className="testimonios-grid">
          {testimonios.map((t, i) => (
            <div className="testimonio-card" key={i}>
              <div className="testimonio-stars">★★★★★</div>
              <blockquote>"{t.texto}"</blockquote>
              <div className="testimonio-autor">
                <div className="testimonio-avatar">{t.emoji}</div>
                <div className="testimonio-info">
                  <strong>{t.nombre}</strong>
                  <span>{t.lugar}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── POR QUÉ ── */}
      <section className="porque-section">
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <span className="seccion-pill">💡 Ventajas</span>
        </div>
        <h2 className="seccion-titulo">¿Por qué Creciendo Juntos?</h2>
        <p className="seccion-sub">Una plataforma hecha con amor para que nunca pares de aprender</p>

        <div className="porque-grid">
          <div className="porque-card">
            <span className="porque-emoji">🎯</span>
            <h4>A tu ritmo</h4>
            <p>Accede a los contenidos cuando quieras, sin horarios fijos ni presión.</p>
          </div>
          <div className="porque-card">
            <span className="porque-emoji">🌍</span>
            <h4>Accesible</h4>
            <p>Cursos gratuitos y de pago adaptados a todos los bolsillos.</p>
          </div>
          <div className="porque-card">
            <span className="porque-emoji">🏆</span>
            <h4>Certificados</h4>
            <p>Obtén un certificado validado al completar cada módulo y curso.</p>
          </div>
          <div className="porque-card">
            <span className="porque-emoji">👥</span>
            <h4>Comunidad</h4>
            <p>Aprende junto a miles de estudiantes y docentes comprometidos.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <h2>¿Listo para comenzar?</h2>
        <p>Únete a más de 5.000 estudiantes que ya están aprendiendo con nosotros. El primer paso es gratis.</p>
        <a href="/register" className="btn-cta">Crear cuenta gratis →</a>
      </section>

    </div>
  );
};

export default Home;