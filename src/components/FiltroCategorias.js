import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { obtenerProductos } from '../redux/actions/productsActions.js'; 
import { Link } from 'react-router-dom';

const FiltroCategorias = ({ categorias }) => {
    const despachar = useDispatch();
    // Estado para controlar qué categoría (si hay alguna) está expandida
    const [categoriaExpandida, setCategoriaExpandida] = useState(null);

    const manejarCambioCategoria = (idCategoria) => {
        despachar(obtenerProductos(0, 10, idCategoria));
    };

    const toggleExpansion = (idCategoria) => {
        // Cambia el estado a null si la categoría ya está expandida, o al idCategoria si está contraída
        setCategoriaExpandida(categoriaExpandida === idCategoria ? null : idCategoria);
    };

    return (
        <div className="list-group">
            {categorias.map((categoria) => (
                <div key={categoria.id}>
                    <div className="list-group-item">
                        <button onClick={() => toggleExpansion(categoria.id)}>
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
                            {/* Contenido expandido de la categoría */}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FiltroCategorias;
