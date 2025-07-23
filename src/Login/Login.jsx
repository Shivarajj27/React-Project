import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { useState,useRef } from 'react'
import {signInWithEmailAndPassword} from "firebase/auth"
import { Authentication } from '../Configure'
import { Link, useNavigate } from 'react-router-dom'
import Signup from '../Signup/Signup'
const Login = () => {
    let Navigate = useNavigate()
    const [LoginDetails,setLogindetails] = useState({
        email:"",password:"",role:""
    })
    const formRef = useRef(null)
    const HandleEvent=async(e)=>{
        e.preventDefault()
        const {email,password,role} = LoginDetails
        try{
        const LoggedinUser = await signInWithEmailAndPassword(Authentication,LoginDetails.email,LoginDetails.password,LoginDetails.role)
        alert("Login Successful")
          if (role==="Seller"){
            localStorage.setItem("sellerInfo",JSON.stringify(LoggedinUser))
        }
        else{
            localStorage.setItem("userInfo",JSON.stringify(LoggedinUser))
        }setLogindetails({email:"",password:"",role:""})
        formRef.current.reset()

        Navigate(`/${role}Dashboard`)
        }
        catch(err){
          console.log(err)
          alert("Incorrect Email or Password")
        }
        // console.log(LoggedinUser)
      }
      // const datalogin = JSON.parse(localStorage.getItem("sellerInfo"))
      // console.log(datalogin);
      
  return (
    <div>
       <Form ref = {formRef} onSubmit={HandleEvent}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setLogindetails({...LoginDetails,email:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setLogindetails({...LoginDetails,password:e.target.value})}/>
      </Form.Group>

       <Form.Select  onChange={(e)=>setLogindetails({...LoginDetails,role:e.target.value})} >
              <option>Select how you want login</option>
                <option value="User">Buyer</option>
                <option value="Seller">Seller</option>
              </Form.Select> 
      <Button variant="success" type="submit">
        Submit
      </Button>
     <p>New User Signup here  <Link to="/Signup" style={{textDecoration:"none"}}>Signup</Link></p>
      </Form>
    </div>
  )
}
export default Login
