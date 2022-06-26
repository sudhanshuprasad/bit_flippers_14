import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from './Card';

const host="http://127.0.0.1:5000"


function ProductPage(props) {

    const params=useParams();

    const [clothItem, setClothItem] = useState([]);
    const [product, setProduct] = useState([]);

    console.log(process.env.REACT_APP_HOST)
    useEffect(() => {
        getCloth();

    }, [])


    const getProduct=()=>{
        let url = `${host}/api/clothitem/getCloth/${props.id}`;

        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProduct(data);
            }); 
    }

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
                <Card
                    key={params._id}
                    num={params._id}
                    imgurl="https://picsum.photos/60"
                    foodName={product.name}
                    price={product.price}
                    dsc={product.dsc}
                />
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