import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { fetchGet } from '../api/config';
import { ENDPOINTS } from '../api/endpoints';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // HU08: Cargar datos automáticamente al montar el componente
  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        const data = await fetchGet(ENDPOINTS.COURSES.LIST);
        setCourses(data.courses || []);
      } catch (err) {
        console.error('Error cargando cursos:', err);
        setError(err.message);
        // Mostrar datos mockados si falla la API
        setCourses(mockCourses);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []); // Array vacío = ejecutar solo al montar

  const handleLogout = () => {
    Swal.fire({
      icon: 'question',
      title: '¿Cerrar sesión?',
      text: '¿Estás seguro de que deseas cerrar sesión?',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire({
          icon: 'success',
          title: 'Sesión cerrada',
          text: 'Has cerrado sesión correctamente',
          confirmButtonColor: '#3085d6',
        });
      }
    });
  };

  if (loading) {
    return <div className="dashboard-container"><p>Cargando cursos...</p></div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Bienvenido, {user?.name || 'Usuario'}</h1>
        <button onClick={handleLogout} className="btn-logout">
          Cerrar sesión
        </button>
      </div>

      <section className="dashboard-section">
        <h2>Tus Cursos</h2>
        {error && (
          <p className="dashboard-info">
            Nota: Usando datos de ejemplo (el servidor no está disponible)
          </p>
        )}
        <div className="cursos-grid">
          {courses.map((curso) => (
            <div key={curso.id} className="curso-card">
              <span className="curso-emoji">{curso.emoji || '📚'}</span>
              <h3>{curso.name || curso.titulo}</h3>
              <p>{curso.description || curso.descripcion}</p>
              <span className="etiqueta">{curso.level || curso.edad}</span>
              <button className="btn-secondary">Ver Curso</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Datos mockados para pruebas (HU08: carga automática)
const mockCourses = [
  {
    id: 1,
    name: 'Matemáticas',
    description: 'Aritmética, álgebra y lógica para todos los niveles.',
    emoji: '📐',
    level: '6 - 17 años',
  },
  {
    id: 2,
    name: 'Lenguaje',
    description: 'Lectoescritura, gramática y comunicación efectiva.',
    emoji: '✏️',
    level: '6 - 12 años',
  },
  {
    id: 3,
    name: 'Tecnología',
    description: 'Introducción a la computación y programación básica.',
    emoji: '💻',
    level: '10 - 17 años',
  },
  {
    id: 4,
    name: 'Arte y Creatividad',
    description: 'Dibujo, música y escritura creativa para expresarte.',
    emoji: '🎨',
    level: 'Todos los niveles',
  },
  {
    id: 5,
    name: 'Desarrollo Personal',
    description: 'Habilidades blandas, liderazgo e inteligencia emocional.',
    emoji: '🌱',
    level: 'Todos los niveles',
  },
  {
    id: 6,
    name: 'Ciencias',
    description: 'Ciencias naturales y experimentos para curiosos.',
    emoji: '🔬',
    level: '8 - 14 años',
  },
];

export default Dashboard;
