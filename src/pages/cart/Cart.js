import React, {useState, useEffect } from 'react'
// import {Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, deleteCart, getCart} from '../../features/cart/CartSlice'
import axios from 'axios'
import Paypal from '../../components/paypal/Paypal'
// import Load from '../../components/load/Load'

function Cart() {
	const dispatch = useDispatch()
	// const [load, setLoad] = useState(true)
	const [checkout, setCheckout] = useState(false)
	const object =  localStorage.getItem('user')
	const userInfo = JSON.parse(object);
	const userId = userInfo.userID
	const cartList = useSelector(state => state.CartSlice.Cart)
	const count = useSelector(state => state.CartSlice.count)
	useEffect(() => {
		const showCart = async() =>{
			const {data} = await axios.get(`https://vinhshop.herokuapp.com/api/cart/user=${userId}`)
			const action = getCart(data)
			dispatch(action)
		}
		showCart()
	}, [userId,dispatch])


	
	const [total, setTotal] = useState(0)
	
	
	
	// const getQuantity = (a,b) => a + b
	useEffect(() => {
		// let sum = 0
		let subTotal = 0
			// cartList.map((items) =>setCount(sum += items.quantity))
			cartList.map((items) =>setTotal(subTotal += items.quantity * items.price))
			
		//    setTotal(subTotal);
		//    setCount(sum);
	}, [cartList])
const handleIncrement = (id) =>{
	// id
	// console.log(id)
	const action = increment(id)
	dispatch(action)
}
const handleDecrement = (id) =>{
	// id
	const action = decrement(id)
	dispatch(action)
}
const handleDelete = (id)=>{
	// setLoad(true)
		const action = deleteCart(id)
		dispatch(action)
}
    return (
        <>
             <section className="ftco-section ftco-cart">
			<div className="container">
			{/* <button onClick={handleAddToCart}>add to cart</button> */}
				<div className="row">
					
    			<div className="col-md-8 ftco-animate fadeInUp ftco-animated">
    				<div >
	    				<table className="table" >
						    <thead className="thead-primary">
						      <tr className="text-center">
						        <th>#</th>
						        <th>&nbsp;</th>
						        <th>Product name</th>
						        <th>Price</th>
						        <th>Quantity</th>
								<th>Action</th>
						       
						      </tr>
						    </thead>
						    <tbody>
								{cartList.map((items,index) =>
									<tr className="text-center" key={index}>
									<td className="product-remove">{index+1}</td>
									
									<td className="image-prod">
										<div className="img" style={{backgroundImage:`url(images/${items.img})`}}></div>
									</td>
									
									<td className="product-name">
										<h3>{items.name}</h3>
										
									</td>
									
									<td className="price"> {items.price} </td>
									<td className="quantity">
										<div className="input-group">
											<span className="input-group-btn ">
												<button type="button" onClick={() => handleDecrement(items.productId)} className="quantity-left-minus " >
											<i className="ion-ios-remove"></i>
												</button>
												</span>
											<input type="text" id="quantity" 
											name="quantity" className="form-control input-number" 
											onChange={() => console.log(items.quantity)}
											value={items.quantity} min="1" max="10" />
											<span className="input-group-btn">
												<button type="button" onClick={()=> handleIncrement(items.productId)} className="quantity-right-plus " >
												<i className="ion-ios-add"></i>
											</button>
											</span>
										</div>
									  </td>
									  <td><span style={{fontSize:'24px',cursor:'pointer',color:'red'}} 
									  onClick={() => handleDelete(items._id)} 
										  className="ion-ios-trash "></span></td>
								  </tr>
									)
								}
						      

						   
						    </tbody>
						  </table>
					  </div>
    			</div>
                <div className="col-lg-4 primary cart-wrap ftco-animate fadeInUp ftco-animated">
    				<div className="cart-total mb-3">
    					<h3>Cart Totals</h3>
    					<p className="d-flex">
    						<span>Subtotal ({count})</span>
    						<span>$ {total}</span>
    					</p>
    					<p className="d-flex">
    						<span>Delivery</span>
    						<span>$0.00  </span>
    					</p>
    					<p className="d-flex">
    						<span>Discount</span>
    						<span>0</span>
    					</p>
    					<hr></hr>
    					<p className="d-flex total-price">
    						<span>Total</span>
    						<span>$ {total}</span>
    					</p>
    				</div>
					{checkout ? (<Paypal/>) 
					: (<p><button onClick={() => setCheckout(true)}  
					className="btn btn-primary py-3 px-4">Proceed to Checkout</button></p>)}
    				
    			</div>
    		</div>
    		{/* <div className="row justify-content-end">
    		
    		</div> */}
			</div>
		</section>

		<section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
      <div className="container py-4">
        <div className="row d-flex justify-content-center py-5">
          <div className="col-md-6">
          	<h2 style={{fontSize:' 22px'}} className="mb-0">Subcribe to our Newsletter</h2>
          	<span>Get e-mail updates about our latest shops and special offers</span>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex">
                <input type="text" className="form-control" placeholder="Enter email address"/>
                <input type="submit" value="Subscribe" className="submit px-3"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Cart
