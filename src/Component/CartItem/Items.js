import React,{useContext} from 'react'
import Cartcontext from '../../Store/cart-context';
import {NavLink} from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Item.css';


const Items = (props) => {
  const productsArr = [

    {
      id:1,
      title: 'Colors',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {
      id:2,
      title: 'Black and white Colors',

      price: 50,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {
      id:3,
      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {
      id:4,
      title: 'Blue Color',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

  ]

  const addItem=(item)=>{
    let updatedItem={...item,quantity:1}
    console.log('updatedItem', updatedItem)
    ctx.addItemhandler(updatedItem)
  }
  
  const ctx=useContext(Cartcontext)
  return (
    <>
      {productsArr.map((item) => (

        <Col xs={5} className='m-0 column' >
          <Card className=''>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body className='shadow-lg'>
              <Card.Title><NavLink to={`/products/${item.title}`}>{item.title}</NavLink></Card.Title>
              <Row style={{ textAlign: 'Center' }}>
                <Col><Card.Text>
                  {`$${item.price}`}
                </Card.Text></Col>
                <Col><Button onClick={()=>addItem(item)} variant="primary" size="sm">Add to Cart</Button></Col>
              </Row>


            </Card.Body>
          </Card>
        </Col>
      ))}

    </>
  )
}
export default Items;
