import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import Sliderimg from '../../Images/Banner.webp';
import Mobileimg from '../../Images/mobileImg.png'
// import ClientLogo from './ClientLogo';


export default function MainSlider() {
   const slider= [
    {
        id:"1",
        image: Sliderimg,
        title:"Main Feature Collection ",
        nextTitle:"Trend in 2022",
        GetStartBtn:"Shop Now",
        DownloadBtn:"DOWNLOAD APP",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        alt:"SLIDER 1",
        SpanContent:"Best Furniture Your Chair's"

    },
    {
        id:"2",
        image: Sliderimg,
        title:"Main Feature Collection ",
        nextTitle:"Trend in 2022",
        GetStartBtn:"Shop Now",
        DownloadBtn:"DOWNLOAD APP",
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
        alt:"SLIDER 1",
        SpanContent:"Best Furniture Your Chair's"

  },
  {
    id:"3",
    image: Sliderimg,
    title:"Main Feature Collection ",
    nextTitle:"Trend in 2022",
    GetStartBtn:"Shop Now",
    DownloadBtn:"DOWNLOAD APP",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
    alt:"SLIDER 1",
        SpanContent:"Best Furniture Your Chair's"

}
    ]
  return <>
  <div className=''>
  <Carousel variant="dark">
  {slider.map(item => (
  <Carousel.Item>
    <img
      className="d-block w-100 imgwth"
      src={item.image}
      alt={item.alt}
    />
    <Carousel.Caption>
    <Row>
    <Col sm={6}> 
    <span className='spanContent'>{item.SpanContent}</span>
    <p className='bannerTitle'>{item.title}<br/>{item.nextTitle}</p>
      <p className='Bnnercontent'>{item.content}</p>
      <p><Button variant="dark" className='darkButton'>{item.GetStartBtn}</Button>{' '} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {/* <Button variant="outline-secondary" className='lightButton'>{item.DownloadBtn}</Button>{' '} */}
      </p>
      {/* <p><ClientLogo/></p> */}
      </Col>
    <Col sm={6}> 
    <p className='imageDiv'>
     <img src={Mobileimg} alt={item.RightImage} className="MobileImg" />
     </p>
      </Col>
  </Row>
     
    </Carousel.Caption>
  </Carousel.Item>
  ))}
</Carousel>
</div>
  </>;
}