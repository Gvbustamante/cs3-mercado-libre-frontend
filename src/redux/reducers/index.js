import { combineReducers } from 'redux';
import productsReducer from './productsReducer'; 
import categoriesReducer from './categoriesReducer'; 

const rootReducer = combineReducers({
    productos: productsReducer,
    categorias: categoriesReducer,
});

export default rootReducer;
