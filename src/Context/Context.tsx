
import React,{useState,useEffect,FC} from "react"
import axios from "axios"
import { ApisVideos } from "../Components/Interface/InterfaceVideos"
import {useNavigate} from "react-router-dom"
import { createContext } from "react"
import { ApisReview } from "../Components/Interface/InterfaceReview"


/*interface ContextInt{ TAMBIEN PUEDE USARSE INTERFACE PARA TIPAR CONTEXT
    imageOk:string,
    GetImage:(imagen:any)=>{
         imagen
    },
}*/

//1 para tipar el create Context, le tengo q poner asi y pasar como argumento el tipado de cada cosa q voy a usar para pasar como context
const ContextType={
    imageOk:" ",
    GetObject:(imagen:any)=>{//para tipar funciones
        return imagen
    },
    titleOk:" ",
    overviewOk:" ",
    vote:0,
    date:" ",
    genre:" ",
    backImage:" ",
    GetVideos:(id:any)=>{//asi tipo una fincion. funcionnombre:(argumentos si tiene, si no vacio los parentesis)=>lo que devuelve
        return id
    },
    
    idOk:0,
    GetGenre:(genreInNumber:any)=>{
        return genreInNumber
    },
    genreNumber:0,
    GetReview:(id:any)=>{
        return id
    },
    review:[{content:" ",author:" "}],//asi tipo un array de objetos que agarra info de la api
    fullObject:{},//para guardar objecto completo en GetObject por si alguno necesita
  
    
}
//2 le doy un tipo al arg de create context o creo una interface y se la paso asi createContext<IThemeContext>({})
const ContextOk=createContext(ContextType)//le pongo eso adentro para q ande

interface ChildInt{//2 para tipar el children
    children:React.ReactNode
}

const ContextContainer=({children}:ChildInt )=>{
    const[imageOk,setImageOk]=useState(" ")//`https://image.tmdb.org/t/p/w500/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg`
    const[titleOk,setTitleOk]=useState(" ")
    const[overviewOk,setOverviewOk]=useState(" ")
    const[vote,setVote]=useState(0)
    const[date,setDate]=useState(" ")
    const[genre,setGenre]=useState(" ")
    const[backImage,setBackImage]=useState(" ")
    const[video,setVideo]=useState<ApisVideos[]>([])//esto no lo tipe porque no lo paso como context
    const[idOk,setIdOk]=useState(0)
    const[genreNumber,setGenreNumber]=useState(0)
    const[review,setReview]=useState<ApisReview[]>([])//esto va a guardar el array de objetos que devulve funcion getreview
    const[fullObject,setFullObject]=useState({})
   
    //--------------------1--------------------------------------------------
    //es para pasar al headerhome o a detail, el objeto cdo hacen click en la imagen de pelicula en el home o categora u otra lista, puede ser asi o le puedo pasar el objeto entero
    const GetObject=(dataOk:any)=>{
        console.log(dataOk, "dataok")
        setImageOk(`https://image.tmdb.org/t/p/w500${dataOk.poster_path}`)//`https://image.tmdb.org/t/p/w300${dataOk.poster_path}`
        setTitleOk(dataOk.original_title)
        setOverviewOk(dataOk.overview)
        setVote(dataOk.vote_average)
        setDate(dataOk.release_date)
        setBackImage(dataOk.backdrop_path)
        setIdOk(dataOk.id)
        setGenreNumber(dataOk.genre_ids[0])
        GetGenre(dataOk.genre_ids[0])//llamo funcion q busqe el genre en numero y lo pase al state en text
        setFullObject(dataOk)//guardo objeto completo que recibe por si alguno necesita
    }
        
     

    // para obtener el genre en texto cdo apretan el boton en la inicio y se muestra en home header

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

      const GetGenre=(genreInNumber:number)=>{
        let search=genres.filter(item=>item.id==genreInNumber)
        setGenre(search[0].name)

      }
      console.log(genre,"genre text")
//-------------------------------------2---------------------------------------------------
//es para obtener videos cdo apretan play, obtiene de esa direccion y la lista de videos. devuelve una lista con un key, ahi se activa playvideo
    const GetVideos=async(id:any)=>{
        try{
            const response=await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=42fea80bd124c21e385adf6985bb6c61&language=en-US`)
            const responseData=response.data.results as Array<ApisVideos>
            setVideo(responseData)
            PlayVideo(responseData)
           
        }
        catch(err){
            console.log(err, "erroror")
        }
    }


//funcion aparte para play video, podria ser dentro del axios, pero mejor aparte. con el key que devuelve la lsita responseData, esa se va a abrir en yourube.
    const PlayVideo=(responseData:any)=>{
        if(responseData.length>0){
            let contador=-1
            let posicion=0
            for (const item of responseData){//para que encuentre lo que sea trailer y reproduzca eso, si no encuentra ningun trailer, posicion va a ser 0 y va a reproducir primer video q haya
                contador++
                if(item.type=="Trailer"){
                    posicion=contador
                }
            }
        
            window.open(` https://www.youtube.com/watch?v=${responseData[posicion].key}`)
        }
        else{//poner otro alert mejor
            alert("No hay videos para mostrar")
           
        }
    }

   

    //--------------------------3-----------------
    //obtener movie review, hacer web q ponga review, en home header se puede poner un boton ir a detalles, va a detail y ahi hay un boton de muestra detalles

    const GetReview=async (id:any)=>{//el other no lo uso aca, es para q se ponga true el state en detail y muestre las reviews
        
        try{
            const response=await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=42fea80bd124c21e385adf6985bb6c61&language=en-US&page=1`)
            const responseData=response.data.results as Array<ApisReview>
            console.log(responseData, "review")
            responseData.map((item)=>{
                setReview(responseData)
            })
            

        }
        catch(err){
            console.log(err)
        }
    }

    console.log(review)

    const dataContext={imageOk,GetObject,titleOk,overviewOk,vote,date,genre,backImage,GetVideos,video,idOk,GetGenre,genreNumber,GetReview,review,fullObject}

    return(
        <div>
            <ContextOk.Provider value={dataContext}>
                {children}
            </ContextOk.Provider>
        </div>
    )
}

export default ContextContainer
export {ContextOk}