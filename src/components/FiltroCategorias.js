import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar.js';
import { useDispatch, useSelector } from 'react-redux';
import { limpiarPaginacion } from '../redux/actions/productsActions.js';

const FiltroCategorias = ({ categoria }) => {
    // Estado para controlar qué categoría (si hay alguna) está expandida
    const [categoriaExpandida, setCategoriaExpandida] = useState(null);
    const despachar = useDispatch();
    
    const toggleExpansion = (idCategoria) => {
        // Cambia el estado a null si la categoría ya está expandida, o al idCategoria si está contraída
        setCategoriaExpandida(categoriaExpandida === idCategoria ? null : idCategoria);
        localStorage.setItem(categoria.id, categoriaExpandida === idCategoria ? null : idCategoria);
    };

    useEffect(() => {
         const categoriaIdGuardada = localStorage.getItem(categoria.id);
         setCategoriaExpandida(categoriaIdGuardada);
    }, [categoria]);

    const limpiarPaginacionVista = () => {
        despachar(limpiarPaginacion());
    };

    return (
        <div className="list-group">
                <div key={categoria.id}>
                    <div className="list-group-item display-flex">
                            <button className="btn btn-primary shadow-sm" onClick={() => toggleExpansion(categoria.id)} >
                                {categoriaExpandida === categoria.id ? '-' : '+'}
                            </button>
                            <br/>
                        
                        <Link
                            to={`/${categoria.id}`}
                            class="sidebar-link color-black"
                            onClick={() => limpiarPaginacionVista()}
                        >
                            {categoria.name}
                        </Link>
                    </div>
                    {/* Aquí podrías insertar subcategorías o detalles de cada categoría, solo se muestran si categoriaExpandida es igual al id de la categoría */}
                    {categoriaExpandida === categoria.id && (
                        <div>
                             <Sidebar categorias={categoria.children_categories} esPrimero={false} />
                        </div>
                    )}
                </div>
        </div>
    );
};

export default FiltroCategorias;
