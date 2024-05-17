import React from 'react';

const ListarInventario = ({ items, onRemoveItem }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center">
                <span className="border-b-2 inline-block">Lista actual de inventario</span>
            </h1>
            <div>
                <ul className="divide-y divide-gray-200">
                    <li className="py-2 grid grid-cols-4 gap-4 items-center bg-gray-50 font-semibold">
                        <span className="text-lg text-gray-800 text-center">Nombre del Item</span>
                        <span className="text-lg text-gray-800 text-center">Cantidad</span>
                        <span className="text-lg text-gray-800 text-center">ID</span>
                        <span className="text-lg text-gray-800 text-center">Acción</span>
                    </li>
                    {items.map(item => (
                        <li key={item.key} className="py-2 grid grid-cols-4 gap-4 items-center">
                            <span className="text-lg text-gray-800 text-center">{item.value.name}</span>
                            <span className="text-lg text-gray-800 text-center">{item.value.quantity}</span>
                            <span className="text-lg text-gray-800 text-center">{item.key}</span>
                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded" onClick={() => onRemoveItem(item.key)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default ListarInventario;