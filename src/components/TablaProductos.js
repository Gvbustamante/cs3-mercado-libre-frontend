import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { obtenerProductos } from '../redux/actions/productsActions';
import Paginacion from './Pagination';


const TablaProductos = ({ productos }) => {
    const { category_id } = useParams(); // Esto obtiene el category_id de la URL
    const despachar = useDispatch();
    const paginacion = useSelector((state) => state.productos);

    const cambiarPagina = (accion) => {
        switch(accion){
            case "-":
                if(paginacion.desplazamiento>0){
                    despachar(obtenerProductos(paginacion.desplazamiento-paginacion.limite, paginacion.limite, category_id));
                }
            break;
            case "+":
                if(paginacion.desplazamiento+paginacion.limite < paginacion.total){
                    despachar(obtenerProductos(paginacion.desplazamiento+paginacion.limite, paginacion.limite, category_id));
                }
            break;
            default: return;
        }
    };

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Producto ID</th>
                    <th scope="col">Nombre producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">MercadoEnlace</th>
                    <th scope="col">Imagen</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto) => (
                    <tr key={producto.id}>
                        <td>{producto.id}</td>
                        <td>{producto.title}</td>
                        <td>${producto.price}</td>
                        <td>
                            <a href={producto.permalink} target="_blank" rel="noopener noreferrer">
                                Ver en Mercado Libre
                            </a>
                        </td>
                        <td>
                        <LazyLoadImage src={producto.thumbnail}
                            
                            alt={producto.title}
                            className="img-fluid" 
                            style={{ maxWidth: '100px' }}
                        />
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                 <tr>
                    <th colSpan="5">
                            <Paginacion
                                total={paginacion.total}
                                desplazamiento={paginacion.desplazamiento}
                                limite={paginacion.limite}
                                cambiarPagina={cambiarPagina}
                            />
                          
                    </th>
                </tr>
            </tfoot>
        </table>
    );
};

export default TablaProductos;
