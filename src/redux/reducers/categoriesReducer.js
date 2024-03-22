
const initialState = {
    categorias: [], 
    loading: false,
    error: null,
};

export default function categoriasReducer(state = initialState, action) {
    switch (action.type) {
        case 'CATEGORIAS_CARGANDO':
            return {
                ...state,
                cargando: true,
            };
        case 'CATEGORIAS_EXITO':
            return {
                ...state,
                cargando: false,
                categorias: action.payload,
            };
        case 'CATEGORIAS_ERROR':
            return {
                ...state,
                cargando: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
