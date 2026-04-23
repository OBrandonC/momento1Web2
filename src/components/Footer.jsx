const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div className="footer-col">
          <div className="footer-brand">
            <img className="footer-logo" src="/public/LOGO CRECIENDO JUNTOS.png" alt="Logo" />
            <span className="footer-brand-name">Creciendo Juntos</span>
          </div>
          <p>Plataforma educativa para niños, jóvenes y adultos. Aprende a tu ritmo desde donde estés, sin barreras.</p>
        </div>

        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="/register">Registrarse</a></li>
            <li><a href="/login">Iniciar sesión</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Cursos</h4>
          <ul>
            <li><a href="#cursos">Matemáticas</a></li>
            <li><a href="#cursos">Lenguaje</a></li>
            <li><a href="#cursos">Tecnología</a></li>
            <li><a href="#cursos">Arte y Creatividad</a></li>
            <li><a href="#cursos">Ciencias</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>📧 contacto@creciendojuntos.com</li>
            <li>📞 +57 300 000 0000</li>
            <li>📍 Medellín, Colombia</li>
          </ul>
          <h4 style={{ marginTop: '16px' }}>Síguenos</h4>
          <ul>
            <li><a href="#">📘 Facebook</a></li>
            <li><a href="#">📸 Instagram</a></li>
            <li><a href="#">▶️ YouTube</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Creciendo Juntos — Equipo de Desarrollo. Todos los derechos reservados.</p>
        <div className="footer-bottom-links">
          <a href="#">Términos de uso</a>
          <a href="#">Privacidad</a>
          <a href="#">Ayuda</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;