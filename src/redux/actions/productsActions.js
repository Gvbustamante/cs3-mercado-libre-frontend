import axios from "axios";

// Acción asíncrona para obtener productos desde la API de Mercado Libre.
export const obtenerProductos = (desplazamiento = 0, limite = 10, idCategoria = '') => async (despachar) => {
    // Construimos la URL con los parámetros proporcionados.
    let url = `https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326&offset=${desplazamiento}&limit=${limite}`;
    if (idCategoria) {
        url += `&category=${idCategoria}`;
    }

    // Indicamos que la carga de productos ha comenzado.
    despachar({ type: 'PRODUCTOS_CARGANDO' });

    try {
        // Realizamos la solicitud a la API utilizando axios.
        const respuesta = await axios.get(url);
        // Despachamos la acción de éxito al obtener los productos.
        despachar({ type: 'PRODUCTOS_EXITO', payload: respuesta.data.results, total: respuesta.data.paging.total });
    } catch (error) {
        // En caso de error, despachamos la acción correspondiente.
        despachar({ type: 'PRODUCTOS_ERROR', payload: error.response.data.message });
    }
};