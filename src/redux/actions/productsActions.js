export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: 'PRODUCTS_LOADING' });
    try {
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326');
        const data = await response.json();
        dispatch({ type: 'PRODUCTS_SUCCESS', payload: data.results });
    } catch (error) {
        dispatch({ type: 'PRODUCTS_ERROR', payload: error.message });
    }
};
