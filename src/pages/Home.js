import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import FlashSale from '../components/FlashSale'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0, // Set to 0 to remove padding
  };
  return <>
  <div className="banner-container">
    <Container className="home-wrapper-1 py-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
        <Slider {...sliderSettings}>
          <div>
            <img
              src="image/bannermain1.png"
              className="img-fluid rounded-3"
              alt="main banner 1"
            />
            <div className="main-banner-content position-absolute">
            </div>
          </div>
          <div>
            <img
              src="image/banner2.jpg"
              className="img-fluid rounded-3"
              alt="main banner 2"
            />
          </div>
        </Slider>
      </div>
      <div className="col-lg-6 col-md-6 d-md-none d-lg-block">
       <img
              src="image/bannermain.png"
              className="img-fluid rounded-3"
              alt="main banner 1"
            />
    </div>
    </div>
  </Container >
  </div>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>High-end cosmetics</h6>
                  <p>10 items</p>
                </div>
                <img src='image/highend.png' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Skin Care cosmetics</h6>
                  <p>10 items</p>
                </div>
                <img src='image/skincare.png' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Make Up</h6>
                  <p>10 items</p>
                </div>
                <img src='image/makeup.png' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Body Care</h6>
                  <p>10 items</p>
                </div>
                <img src='image/bodycare.png' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Personal Care</h6>
                  <p>10 items</p>
                </div>
                <img src='image/personalcare.png' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Perfume</h6>
                  <p>10 items</p>
                </div>
                <img src='image/perfume.png' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Functional Food</h6>
                  <p>10 items</p>
                </div>
                <img src='image/funfood.png' alt='High-end cosmetics ' />
              </div>
              <div className='d-flex gap align-items-center'>
                <div>
                  <h6>Hair Care</h6>
                  <p>10 items</p>
                </div>
                <img src='image/haircare.png' alt='High-end cosmetics ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='best-seller-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Best Seller</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
    <section className='flash-sale-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Flash Sale</h3>
          </div>
          <div className='row'>
            <FlashSale />
            <FlashSale />
            <FlashSale />
          </div>
        </div>
      </div>
    </section>
    <section className='best-product-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Best Product</h3>
          </div>
        </div>
        <div className='row'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>

    <section className='marque-wrapper py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src='image/logo1.jpg' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='image/logo2.jpg' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='image/logo3.jpg' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='image/logo4.jpg' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='image/logo5.jpg' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='image/logo6.jpg' alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src='image/logo7.jpg' alt='brand' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Beauty Blog</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
        </div>
      </div>
    </section>
  </>

}

export default Home
