// Ejemplos de uso de localStorage y Context para HU10 (Persistencia)

/**
 * EJEMPLO 1: Guardar y recuperar token de autenticación
 */
export const authStorageExample = {
  // Guardar token después del login
  saveAuthToken: (token, user) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('loginTime', new Date().toISOString());
  },

  // Recuperar token
  getAuthToken: () => {
    return localStorage.getItem('authToken');
  },

  // Verificar si hay sesión activa
  hasActiveSession: () => {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user');
    return !!(token && user);
  },

  // Limpiar sesión
  clearSession: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    localStorage.removeItem('loginTime');
  },
};

/**
 * EJEMPLO 2: Guardar preferencias de usuario
 */
export const preferencesStorageExample = {
  // Guardar preferencias
  savePreferences: (preferences) => {
    const current = localStorage.getItem('userPreferences');
    const updated = {
      ...JSON.parse(current || '{}'),
      ...preferences,
    };
    localStorage.setItem('userPreferences', JSON.stringify(updated));
  },

  // Obtener preferencias
  getPreferences: () => {
    const prefs = localStorage.getItem('userPreferences');
    return prefs ? JSON.parse(prefs) : {};
  },

  // Ejemplo de preferencias
  examplePrefs: {
    theme: 'light',      // 'light' | 'dark'
    language: 'es',      // 'es' | 'en' | 'pt'
    notifications: true,
    fontSize: 'normal',  // 'small' | 'normal' | 'large'
  },
};

/**
 * EJEMPLO 3: Usar AuthContext y useAuth hook
 */
export const authContextUsageExample = `
// En un componente:
import { useAuth } from '../hooks/useAuth';

const MyComponent = () => {
  const { user, isAuthenticated, login, logout } = useAuth();

  // Los datos se restauran automáticamente de localStorage
  // al montar el componente (ver useEffect en AuthContext)

  if (!isAuthenticated) {
    return <p>No estás autenticado</p>;
  }

  return (
    <div>
      <p>Hola, {user.name}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};
`;

/**
 * EJEMPLO 4: Estructura de datos en localStorage
 */
export const localStorageStructure = {
  authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  user: JSON.stringify({
    id: '123',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    age: 25,
  }),
  userPreferences: JSON.stringify({
    theme: 'light',
    language: 'es',
    notifications: true,
  }),
  loginTime: '2026-04-20T10:30:00.000Z',
};

/**
 * EJEMPLO 5: Hook personalizado para localStorage
 */
export const useLocalStorageHook = `
import { useState, useEffect } from 'react';

// Hook reutilizable para cualquier dato en localStorage
export const useLocalStorage = (key, initialValue) => {
  // Restaurar valor del localStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  // Guardar valor actualizado
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  };

  return [storedValue, setValue];
};

// Uso del hook:
// const [count, setCount] = useLocalStorage('count', 0);
`;

/**
 * EJEMPLO 6: Ciclo de vida del AuthContext
 */
export const authLifecycle = \`
1. AL MONTAR EL COMPONENTE (useEffect en AuthContext):
   - Lee authToken de localStorage
   - Lee user de localStorage
   - Si ambos existen, restaura la sesión
   - setLoading(false)

2. EN LOGIN (Login.jsx):
   - Usuario envía formulario
   - API responde con token y user
   - Llamar context.login(userData, token)
   - login() guarda en localStorage
   - setIsAuthenticated(true)
   - Redirigir a /dashboard

3. EN LOGOUT (Dashboard.jsx):
   - Usuario hace click en "Cerrar sesión"
   - Llamar context.logout()
   - logout() borra localStorage
   - setIsAuthenticated(false)
   - Redirigir a /

4. EN RELOAD (F5):
   - useEffect se ejecuta nuevamente
   - Lee del localStorage
   - Restaura sesión automáticamente
   - Usuario sigue autenticado
\`;

/**
 * EJEMPLO 7: Flujo de autenticación completo
 */
export const fullAuthFlow = \`
// 1. Usuario llega a /login
<Login />

// 2. Llena formulario
{email: "user@example.com", password: "123456"}

// 3. Se ejecuta handleSubmit
try {
  const response = await fetchPost(ENDPOINTS.AUTH.LOGIN, data);
  // response = { user: {...}, token: "..." }
}

// 4. Se llama login() del contexto
login(response.user, response.token);
// Internamente: localStorage.setItem('authToken', token)
//               localStorage.setItem('user', JSON.stringify(user))

// 5. Se muestra Swal de éxito
Swal.fire({ icon: 'success', ... })

// 6. Se redirige a /dashboard
navigate('/dashboard');

// 7. Dashboard puede acceder a user:
const { user } = useAuth(); // Obtiene de AuthContext

// 8. Si recarga (F5):
// - useEffect en AuthContext se ejecuta
// - Lee del localStorage
// - Restaura la sesión automáticamente
// - Usuario sigue viendo /dashboard
\`;
