import { Route } from 'react-router-dom';
import ListaProductosPorCategoria from './components/ListaProductosPorCategoria';
import ListaProductos from './components/ProductList';


const routesArray = [
  <Route key="listaGeneral" path="/" element={<ListaProductosPorCategoria />} />,
  <Route key="listaProductos" path="/:category_id" element={<ListaProductosPorCategoria />} />
]

export default routesArray;