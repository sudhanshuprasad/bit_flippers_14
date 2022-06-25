import React from 'react'
import "./style/Card.css"

function Card(props) {

    const updateCart = (id) => {
        console.log("cart updated " + id)
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
            </div>
                <button className="order-btn" onClick={() => updateCart(props.num)} id={"order" + props.num}>Order Now</button>
        </div>
    )
}

export default Card