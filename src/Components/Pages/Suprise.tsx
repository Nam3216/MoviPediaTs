import React,{useState,useEffect} from "react";
import axios from "axios"
//import { ApisOk } from "../Interface/Interface";
import Item from "../Item/Item";
import "./styleSurprise.css"

const Surprise=()=>{
   
    const[movie,setMovie]=useState({  id:0,
        poster_path:" ",
        genre_ids:[],
        original_title:" ",
        vote_average:0,
        overview:" ",
        release_date:" "})

    const baseUrl:string='https://api.themoviedb.org/3'
    const apiKey:string='42fea80bd124c21e385adf6985bb6c61';
    const url:string=`${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
    
    const GetApi=async()=>{
        try{
            const response=await axios.get(url)
            const responseData=response.data.results /*as Array<ApisOk>*/
            const aleatorio = responseData[Math.floor(Math.random() * responseData.length)]
            //setList(list)
            setMovie(aleatorio)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        GetApi()
    },[])
    console.log(movie.original_title, "suprrise")
    return (
        <div className="surprise">
            <h3>Surprise Movie</h3>
           <Item dataOk={movie} key={movie.id} msg={"surprise"} />
           
        </div>
    )
}

export default Surprise