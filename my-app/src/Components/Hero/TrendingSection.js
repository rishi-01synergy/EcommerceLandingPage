import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import productImg from '../../Images/productImg.jpg';
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";



class TrendingProducts extends Component {


  render() {
    return (
      <>
        <div id='trendingProducts'>
          <Col as="h2" className='text-center pt-60'>Trending Products</Col>
          <Container>
            <Row>
  <Col md={3} sm={6}>
    <div className="product-grid">
      <div className="product-image">
        <a href="#" className="image">
          <img className="pic-1" src={productImg} />
          <img className="pic-2" src={productImg} />
        </a>
        {/* <span className="product-sale-label">sale</span> */}
      </div>
      <div className="product-content">
        <ul className="rating">
          <li className="fas fa-star" />
          <li className="fas fa-star" />
          <li className="fas fa-star" />
          <li className="fas fa-star" />
          <li className="far fa-star" />
        </ul>
        <h3 className="title"><a href="#">Women's T-Shirt</a></h3>
        <div className="price"><span>$69.99</span> $59.99</div>
        <ul className="product-links">
        <li><a href="#"><AiOutlineUser /></a></li>
        <li><a href="#"><FaRegHeart /></a></li>
        <li><a href="#"><AiOutlineShoppingCart /></a></li>
        </ul>
      </div>
    </div>
  </Col>
  <Col md={3} sm={6}>
    <div className="product-grid">
      <div className="product-image">
        <a href="#" className="image">
          <img className="pic-1" src={productImg} />
          <img className="pic-2" src={productImg} />
        </a>
        {/* <span className="product-new-label">new</span> */}
      </div>
      <div className="product-content">
        <ul className="rating">
          <li className="fas fa-star" />
          <li className="fas fa-star" />
          <li className="fas fa-star" />
          <li className="fas fa-star" />
          <li className="fas fa-star" />
        </ul>
        <h3 className="title"><a href="#">Women's Shirt</a></h3>
        <div className="price">$45.99</div>
        <ul className="product-links">
        <li><a href="#"><AiOutlineUser /></a></li>
         <li><a href="#"><FaRegHeart /></a></li>
          <li><a href="#"><AiOutlineShoppingCart /></a></li>
        </ul>
      </div>
    </div>
  </Col>
  <Col md={3} sm={6}>
    <div className="product-grid">
      <div className="product-image">
        <a href="#" className="image">
          <img className="pic-1" src={productImg} />
          <img className="pic-2" src={productImg} />
        </a>
        {/* <span className="product-sale-label">sale</span> */}
      </div>
      <div className="product-content">
        <ul className="rating">
          <li className="fas fa-star" />
          <li className="fas fa-star" />
          <li className="fas fa-star" />
          <li className="fas fa-star" />
          <li className="far fa-star" />
        </ul>
        <h3 className="title"><a href="#">Women's T-Shirt</a></h3>
        <div className="price"><span>$69.99</span> $59.99</div>
        <ul className="product-links">
        <li><a href="#"><AiOutlineUser /></a></li>
        <li><a href="#"><FaRegHeart /></a></li>
        <li><a href="#"><AiOutlineShoppingCart /></a></li>
        </ul>
      </div>
    </div>
  </Col>
  <Col md={3} sm={6}>
    <div className="product-grid">
      <div className="product-image">
        <a href="#" className="image">
          <img className="pic-1" src={productImg} />
          <img className="pic-2" src={productImg} />
        </a>
        {/* <span className="product-new-label">new</span> */}
      </div>
      <div className="product-content">
        <ul className="rating">
          <li className="fas fa-star" />
          <li className="fas fa-star" />
          <li className="fas fa-star" />
          <li className="fas fa-star" />
          <li className="fas fa-star" />
        </ul>
        <h3 className="title"><a href="#">Women's Shirt</a></h3>
        <div className="price">$45.99</div>
        <ul className="product-links">
        <li><a href="#"><AiOutlineUser /></a></li>
         <li><a href="#"><FaRegHeart /></a></li>
          <li><a href="#"><AiOutlineShoppingCart /></a></li>
        </ul>
      </div>
    </div>
  </Col>
</Row>
{/* ***net arerae** */}
<Row className='offcard'>
  <Col md={9} sm={6}>
  <Row>
    <Col md={6} sm={6}> 
    <Card>
    <h3 className="prtTitle">23% of in all products</h3>
        <div className="btnSoph"><a href="/">Shop Now</a></div>
        <div className='ImageProdt text-end'><img src={productImg}/></div>
        </Card>
        </Col>
    <Col md={6} sm={6}> 
    <Card>
    <h3 className="prtTitle">23% of in all products</h3>
        <div className="btnSoph"><a href="/">Shop Now</a></div>
        <div className='ImageProdt text-end'><img src={productImg}/></div>
        </Card>
        </Col>
      </Row> 
  </Col>
  <Col md={3} sm={6}>
    <Row className='divScap'>
    <Col md={4} sm={6}><div className='GImageProdt '><img src={productImg}/></div></Col>
    <Col md={8} sm={6}><p className="GprtTitle">Lorem Ipsum is simply dummy text </p></Col>
    </Row>
    <Row className='divScap'>
    <Col md={4} sm={6}><div className='GImageProdt '><img src={productImg}/></div></Col>
    <Col md={8} sm={6}><p className="GprtTitle">Lorem Ipsum is simply dummy text</p></Col>
    </Row>
    <Row className='divScap'>
    <Col md={4} sm={6}><div className='GImageProdt '><img src={productImg}/></div></Col>
    <Col md={8} sm={6}><p className="GprtTitle">Lorem Ipsum is simply dummy text</p></Col>
    </Row>
  </Col>
</Row>
          </Container>
        </div>
      </>
    );
  }
}


export default TrendingProducts;