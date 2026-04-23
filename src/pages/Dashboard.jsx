import { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { fetchGet } from '../api/config';
import { ENDPOINTS } from '../api/endpoints';
import { AuthContext } from '../context/AuthContext';

// Definición de datos mockados al inicio del archivo
const mockCourses = [
  { id: 1, name: 'Matemáticas', description: 'Aritmética, álgebra y lógica.', emoji: '📐', level: '6 - 17 años' },
  { id: 2, name: 'Lenguaje', description: 'Lectoescritura, gramática y comunicación.', emoji: '✏️', level: '6 - 12 años' },
  { id: 3, name: 'Tecnología', description: 'Introducción a la computación.', emoji: '💻', level: '10 - 17 años' },
  { id: 4, name: 'Arte y Creatividad', description: 'Dibujo, música y expresión.', emoji: '🎨', level: 'Todos los niveles' },
  { id: 5, name: 'Desarrollo Personal', description: 'Habilidades blandas y liderazgo.', emoji: '🌱', level: 'Todos los niveles' },
  { id: 6, name: 'Ciencias', description: 'Ciencias naturales y experimentos.', emoji: '🔬', level: '8 - 14 años' },
];

const Dashboard = () => {
  const { user, logout, enrolledCourses } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const data = await fetchGet(ENDPOINTS.COURSES.LIST);
        const allCourses = data.courses || mockCourses;
        
        // Filtro robusto normalizando a String
        const myCourses = allCourses.filter(c => 
          enrolledCourses.some(id => String(id) === String(c.id))
        );
        
        setCourses(myCourses);
      } catch (err) {
        console.error('Error cargando cursos:', err);
        const myCourses = mockCourses.filter(c => 
          enrolledCourses.some(id => String(id) === String(c.id))
        );
        setCourses(myCourses);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, [enrolledCourses]); 

  const handleLogout = () => {
    Swal.fire({
      icon: 'question',
      title: '¿Cerrar sesión?',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, cerrar sesión'
    }).then((result) => {
      if (result.isConfirmed) logout();
    });
  };

  if (loading) return <div className="dashboard-container"><p>Cargando cursos...</p></div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Bienvenido, {user?.name || 'Usuario'}</h1>
        <button onClick={handleLogout} className="btn-logout">Cerrar sesión</button>
      </div>

      <section className="dashboard-section">
        <h2>Tus Cursos</h2>
        <div className="cursos-grid">
          {courses.length > 0 ? (
            courses.map((curso) => (
              <div key={curso.id} className="curso-card">
                <span className="curso-emoji">{curso.emoji || '📚'}</span>
                <h3>{curso.name}</h3>
                <p>{curso.description}</p>
                <span className="etiqueta">{curso.level}</span>
                <button className="btn-secondary">Ver Curso</button>
              </div>
            ))
          ) : (
            <p>No tienes cursos inscritos. ¡Explora el catálogo para empezar!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;