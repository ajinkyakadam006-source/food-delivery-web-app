import React from 'react'
import './Card.css'

const Card = ({cardData,cart,setCart}) => {
  
  let addToCart = (product)=>{
let newCart = [...cart];
let item = newCart.find((i)=> i.id===product.id)

if(item){
  item.qty++;
}
else{
  newCart.push({...product,qty:1})
}
setCart(newCart)
  }
    return (
    <div className='card-container'>
      {cardData.length === 0 ? (<h1>Item not Found</h1>):(
      cardData.map((i)=>{
        return <div className="card">
          <h1>{i.name}</h1>
          <img src={i.image} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur </p>
          <p className='price'> Price : &#8377;{i.price}</p>
          <button onClick={()=>addToCart(i)} >Add To Cart</button>
        </div>
      })
    )}
    </div>
  )
}

export default Card