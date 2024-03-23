import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { obtenerProductos } from '../redux/actions/productsActions.js'; 
import { Link } from 'react-router-dom';
import Sidebar from './sidebar.js';

const FiltroCategorias = ({ categoria }) => {
    const despachar = useDispatch();
    // Estado para controlar qué categoría (si hay alguna) está expandida
    const [categoriaExpandida, setCategoriaExpandida] = useState(null);
    
    const manejarCambioCategoria = (idCategoria) => {
        despachar(obtenerProductos(0, 10, idCategoria));
    };

    const toggleExpansion = (idCategoria) => {
        // Cambia el estado a null si la categoría ya está expandida, o al idCategoria si está contraída
        setCategoriaExpandida(categoriaExpandida === idCategoria ? null : idCategoria);
        localStorage.setItem(categoria.id, categoriaExpandida === idCategoria ? null : idCategoria);
    };

    useEffect(() => {
         const categoriaIdGuardada = localStorage.getItem(categoria.id);
         setCategoriaExpandida(categoriaIdGuardada);
    }, [categoria]);

    return (
        <div className="list-group">
                <div key={categoria.id}>
                    <div className="list-group-item">
                            <button onClick={() => toggleExpansion(categoria.id)} >
                                {categoriaExpandida === categoria.id ? '-' : '+'}
                            </button>
                        
                        <Link
                            to={`/${categoria.id}`}
                            className="list-group-item-action"
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
