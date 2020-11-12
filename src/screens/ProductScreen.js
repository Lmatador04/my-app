import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import Products from '../products'
const ProductScreen = ({match}) => {
    const product = Products.find(p => p._id === match.params.id)
    return (
        <>
          <Link className='btn btn-dark my-3' to='/'>
              Go back
              </Link> 
              <Row>
                  <Col md={6}>
                    <Image src={product.image} alt={product.name}  fluid/>
                  </Col>
                  <Col md={3}>
                  <ListGroup variant='flush'>
                      <ListGroup.Item>
                          <h2> {product.name}</h2>
                      </ListGroup.Item>
                      <ListGroup.Item>
                          <Rating value= {product.rating} text= {`${product.numReviews} reviews`} />
                      </ListGroup.Item>
                      <ListGroup.Item>
                          Price: $ {product.price}
                      </ListGroup.Item>
                      <ListGroup.Item>
                          Description: {product.description}  
                      </ListGroup.Item>
                  </ListGroup>
                  </Col>
                  <Card>
                      <ListGroup variant= 'flush'>
                          <ListGroup.Item>
                              <Row>
                                  <Col>Price</Col>
                                  <Col>
                                  <strong>${product.price}</strong>
                                  </Col>
                              </Row>
                          </ListGroup.Item>

                          <ListGroup.Item>
                              <Row>
                                  <Col>Status:</Col>
                                  <Col>
                                  {product.countInStock >0? 'In stock':'Out of stock'}
                                  </Col>
                              </Row>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <Button className= " btn-block" type = 'button' disabe ={product.countInStock===0}> ADD TO CART</Button>
                              </ListGroup.Item>

                      </ListGroup>
                  </Card>
              </Row>
        </>
    )
}

export default ProductScreen
