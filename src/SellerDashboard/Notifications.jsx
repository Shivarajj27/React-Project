// import React from 'react'
// import { useState , useEffect } from 'react'
// import { collection, doc, getDocs } from 'firebase/firestore'
// import { db } from '../Configure'
// const Notifications = () => {
// const [state, setstate] = useState([])
// const [loading, setloading] = useState(true)
    
// useEffect(()=>{
//     const sellerInfo = getDocs(collection(db,"Sellers"))
//     console.log(sellerInfo);
//     const inside = JSON.parse(localStorage.getItem("sellerInfo"))
//     console.log(inside);
    
//     const userDoc = async()=>{
//         try{
//             const userInfo = await getDocs(collection(db,"Users"))
//             console.log(userInfo);
//             userInfo.forEach((order)=>{
//                 setstate(order)
//                 console.log(order.data().orderProduct);
//                 const matchedUser = order.data().orderProduct
                
//                 })
//         }
//         catch(err){
//             console.log(err);
            
//         }
//     }
//     userDoc()
// },[])

//   return (
//     <div>
//     <h2>Notifications</h2>
//       {state.length === 0 ? (
//         <p>No notifications found.</p>
//       ) : (
//         <ul>
//           {state.map((seller, index) => (
//             <li key={seller.id || index}>
//               {seller.name || 'Unnamed Seller'}
//             </li>
//           ))}
//         </ul>
//       )}
        
// </div>
//   )
// }

// export default Notifications

import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Configure';

const Notifications = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const sellerSnapshot = await getDocs(collection(db, 'Sellers'));
        const sellersData = sellerSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log("Fetched sellersData:", sellersData);
        setState(sellersData); // This must be an array
      } catch (error) {
        console.error("Error fetching sellers:", error);
        setState([]); // fallback to empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchSellers();
  }, []);

  if (loading) {
    return <p>Loading notifications...</p>;
  }

  if (!Array.isArray(state)) {
    console.error("state is not an array:", state);
    return <p>Error: Unexpected data format.</p>;
  }

  return (
    <div>
        {console.log(state)}
      <h2>Notifications</h2>
      {state.length === 0 ? (
        <p>No notifications found.</p>
      ) : (
        <ul>
          {state.map((seller, index) => (
              <li key={seller.id || index}>
              {seller.name  || 'Unnamed Seller'} Wants to buy {}
            </li>
          ))}
          
        </ul>
      )}
    </div>
  );
};

export default Notifications;
