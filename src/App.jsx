import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Catalogo from './components/Catalogo';
import Categorias from './components/Categorias';
import DetalleProducto from './components/DetalleProducto';

const Home = () => (
  <div>
    <div className="container mt-4">
      <h1>Inicio</h1>
      <p>Catálogo de productos de SaborCasero.</p>
    </div>

    <Catalogo />
  </div>
);

const Carrito = () => <div className="container mt-4"><h1>Carrito de Compras</h1></div>;
const Admin = () => <div className="container mt-4"><h1>Panel de Administración</h1></div>;

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/producto/:id"element= {<DetalleProducto/>} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;