import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";

const TablaProductos = ({ productos }) => {
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
                    <th scope="col">Producto ID</th>
                    <th scope="col">Nombre producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">MercadoEnlace</th>
                    <th scope="col">Imagen</th>
                </tr>
            </tfoot>
        </table>
    );
};

export default TablaProductos;
