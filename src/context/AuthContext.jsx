import { createContext, useContext, useState } from 'react';

// Usuarios de demostración. En producción esto debe validarse en un backend.
const USUARIOS = [
  { usuario: 'cliente', clave: 'cliente123', rol: 'cliente', nombre: 'Cliente Demo' },
  { usuario: 'recepcion', clave: 'recepcion123', rol: 'recepcion', nombre: 'Recepción' },
  { usuario: 'chef', clave: 'chef123', rol: 'chef', nombre: 'Chef' },
  { usuario: 'delivery', clave: 'delivery123', rol: 'delivery', nombre: 'Delivery' },
];

const CLAVE_SESION = 'sc_sesion';

const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const USUARIOS_DEMO = USUARIOS.map(({ usuario, clave, rol }) => ({ usuario, clave, rol }));

const leerSesion = () => {
  try {
    const guardada = JSON.parse(localStorage.getItem(CLAVE_SESION));
    return USUARIOS.some((u) => u.usuario === guardada?.usuario && u.rol === guardada?.rol) ? guardada : null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [sesion, setSesion] = useState(leerSesion);

  const login = (usuario, clave) => {
    const encontrado = USUARIOS.find((u) => u.usuario === usuario.trim().toLowerCase() && u.clave === clave);
    if (!encontrado) return false;
    const datos = { usuario: encontrado.usuario, rol: encontrado.rol, nombre: encontrado.nombre };
    localStorage.setItem(CLAVE_SESION, JSON.stringify(datos));
    setSesion(datos);
    return true;
  };

  const logout = () => {
    localStorage.removeItem(CLAVE_SESION);
    setSesion(null);
  };

  return (
    <AuthContext.Provider value={{ usuario: sesion, rol: sesion?.rol ?? null, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
