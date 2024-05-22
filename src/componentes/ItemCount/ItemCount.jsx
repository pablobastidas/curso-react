import React, { useState} from "react";
import Button from "../Button/Button";

// const ItemCount = ({stock, inicial, add}) => {
//     const [cantidad, setCantidad] = useState(inicial)

//     const incremento = () => {
//         if(cantidad < stock){
//             setCantidad(cantidad + 1)
//         }
//     }

//     const decremento = () => {
//         if(cantidad > 1){
//             setCantidad(cantidad - 1)
//         }
//     }
// }


function ItemCount(){

    return(
        <div className="Contador">
            <div className="Operaciones">
                <h4 className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{cantidad}</h4>

            </div>
        </div>
    )

}

export default ItemCount