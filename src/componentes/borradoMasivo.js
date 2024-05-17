import React from 'react';
import localforage from 'localforage';

const BorradoMasivo = () => {
  const borrarTodosLosDatos = async () => {
    localforage.clear().then(function () {
      
      console.log('Database is now empty.');
    }).catch(function (err) {
      console.log(err);
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center mt-5 md:mt-10">
        <span className="border-b-2 inline-block">Borrar Todos los Datos</span>
      </h1>
      <div className="flex justify-center">
        <button onClick={borrarTodosLosDatos} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ">
          Borrar Todos los Datos
        </button>
      </div>
    </div>
  );
};

export default BorradoMasivo;
