import React,{useState,useEffect} from "react"
import axios from "axios"
import { ApisOk } from "../Interface/Interface"
import Item from "../Item/Item"
import "./styleNewMovie.css"

const NewMovie=()=>{
    
    const[list,setList]=useState<ApisOk[]>([])

    const url="https://api.themoviedb.org/3/discover/movie?api_key=42fea80bd124c21e385adf6985bb6c61&discover/movie?primary_release_year=2022&sort_by=vote_average.desc"

    const GetApi=async()=>{
        try{
            const response=await axios.get(url)
            const responseData=response.data.results as Array<ApisOk>
            setList(responseData)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        GetApi()
    },[])
   

    return(
        <div className="new-movie">
            {list.map((movie)=>{
                return <Item dataOk={movie} key={movie.id} msg="new"/>
            })}
        </div>
    )
}

export default NewMovie

