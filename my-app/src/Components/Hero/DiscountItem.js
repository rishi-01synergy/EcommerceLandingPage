import React, { Component } from 'react';
import { Container, Row, Col, Tab, Tabs, Button } from 'react-bootstrap';
import productImg from '../../Images/mobileImg.png';
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";



class DiscountItem extends Component {


    render() {
        return (
            <>
                <div id='discountItem'>
                    <Col as="h2" className='text-center pt-60'>Discount Item</Col>
                    <Container>
                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Home">
                            <Row>
             
              <Col md={6} sm={6} >
              <div className='Right-side'>
                   <h2 className='uniqueTitle'>20% Discount Of All Products</h2>
                   <p><strong style={{color:'#fb2e86'}}>Lorem Ipsum is simply</strong></p>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   </p>
                   <Row className='btnArea'>
                   <Col md={4}><Button variant="dark" className='darkButton'>Add To Cart</Button>{' '}
                   </Col>
                   <Col md={8}><strong>B&B Itellian Safe</strong><br/>
                  $32.00</Col>
                   </Row>
               </div>
              </Col>
              <Col md={6} sm={6} >
               <div className='text-start'>
                   <img src={productImg} />
               </div>
              </Col>
             </Row>
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                            <Row>
              <Col md={6} sm={6} >
               <div className='left-side'>
                   <img src={productImg} />
               </div>
              </Col>
              <Col md={6} sm={6} >
              <div className='Right-side'>
                   <h2 className='uniqueTitle'>Unique Features Of leatest & Trending Products</h2>
                   <ul>
                       <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                       <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                       <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                   </ul>
                   <Row className='btnArea'>
                   <Col md={4}><Button variant="dark" className='darkButton'>Add To Cart</Button>{' '}
                   </Col>
                   <Col md={8}><strong>B&B Itellian Safe</strong><br/>
                  $32.00</Col>
                   </Row>
               </div>
              </Col>
             </Row> 
                            </Tab>
                            <Tab eventKey="contact" title="Contact">
                            <Row>
              <Col md={6} sm={6} >
               <div className='left-side'>
                   <img src={productImg} />
               </div>
              </Col>
              <Col md={6} sm={6} >
              <div className='Right-side'>
                   <h2 className='uniqueTitle'>Unique Features Of leatest & Trending Products</h2>
                   <ul>
                       <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                       <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                       <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                   </ul>
                   <Row className='btnArea'>
                   <Col md={4}><Button variant="dark" className='darkButton'>Add To Cart</Button>{' '}
                   </Col>
                   <Col md={8}><strong>B&B Itellian Safe</strong><br/>
                  $32.00</Col>
                   </Row>
               </div>
              </Col>
             </Row>
                            </Tab>
                        </Tabs>


                    </Container>
                </div>
            </>
        );
    }
}


export default DiscountItem;