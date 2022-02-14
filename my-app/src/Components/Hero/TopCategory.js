import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import productImg from '../../Images/productImg.jpg';
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";



class TopCategory extends Component {


  render() {
    return (
      <>
        <div id='topCategory'>
          <Col as="h2" className='text-center pt-60'>Top Category</Col>
          <Container>
            <Row>
              <Col md={3} sm={6} className="text-center" >
                <div className="product-grid">
                  <div className="product-image">
                    <a href="#" className="image">
                      <img src={productImg} />
                    </a>
                   <a href className="add-to-cart">Add to Cart</a>
                  </div>
                  </div>
                <div className="product-content">
                    <h3 className="title"><a href="#">Women's Top</a></h3>
                    <div className="price">$53.55 <span>$68.88</span></div>
                  </div>
              </Col>
              <Col md={3} sm={6} className="text-center" >
                <div className="product-grid">
                  <div className="product-image">
                    <a href="#" className="image">
                      <img src={productImg} />
                    </a>
                   <a href className="add-to-cart">Add to Cart</a>
                  </div>
                  </div>
                <div className="product-content">
                    <h3 className="title"><a href="#">Women's  Top</a></h3>
                    <div className="price">$53.55 <span>$68.88</span></div>
                  </div>
              </Col>
              <Col md={3} sm={6} className="text-center" >
                <div className="product-grid">
                  <div className="product-image">
                    <a href="#" className="image">
                      <img src={productImg} />
                    </a>
                   <a href className="add-to-cart">Add to Cart</a>
                  </div>
                  </div>
                <div className="product-content">
                    <h3 className="title"><a href="#">Women's Top</a></h3>
                    <div className="price">$53.55 <span>$68.88</span></div>
                  </div>
              </Col>
              <Col md={3} sm={6} className="text-center" >
                <div className="product-grid">
                  <div className="product-image">
                    <a href="#" className="image">
                      <img src={productImg} />
                    </a>
                   <a href className="add-to-cart">Add to Cart</a>
                  </div>
                  </div>
                <div className="product-content">
                    <h3 className="title"><a href="#">Women's Top</a></h3>
                    <div className="price">$53.55 <span>$68.88</span></div>
                  </div>
              </Col>
           
            </Row>
          </Container>
        </div>
      </>
    );
  }
}


export default TopCategory;