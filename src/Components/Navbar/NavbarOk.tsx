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
//<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSka1sBOHm_SmEEfpZVlaYU-2sQNFaalbnFS_vJPy9-YlWWqbofT6DVvxTvrjk0GlEr9tA&usqp=CAU" style={{width:150,height:50}} />
    return(
        <div  >
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" fixed="top" className={check ? "navbar-ok" : "navbar-sticky-ok"} >
                <Container>
                <Navbar.Brand href="/" style={{color:"red", fontStyle:"italic", fontWeight:600}} >MoviPedia</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link ><Link to={"/"} className="links">Home</Link></Nav.Link>
                    <Nav.Link ><Link to={"/novedades"}className="links">New Releases</Link></Nav.Link>
                    <Nav.Link ><Link to={"/sorpresa"}className="links">Suprise</Link></Nav.Link>
                   
                    <NavDropdown title="Categories" id="menu-desplegable" className="links"  >
                    <NavDropdown.Item href="#action/3.2" id="menuok"><Link to={"/categorias/categoria/28"}><p>Action</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/9648"}><p>Mistery</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/35"}><p>Comedy</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/14"}><p>Fantasy</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/18"}><p>Drama</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/27"}><p>Horror</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/10749"}><p>Romance</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/53"}><p>Thriller</p></Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" id="menuok"><Link to={"/categorias/categoria/878"}><p>Science Fiction</p></Link></NavDropdown.Item>
                       
                    </NavDropdown>
                   
                    <Nav.Link ><Link to={"/busqueda"}className="links">Search</Link></Nav.Link>
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


