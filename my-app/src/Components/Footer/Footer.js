import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
   
    <footer class="footer">
    <Container>
        <Row>
  <Col className=''>
    <a href="https://coreui.io">01Synergy</a>
    <span>&copy; 2022 creativeLabs.</span>
  </Col>
  <Col className='text-end'>
    <span>Powered by</span>
    <a href="/">01Synergy</a>
    <ul className='socialMedia'>
        <li><a href="#" >facebook</a></li>
        <li><a href="#" >Youtube</a></li>
        <li><a href="#" >Instagram</a></li>
        <li><a href="#" >Linkdin</a></li>
    </ul>
  </Col>
  </Row>
  </Container>
</footer>
    </>
  )
}
