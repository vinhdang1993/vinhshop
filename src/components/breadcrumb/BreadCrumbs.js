import React from 'react'

function BreadCrumbs(props) {
   const {title} =  props
    return (
        <>
             <div className="hero-wrap hero-bread" style={{backgroundImage: 'url(/images/bg_1.jpg)'}}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                        <p className="breadcrumbs"><span className="mr-2"><span >Home</span></span> <span>{title}</span></p>
                        <h1 className="mb-0 bread">{title}</h1>
                    </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default BreadCrumbs
