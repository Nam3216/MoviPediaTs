import React,{useEffect,useState} from "react";
import  axios  from "axios";

import { ApisOk } from "../Interface/Interface";
import Item from "../Item/Item";
import "./styleSearch.css"
//import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'


const Search=()=>{
    const[searchMovie,setSearchMovie]=useState<ApisOk[]>([])
    const [checkSearch,setCheckSearch]=useState(false)

    const handleInput=(e:any)=>{
        e.preventDefault()
        setCheckSearch(false)//para q apenas empice a buscar otra pelicula, no se muestra anterior
       setSearchMovie(e.target.value)
    }


    
    

    const GetApi=async()=>{
        
        try{
            
        const response= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=42fea80bd124c21e385adf6985bb6c61&query=${searchMovie}`)
        
        const responseData=response.data.results as Array<ApisOk>
        
        setSearchMovie(responseData)
        setCheckSearch(true)//para q se muestre jsx con resultados
       
        }
        catch(err){
            console.log(err)
        }

    }

    console.log(searchMovie, "search")
   //console.log(searchMovie," search resdata")
 
    return(
        <div className="searcher-container">
            <div className="searcher">
                <input type="text" name="busqueda" placeholder="Inserte su busqueda" onChange={handleInput}/>
                <Button  onClick={GetApi}>Buscar</Button>
            </div>
            
            { checkSearch ?( searchMovie.map((movie)=>{
              
                return <Item dataOk={movie} key={movie.id} msg={"search"}/>

            }) ):(
                <div>
                <p id="search">INGRESA TU BUSQUEDA</p>
              
                </div>
            )}
        </div>
    )
}

export default Search
