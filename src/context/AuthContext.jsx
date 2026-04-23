import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Inicializamos el estado de cursos
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const saved = localStorage.getItem('enrolledCourses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const savedUser = localStorage.getItem('user');
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };

  const enrollCourse = (courseId) => {
    setEnrolledCourses(prev => {
      if (prev.includes(courseId)) return prev;
      const next = [...prev, courseId];
      localStorage.setItem('enrolledCourses', JSON.stringify(next));
      return next;
    });
  };

  const unenrollCourse = (courseId) => {
    setEnrolledCourses(prev => {
      const next = prev.filter(id => id !== courseId);
      localStorage.setItem('enrolledCourses', JSON.stringify(next));
      return next;
    });
  };

  const value = {
    user, isAuthenticated, loading, login, logout,
    enrolledCourses, enrollCourse, unenrollCourse
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};