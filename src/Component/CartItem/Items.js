import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
 const Items = (props) => {
  return (
    <div>
      <Col xs={5} className='m-0' >
                        <Card className='w-50'>
                            <Card.Img variant="top" src={props.items.imageUrl} />
                            <Card.Body className='shadow-lg'>
                                <Card.Title>{props.items.title}</Card.Title>
                                <Row style={{textAlign:'Center'}}>
                                    <Col><Card.Text>
                                    {`$${props.items.price}`}
                                </Card.Text></Col>
                                    <Col><Button variant="primary" size="sm">Add to Cart</Button></Col>
                                    </Row>
                                
                                
                            </Card.Body>
                        </Card>
              </Col>          
                   
    </div>
  )
}
export default Items;
