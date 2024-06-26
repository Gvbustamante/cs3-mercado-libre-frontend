import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { obtenerProductos } from '../redux/actions/productsActions';
import TablaProductos from './TablaProductos';

const ListaProductosPorCategoria = () => {
  const { category_id } = useParams(); // Esto obtiene el category_id de la URL
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos.productos);
  const paginacion = useSelector((state) => state.productos);


  useEffect(() => {
      dispatch(obtenerProductos(paginacion.desplazamiento, paginacion.limite,category_id));
  }, [dispatch, category_id]);

  // Renderiza la lista de productos o un mensaje si no hay productos.
  return (
    <div className="container">
          <div className="row">
      {(productos && productos.length>0) ? 
      (
        <div className="col-12 mb-3" >
            {/* <TarjetaProducto producto={producto} /> */}
            <TablaProductos productos={productos} />
        </div>
      ): 
      (
        <p>No hay productos en esta categoría.</p>
      )}
          </div>
      </div>
  );
};

export default ListaProductosPorCategoria;
