import React, { useEffect, useState } from 'react'
import { collection, doc ,getDoc, getDocs, updateDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../../Configure'
import "./Display.css"
import { LuIndianRupee } from "react-icons/lu";

const person = JSON.parse(localStorage.getItem("sellerInfo"))


const Display  =() => {
  const loggedin = JSON.parse(localStorage.getItem("userInfo"))


  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  // console.log(products);
  
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
// console.log(productsFromdocs);
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
 const Handleclick = async(job)=>{
try{
 const userInfo = doc(db,"Users",loggedin.user.displayName)

  let userInfodata = await getDoc(userInfo)
  console.log(userInfodata);
  
  await updateDoc(userInfo,{
    orderProduct:arrayUnion(job)
  })
  alert ("Order Done ")
}
catch(err){
  console.log(err)
}


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
  return (
  <div>
    {products.length > 0 ? (
      <div className="card-container">
        {products.map((map, index) => (
          <div className="card" key={index}>
            <h2>ProductName:{map.productName}</h2>
            <img src={map.image} alt="" />
            <p>FormType::{map.formType}</p>
            <p>Price::<LuIndianRupee/>{map.Price}</p>
            <p>Contact:{map.MobileNumber}</p>
            <button id='button' onClick={()=>Handleclick(map)}>Buy</button>
          </div>
        ))}
      </div>
    ) : (
      "No Products found"
    )}
  </div>
);

}

export default Display