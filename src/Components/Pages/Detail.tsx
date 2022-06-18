import React,{useEffect, useState} from "react";
import Item from "../Item/Item";
import { useContext } from "react";
import {ContextOk} from "../../Context/Context"
import "./styleDetail.css"
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button'



const Detail=()=>{
    
    const {imageOk,GetObject,titleOk,overviewOk,vote,date,genre,backImage,GetVideos,idOk,GetGenre,GetReview,review}=useContext(ContextOk)
    const[checkReview,setCheckReview]=useState(false)

   console.log(review,"review")



    return(
    <div className="item-detail">
        <img src={imageOk} alt="cargando" id="image-detail" />
        <div className="item-detail-text">
            <h3>{titleOk}</h3>
            <h4>{overviewOk}</h4>
            <p>{genre} </p>
            <p>Rating: {vote}</p>
            <p>Fecha de Estreno: {date}</p>
            <div className="button-detail-content">
            <Button variant="primary" className="button-detail" id="button-play" onClick={()=>GetVideos(idOk)}>Play</Button>
           
          </div>
            <div className="item-detail-text-img"> 
                <img  src={`https://image.tmdb.org/t/p/w500/${backImage}`} alt="cargando" id="item-detail-text-img"/>
               
            </div>    
            <Link to={`/review/${idOk}`}> <Button variant="primary" className="button-detail" onClick={()=>GetReview(idOk)}>Leer Reviews. SPOILER</Button></Link>
          <Button variant="primary" className="button-detail" onClick={()=>window.history.back()}>Volver atras</Button>
                      
           
        
           
            
            
        </div>


    </div>)

}

export default Detail

