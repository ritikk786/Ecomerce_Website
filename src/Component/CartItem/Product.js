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
            <div className='genricsdiv'>
            <h1 className='gentext'>The Generics</h1>
            </div>
            <div>
            <marquee width="100%" className='h1'>
            <h1 >Music</h1>
            </marquee>
            </div>
            <Container style={{marginLeft:'13rem'}}>
                <Row className='m-5 '>
                
                <Col xs={6} className='' style={{marginBottom:'3rem'}} >
                        <Card className='w-50 h-50'>
                            <Card.Img variant="top" src={productsArr[0].imageUrl} />
                            <Card.Body className='shadow-lg'>
                                <Card.Title>{productsArr[0].title}</Card.Title>
                                <Row style={{textAlign:'Center'}}>
                                    <Col><Card.Text>
                                    {`$${productsArr[0].price}`}
                                </Card.Text></Col>
                                    <Col><Button variant="primary" size="sm">Add to Cart</Button></Col>
                                    </Row> 
                            </Card.Body>
                        </Card>
              </Col>   
                    
                    
                    <Col xs={6} className='m-0' style={{marginBottom:'3rem'}} ><Card className='w-50 h-50'>
                            <Card.Img variant="top" src={productsArr[1].imageUrl} />
                            <Card.Body className='shadow-lg'>
                                <Card.Title>{productsArr[1].title}</Card.Title>
                                <Row style={{textAlign:'Center'}}>
                                    <Col><Card.Text>
                                    {`$${productsArr[1].price}`}
                                </Card.Text></Col>
                                    <Col><Button variant="primary" size="sm">Add to Cart</Button></Col>
                                    </Row> 
                            </Card.Body>
                        </Card></Col>
                    <Col xs={6}  style={{marginBottom:'3rem'}} ><Card className='w-50 h-50'>
                            <Card.Img variant="top" src={productsArr[2].imageUrl} />
                            <Card.Body className='shadow-lg'>
                                <Card.Title>{productsArr[2].title}</Card.Title>
                                <Row style={{textAlign:'Center'}}>
                                    <Col><Card.Text>
                                    {`$${productsArr[2].price}`}
                                </Card.Text></Col>
                                    <Col><Button variant="primary" size="sm">Add to Cart</Button></Col>
                                    </Row> 
                            </Card.Body>
                        </Card></Col>
                    <Col xs={6}  style={{marginBottom:'3rem'}} ><Card className='w-50 h-100'>
                            <Card.Img variant="top" src={productsArr[3].imageUrl} />
                            <Card.Body className='shadow-lg'>
                                <Card.Title>{productsArr[3].title}</Card.Title>
                                <Row style={{textAlign:'Center'}}>
                                    <Col><Card.Text>
                                    {`$${productsArr[3].price}`}
                                </Card.Text></Col>
                                    <Col><Button variant="primary" size="sm">Add to Cart</Button></Col>
                                    </Row> 
                            </Card.Body>
                        </Card></Col>
                </Row>
            </Container>
        </div>
    )
}
export default Product;
