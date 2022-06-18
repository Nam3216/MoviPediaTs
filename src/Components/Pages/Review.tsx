import React from "react"
import { ContextOk } from "../../Context/Context"
import { useContext } from "react"
import "./styleReview.css"

const Review=()=>{

    const{review}=useContext(ContextOk)

    return(
        <div className="review-container">
             <button onClick={()=>window.history.back()}>Volver atras</button>
            {review.map((item)=>{
                return (
                        <div className="item-review" >
                            <p>Autor: {item.author} </p>
                            <p>Reseña: {item.content}</p>
                            
                            
                            
                        </div>
                      
                        
                        )
            })}
        </div>
    )


}

export default Review