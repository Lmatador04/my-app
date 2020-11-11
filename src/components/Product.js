import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
    return (
        <div>
            
           <Card  className = "my-3 p-3">
               <a href={`/product/${product._id}`}>
<Card.Img src= {product.image} variant= "top" />
               </a>
               <Card.Body>
               <a href={`/product/${product._id}`}>
<Card.Title as='div'> 
    <strong>{product.name}</strong>
</Card.Title>
               </a> 
               <Card.Text as ='div'>
<Rating value={product.rating} text= {`${product.numReviews} review`} />
               </Card.Text>
               <Card.Text as='h3'>$ {product.price} </Card.Text>
               </Card.Body>
               </Card> 
        </div>
        
    )
}

export default Product