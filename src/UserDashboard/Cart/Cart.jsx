
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Configure';
import { LuIndianRupee } from "react-icons/lu";
// import "./YourBuy.css"
const Cart = () => {
    const BuyedUser = JSON.parse(localStorage.getItem("userInfo"))
    // console.log(BuyedUser.user.displayName);
    const [state, setstate] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const totalProducts = async () => {
            try {
                const Buydoc = doc(db, "Users", BuyedUser.user.displayName)
                const Buyerdoc = await getDoc(Buydoc)
                console.log(Buyerdoc.data().orderProduct)
                let Individual = Buyerdoc.data().orderProduct
                setstate(Individual)
                setloading(false)
            }
            catch (err) {
                console.log(err)
            }
        }
        totalProducts()
    }, [])
    if (loading) {
        return (
            <p>Loading...</p>
        )
    }
    return (
  <div>
    {state.length > 0 ? (
      <div className="product-grid">
        {state.map((data, index) => {
          console.log(data);
          return (
            <div key={index} className="product-card">
              <h4>Category: {data.Category}</h4>
              <p>FormType: {data.formType}</p>
              <img src={data.image} alt="product" id="paddy" />
              <p>Price: <LuIndianRupee />{data.Price}</p>
              <p>Name: {data.name}</p>
              <p>Contact: {data.MobileNumber}</p>
            </div>
          );
        })}
      </div>
    ) : (
      "No products found"
    )}
  </div>
);

        // <div>
        //     {state.length > 0 ? (
        //         <div>
        //             {state.map((data, index) => {
        //                 console.log(data)
        //                 return (
        //                     <div key={index} className="product-grid">
        //                         <h4>Category::{data.Category}</h4>
        //                         <p>FormType::{data.formType}</p>
        //                         <img src={data.image} alt="" />
        //                         <p>Price::<LuIndianRupee />{data.Price}</p>
        //                         <p>Name::{data.name}</p>
        //                         <p>Contact:{data.MobileNumber}</p>
        //                     </div>

        //                 );

        //             })}
        //         </div>
        //     ) : (
        //         "nojhiju"
        //     )}
        // </div>
    
}

export default Cart


