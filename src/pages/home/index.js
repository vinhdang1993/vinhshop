import React from 'react'
// import { useState } from 'react'
// import Load from '../../components/load/Load'
import { Carousel } from 'react-bootstrap'
// import Paypal from '../../components/paypal/Paypal.js'
function HomePage() {
// const [checkout, setCheckout] = useState(false)
    return (
        <div className="home-slider owl-carousel owl-loaded owl-drag">
      
        <Carousel>
        <Carousel.Item className="slider-item">
            <img
            className="d-block w-100"
            src="/images/anh3.jfif"
            alt="First slide"
            />
            <Carousel.Caption className="slider-text">
                <div className="row slider-text justify-content-center align-items-center">
                    <div className="col-sm-12 ftco-animate text-center fadeInUp ftco-animated">
                        <h1 className="mb-2">We serve Fresh Vegestables & Fruits</h1>
                        <h2 className="subheading mb-4">We deliver organic vegetables & fruits</h2>
                    </div>
                </div>
            
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider-item">
            <img
            className="d-block w-100"
            src="/images/anh4.jfif"
            alt="First slide"
            />
            <Carousel.Caption className="slider-text">
                <div className="row slider-text justify-content-center align-items-center">
                    <div className="col-sm-12 ftco-animate text-center fadeInUp ftco-animated">
                        <h1 className="mb-2">100% Fresh & Organic Foods</h1>
                        <h2 className="subheading mb-4">We deliver organic vegetables & fruits</h2>
                    </div>
                </div>
            
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider-item">
            <img
            className="d-block w-100"
            src="/images/anh3.jfif"
            alt="First slide"
            />
            <Carousel.Caption className="slider-text">
                <div className="row slider-text justify-content-center align-items-center">
                    <div className="col-sm-12 ftco-animate text-center fadeInUp ftco-animated">
                        <h1 className="mb-2">We serve Fresh Vegestables & Fruits </h1>
                        <h2 className="subheading mb-4">We deliver organic vegetables & fruits</h2>
                    </div>
                </div>
            
            </Carousel.Caption>
        </Carousel.Item>
</Carousel>
        </div>
    )
}

export default HomePage
