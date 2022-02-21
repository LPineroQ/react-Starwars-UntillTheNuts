import React, { useContext } from "react";
import {Link} from "react-router-dom";

const Card = (props)=>{
  return(
      <div className="Card">
        <img className="image-top" alt="10px" src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"></img>
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <Link to={`/detail/${props.type}/${props.id}`} className="card-link">Ficha</Link>
        <a href="#" className="card-link">Favorito</a>
        </div>
      </div>)
}

export default Card;