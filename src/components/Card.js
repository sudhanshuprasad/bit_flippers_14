import React from 'react'

function Card(props) {

    const updateCart=()=>{
        console.log("cart updated")
    }

  return (
    <div className="item" id={"item" + props.num}>
      <img src={props.imgurl} alt="food" />
      <div className="content">
        <div className="item_name">
          <h3>{props.foodName}</h3>
          <h3>&#8377;{props.price}</h3>
        </div>
        <h5>{props.dsc}</h5>
        <button className="order-btn" onClick={() => updateCart(props.num)} id={"order" + props.num}>Order Now</button>
      </div>
    </div>
  )
}

export default Card