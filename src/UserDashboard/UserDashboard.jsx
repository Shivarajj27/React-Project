import React from 'react'
import "./UserDashboard.css"
import Allproducts from './AllProducts/Allproducts'
import Display from './Display/Display'
const UserDashboard = () => {
  return (
    <div  className="dashboard-container">
      <div  className="left-panel">
        {/* <Allproducts/> */}
      </div>
      <div  className="right-panel">
        <Display/>
        {/* <p className='info'>Hello!This is a platform where you can Buy all your products from paddy to pulses.Buy your food products directly from farmer,maintain your healthyness.All the best.Let's Goo!!
        </p> */}
        </div>
    </div>
  )
}

export default UserDashboard
