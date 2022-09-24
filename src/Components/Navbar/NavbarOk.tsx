import React, { useEffect,useState } from "react"
import {Link} from "react-router-dom"
import Navbar from'react-bootstrap/Navbar'
import Container from'react-bootstrap/Container'
import Nav from'react-bootstrap/Nav'
import NavDropdown from'react-bootstrap/NavDropdown'





import "./styleNavbar.css"

const NavbarOk=()=>{
    const[check,setCheck]=useState(true)

    const handleNavbar=()=>{
        if(window.scrollY >5){
           setCheck(false)
        }
        if(window.scrollY<5){
            setCheck(true)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleNavbar)
        return()=> {
          window.removeEventListener("scroll",handleNavbar)
        }
    },[]) 
    /*className={check ? "navbarNormal" : "navbar-sticky"} ver si puedo hacer de poner esto y que se vea ok*/

    return(
        <div  >
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" fixed="top" className={check ? "navbar-ok" : "navbar-sticky-ok"} >
                <Container>
                <Navbar.Brand href="/">Movie-Pedia</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link ><Link to={"/"} className="links">Inicio</Link></Nav.Link>
                    <Nav.Link ><Link to={"/novedades"}className="links">Novedades</Link></Nav.Link>
                    <Nav.Link ><Link to={"/sorpresa"}className="links">Sorpresa</Link></Nav.Link>
                   
                    <NavDropdown title="Categorias" id="menu-desplegable" className="links"  >
                    <NavDropdown.Item href="#action/3.2" id="menuok"><Link to={"/categorias/categoria/28"}><p>Accion</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/9648"}><p>Misterio</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/35"}><p>Comedia</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/14"}><p>Fantasia</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/18"}><p>Drama</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/27"}><p>Horror</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/10749"}><p>Romance</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/53"}><p>Thriller</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/878"}><p>Ciencia Ficcion</p></Link></NavDropdown.Item>
                       
                    </NavDropdown>
                   
                    <Nav.Link ><Link to={"/busqueda"}className="links">Busqueda</Link></Nav.Link>
                    </Nav>
                    <Nav>
                    
                   
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
           
        
    )
}

export default NavbarOk


