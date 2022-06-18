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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
                <Container>
                <Navbar.Brand href="#home"><img src="moviepedia1.png"style={{width:80}} /></Navbar.Brand>
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

//id="collasible-nav-dropdown"
/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>*/

                    /*<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/
                        /* <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">*/
/* <div className={check ? "navbarNormal" : "navbar-sticky"} >
                <ul>
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link to={"/novedades"}>Novedades</Link></li>
                    <li><Link to={"/sorpresa"}>Sorpresa</Link></li>
                    <li><Link to={"/categorias"}>Categorias</Link></li>
                    <li><Link to={"/categorias/categoria/28"}>Accion</Link></li>
                    <li><Link to={"/categorias/categoria/9648"}>Misterio</Link></li>
                    <li><Link to={"/reviews"}>Reviews</Link></li>
                    <li><Link to={"/busqueda"}>Busqueda</Link></li>
                </ul>
            </div>*/
