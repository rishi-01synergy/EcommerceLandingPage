import React, { Component } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import productImg from '../../Images/productImg.jpg';
import productImg1 from '../../Images/productImg1.jpg';
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";



class LatestProduct extends Component {


    render() {
        return (
            <>
                <div id='LeatestProduct'>
                    <Col as="h2" className='text-center pt-60'>Leatest Products</Col>
                    <Container>
                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Home">
                                <Row>
                                    <Col md={4} sm={6}>
                                        <div className="product-grid">
                                            <div className="product-image">
                                                <a href="#" className="image">
                                                    <img className="pic-1" src={productImg} />
                                                    <img className="pic-2" src={productImg1} />
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h3 className="title"><a href="#">Women's T-Shirt</a></h3>
                                                <div className="price">$55.55</div>
                                                <a href="#" className="add-to-cart">Add to Cart</a>
                                                <ul className="product-links">
                                                    <li><a href="#"><AiOutlineUser /></a></li>
                                                    <li><a href="#"><FaRegHeart /></a></li>
                                                    <li><a href="#"><AiOutlineShoppingCart /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4} sm={6}>
                                        <div className="product-grid">
                                            <div className="product-image">
                                                <a href="#" className="image">
                                                    <img className="pic-1" src={productImg} />
                                                    <img className="pic-2" src={productImg1} />
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h3 className="title"><a href="#">Men's Jacket</a></h3>
                                                <div className="price">$79.99</div>
                                                <a href="#" className="add-to-cart">Add to Cart</a>
                                                <ul className="product-links">
                                                    <li><a href="#"><AiOutlineUser /></a></li>
                                                    <li><a href="#"><FaRegHeart /></a></li>
                                                    <li><a href="#"><AiOutlineShoppingCart /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4} sm={6}>
                                        <div className="product-grid">
                                            <div className="product-image">
                                                <a href="#" className="image">
                                                    <img className="pic-1" src={productImg} />
                                                    <img className="pic-2" src={productImg1} />
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h3 className="title"><a href="#">Men's Jacket</a></h3>
                                                <div className="price">$79.99</div>
                                                <a href="#" className="add-to-cart">Add to Cart</a>
                                                <ul className="product-links">
                                                    <li><a href="#"><AiOutlineUser /></a></li>
                                                    <li><a href="#"><FaRegHeart /></a></li>
                                                    <li><a href="#"><AiOutlineShoppingCart /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4} sm={6}>
                                        <div className="product-grid">
                                            <div className="product-image">
                                                <a href="#" className="image">
                                                    <img className="pic-1" src={productImg} />
                                                    <img className="pic-2" src={productImg1} />
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h3 className="title"><a href="#">Women's T-Shirt</a></h3>
                                                <div className="price">$55.55</div>
                                                <a href="#" className="add-to-cart">Add to Cart</a>
                                                <ul className="product-links">
                                                    <li><a href="#"><AiOutlineUser /></a></li>
                                                    <li><a href="#"><FaRegHeart /></a></li>
                                                    <li><a href="#"><AiOutlineShoppingCart /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4} sm={6}>
                                        <div className="product-grid">
                                            <div className="product-image">
                                                <a href="#" className="image">
                                                    <img className="pic-1" src={productImg} />
                                                    <img className="pic-2" src={productImg1} />
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h3 className="title"><a href="#">Men's Jacket</a></h3>
                                                <div className="price">$79.99</div>
                                                <a href="#" className="add-to-cart">Add to Cart</a>
                                                <ul className="product-links">
                                                    <li><a href="#"><AiOutlineUser /></a></li>
                                                    <li><a href="#"><FaRegHeart /></a></li>
                                                    <li><a href="#"><AiOutlineShoppingCart /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4} sm={6}>
                                        <div className="product-grid">
                                            <div className="product-image">
                                                <a href="#" className="image">
                                                    <img className="pic-1" src={productImg} />
                                                    <img className="pic-2" src={productImg1} />
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h3 className="title"><a href="#">Men's Jacket</a></h3>
                                                <div className="price">$79.99</div>
                                                <a href="#" className="add-to-cart">Add to Cart</a>
                                                <ul className="product-links">
                                                    <li><a href="#"><AiOutlineUser /></a></li>
                                                    <li><a href="#"><FaRegHeart /></a></li>
                                                    <li><a href="#"><AiOutlineShoppingCart /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                                <Row>
                                    <Col md={4} sm={6}>
                                        <div className="product-grid">
                                            <div className="product-image">
                                                <a href="#" className="image">
                                                    <img className="pic-1" src={productImg} />
                                                    <img className="pic-2" src={productImg1} />
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h3 className="title"><a href="#">Women's T-Shirt</a></h3>
                                                <div className="price">$55.55</div>
                                                <a href="#" className="add-to-cart">Add to Cart</a>
                                                <ul className="product-links">
                                                    <li><a href="#"><AiOutlineUser /></a></li>
                                                    <li><a href="#"><FaRegHeart /></a></li>
                                                    <li><a href="#"><AiOutlineShoppingCart /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4} sm={6}>
                                        <div className="product-grid">
                                            <div className="product-image">
                                                <a href="#" className="image">
                                                    <img className="pic-1" src={productImg} />
                                                    <img className="pic-2" src={productImg1} />
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h3 className="title"><a href="#">Men's Jacket</a></h3>
                                                <div className="price">$79.99</div>
                                                <a href="#" className="add-to-cart">Add to Cart</a>
                                                <ul className="product-links">
                                                    <li><a href="#"><AiOutlineUser /></a></li>
                                                    <li><a href="#"><FaRegHeart /></a></li>
                                                    <li><a href="#"><AiOutlineShoppingCart /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4} sm={6}>
                                        <div className="product-grid">
                                            <div className="product-image">
                                                <a href="#" className="image">
                                                    <img className="pic-1" src={productImg} />
                                                    <img className="pic-2" src={productImg1} />
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h3 className="title"><a href="#">Men's Jacket</a></h3>
                                                <div className="price">$79.99</div>
                                                <a href="#" className="add-to-cart">Add to Cart</a>
                                                <ul className="product-links">
                                                    <li><a href="#"><AiOutlineUser /></a></li>
                                                    <li><a href="#"><FaRegHeart /></a></li>
                                                    <li><a href="#"><AiOutlineShoppingCart /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="contact" title="Contact">
                                <Row>
                                    <Col md={4} sm={6}>
                                        <div className="product-grid">
                                            <div className="product-image">
                                                <a href="#" className="image">
                                                    <img className="pic-1" src={productImg} />
                                                    <img className="pic-2" src={productImg1} />
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h3 className="title"><a href="#">Women's T-Shirt</a></h3>
                                                <div className="price">$55.55</div>
                                                <a href="#" className="add-to-cart">Add to Cart</a>
                                                <ul className="product-links">
                                                    <li><a href="#"><AiOutlineUser /></a></li>
                                                    <li><a href="#"><FaRegHeart /></a></li>
                                                    <li><a href="#"><AiOutlineShoppingCart /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4} sm={6}>
                                        <div className="product-grid">
                                            <div className="product-image">
                                                <a href="#" className="image">
                                                    <img className="pic-1" src={productImg} />
                                                    <img className="pic-2" src={productImg1} />
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h3 className="title"><a href="#">Men's Jacket</a></h3>
                                                <div className="price">$79.99</div>
                                                <a href="#" className="add-to-cart">Add to Cart</a>
                                                <ul className="product-links">
                                                    <li><a href="#"><AiOutlineUser /></a></li>
                                                    <li><a href="#"><FaRegHeart /></a></li>
                                                    <li><a href="#"><AiOutlineShoppingCart /></a></li>
                                                </ul>
                                            </div>
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


export default LatestProduct;