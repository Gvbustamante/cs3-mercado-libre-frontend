const initialState = {
    products: [],
    loading: false,
    error: null,
};

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case 'PRODUCTS_LOADING':
            return { ...state, loading: true, error: null };
        case 'PRODUCTS_SUCCESS':
            return { ...state, loading: false, products: action.payload };
        case 'PRODUCTS_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default productsReducer;
