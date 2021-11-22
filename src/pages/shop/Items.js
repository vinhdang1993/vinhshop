import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// import {useDispatch} from 'redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCart } from '../../features/cart/CartSlice';
Items.propTypes = {
    newProductList: propTypes.array,
    
};

function Items(props) {

   const dispatch = useDispatch()
 
  const cartList = useSelector(state => state.CartSlice.Cart)
const handleAddToCart = async(item) =>{
    const checkUser =  JSON.parse(localStorage.getItem('user'))
    if(!checkUser) window.location=('/login')
    // console.log(checkUser)
    const userId = checkUser.userID
    // console.log(cartList)
    const checkCart = cartList.find((items) => items.productId === item._id)
    // console.log(checkCart)
    if(!checkCart){
        const data = {      productId: item._id,
                            quantity: 1,
                            name: item.name,
                            price: item.price,
                            img: item.img,
                            userId: userId,
        }
        toast.success("add to cart success!")
        await axios.post('https://vinhshop.herokuapp.com/api/cart/addcart', data)
        const action = addCart()
        dispatch(action)
        window.location=('/cart')

    }else{
        toast.warn("this product is exist in cart")
    }
   
    // console.log(data)
}
// const notify = () => toast("add to cart success");
const {newProductList} = props
// console.log(ProductsList)
    return (
        <>

       
            { newProductList.map( (item,index) => 
            
                    <div key={index} className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
                        {/* <button onClick={notify}>click me</button> */}
                        <ToastContainer />
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
