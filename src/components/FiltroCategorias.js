import React from 'react';
import { useDispatch } from 'react-redux';
import { obtenerProductos } from '../redux/actions/productsActions.js'; 
import { Link } from 'react-router-dom';

const FiltroCategorias = ({ categorias }) => {
    const despachar = useDispatch();

    const manejarCambioCategoria = (idCategoria) => {
        despachar(obtenerProductos(0, 10, idCategoria));
    };

    return (
        <div className="list-group">
            {categorias.map((categoria) => (
                <Link
                    key={categoria.id}
                    to={`/${categoria.id}`}
                    className="list-group-item list-group-item-action"
                    // onClick={() => manejarCambioCategoria(categoria.id)}
                >
                    {categoria.name}
                </Link>
            ))}
        </div>
    );
};

export default FiltroCategorias;
