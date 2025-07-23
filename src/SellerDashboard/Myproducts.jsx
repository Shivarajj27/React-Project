import React, { useEffect, useState } from 'react'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../Configure'
import { Outlet } from 'react-router-dom'
import "./Myproducts.css"
const Myproducts = () => {
  const [post, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const person = JSON.parse(localStorage.getItem("sellerInfo"))

  //  console.log(person.user.displayName)

  useEffect(() => {
    const FetchingData = async () => {

      const docRef = doc(db, "Sellers", person.user.displayName)
      // console.log(docRef);

      let Myproducts = await getDoc(docRef)
      console.log(Myproducts.data().sellerInfo);

      if (Myproducts.exists()) {
        const data = Myproducts.data().sellerInfo

        setPosts(data || [])
        setLoading(false)
      }
    }
    FetchingData()
  }, [])

  if (loading) {
    return <p>loading....</p>
  }

  const HandleDelete = async (choosedAgri) => {
    let productsAfterdeletion = post.filter((posts, indexx) => indexx !== choosedAgri)
    console.log(productsAfterdeletion);
    setPosts(productsAfterdeletion)
    const docRef = doc(db, "Sellers", person.user.displayName)
    await updateDoc(docRef, {
      sellerInfo: productsAfterdeletion
    })
    alert("Deleted Successfully")
    setPosts(productsAfterdeletion)

  }
  return (
    <div>
      {post.length > 0 ? (<div className="product-grid">
        {post.map((Posts, index) => (

          <div className="product-card">
            <h2>{Posts.productName}</h2>
            <img src={Posts.image} alt="" />
            <h1>{Posts.Category}</h1>
            <p>{Posts.Location}</p>
            <h4>{Posts.formtype}</h4>

            <div>
              
              <span onClick={() => { HandleDelete(index) }}>Delete</span>
            </div>
          </div>
        )

        )}
      </div>) : ("No posts yet")}

    </div>
  )
}

export default Myproducts
