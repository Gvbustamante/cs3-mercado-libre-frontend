import axios from "axios";

export const obtenerCategorias = () => async (dispatch) => {
    dispatch({ type: 'CATEGORIAS_CARGANDO' });
    try {
        const respuesta = await axios.get('https://api.mercadolibre.com/sites/MLA/categories');
        const categorias = respuesta.data;

        // Filtra las categorías con productos disponibles.
        filtrarCategoriasDisponibles(categorias).then(categoriasFiltradas => {
            // Remueve las entradas nulas (categorias sin productos).
            const categoriasDisponibles = categoriasFiltradas.filter(categoria => categoria !== null);
            dispatch({ type: 'CATEGORIAS_EXITO', payload: categoriasDisponibles });
        });

    } catch (error) {
        dispatch({ type: 'CATEGORIAS_ERROR', payload: error.message });
    }
};


const filtrarCategoriasDisponibles = (categorias) => {

    const promesas = categorias.map((categoria) => 
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326&category=${categoria.id}&offset=0&limit=1`)
            .then(respuesta => respuesta.data.results.length > 0 ? categoria : null)
            .catch(() => null)
    );
    // Usamos Promise.all para manejar múltiples solicitudes de manera eficiente.
    return Promise.all(promesas);
};

