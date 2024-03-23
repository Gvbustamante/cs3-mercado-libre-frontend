import React, { useEffect } from 'react';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerCategorias } from './redux/actions/categoriasActions.js';
import  routesArray  from './routes.js';
import { BrowserRouter, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar.js';

function App() {

  const dispatch = useDispatch();
  const categorias = useSelector((estado) => estado.categorias.categorias); 

  useEffect(() => {
      dispatch(obtenerCategorias()); 
  }, [dispatch]);
  
    return (
        <BrowserRouter>
            <div>
                <Header />
                    
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            {/* Sidebar para Filtro de Categorías */}
                            <Sidebar categorias={categorias}  esPrimero={true}/>
                        </div>
                        <div className="col-md-9">
                            {/* Contenido Principal */}
                            <Routes>
                                {routesArray}
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
