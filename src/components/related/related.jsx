import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RelatedItem from '../related-item/related-item';
import './related.scss';
const Related = ({ product, products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="related">
      <h3>RELATED PRODUCTS</h3>
      <Slider {...settings}>
        {products
          .filter((item, index) => item.name !== product)
          .map(item => (
            <div className="boxe" key={item.name}>
              <RelatedItem item={item} />
            </div>
          ))}
      </Slider>
    </div>
  );
};
export default Related;
