import React, { useEffect, useState } from 'react'
import { collection, doc ,getDoc, getDocs, updateDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../../Configure'
import "./Userhome.css"
import { Modal , Form , Button} from 'react-bootstrap'


const person = JSON.parse(localStorage.getItem("sellerInfo"))
const buyerinfo = JSON.parse(localStorage.getItem("userInfo"))
// console.log(buyerinfo.user.displayName)
const UserHome  =() => {
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const[modall,setmodal] = useState(false)
  const [selecteditem,setselecteditem] = useState(null)
  const [formdata,setFormdata] = useState({
    name:"",email:""
  })
  console.log(products);
  
  useEffect(()=>{
    const totalProducts = async()=>{
      try{
  const productsRef = collection(db,"Sellers")
  // console.log(productsRef);
  
  const Products = await getDocs(productsRef)
  let productsFromdocs = []
  Products.docs.map((doc)=>{

    
    let individualProduct = doc.data().sellerInfo
// console.log(doc.data().sellerInfo);
individualProduct.map((singleProduct)=>{
  productsFromdocs.push(singleProduct) 
})
console.log(productsFromdocs);
setProducts(productsFromdocs)
 setLoading(false)
  })

}
catch(err){
console.log(err);

}
    }
    totalProducts()
  },[])
if (loading){
  return(
    <p>Loading...</p>
  )
}
 
  // return (
  //   <div className="card-container">
  //     {products.length >0 ? <div>
  // {products.map((map,index)=>{
  //   return(
  //     <div  className="card" key={index}>
  //     <h2>{map.productName}</h2>
  //     <p>{map.formType}</p>
  //     <p>{map.Price}</p>
  //     <p>{map.MobileNumber}</p>
  //     </div>
  //   )
  // })}
  //     </div>:"no jobs found"}
  //   </div>
  // )
  console.log(formdata);
  
  console.log(products);
 let loggedin = JSON.parse(localStorage.getItem("userInfo"))
  const Handleclick = async(job)=>{
    console.log(job.name);
    setmodal(true)
  

  // try{
  // //  const userInfo = doc(db,"Users",loggedin.user.displayName)
  
  // //   let userInfodata = await getDoc(userInfo)
  // //   console.log(userInfodata);
    
  // //   await updateDoc(userInfo,{
  // //     orderProduct:arrayUnion(job)
  //   })
  //   alert ("Order Done ")
  // }
  // catch(err){
  //   console.log(err)
  // }
  
  
}
const setselected = async (saveditem)=>{
console.log(saveditem) 
try{
const UserInfo = doc(db,"Users", buyerinfo.user.displayName)
console.log(UserInfo)

let UserDoc = await getDoc(UserInfo)
console.log(UserDoc)

await updateDoc(UserInfo,{
  savedItems:arrayUnion(saveditem)
})
alert("Item saved")
}
catch(err){
  console.log(err)
}
}

  return (

  <div>

     <Modal show={modall} onHide={()=>setmodal(false)}>
        <Modal.Header closeButton >
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setFormdata({...formdata,email :e.target.value})}/>
       
      </Form.Group>
          <Button onClick={()=>HandleSave()} variant="primary">
            Save
          </Button>
      
      </Form>
      
      
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>

    {products.length > 0 ? (
      <div className="card-container">
        {products.map((map, index) => (
          <div className="card" key={index}>
            <h2>ProductName:{map.productName}</h2>
            <p>FormType::{map.formType}</p>
            <img src={map.image} alt="" />
            <p>Price::{map.Price}</p>
            <p>Name::{map.name}</p>
            <p>Contact:{map.MobileNumber}</p>
            <button id='button' onClick={()=>setselected(map)}>Buy</button>
          </div>
        ))}
      </div>
    ) : (
      "No Products Found"
    )}
  </div>
);

}

export default UserHome