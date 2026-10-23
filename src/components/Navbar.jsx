import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

const Navbar = () => {
  const { cantidadTotal } = useCarrito();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">SaborCasero</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categorias">Categorías</Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/pedidos" className="btn btn-outline-success me-2">Pedidos</Link>
            <Link to="/carrito" className="btn btn-success me-2">🛒 Carrito ({cantidadTotal})</Link>
            <Link to="/admin" className="btn btn-outline-dark">Admin</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;