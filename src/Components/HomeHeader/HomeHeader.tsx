import React from "react";
import "./styleHomeHeader.css"
import { ContextOk } from "../../Context/Context";
import { useContext } from "react";
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button'

const HomeHeader=()=>{
    const{imageOk,titleOk,overviewOk,GetVideos,idOk,genre,vote,GetReview,GetObject,date,backImage,genreNumber,fullObject}=useContext(ContextOk)
    
    console.log(imageOk, "imhead")

    return(
        <div className="home-header">
            
            <div className="home-header-text">
                <h3>{titleOk}</h3>
                <p>{genre} </p>
                <p>Rating: {vote} </p>
                <p id="overview">{overviewOk}</p>
                <div className="header-button">
                <Button variant="primary" className="button-header" onClick={()=>GetVideos(idOk)}>Play</Button>
               <Link to={`/detail/${idOk}`}> <Button variant="primary" className="button-header" onClick={()=>GetObject(fullObject)}>Ver detalles</Button></Link>
               </div>
            </div>
            <div className="img-header-container" style={{backgroundImage:`url(${imageOk})` ,

                    backgroundSize: 'fill',
                    backgroundPosition:'center',
                    

                    backgroundRepeat: 'no-repeat'}}>
               
            </div>
        </div>
    )
}

export default HomeHeader
// <img src={imageOk} alt="cargando"/>