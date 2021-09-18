import React,{useEffect, useState} from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Load from '../../components/load/Load';

ItemsCategory.propTypes = {
    category: propTypes.string,
   
};
function ItemsCategory(props) {
    const {category} = props
    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(false)
    useEffect(() => {
       const getData = async()=>{
        setLoad(false)
           try {
               const {data} = await axios.get(`https://vinhshop.herokuapp.com/api/products/category=${category}`)            
                setProducts(data)
                setLoad(true)
           } catch (error) {
               console.log(error)
           }
       }
       getData()
    }, [category])

    return (
        <>
            {load === false ? <Load/> : 
            products.length === 0 ? <h1 >No Products </h1> : 
            
            (products.map((item,index)=>
            <div key={index} className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
            <div className="product">
                <Link to={`/product/id=${item._id}`} className="img-prod"><img className="img-fluid" src={`/images/${item.img}`} alt="Colorlib Template" />
                    <div className="overlay"></div>
                </Link>
                <div className="text py-3 pb-4 px-3 text-center">
                    <h3><Link to={`/product/${item._id}`} >{item.name}</Link></h3>
                    <div className="d-flex">
                        <div className="pricing">
                            <p className="price"><span>{item.price}</span></p>
                        </div>
                    </div>
                    <div className="bottom-area d-flex px-3">
                        <div className="m-auto d-flex">
                            <button to="/#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                <span><i className="ion-ios-menu"></i></span>
                            </button>
                            <button to="/#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                <span><i className="ion-ios-cart"></i></span>
                            </button>
                            <button to="/#" className="heart d-flex justify-content-center align-items-center ">
                                <span><i className="ion-ios-heart"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       ))}
            
        </>
    )
}

export default ItemsCategory
