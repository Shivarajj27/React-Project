import React from 'react'
import { Form } from 'react-bootstrap'
import { useState, useRef } from 'react'
import { Authentication } from '../Configure'
import{createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { setDoc } from 'firebase/firestore'
import { doc } from 'firebase/firestore'
import { db } from '../Configure'
import { useNavigate } from 'react-router-dom'
import "./Signup.css"
import { Link } from 'react-router-dom'
const Signup = () => {
  let Navigate = useNavigate()
    const [signup,setSignup] = useState({
        name:"",email:"",password:"",role:""
    })
    const formRef = useRef(null)
const HandleEvent = async (e)=>{
  e.preventDefault()
try{
  const createaccount = await createUserWithEmailAndPassword(Authentication,signup.email,signup.password)
  // setSignup({name:"",email:"",password:"",role:""})
  // formRef.current.reset()
  console.log(createaccount);
  
 const datauser =  await updateProfile(createaccount.user,{
    displayName:signup.name
  })

  console.log(datauser)

  await setDoc(doc(db,`${signup.role}s`,signup.name),{
    name:signup.name,
    email:signup.email,
    role:signup.role,
    id:Date.now()
  })
  alert("signup Successful")
  Navigate("/Login")
}
catch(err){
  console.log(err)
}
}
  return (
    <div>
        <Form ref = {formRef} onSubmit={HandleEvent}>
      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control type='text' placeholder="Enter your Name" onChange={(e)=>setSignup({...signup,name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email" onChange={(e)=>setSignup({...signup,email:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password:</Form.Label>
        <Form.Control  type="password" placeholder="Enter your password" onChange={(e)=>setSignup({...signup,password:e.target.value})} />
      </Form.Group>

      
        <Form.Select  onChange={(e)=>setSignup({...signup,role:e.target.value})} >
        <option>Select how you want login</option>
          <option value="User">Buyer</option>
          <option value="Seller">Seller</option>
        </Form.Select> 
        <button style={{background:"#54ba5b"}} type='submit'>Submit</button>
        <p>Already a User  <Link to="/Login" style={{textDecoration:"none"}}>Login</Link></p>
      </Form>

         
    </div>
  )
}

export default Signup
