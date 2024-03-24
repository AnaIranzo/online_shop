import React, {useState} from "react";
import HomeCard from "./HomeCard/HomeCard";
import { v4 as uuidv4 } from 'uuid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



import pic from'./assets/Screenshotfrom2023-03-09 23-03-35.png';

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
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
        initialSlide: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Home = ({products}) => {

  const [query, setQuery] = useState('');
  
  const onChange = event => setQuery(event.target.value);

  let filteredProducts = []

  const filterProducts = () => {
    filteredProducts = products.filter(product => {return product.title.toLowerCase().includes(query.toLowerCase()) || product.provider.company_name.toLowerCase().includes(query.toLowerCase()) });


  }
  

  filterProducts();


  return <section className="all-products">
     <section className='banner'>
    <img src={pic} alt="" />

    </section>
    <section >
      <input type="text" className="search" value={query} onChange={onChange} placeholder={'Search...'}/>
      <div className="slider-container">

      <Slider {...settings}>
        {filteredProducts.map(product => <HomeCard data={product}  key={uuidv4()}/>)}
      </Slider>
      </div>
      </section>
  </section>;
};

export default Home;
