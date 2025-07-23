import React, { useEffect, useState } from 'react'
import { collection, doc ,getDoc, getDocs } from 'firebase/firestore'
import { db } from '../../Configure'


const person = JSON.parse(localStorage.getItem("sellerInfo"))


const OurProducts  =() => {
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
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
 
  return (
    <div>
      {products.length >0 ? <>
  {products.map((map)=>{
    return(
      <>
      <p>{map.Category}</p>
      <p>{map.Price}</p>
      </>
    )
  })}
      </>:"no jobs found"}
    </div>
  )
}

export default OurProducts
