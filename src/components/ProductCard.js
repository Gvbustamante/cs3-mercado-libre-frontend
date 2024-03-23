import React from 'react';

const TarjetaProducto = ({ producto }) => {
    return (
        <div className="card">
            <img src={producto.thumbnail} className="card-img-top" alt={producto.title} />
            <div className="card-body">
                <h6 className="card-title">{producto.title}</h6>
                <p className="card-text">ID: {producto.id}</p>
                <p className="card-text">Precio: ${producto.price}</p>
                <a href={producto.permalink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Ver en Mercado Libre</a>
            </div>      
        </div>

    );
};

export default TarjetaProducto;
