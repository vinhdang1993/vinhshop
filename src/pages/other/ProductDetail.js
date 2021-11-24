import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BreadCrumbs from '../../components/breadcrumb/BreadCrumbs'
import axios from 'axios'
import Load from '../../components/load/Load'

function ProductDetail() {
	const [product, setProduct] = useState({})
	const { productId } = useParams()
	const [load, setLoad] = useState()
	// console.log(productId)
	useEffect(() => {
		const getProductId = async () => {
			setLoad(false)
			try {
				const { data } = await axios.get(`https://vinhshop.herokuapp.com/api/products/id=${productId}`)
				setProduct(data)
				setLoad(true)
			} catch (error) {
				console.log(error)
			}
		}
		getProductId();
	}, [productId])
	return (
		<>
			<BreadCrumbs title='Product Deatail' />
			{load === false ? <div><Load /></div> :

				(<section className="ftco-section">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 mb-5 ftco-animate fadeInUp ftco-animated">
								{/* <a href="/images/product-1.jpg" className="image-popup"> */}
								<img src={`/images/${product.img}`} className="img-fluid" alt="Colorlib Template" />
								{/* </a> */}
							</div>
							<div className="col-lg-6 product-details pl-md-5 ftco-animate fadeInUp ftco-animated">
								<h3> {product.name} </h3>
								<div className="rating d-flex">
									<p className="text-left mr-4">
										<span href="#" className="mr-2">5.0</span>

										<span className="ion-ios-star-outline"></span>
										<span className="ion-ios-star-outline"></span>
										<span className="ion-ios-star-outline"></span>
										<span className="ion-ios-star-outline"></span>
										<span className="ion-ios-star-outline"></span>


									</p>

								</div>
								<p className="price"><span> ${product.price}</span></p>
								<p> {product.description}</p>
								<div className="row mt-4">
									<div className="col-md-6">
										<div className="form-group d-flex">
											<div className="select-wrap">
												<div className="icon"><span className="ion-ios-arrow-down"></span></div>
												<select name="" id="" className="form-control">
													<option value="">Small</option>
													<option value="">Medium</option>
													<option value="">Large</option>
													<option value="">Extra Large</option>
												</select>
											</div>
										</div>
									</div>
									<div className="w-100"></div>
									<div className="input-group col-md-6 d-flex mb-3">
										{/* <span className="input-group-btn mr-2">
											<button type="button" className="quantity-left-minus btn" data-type="minus">
												<i className="ion-ios-remove"></i>
											</button>
										</span> */}
										<input type="number" id="quantity"
											name="quantity" className="form-control input-number"
											min="0"
											/>
										{/* <span className="input-group-btn ml-2">
											<button type="button" className="quantity-right-plus btn" data-type="plus" >
												<i className="ion-ios-add"></i>
											</button>
										</span> */}
									</div>
									<div className="w-100"></div>
									<div className="col-md-12">
										<p style={{ color: '#000' }}>600 kg available</p>
									</div>
								</div>
								<p><button  className="btn btn-black ">Add to Cart</button></p>
							</div>
						</div>
					</div>
				</section>)

			}


		</>
	)
}

export default ProductDetail
