import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

export default function SubscribeNewsLetter() {
  return (
    <>
    <div className='SubscribeNewsLetter'>
       <Container>
           <Row>
            <Col className='text-center '>
                <h1 className='TitleNews'>Get Leatest Update by Subscribe <br/> Our NewsLetter</h1>
                <Button variant="dark" className='darkButton'>Add To Cart</Button>{' '}
            </Col>
           </Row>
           </Container> 
           </div>
    </>
  )
}
