import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import {useDispatch} from 'redux'
Items.propTypes = {
    newProductList: propTypes.array,
    
};

function Items(props) {
    const cartList = useSelector(state => state.CartSlice.Cart)
    console.log(cartList)

const handleAddToCart = (item) =>{
    const checkUser =  JSON.parse(localStorage.getItem('user'))
    const userId = checkUser.userID
    const checkCart = cartList.find((items) => items.productId === item._id)
    // console.log(checkCart)
    if(!checkCart){
        const data = {productId : item._id,
                            quantity: 1,
                            name: item.name,
                            price: item.price,
                            img: item.img,
                            userId:userId,
        }

        axios.post('/api/cart/addcart', data)
    }
    // console.log(data)
}
const {newProductList} = props
// console.log(ProductsList)
    return (
        <>

       
            { newProductList.map( (item,index) => 
                    <div key={index} className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                    <div className="product">
                        <Link to={`/product/id=${item._id}`} className="img-prod"><img className="img-fluid" src={`/images/${item.img}`} alt="Colorlib Template" />
                            <div className="overlay"></div>
                        </Link>
                        <div className="text py-3 pb-4 px-3 text-center">
                            <h3><Link to={`/product/${item._id}`} >{item.name}</Link></h3>
                            <div className="d-flex">
                                <div className="pricing">
                                    <p className="price"><span>${item.price}</span></p>
                                </div>
                            </div>
                            <div className="bottom-area d-flex px-3">
                                <div className="m-auto d-flex">
                                    <button to="/#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                        <span><i className="ion-ios-menu"></i></span>
                                    </button>
                                    <button onClick={() => handleAddToCart(item)} className="buy-now d-flex justify-content-center align-items-center mx-1">
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
                )}
        </>
    )
}

export default Items
