import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Catalogo from './components/Catalogo';
import Categorias from './components/Categorias';
import DetalleProducto from './components/DetalleProducto';

import Carrito from './views/Carrito';
import Pedidos from './views/Pedidos';
import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext';
import Login from './views/Login';
import RutaProtegida from './components/RutaProtegida';

const Admin = () => <div className="container mt-4"><h1>Panel de Administración</h1></div>;

function App() {
  return (
    <AuthProvider>
    <CarritoProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={<RutaProtegida roles={['cliente']}><Carrito /></RutaProtegida>} />
        <Route path="/pedidos" element={<RutaProtegida><Pedidos /></RutaProtegida>} />
        <Route path="/admin" element={<RutaProtegida roles={['recepcion']}><Admin /></RutaProtegida>} />
      </Routes>
    </Router>
    </CarritoProvider>
    </AuthProvider>
  );
}

export default App;