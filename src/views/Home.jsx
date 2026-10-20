// src/views/Home.jsx
import { obtenerProductos } from '../data/datos';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const productos = obtenerProductos();

  return (
    <div className="container mt-4">
      {/* Banner principal simulando la maqueta */}
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm text-center">
        <div className="container-fluid py-3">
          <h1 className="display-5 fw-bold">SaborCasero</h1>
          <p className="col-md-8 mx-auto fs-4 text-muted">
            Comida tradicional chilena directa a tu mesa. Disfruta el verdadero sabor de Ñuñoa.
          </p>
        </div>
      </div>

      <h2 className="mb-4">Nuestros Platos y Productos</h2>

      <div className="row">
        {productos.map(producto => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Home;