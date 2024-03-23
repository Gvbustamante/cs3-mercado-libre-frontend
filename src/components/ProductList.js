import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TarjetaProducto from './ProductCard.js';
import { obtenerProductos } from '../redux/actions/productsActions.js';
import TablaProductos from './TablaProductos.js';

const ListaProductos = () => {
    const dispatch = useDispatch();
    const productos = useSelector((estado) => estado.productos.productos); 

    useEffect(() => {
        dispatch(obtenerProductos());
    }, [dispatch]);
    return (
        <div className="container">
            <div className="row">
                {/* {productos.map((producto) => (
                    <div className="col-sm-4 mb-3" key={producto.id}>
                        <TarjetaProducto producto={producto} />
                    </div>
                ))} */}
                <TablaProductos productos={productos} />
            </div>
        </div>
    );
};

export default ListaProductos;
