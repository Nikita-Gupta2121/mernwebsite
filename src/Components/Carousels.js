import React from "react";
import {Carousel} from 'react-bootstrap'; 
export function Carousels(){
    return(
        <Carousel >
      <Carousel.Item interval={1000}>
      <img 
        src="/slide2.jpg" 
        alt=""
        height={"600px"}
        width={"100%"}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img 
        src="/slide3.jpg" 
        alt=""
        height={"600px"}
        width={"100%"}
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img 
        src="/slide4.jpg" 
        alt=""
        height={"600px"}
        width={"100%"}
        />
     <Carousel.Caption>
     <h3>Find your product</h3>
     <p>Place to buy handmade products.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img 
        src="/slide5.jpg" 
        alt=""
        height={"600px"}
        width={"100%"}
        />
     <Carousel.Caption>
          <h3>Organic way of life</h3>
          <p>Get upto 10% of discount.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    )
}