import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from '../reducers';

const estadoInicial = {};

const middleware = [thunk];

// Creamos el store con los reducers combinados y middleware aplicado.
const store = createStore(
  rootReducer,
  estadoInicial,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )

)
export default store;
