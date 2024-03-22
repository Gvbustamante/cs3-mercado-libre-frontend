import React from 'react';

// Componente de paginación que permite navegar entre las páginas de productos.
const Paginacion = ({ total, limite, alCambiarPagina, paginaActual }) => {
    const totalPaginas = Math.ceil(total / limite);
    return (
        <div className="d-flex justify-content-between">
            <button
                className="btn btn-primary"
                disabled={paginaActual <= 1}
                onClick={() => alCambiarPagina(paginaActual - 1)}
            >
                Anterior
            </button>
            <button
                className="btn btn-primary"
                disabled={paginaActual >= totalPaginas}
                onClick={() => alCambiarPagina(paginaActual + 1)}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Paginacion;
