import React from 'react';
import FiltroCategorias from './FiltroCategorias'; // Asegúrate de que la ruta de importación es correcta

// Puedes pasar las categorías como prop al Sidebar si estas son necesarias para otros componentes dentro del Sidebar
const Sidebar = ({ categorias, esPrimero }) => {
    return (
        <div className="sidepanel-inner d-flex flex-column">
<nav id="app-nav-main" className={esPrimero?"app-nav app-nav-main flex-grow-1 mt-5":"app-nav app-nav-main flex-grow-1 mt-3 mb-3 ms-5"}>
                {categorias?.map((categoria) => (
                    <FiltroCategorias categoria={categoria} />
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
