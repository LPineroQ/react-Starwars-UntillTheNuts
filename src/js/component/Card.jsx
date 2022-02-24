import React, { useContext, UseState } from "react";
import {Link} from "react-router-dom";
import "../../styles/Card.css";
import {Context} from "../store/appContext";


const Card = (props)=>{
  const {store, actions}=useContext(Context)
  return(
      <div className="Card">
        <img className="image-top" alt="10px" src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"></img>
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <Link to={`/detail/${props.type}/${props.id}`} className="card-link">Ficha</Link>
        <a href="#" className="card-link" onClick={(e)=> actions.addFavorites(props.name)}>Favorito</a>
        </div>
      </div>)
}

export default Card;