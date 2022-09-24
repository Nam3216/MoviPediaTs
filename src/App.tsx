import React, { useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import NavbarOk from './Components/Navbar/NavbarOk';
import Home from "./Components/Pages/Home"
import ContextContainer from "./Context/Context"
import Search from './Components/Pages/Search';
import Category from './Components/Pages/Category';
import Detail from './Components/Pages/Detail';
import Review from './Components/Pages/Review';
import NewMovie from './Components/Pages/New';
import Surprise from './Components/Pages/Suprise';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Components/Pages/Footer';
//import 'bootstrap/dist/css/bootstrap'
//import Navbar2 from "./Components/Navbar/Navbar2"


function App() {

  useEffect(()=>{
    document.title="Movie-Pedia"
  },[])
  return (
    <div className="App">
      <ContextContainer>
      <div className='content'>
      <BrowserRouter>
      <header className="App-header">
        <NavbarOk/>
      </header>

      <main>
        <Routes>
          <Route path={'/MoviPediaTs'} element={<Home/>}/>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/sorpresa'} element={<Surprise/>}/>
          <Route path={'/categorias/categoria/:genre_id'} element={<Category/>}/>
          <Route path={'/busqueda'} element={<Search/>}/>
          <Route path={'/novedades'} element={<NewMovie/>}/>
          <Route path={'/detail/:id'} element={<Detail/>}/>
          <Route path={'/review/:id'} element={<Review/>}/>





        </Routes>
      </main>

    <Footer/>

      </BrowserRouter>
      </div>
     </ContextContainer>
    </div>
  );
}

export default App;
