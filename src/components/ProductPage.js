import React, { useEffect, useState } from 'react'
import Card from './Card';

const host="http://127.0.0.1:5000"


function ProductPage() {


    const [clothItem, setClothItem] = useState([]);

    console.log(process.env.REACT_APP_HOST)
    useEffect(() => {
        getCloth();

    }, [])


    const getCloth = () => {
        let url = `${host}/api/clothitem/getCloth`;

        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setClothItem(data);
            });
    }

    return (
        <div>
            <div className='product'>

            </div>

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
        </div>
    )
}

export default ProductPage