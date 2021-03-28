import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";


export default class Fade extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
      <div className='mid'>
        <Slider {...settings}>
          <div>
            <img src='https://images.unsplash.com/photo-1605007493699-af65834f8a00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' />
          </div>
          <div>
            <img src='https://images.unsplash.com/photo-1605946887845-be9fb26679ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' />
          </div>
          <div>
            <img src=' https://images.unsplash.com/photo-1579294800821-694d95e86143?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'/>
          </div>
        
        </Slider>
      </div>
    );
  }
}