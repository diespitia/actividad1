import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-400 text-white text-md font-bold py-4 px-8 text-center absolute bottom-0 w-full">
            <div class="container mx-auto flex justify-between">
                <div class="column w-full md:w-1/3">
                    <h3 class="text-lg md:text-sm">Desarrollado por</h3>
                    <p class="text-sm md:text-md">Diego Espitia</p>
                </div>
                <div class="column w-full md:w-1/3">
                    <h3 class="text-lg md:text-sm">Institución</h3>
                    <p class="text-sm md:text-md">UNIR</p>
                </div>
                <div class="column w-full md:w-1/3">
                    <h3 class="text-lg md:text-sm">Actividad</h3>
                    <p class="text-sm md:text-md">Número 1</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;