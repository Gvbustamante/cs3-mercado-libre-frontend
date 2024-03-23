import React from 'react';

// Componente de paginación que permite navegar entre las páginas de productos.
const Paginacion = ({ total, desplazamiento, limite, cambiarPagina }) => {
    return (
        <div className="d-flex justify-content-between">
            <div className="dataTables_info" role="status" aria-live="polite">
                Mostrando registros del {desplazamiento+1} al {desplazamiento+limite} de un total de {total} registros
            </div>
            <div className="dataTables_paginate paging_simple_numbers">
                <ul className="pagination">
                    <li className={desplazamiento>0 ? "paginate_button page-item previous": "paginate_button page-item previous disabled"} onClick={()=> {cambiarPagina()}}>
                        <button data-dt-idx="0" tabindex="0" className="page-link" onClick={()=> {cambiarPagina('-')}} >Anterior</button>
                    </li>
                    <li className={desplazamiento+limite < total ? "paginate_button page-item next": "paginate_button page-item next disabled"} onClick={()=> {cambiarPagina()}}>
                        <button data-dt-idx="8" tabindex="0" className="page-link" onClick={()=> {cambiarPagina('+')}}>Siguiente</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Paginacion;
