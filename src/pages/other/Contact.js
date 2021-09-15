import React from 'react'
import BreadCrumbs from '../../components/breadcrumb/BreadCrumbs'
import { Link } from 'react-router-dom'
function Contact() {
    return (
        <>
            <BreadCrumbs title='Contact' />
            <section className="ftco-section contact-section bg-light">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                    <div className="w-100"></div>
                    <div className="col-md-3 d-flex">
                        <div className="info bg-white p-4">
                            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="info bg-white p-4">
                            <p><span>Phone:</span> <Link to="tel://1234567920">+ 1235 2355 98</Link></p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="info bg-white p-4">
                            <p><span>Email:</span> <Link to="mailto:info@yoursite.com">info@yoursite.com</Link></p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="info bg-white p-4">
                            <p><span>Website</span> <Link to="#">yoursite.com</Link></p>
                        </div>
                    </div>
                    </div>
                    <div className="row block-9">
                        <div className="col-md-6 order-md-last d-flex">
                            <form action="#" className="bg-white p-5 contact-form">
                            
                                <div className="form-group">
                                    
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject"/>
                                </div>
                                <div className="form-group">
                                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
                                </div>
                            </form>
                        
                        </div>

                        <div className="col-md-6 d-flex">
                           
                                <iframe title="This is map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.954111076737!2d106.70862831432065!3d10.814823792295453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175289741790d39%3A0x95362685e34cec2f!2zQuG6v24gWGUgTWnhu4FuIMSQw7RuZyDEkGluaCBC4buZIEzEqW5o!5e0!3m2!1svi!2s!4v1629638147200!5m2!1svi!2s" 
                                  width="550" height="100%"  style={{border:'0'}}  loading="lazy"></iframe> 
                          
                        </div>
                    </div>
                </div>
                </section>  
        </>
    )
}

export default Contact
