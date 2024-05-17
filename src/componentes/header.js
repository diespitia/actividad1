import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-200 text-white text-sm md:text-xl font-bold py-4 px-8 text-center">
      <span className="block mb-2">Control de inventario @despitia</span>
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-2 rounded-xl text-sm">Home</Link>
          </li>
          <li>
            <Link to="/buscar" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-2 rounded-xl text-sm">Buscar</Link>
          </li>
          <li>
            <Link to="/borradoMasivo" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-2 rounded-xl text-sm">Borrado Masivo</Link>
          </li>
          <li>
            <Link to="/estadistica" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-2 rounded-xl text-sm">Estadística</Link>
          </li>
          <li>
            <Link to="/actualizar" className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-2 rounded-xl text-sm">Actualizar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
