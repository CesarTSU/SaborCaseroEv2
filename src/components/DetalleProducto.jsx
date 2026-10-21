import { useParams } from "react-router-dom";
import { obtenerProductoPorId } from "../data/datos";

function DetalleProducto() {
  const { id } = useParams();
  const producto = obtenerProductoPorId(id);

  if (!producto) {
    return (
      <div className="container mt-4">
        <h2>Producto no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h1>{producto.nombre}</h1>
          <p>Categoría: {producto.categoria}</p>
          <h3>
            Precio: ${producto.precio.toLocaleString("es-CL")}
          </h3>
          <p>
            Tiempo de preparación: {producto.tiempo_prep} minutos
          </p>
          <p>Stock disponible: {producto.stock}</p>

          <button className="btn btn-success">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;