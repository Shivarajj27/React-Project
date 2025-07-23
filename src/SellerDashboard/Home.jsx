import React from 'react'
import { useRef, useState } from 'react'
import { Navbar,Container,Nav , Button,Modal,Form} from 'react-bootstrap'
import { updateProfile } from 'firebase/auth'
import "./SellerDashboard.css"
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'
import {db} from "../Configure"

const Home = () => {
   const [state,setstate] = useState(false)

  const [formData,setFormdata] = useState({
    name:"",MobileNumber:"",formType:"",Location:"",Category:"",productName:"",Price:"",Quantity:""
  })
  let userDetails=JSON.parse(localStorage.getItem("sellerInfo"))
  
  const Close=()=>{
    setstate(false)
  }
  const handleClose=()=>{
    setstate(true)
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
const docRef = doc(db,"Sellers",userDetails.user.displayName)
      await updateDoc(docRef,{
        sellerInfo:arrayUnion(formData)
      })
      alert("Submitted Successfully")
      setstate(false)
    }
    catch(err){
      console.log(err)
    }
  }
  console.log(formData);
  

  return (
    <div className='maindiv'>
      <p className='info'>Hello!This is a platform where you can sell all your products from paddy to pulses.Upload images,connect with the customer
        and grow your business.All the best.Let's Goo!!
      </p>
      <button onClick={handleClose}>Add Product</button>
      <Modal show={state} onHide={Close}>
        <Modal.Header closeButton>
          <Modal.Title>Place your Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" onChange={(e)=>setFormdata({...formData,name:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="tel" placeholder="Enter Your Mobile Number" onChange={(e)=>setFormdata({...formData,MobileNumber:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Form Type</Form.Label>
                    <Form.Select  onChange={(e)=>setFormdata({...formData,formType:e.target.value})} >
                    <option>Select Form Type</option>
                      <option value="organic">Organic</option>
                      <option value="Chemical">Chemical</option>
                      <option value="Natural">Natural</option>
                    </Form.Select> 
         </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Form Location</Form.Label>
        <Form.Control as="textarea" rows={2} placeholder="Enter Form Location" onChange={(e)=>setFormdata({...formData,Location:e.target.value})} />
         </Form.Group>

               <Form.Label>Product Category</Form.Label>
            <Form.Select required onChange={(e)=>setFormdata({...formData,Category:e.target.value})} >
                    <option>Select roduct Category</option>
                      <option value="Paddy">Paddy</option>
                      <option value="Pulses">Pulses</option>
                      <option value="Cereals">Cereals</option>
                      <option value="Turmeric">Turmeric</option>
                      <option value="Fruits">Fruits</option>
                      <option value="oil Seeds">Oil Seeds</option>
                      <option value="Other">Other</option>
                    </Form.Select> 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name" required onChange={(e)=>setFormdata({...formData,productName:e.target.value})}/>
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price per Unit</Form.Label>
        <Form.Control type="number" placeholder="price/kg" required onChange={(e)=>setFormdata({...formData,Price:e.target.value})}/>
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Available Quantity</Form.Label>
        <Form.Control type="number" placeholder="In Kg,Pieces" required onChange={(e)=>setFormdata({...formData,Quantity:e.target.value})} />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
      </Modal>
      
      
    </div>
  )
}

export default Home
