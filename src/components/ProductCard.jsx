// src/components/ProductCard.jsx
const ProductCard = ({ producto }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img 
          src={producto.imagen} 
          className="card-img-top" 
          alt={producto.nombre} 
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <span className="badge bg-secondary mb-2 align-self-start">{producto.categoria}</span>
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text text-muted small">
            ⏱️ Tiempo de preparación: {producto.tiempo_prep} min
          </p>
          <div className="mt-auto">
            <p className="fw-bold fs-5 text-dark mb-2">${producto.precio.toLocaleString('es-CL')}</p>
            <button className="btn btn-outline-success w-100">Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;