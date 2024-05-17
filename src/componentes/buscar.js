import React, { useState } from 'react';
import localforage from 'localforage'; 

const Buscar = () => {
    const [resultado, setResultado] = useState(null);
    const [nombre, setNombre] = useState('');

    const buscar = async (e) => {
        e.preventDefault();
        if (nombre.trim() === '') return;

        try {
            const keys = await localforage.keys();
            const items = await Promise.all(keys.map(key => localforage.getItem(key)));
            const itemEncontrado = items.find(item => item && item.name === nombre);
            setResultado(itemEncontrado);
        } catch (error) {
            console.error('Error al buscar el item:', error);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center mt-5 md:mt-10">
                <span className="border-b-2 inline-block">Buscar en el inventario</span>
            </h1>
            <form onSubmit={buscar} className="mb-4 flex flex-col items-center">
                <input
                    type="text"
                    placeholder="Nombre del item"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    className="border rounded py-2 px-3 mr-2 mb-2 w-full md:w-1/2"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ">
                    Buscar en el inventario
                </button>
            </form>
            {resultado && (
                <div className="mt-4 flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-2">Item Encontrados:</h2>
                    <div className="overflow-hidden border border-gray-200 rounded-lg">
                        <table className="min-w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-2 px-4">Nombre</th>
                                    <th className="py-2 px-4">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="py-2 px-4">{resultado.name}</td>
                                    <td className="py-2 px-4">{resultado.quantity}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Buscar;
