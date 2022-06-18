
import React,{useState,useEffect} from "react";
import "./styleHome.css"
import  {ApisOk} from "../Interface/Interface";
import axios from "axios";
import Item from "../Item/Item";
import HomeHeader from "../HomeHeader/HomeHeader";
import "./styleHome.css"
import { useContext } from "react";
import { ContextOk } from "../../Context/Context";



const Home=()=>{
    
    const[list,setList]=useState<ApisOk[]>([])//ACA LE DIGO QUE EL USESTATE VA A SER [] Y EL TIPO ES ApisOk[] es un array de con los tipos de apiOK
    //o <ApisOk[]> o Array<ApisOk>

    const{imageOk,GetObject}=useContext(ContextOk) 
   
    

    const baseUrl:string='https://api.themoviedb.org/3'
    const apiKey:string='42fea80bd124c21e385adf6985bb6c61';
    const url:string=`${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`

        //instalo axios

        const GetApi=async()=>{
            try{
                const res = await axios.get(url)
                const resData= res.data.results as Array<ApisOk> /*ApisOk[]*/ //entro al results y le digo q lo traiga como array de apisOK. podria ser ApisOk[] como arriba. data es del axios
                setList(resData)
                GetObject(resData[0])//pongo esto asi apenas arranca pagina ya le pasa una pelicula para q se ponga en el home hed
            }
            catch(err){
                console.log(err)
            }
        }

        useEffect(()=>{
            GetApi()
        },[])

   
     

        //console.log("list", list)

       return(
           <div className="home-container">
               <HomeHeader/>
               <div className="item-container">
               {list.map((movie)=>{
                   return <Item dataOk={movie} key={movie.id} msg={"home"} />
               })}
               </div>
           </div>
       ) 


}

export default Home
