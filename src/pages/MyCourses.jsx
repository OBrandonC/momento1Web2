import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { cursos } from '../data/courses';

const MyCourses = () => {
  const { enrolledCourses, unenrollCourse } = useContext(AuthContext);
  const myCourses = cursos.filter(c => enrolledCourses.includes(c.id));

  return (
    <div className="my-courses-container" style={{ padding: '2rem' }}>
      <h1>Mis Cursos</h1>
      {myCourses.length === 0 ? (
        <div className="empty-state">
          <p>Aún no te has inscrito en ningún curso.</p>
          <a href="/" className="btn-hero">Explorar catálogo</a>
        </div>
      ) : (
        <div className="cursos-grid">
          {myCourses.map(c => (
            <div key={c.id} className="curso-card">
              <h3>{c.nombre}</h3>
              <p>{c.desc}</p>
              <button 
                className="btn-curso-danger" 
                onClick={() => unenrollCourse(c.id)}
              >
                Eliminar inscripción
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;