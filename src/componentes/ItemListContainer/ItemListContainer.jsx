import React from "react";

const ItemListContainer = ({title}) => {

    return (
        <div className="container">
            <div className="pt-10"></div>
            <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">{title}</h1>
        </div>
    )

}

export default ItemListContainer
