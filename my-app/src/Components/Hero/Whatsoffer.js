import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import productImg from '../../Images/productImg.jpg';
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";



class WhatsOffer extends Component {


    render() {
        return (
            <>
                <div id='SupportSection'>
                    <Col as="h2" className='text-center pt-60'>What Shopex Offer!</Col>
                    <Container>
                        <Row>
                            <Col md={3} sm={6} >
                                <Card>
                                    <Card.Body>
                                        <Card.Title>24/7 Support</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={6} >
                            <Card>
                                    <Card.Body>
                                        <Card.Title>24/7 Support</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={6}  >
                            <Card>
                                    <Card.Body>
                                        <Card.Title>24/7 Support</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3} sm={6}  >
                            <Card>
                                    <Card.Body>
                                        <Card.Title>24/7 Support</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}


export default WhatsOffer;