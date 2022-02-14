import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import productImg from '../../Images/productImg.jpg';
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";



class FeaturedSection extends Component {


  render() {
    return (
      <>
        <div id='featuredProduct'>
          <Col as="h2" className='text-center pt-60'>Featured Product</Col>
          <Container>
            <Row>
              <Col md={3} sm={6} >
                <div className="product-grid">
                  <div className="product-image">
                    <a href="#" className="image">
                      <img src={productImg} />
                    </a>
                    <span className="product-discount-label">-23%</span>
                    <ul className="product-links">
                      <li><a href="#"><AiOutlineUser /></a></li>
                      <li><a href="#"><FaRegHeart /></a></li>
                      <li><a href="#"><AiOutlineShoppingCart /></a></li>
                    </ul>
                    <a href className="add-to-cart">Add to Cart</a>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><a href="#">Women's Blouse Top</a></h3>
                    <div className="price">$53.55 <span>$68.88</span></div>
                  </div>
                </div>
              </Col>
              <Col md={3} sm={6} >
                <div className="product-grid">
                  <div className="product-image">
                    <a href="#" className="image">
                      <img src={productImg} />
                    </a>
                    <ul className="product-links">
                      <li><a href="#"><AiOutlineUser /></a></li>
                      <li><a href="#"><FaRegHeart /></a></li>
                      <li><a href="#"><AiOutlineShoppingCart /></a></li>
                    </ul>
                    <a href className="add-to-cart">Add to Cart</a>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><a href="#">Men's Jacket</a></h3>
                    <div className="price">$75.55</div>
                  </div>
                </div>
              </Col>
              <Col md={3} sm={6} >
                <div className="product-grid">
                  <div className="product-image">
                    <a href="#" className="image">
                      <img src={productImg} />
                    </a>
                    <ul className="product-links">
                      <li><a href="#"><AiOutlineUser /></a></li>
                      <li><a href="#"><FaRegHeart /></a></li>
                      <li><a href="#"><AiOutlineShoppingCart /></a></li>
                    </ul>
                    <a href className="add-to-cart">Add to Cart</a>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><a href="#">Men's Jacket</a></h3>
                    <div className="price">$75.55</div>
                  </div>
                </div>
              </Col>
              <Col md={3} sm={6}  >
                <div className="product-grid">
                  <div className="product-image">
                    <a href="#" className="image">
                      <img src={productImg} />
                    </a>
                    <ul className="product-links">
                      <li><a href="#"><AiOutlineUser /></a></li>
                      <li><a href="#"><FaRegHeart /></a></li>
                      <li><a href="#"><AiOutlineShoppingCart /></a></li>
                    </ul>
                    <a href className="add-to-cart">Add to Cart</a>
                  </div>
                  <div className="product-content">
                    <h3 className="title"><a href="#">Men's Jacket</a></h3>
                    <div className="price">$75.55</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}


export default FeaturedSection;