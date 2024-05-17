import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { getItems, addItem, removeItem } from './servicios/database';
import Header from './componentes/header';
import Footer from './componentes/footer';
import ListarInventario from './componentes/listarInventario';
import AgregarItems from './componentes/agregarItem';
import Buscar from './componentes/buscar';
import BorradoMasivo from './componentes/borradoMasivo';
import Estadistica from './componentes/estadistica';
import Actualizar from './componentes/actualizar';

function App() {
  const [items, setItems] = useState([]);
  const [showAddItem, setShowAddItem] = useState(true);
  const location = useLocation();

  useEffect(() => {
    obtenerItems();
  }, []);

  useEffect(() => {
    // Check the current location and decide whether to show AddItem component
    setShowAddItem(location.pathname !== "/buscar" && location.pathname !== "/estadistica" && location.pathname !== "/borradoMasivo" && location.pathname !== "/actualizar");
  }, [location]);

  const obtenerItems = async () => {
    const storedItems = await getItems();
    setItems(storedItems);
  };

  const agregarItems = async (name, quantity) => {
    const newItem = { key: Date.now().toString(), name, quantity };
    await addItem(newItem.key, newItem);
    obtenerItems();
  };

  const eliminarItem = async (key) => {
    await removeItem(key);
    obtenerItems();
  };

  return (
    <div>
      <Header />
      <div className='mx-5 md:mx-10'>
        <ListarInventario items={items} onRemoveItem={eliminarItem} />
        {showAddItem && <AgregarItems onAddItem={agregarItems} />}
      </div>
      <Routes>
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/estadistica" element={<Estadistica />} />
        <Route path="/borradoMasivo" element={<BorradoMasivo />} />
        <Route path="/actualizar" element={<Actualizar />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
