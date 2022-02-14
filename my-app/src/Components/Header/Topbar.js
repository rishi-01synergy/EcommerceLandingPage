import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { BiMailSend  } from "@react-icons/all-files/bi/BiMailSend";
import { FiPhoneCall  } from "@react-icons/all-files/fi/FiPhoneCall";
import { AiOutlineUser  } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineShoppingCart  } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import {FaRegHeart}  from "@react-icons/all-files/fa/FaRegHeart";

class Topbar extends Component {

    render() {
        return (

            <div id='topBar'>
                <Container>
                    <Row>
                        <Col className=''>
                            <ListGroup horizontal>
                                <ListGroup.Item><BiMailSend/> mailExaple@gmail.com</ListGroup.Item>
                                <ListGroup.Item><FiPhoneCall/> +91 12346 56145</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col className='text-end'>
                            <ListGroup horizontal className='float-end'>
                                <ListGroup.Item>English</ListGroup.Item>
                                <ListGroup.Item>USD</ListGroup.Item>
                                <ListGroup.Item><AiOutlineUser/>Login</ListGroup.Item>
                                <ListGroup.Item><FaRegHeart/> Wishlist</ListGroup.Item>
                                <ListGroup.Item><AiOutlineShoppingCart/></ListGroup.Item>
                            </ListGroup></Col>
                    </Row>
                </Container>

            </div>
        );
    }
}


export default Topbar;