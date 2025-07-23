import React from 'react'
import "../AllProducts/AllProducts.css"
import { Link } from 'react-router-dom'
const Allproducts = () => {
  return (
    <div className='AppProducts'>
      <Link to=""><span >Products</span></Link>
     <Link to="Cart"><span>Cart Items</span></Link>
    </div>
  )
}

export default Allproducts
