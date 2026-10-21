
import { useState } from "react";
import { obtenerProductos } from "../data/datos";

function Categorias() {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  const productos = obtenerProductos();

  const categorias = ["Todas", ...new Set(productos.map(producto => producto.categoria))];

  const productosFiltrados = categoriaSeleccionada === "Todas"
    ? productos
    : productos.filter(producto => producto.categoria === categoriaSeleccionada);

    
  return (
    <div className="container mt-4">
      <h1>Categorías</h1>
      <p>Selecciona una categoría para ver nuestros productos.</p>

      <div className="mb-4">
        {categorias.map(categoria => (
          <button
            key={categoria}
            className={`btn me-2 mb-2 ${
              categoriaSeleccionada === categoria ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => setCategoriaSeleccionada(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="row">
        {productosFiltrados.map(producto => (
          <div className="col-md-4 mb-4" key={producto.id}>
            <div className="card h-100">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
              />

              <div className="card-body">
                <h5>{producto.nombre}</h5>
                <p>Precio: ${producto.precio.toLocaleString("es-CL")}</p>
                <p>Tiempo de preparación: {producto.tiempo_prep} minutos</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorias;
