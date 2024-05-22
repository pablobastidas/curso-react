import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";

function Navbar(){

    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto) // !false = true
    }

    console.log(menuAbierto)

    return(
        <nav className="bg-green-600 p-4">
            <div className="flex items-center justify-between">
                <div className="text-white text-2xl font-bold">Mi Tienda</div>

                <div className="md:hidden">
                    <button className="text-white" onClick={toggleMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>

                <ul className="hidden md:flex space-x-4">
                    <li><a href="#" className="text-white">Inicio</a></li>
                    <li><a href="#" className="text-white">Productos</a></li>
                    <li><a href="#" className="text-white">Contacto</a></li>
                    <li><CartWidget/></li>
                </ul>

                {/* Open Menú */}
                {
                    menuAbierto ? (

                    <ul className='flex-col md:hidden'>
                        <li className="py-2"><a href="#" className="text-white">Inicio</a></li>
                        <li className="py-2"><a href="#" className="text-white">Productos</a></li>
                        <li className="py-2"><a href="#" className="text-white">Contacto</a></li>
                        <li className="py-2"><CartWidget/></li>
                    </ul>
                ) : null}
            </div>
        </nav>
    )
}

export default Navbar