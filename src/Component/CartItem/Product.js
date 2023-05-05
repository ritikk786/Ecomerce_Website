import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Items from './Items';
import './Product.css'

const Product = (props) => {
    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]

    return (
        <div>
            
            <div>
            <marquee width="100%" className='h1'>
            <h1 >Music</h1>
            </marquee>
            </div>
            <Container style={{marginLeft:'13rem'}}>
                <Row className='m-5 '>
                <Items/>
                
                </Row>
            </Container>
        </div>
    )
}
export default Product;
