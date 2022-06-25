import React, { useEffect, useState } from 'react'
import Card from "./Card"

const host="http://127.0.0.1:5000"

function Home() {

    const [clothItem, setClothItem] = useState([]);

    console.log(process.env.HOST)
    useEffect(() => {
        getCloth();

    }, [])


    const getCloth=()=>{
        let url = `${host}/api/fooditem/getFood`;

      fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setClothItem(data);
      });
    }

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