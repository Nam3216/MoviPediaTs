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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className={check ? "navbar-ok" : "navbar-sticky-ok"}>
                <Container>
                <Navbar.Brand href="#home">Movie-Pedia</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features"><Link to={"/"} className="links">Inicio</Link></Nav.Link>
                    <Nav.Link href="#pricing"><Link to={"/novedades"}className="links">Novedades</Link></Nav.Link>
                    <Nav.Link href="#pricing"><Link to={"/sorpresa"}className="links">Sorpresa</Link></Nav.Link>
                   
                    <NavDropdown title="Categorias" id="menu-desplegable" className="links"  >
                    <NavDropdown.Item href="#action/3.2"><Link to={"/categorias/categoria/28"}>Accion</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><Link to={"/categorias/categoria/9648"}>Misterio</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><Link to={"/categorias/categoria/35"}>Comedia</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><Link to={"/categorias/categoria/14"}>Fantasia</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><Link to={"/categorias/categoria/18"}>Drama</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><Link to={"/categorias/categoria/27"}>Horror</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><Link to={"/categorias/categoria/10749"}>Romance</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><Link to={"/categorias/categoria/53"}>Thriller</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><Link to={"/categorias/categoria/878"}>Ciencia Ficcion</Link></NavDropdown.Item>
                       
                    </NavDropdown>
                   
                    <Nav.Link href="#pricing"><Link to={"/busqueda"}className="links">Busqueda</Link></Nav.Link>
                    </Nav>
                    <Nav>
                    <div>HOla</div>
                    <div>HOla</div>
                   
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
           
        
    )
}

export default NavbarOk


