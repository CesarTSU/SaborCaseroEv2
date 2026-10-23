import { Link } from 'react-router-dom';
import { ESTADOS, useCarrito } from '../context/CarritoContext';

const ACCIONES = {
  pedido: 'Confirmar compra',
  confirmado: 'Enviar orden',
  enviado: 'Marcar como recibido',
  recibido: 'Marcar como entregado',
};

const COLORES = {
  pedido: 'secondary',
  confirmado: 'primary',
  enviado: 'info',
  recibido: 'warning',
  entregado: 'success',
};

const Pedidos = () => {
  const { pedidos, avanzarPedido, eliminarPedido } = useCarrito();

  return (
    <div className="container mt-4">
      <h1>Mis pedidos</h1>
      {pedidos.length === 0 && (
        <p className="text-muted">Aún no tienes pedidos. <Link to="/categorias">Ver productos</Link></p>
      )}
      {pedidos.map((p) => (
        <div key={p.id} className="card mb-3 shadow-sm">
          <div className="card-header d-flex justify-content-between align-items-center">
            <strong>{p.id}</strong>
            <span className={`badge bg-${COLORES[p.estado]} text-uppercase`}>{p.estado}</span>
          </div>
          <div className="card-body">
            <ul className="mb-2">
              {p.items.map((i) => (
                <li key={i.id}>{i.cantidad} x {i.nombre} — ${(i.precio * i.cantidad).toLocaleString('es-CL')}</li>
              ))}
            </ul>
            <p className="fw-bold">Total: ${p.total.toLocaleString('es-CL')}</p>
            <ol className="small text-muted">
              {ESTADOS.map((e) => {
                const registro = p.historial.find((h) => h.estado === e);
                return (
                  <li key={e} className={registro ? 'text-dark' : ''}>
                    {e}{registro && ` — ${new Date(registro.fecha).toLocaleString('es-CL')}`}
                  </li>
                );
              })}
            </ol>
            {ACCIONES[p.estado] ? (
              <button className="btn btn-success me-2" onClick={() => avanzarPedido(p.id)}>{ACCIONES[p.estado]}</button>
            ) : null}
            {(p.estado === 'pedido' || p.estado === 'entregado') && (
              <button className="btn btn-outline-danger" onClick={() => eliminarPedido(p.id)}>
                {p.estado === 'pedido' ? 'Cancelar' : 'Eliminar'}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pedidos;
