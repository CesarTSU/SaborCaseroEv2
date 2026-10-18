let productos = [
    { id: "PR001", nombre: "Porción de pastel de choclo", categoria: "Plato fuerte", tiempo_prep: 15, precio: 8500, stock: 30, imagen: "https://via.placeholder.com/400x300?text=Pastel+de+Choclo" },
    { id: "PR002", nombre: "Porción de cazuela de vacuno", categoria: "Plato fuerte", tiempo_prep: 20, precio: 9500, stock: 25, imagen: "https://via.placeholder.com/400x300?text=Cazuela" },
    { id: "PR003", nombre: "Completo italiano", categoria: "Sandwich", tiempo_prep: 5, precio: 4500, stock: 50, imagen: "https://via.placeholder.com/400x300?text=Completo" },
    { id: "PR004", nombre: "Churrasco con palta", categoria: "Sandwich", tiempo_prep: 5, precio: 6500, stock: 40, imagen: "https://via.placeholder.com/400x300?text=Churrasco" },
    { id: "PR005", nombre: "Ensalada chilena", categoria: "Entrada", tiempo_prep: 10, precio: 3500, stock: 20, imagen: "https://via.placeholder.com/400x300?text=Ensalada" },
    { id: "PR006", nombre: "Jugo natural de frutilla", categoria: "Bebida", tiempo_prep: 3, precio: 2500, stock: 60, imagen: "https://via.placeholder.com/400x300?text=Jugo" }
];

// Funciones CRUD (Crear, Leer, Actualizar, Eliminar)
export const obtenerProductos = () => {
    return [...productos]; // Leer todos
};

export const obtenerProductoPorId = (id) => {
    return productos.find(producto => producto.id === id); // Leer uno
};

export const crearProducto = (nuevoProducto) => {
    productos.push(nuevoProducto); // Crear
    return [...productos];
};

export const actualizarProducto = (id, datosActualizados) => {
    productos = productos.map(producto => 
        producto.id === id ? { ...producto, ...datosActualizados } : producto
    ); // Actualizar
    return [...productos];
};

export const eliminarProducto = (id) => {
    productos = productos.filter(producto => producto.id !== id); // Eliminar
    return [...productos];
};