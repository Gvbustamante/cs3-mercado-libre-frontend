import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { obtenerProductos } from '../redux/actions/productsActions';
import TarjetaProducto from './ProductCard';

const ListaProductosPorCategoria = () => {
  const { category_id } = useParams(); // Esto obtiene el category_id de la URL
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos.productos);


  useEffect(() => {
    dispatch(obtenerProductos(0, 10,category_id));
  }, [dispatch, category_id]);

  // Renderiza la lista de productos o un mensaje si no hay productos.
  return (
    <div className="container">
          <div className="row">
      {productos && productos.length ? (
        productos.map((producto) => (
          
                <div className="col-sm-4 mb-3" key={producto.id}>
                      <TarjetaProducto producto={producto} />
                  </div>
    
        ))
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
          </div>
      </div>
  );
};

export default ListaProductosPorCategoria;
