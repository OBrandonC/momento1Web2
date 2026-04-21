// Configuración centralizada de la API
const API_BASE_URL = 'http://localhost:3000/api';

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

// Simulador de respuestas para desarrollo (mock)
const mockUsers = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    password: '123456',
    age: 25,
  },
];

// Simular petición GET
const mockGet = (endpoint) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (endpoint === '/courses') {
        resolve({
          courses: [
            { id: 1, name: 'Matemáticas', description: 'Aritmética, álgebra', emoji: '📐', level: '6-17' },
            { id: 2, name: 'Lenguaje', description: 'Lectoescritura, gramática', emoji: '✏️', level: '6-12' },
            { id: 3, name: 'Tecnología', description: 'Programación básica', emoji: '💻', level: '10-17' },
          ],
        });
      } else {
        resolve({ success: true });
      }
    }, 500);
  });
};

// Simular petición POST
const mockPost = (endpoint, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (endpoint === '/auth/login') {
        // Simular login
        const user = mockUsers.find(
          (u) => u.email === data.email && u.password === data.password
        );
        if (user) {
          resolve({
            success: true,
            user: { id: user.id, name: user.name, email: user.email, age: user.age },
            token: 'mock_token_' + Date.now(),
          });
        } else {
          reject(new Error('Email o contraseña incorrecto'));
        }
      } else if (endpoint === '/auth/register') {
        // Simular registro
        const userExists = mockUsers.find((u) => u.email === data.email);
        if (userExists) {
          reject(new Error('El email ya está registrado'));
        } else {
          const newUser = { ...data, id: String(mockUsers.length + 1) };
          mockUsers.push(newUser);
          resolve({
            success: true,
            user: { id: newUser.id, name: newUser.name, email: newUser.email, age: newUser.age },
            token: 'mock_token_' + Date.now(),
          });
        }
      } else {
        resolve({ success: true });
      }
    }, 800);
  });
};

// Función para realizar peticiones GET
export const fetchGet = async (endpoint) => {
  try {
    // Usar mock en desarrollo
    if (process.env.NODE_ENV !== 'production') {
      return await mockGet(endpoint);
    }

    const response = await fetch(`${API_CONFIG.baseURL}${endpoint}`, {
      method: 'GET',
      headers: API_CONFIG.headers,
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en petición GET:', error);
    // Fallback a mock si falla
    return await mockGet(endpoint);
  }
};

// Función para realizar peticiones POST
export const fetchPost = async (endpoint, data) => {
  try {
    // Usar mock en desarrollo
    if (process.env.NODE_ENV !== 'production') {
      return await mockPost(endpoint, data);
    }

    const token = localStorage.getItem('authToken');
    const headers = {
      ...API_CONFIG.headers,
      ...(token && { 'Authorization': `Bearer ${token}` }),
    };

    const response = await fetch(`${API_CONFIG.baseURL}${endpoint}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en petición POST:', error);
    // Fallback a mock si falla
    return await mockPost(endpoint, data);
  }
};

export default API_CONFIG;

