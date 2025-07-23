import React from 'react'
import "./Landing.css"
const Landing = () => {
  return (
    <div>
      <div>
        <table  className="center-table">
          <tbody>
          <tr>
            <td>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCY2DKlNyyDBRI62FGRUQNWGfEBPAYRU8oQ&s" alt="" />
            </td>
            <td  className="divider"></td>
             <td className="text-content"> <p>Form <br />
            To <br />
            Home <br /> </p></td>
          </tr></tbody>
        </table>

        <div className='text-para'>
          <p>We are designing this platform to bridge the gap between farmers and users.
Here, farmers can post and sell their products, and users can explore and buy fresh, local goods with ease.
Let’s empower our farmers and get exactly what you need—fresh from the source. Let’s go! </p>
        </div>

        <div className="services-container">
          <h2>Our Services</h2>
          <div className="service-cards">
          <div className="service-card"><img src="https://www.creativehatti.com/wp-content/uploads/edd/2023/03/Illustration-of-indian-haryanvi-farmer-with-grain-7-large.jpg" alt="" />
          <p>Farmer can sell Their Products</p></div>
       <div className="service-card"><img src="https://media.istockphoto.com/id/1195945432/vector/grocery-store-delivery-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=DSva-uMBNOqg8vmjVpQBvs23TCr7Boyl8zscioIVjB0=" alt="" />
       <p>A User can buy the Products</p></div> 
        <div className="service-card"><img src="https://dsalert.org/images/articles/604936Website%20Article%20Images%20(8).webp" id="image3" alt="" />
        <p>We Connect Farmer and User</p></div>
        </div>
          </div>
       </div>

       <div className='footer'>
        <div className="footer-content">
        <div className="footer-one"><h2>Company</h2>
        <p>About Us</p>
        <p>Contact</p>
        <p>services</p>
        <p>Address</p></div>

        <div className='footertwo'>
          <div className="social-icons"> 
            <h2>Follow us On</h2> <br/>
            <div style={{display:"flex" , gap:"10px", justifyContent:"center"}}>
        <p><i class="fa-brands fa-facebook"></i></p>
        <p><i class="fa-brands fa-whatsapp"></i></p>
        <p><i class="fa-brands fa-x-twitter"></i></p>
       </div></div> </div>
        </div>
       </div>
        <div className="footer-bottom">@ 2025 Agri Services.All Rights reserved</div>

    </div>
  )
}

export default Landing
