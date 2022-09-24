import React,{useState,useEffect} from "react";
import "./styleHomeHeader.css"
import { ContextOk } from "../../Context/Context";
import { useContext } from "react";
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Item from "../Item/Item";
import  {ApisOk} from "../Interface/Interface";
import axios from "axios";

const HomeHeader=()=>{
    const{imageOk,titleOk,overviewOk,GetVideos,idOk,genre,vote,GetReview,GetObject,date,backImage,genreNumber,fullObject}=useContext(ContextOk)
    
    const[list,setList]=useState<ApisOk[]>([])
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

    console.log(list,"list")
    console.log(imageOk, "imhead")
//si es celular se ve home-header-continaer-text y trae de aca los items, asi en componente item tiene link al detail.
//si es compu, no se ve ese contenedor, y trae item hom
    return(
    <div className="home-header-container">
            <div className="home-header2">
                <div className="img-header-container2">
                    <img src="moviepediablack.gif" id="img-head"  />
                    
                </div>
                
            </div>
               
                
        <div className="listmob">
               {list.map((movie)=>{
                   return <Item dataOk={movie} key={movie.id} msg={"celular"} />
               })}
        </div>
            
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
            <div className="img-header-container">
                <img src={imageOk}/>
                
           
               
            </div>
        </div>
    </div>
    )
}

export default HomeHeader
// <img src={imageOk} alt="cargando"/>

/*<div className="img-header-container" style={{backgroundImage:`url(${imageOk})` ,

              
                backgroundPosition:'center',
               


                backgroundRepeat: 'no-repeat'}}>   */

                /* objectFit:"cover",*/

                  /*backgroundSize: "fill",*/


                  /* <div className="home-header-container-start">
                <img src="moviepediablack.gif" alt="loading"/>
                <h4>Si la peli que buscas no esta aca...no existe</h4>
                <h4>Encontra las ultimas novedades o busca por categoria</h4>
                <div className="item-container1">
               {list.map((movie)=>{
                   return <Item dataOk={movie} key={movie.id} msg={"celular"} />
               })}
               </div>
            </div>*/