import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import productImg from '../../Images/mobileImg.png';
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";



class UniqueFeatuer extends Component {


  render() {
    return (
      <>
        <div id='UniqueFeatuer'>
         <Container>
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
          </Container>
        </div>
      </>
    );
  }
}


export default UniqueFeatuer;