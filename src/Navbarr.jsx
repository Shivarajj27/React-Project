import React from 'react'
import { Navbar ,Container,Nav,Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { signOut , getAuth } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbarr.css"
const Navbarr = () => {
  let Navigate = useNavigate()
  let LoggedSeller = JSON.parse(localStorage.getItem("sellerInfo"))
  let LoggedUser = JSON.parse(localStorage.getItem("userInfo"))

  const HandleSeller = async ()=>{
  const auth = getAuth()
  try{
    await signOut(auth)
    confirm("Are you sure want to logout")
    localStorage.removeItem("sellerInfo")
    Navigate("/Login")
  }
  catch(err){
    console.log(err)
  }
  }
  const removeUser= () =>{
    confirm("Are you sure want to logout")
    localStorage.removeItem("userInfo")
    Navigate("/Login")
  }
  return (
    <div>
      {LoggedSeller ?( <div>
              <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Empower Kisan</Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="Home">Home</Link>
            <Link to="Myproducts">My Products</Link>
            <Link to="Notifications">Notifications</Link>
            <Button variant="danger" onClick={HandleSeller}>Logout</Button>
          </Nav>
        </Container>
      </Navbar>
     
      </div>): LoggedUser? (<div>
        <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Empower Kisan</Navbar.Brand>
          <Nav className="ms-auto">
          <Link to="UserHome">Home</Link>
            <Link to="YourBuy">Your Bookings</Link>
            <Link to="Contact">Contact us</Link>
            <Button variant="danger" onClick={removeUser} >Logout</Button>
          </Nav>
        </Container>
      </Navbar>
      </div>):(<div>
        <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Empower Kisan</Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/Signup">Signup</Link>
            <Link to="/Login">Login</Link>
          </Nav>
        </Container>
      </Navbar>
       
      </div>)}
    </div>
  )
}

export default Navbarr
