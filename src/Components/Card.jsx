import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Card= ({source,nombre, descripcion})=>{
    return(
        <div className="tarjeta">
            <img className="imagen mt-5" src={source}/>
            <h2 className="nombre mt-3">{nombre}</h2>
            <p className="descripcion">{descripcion}</p>
            <button className="btn btn-primary">Más Contenido</button>
        </div>
    )
}

export default Card;