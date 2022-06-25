import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

function Home() {

    const [clothItem, setClothItem]=useState();

  return (
    <div className='grid-container'>
      {
        clothItem?.map((element) => (
          <Card
            key={element._id}
            num={element._id}
            imgurl="https://picsum.photos/60"
            foodName={element.name}
            price={element.price}
            dsc={element.dsc}
          />
        ))
      }
    </div>
  )
}

export default Home