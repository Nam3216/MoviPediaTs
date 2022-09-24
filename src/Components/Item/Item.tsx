import React, { useEffect,useState } from "react";
import "./styleItem.css"
import { ApisOk } from "../Interface/Interface";
import {ContextOk} from "../../Context/Context"
import {useContext} from "react"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star';


 interface DataType{
        dataOk:{
            id:number,
            original_title:string,
            overview:string,
            poster_path:string,
            release_date:string,
            vote_average:number,
            genre_ids:number[]
            
            
    },
    msg:string//aca, adentro de Datatype pero fuera de dataOk que es el objeto defino el type de msg
   
 }
const Item=({dataOk,msg}:DataType)=>{
    
    const{id,original_title,overview,poster_path,release_date,vote_average,genre_ids}=dataOk
    const{GetObject,imageOk,GetVideos}=useContext(ContextOk)
    const[genreItem,setGenreItem]=useState(" ")
    const[genreItem2,setGenreItem2]=useState(" ")
   
    const Navigate:any=useNavigate()

   
//funcion para obtener el genre de cada pelicula y mostrarlo. usando el de context no andaba
    
    const genres = [
        { id: 28, name: 'Action' },
        { id: 12, name: 'Adventure' },
        { id: 16, name: 'Animation' },
        { id: 35, name: 'Comedy' },
        { id: 80, name: 'Crime' },
        { id: 99, name: 'Documentary' },
        { id: 18, name: 'Drama' },
        { id: 10751, name: 'Family' },
        { id: 14, name: 'Fantasy' },
        { id: 36, name: 'History' },
        { id: 27, name: 'Horror' },
        { id: 10402, name: 'Music' },
        { id: 9648, name: 'Mystery' },
        { id: 10749, name: 'Romance' },
        { id: 878, name: 'Science Fiction' },
        { id: 10770, name: 'TV Movie' },
        { id: 53, name: 'Thriller' },
        { id: 10752, name: 'War' },
        { id: 37, name: 'Western' },
      ]

      const GetGenreItem=(genreInNumber:number,genreInNumber2:number)=>{
      //  console.log(genreInNumber, "1")
       // console.log(genreInNumber2, "2")
        if(genreInNumber!=undefined){//hay peliculas q no tienen genre id, asi no salta error, directamente no le pone el genero
            let search=genres.filter(item=>item.id==genreInNumber)
            let search2=genres.filter(item=>item.id==genreInNumber2)
           // console.log(search2[0].name, "search2")
          // console.log(search2, "s2")
            setGenreItem(search[0].name)
            if(genreInNumber2 != undefined){
                setGenreItem2(search2[0].name)
            }
            
        }

      }
    
    useEffect(()=>{
        GetGenreItem(genre_ids[0],genre_ids[1])
        
    },[])
    //console.log(genre_ids[0],"ids")
      

    return(
       <div className="itm" key={id} >
        
           
            {msg=="home"? (
            <div className="item"> 
                <img onClick={()=> GetObject(dataOk)} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="cargando"/>
                <p id="p-title">{original_title} </p>
                <p>{genreItem}/{genreItem2} </p>
                <div> Rating: {vote_average}{vote_average<3  && <div><StarIcon/></div>}
                {vote_average<5 && vote_average >3 && <div><StarIcon fontSize="medium" className="star" /><StarIcon className="star"/></div>}
                {vote_average>=5 && vote_average <8 && <div><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/></div>}
                {vote_average>=8 && vote_average <9 && <div><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/></div>}
                {vote_average>=9 && <div><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/></div>} </div>
               
                
               
            </div>):(
                <div className="item"> 
                  <Link to={`/detail/${id}`} > <img  onClick={()=> GetObject(dataOk)} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="cargando"/></Link>
                    <p id="p-title">{original_title} </p>
                    <div>{genreItem}/{genreItem2}</div>
                    <div>Rating: {vote_average} {vote_average<3  && <div><StarIcon/></div>}
                {vote_average<5 && vote_average >3 && <div><StarIcon fontSize="medium" className="star"/><StarIcon fontSize="medium"className="star" /></div>}
                {vote_average>5 && vote_average <8 && <div><StarIcon fontSize="medium" className="star"/><StarIcon fontSize="medium" className="star"/><StarIcon fontSize="medium" className="star"/></div>}
                {vote_average>8 && vote_average <9 && <div><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/></div>}
                {vote_average>9 && <div><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/><StarIcon fontSize="medium"className="star"/></div>} </div>
                   
                    
                   
                </div>
            ) }
        </div>
    )

}

export default Item