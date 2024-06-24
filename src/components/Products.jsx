import React from 'react'
import {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Products = () => {
  
const[products, getProducts] = useState([]);

useEffect( () => {
    //api
    fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(result => getProducts(result))
  },[]);

  //Card Component
  const cards = products.map(product => (
    <div className='col-md-3' style={{marginBottom:'10px'}} key={product.id} >
        <Card className='h-100' >
          <div className='text-center'>
          <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px'}} />
          </div>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                $ {product.price}
              </Card.Text>
            </Card.Body>
          <Card.Footer style={{background:'white'}}>
            <Button variant="primary">Add To Cart</Button>
          </Card.Footer>
        </Card>
    </div>
  ));

    return (
    <div>
        <h1>Products Page</h1>
        <div className='row'>
          {cards}
        </div>
    </div>
    
  )
}
export default Products