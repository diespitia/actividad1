import React, { useState } from 'react';

const AgregarItems = ({ onAddItem }) => {
    const [name, setName] = useState('');
    const [cantidad, setCantidad] = useState('');

    const enviar = async (e) => {
        e.preventDefault();
        if (name.trim() === '' || cantidad.trim() === '') return;
        await onAddItem(name, cantidad);
        setName('');
        setCantidad('');
    };

    return (

        <div>
            <h1 className="text-2xl font-bold mb-4 text-center mt-5 md:mt-10">
                <span className="border-b-2 inline-block">Agregar al inventario</span>
            </h1>
            <form onSubmit={enviar} className="mb-4 flex flex-col items-center">
                <input
                    type="text"
                    placeholder="Nombre del item"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border rounded py-2 px-3 mr-2 mb-2 w-full md:w-1/2"
                />
                <input
                    type="number"
                    placeholder="Cantidad"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    required
                    className="border rounded py-2 px-3 mr-2 mb-2 w-full md:w-1/2"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ">
                    Agregar al inventario
                </button>
            </form>
        </div>
    );
};

export default AgregarItems;
