import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";

import { ApisOk } from "../Interface/Interface";
import axios from "axios";
import Item from "../Item/Item";
import "./styleCategory.css"

const Category=()=>{
    let{genre_id}:any=useParams()//para q no tire error en GetCategoryTtitl
    const[list,setList]=useState<ApisOk[]>([])
    const[list2,setList2]=useState<ApisOk[]>([])
    const[list3,setList3]=useState<ApisOk[]>([])
    const[category,setCategory]=useState(" ")
    
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

      const GetCategoryTitle=()=>{
        let search=genres.find(x=>x.id==parseInt(genre_id))
        if(search!=undefined){
          setCategory(search.name)
          console.log(search.name,"searchname")
        }
        
      }

      useEffect(()=>{
        GetCategoryTitle()
      },[genre_id])

      const url='https://api.themoviedb.org/3/discover/movie?api_key=42fea80bd124c21e385adf6985bb6c61&language=en-US&include_adult=false&include_video=false&page=1'

      const GetApi=async()=>{
        
        try{
            const response=await axios.get(url)
            const responseData=response.data.results as Array<ApisOk>
            setList(responseData)
            GetApi2()
        }
        catch(err){
            console.log(err)
        }
      }

      const url2='https://api.themoviedb.org/3/discover/movie?api_key=42fea80bd124c21e385adf6985bb6c61&language=en-US&include_adult=false&include_video=false&page=2'

      const GetApi2=async()=>{
        try{
          const response=await axios.get(url2)
          const responseData=response.data.results as Array<ApisOk>
          setList2(responseData)
          GetApi3()
        }
        catch(err){
          console.log(err)
        }
      }
     
      const url3='https://api.themoviedb.org/3/discover/movie?api_key=42fea80bd124c21e385adf6985bb6c61&language=en-US&include_adult=false&include_video=false&page=3'
      const GetApi3=async()=>{
        try{
          const response=await axios.get(url3)
          const responseData=response.data.results as Array<ApisOk>
          setList3(responseData)
        }
        catch(err){
          console.log(err)
        }
      }

      useEffect(()=>{
        GetApi()
       
      },[])
     // console.log(list2, "list22222")
   
      return (
        <div className="category-container">
          <h3>{category}</h3>
            {list.map((movie)=>{
              
                if(String(movie.genre_ids[0])==genre_id || String(movie.genre_ids[1])==genre_id ){
                    return<Item dataOk={movie} key={movie.id} msg={"category"} />
                }
            }) 
            }
           {list2.map((movie)=>{
              if(String(movie.genre_ids[0])==genre_id || String(movie.genre_ids[1])==genre_id ){
                return<Item dataOk={movie} key={movie.id} msg={"category"} />
            }
            })}
            {list3.map((movie)=>{
              if(String(movie.genre_ids[0])==genre_id || String(movie.genre_ids[1])==genre_id ){
                return<Item dataOk={movie} key={movie.id} msg={"category"} />
            }
            })}
        </div>
      )
}

export default Category