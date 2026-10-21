
import { obtenerProductos } from "../data/datos";

function Catalogo() {
  const productos = obtenerProductos();

  return (
    <div className="container mt-4">
      <h2>Catálogo de productos</h2>

      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4 mb-4" key={producto.id}>
            <div className="card h-100">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="card-img-top"
              />

              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>

                <p className="card-text">
                  Categoría: {producto.categoria}
                </p>

                <p className="card-text">
                  Precio: ${producto.precio.toLocaleString("es-CL")}
                </p>

                <p className="card-text">
                  Tiempo de preparación: {producto.tiempo_prep} minutos
                </p>

                <button className="btn btn-success">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
