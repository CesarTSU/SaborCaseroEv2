import { createContext, useContext, useEffect, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ESTADOS = ['pedido', 'confirmado', 'enviado', 'recibido', 'entregado'];

const CLAVE_CARRITO = 'sc_carrito';
const CLAVE_PEDIDOS = 'sc_pedidos';

const leer = (clave) => {
  try {
    const valor = JSON.parse(localStorage.getItem(clave));
    return Array.isArray(valor) ? valor : [];
  } catch {
    return [];
  }
};

const CarritoContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [items, setItems] = useState(() => leer(CLAVE_CARRITO));
  const [pedidos, setPedidos] = useState(() => leer(CLAVE_PEDIDOS));

  useEffect(() => {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem(CLAVE_PEDIDOS, JSON.stringify(pedidos));
  }, [pedidos]);

  const agregar = (producto) => {
    setItems((prev) => {
      const existente = prev.find((i) => i.id === producto.id);
      if (existente) {
        if (existente.cantidad >= producto.stock) return prev;
        return prev.map((i) => (i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i));
      }
      return [
        ...prev,
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          imagen: producto.imagen,
          stock: producto.stock,
          cantidad: 1,
        },
      ];
    });
  };

  const cambiarCantidad = (id, cantidad) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, cantidad: Math.min(cantidad, i.stock) } : i))
        .filter((i) => i.cantidad > 0)
    );
  };

  const quitar = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const vaciar = () => setItems([]);

  const total = items.reduce((suma, i) => suma + i.precio * i.cantidad, 0);
  const cantidadTotal = items.reduce((suma, i) => suma + i.cantidad, 0);

  // Convierte el carrito en un pedido con estado inicial "pedido"
  const crearPedido = () => {
    if (items.length === 0) return null;
    const ahora = new Date().toISOString();
    const pedido = {
      id: `PED${Date.now()}`,
      items,
      total,
      estado: ESTADOS[0],
      historial: [{ estado: ESTADOS[0], fecha: ahora }],
    };
    setPedidos((prev) => [pedido, ...prev]);
    setItems([]);
    return pedido;
  };

  const avanzarPedido = (id) => {
    setPedidos((prev) =>
      prev.map((p) => {
        const siguiente = ESTADOS[ESTADOS.indexOf(p.estado) + 1];
        if (p.id !== id || !siguiente) return p;
        return {
          ...p,
          estado: siguiente,
          historial: [...p.historial, { estado: siguiente, fecha: new Date().toISOString() }],
        };
      })
    );
  };

  const eliminarPedido = (id) => setPedidos((prev) => prev.filter((p) => p.id !== id));

  return (
    <CarritoContext.Provider
      value={{
        items,
        pedidos,
        total,
        cantidadTotal,
        agregar,
        cambiarCantidad,
        quitar,
        vaciar,
        crearPedido,
        avanzarPedido,
        eliminarPedido,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
