const estadoInicial = {
    productos: [],
    total: 0, 
    cargando: false,
    error: null,
    desplazamiento:0,
    limite:10,
};

// Reducer para manejar el estado de los productos.
function reducerProductos(estado = estadoInicial, accion) {
    switch (accion.type) {
        case 'PRODUCTOS_CARGANDO':
            return { ...estado, cargando: true, error: null };
        case 'PRODUCTOS_EXITO':
            return { ...estado, cargando: false, productos: accion.payload, total: accion.total, desplazamiento: accion.desplazamiento, limite:accion.limite};
        case 'PRODUCTOS_ERROR':
            return { ...estado, cargando: false, error: accion.payload };
        case 'PRODUCTOS_POR_CATEGORIA_EXITO':
            return { ...estado, cargando: false, productos: accion.payload, total: accion.total };
        default:
            return estado;
    }
}

export default reducerProductos;
