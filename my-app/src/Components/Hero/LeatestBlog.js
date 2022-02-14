import React from 'react'
import { Card,Container,Row,ListGroup, ListGroupItem, Col } from 'react-bootstrap'
import BlogImg from '../../Images/blogImage.jpg';
import { BiCalendar } from "@react-icons/all-files/bi/BiCalendar";
import { AiFillHighlight } from "@react-icons/all-files/ai/AiFillHighlight";

export default function LeatestBlog() {
  return (
    <>  
    <div id='LeatestBlog'>
    <Col as="h2" className='text-center pt-60'>Leatest Blog</Col>
    <Container>
        <Row>
        <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={BlogImg} />
  <Card.Body>
    <ul>
        <li className='shopTitle'><AiFillHighlight/>Shopyfiy</li>
        <li className='calenderTitle'><BiCalendar />12 jan,2022</li>

    </ul>
    <Card.Title as="h3">20% Discount Of All Products</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  
  <Card.Body className='btnCard'>
    <Card.Link href="#" className='cardLink'>Read More</Card.Link>
  </Card.Body>
</Card>
</Col>
<Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={BlogImg} />
  <Card.Body>
  <ul>
        <li className='shopTitle'><AiFillHighlight/>Shopyfiy</li>
        <li className='calenderTitle'><BiCalendar />12 jan,2022</li>

    </ul>
    <Card.Title>20% Discount Of All Products</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  
  <Card.Body className='btnCard'>
    <Card.Link href="#" className='cardLink'>Read More</Card.Link>
  </Card.Body>
</Card>
</Col>
<Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={BlogImg} />
  <Card.Body>
  <ul>
        <li className='shopTitle'><AiFillHighlight/>Shopyfiy</li>
        <li className='calenderTitle'><BiCalendar />12 jan,2022</li>

    </ul>
    <Card.Title>20% Discount Of All Products</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  
  <Card.Body className='btnCard'>
    <Card.Link href="#" className='cardLink'>Read More</Card.Link>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
</div>
    </>
  )
}
