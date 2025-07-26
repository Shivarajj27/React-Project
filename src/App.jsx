import React from 'react'
import{Routes,Route} from "react-router-dom"
import Signup from './Signup/Signup'
import Navbarr from './Navbarr'
import Login from './Login/Login'
import SellerDashboard from './SellerDashboard/SellerDashboard'
import UserDashboard from './UserDashboard/UserDashboard'
import Myproducts from './SellerDashboard/Myproducts'
import Home from './SellerDashboard/Home'
import Contact from './Contact/Contact'
import UserHome from './UserDashboard/UserHome/UserHome'
import YourBuy from './UserDashboard/Your Buy/YourBuy'
// import Cart from './UserDashboard/Cart/Cart'
import Notifications from './SellerDashboard/Notifications'
import Landing from './Landing'

const App = () => {
  return (
    <div>
      <Navbarr/>
      <Routes>
        <Route path="" element={<Landing/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
         <Route path="/SellerDashboard" element={<SellerDashboard/>}/>
          <Route path="Myproducts" element={<Myproducts/>}/>
          <Route path="Home" element={<Home/>}/>
          <Route path="/Notifications" element={<Notifications/>}/>

        <Route path="/UserDashboard" element={<UserDashboard/>}/>
        <Route path="/UserHome" element={<UserHome/>}/>
        {/* <Route path="Cart" element={<Cart/>}/> */}
        <Route path="/YourBuy" element={<YourBuy/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
