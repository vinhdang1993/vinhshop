import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getProduct } from '../../../features/product/ProductSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap';

function ProductsManage() {
  const [showConfirm,setShowConfirm] =useState(false)
  // const [isShow, setisShow] = useState(false)
  const [getId,setGetId] =useState('')
  const productsList = useSelector(state => state.ProductSlice.Products);
  const dispath = useDispatch()
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://vinhshop.herokuapp.com/api/products')
        const action = getProduct(data)
        dispath(action)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [dispath])

const deleteProduct = (id) =>{
  setGetId(id)
  setShowConfirm(true)
}
const handleCloseConfirm = () => setShowConfirm(false)
const handleSubmitConfirm = () => {
    axios.get(`https://vinhshop.herokuapp.com/api/products/delete=${getId}`)
      .then(console.log('delete product success'))
  setShowConfirm(false)


}

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = (id) => {
    // console.log(id)
  setShow(!show)};
  return (
    <section className="ftco-section ftco-cart ">
      <div className="container">
        <Link to="/manage/createProduct" 
        style={{marginBottom:'5px'}} 
        className='btn btn-primary '>Create a product</Link>
        <div className="row">
          <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
            <div className="cart-list">
              <table className="table">
                <thead className="thead-primary">
                  <tr className="text-center">
                    <th>#</th>
                    <th>Product List</th>
                    <th>Product Name</th>
                    <th>Price</th>
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productsList.map((items, index) =>
                    <tr className="text-center" key={index}>
                      <td> {index + 1} </td>
                      <td className="image-prod">
                        <div className="img" style={{ backgroundImage: `url(/images/${items.img})`}} ></div>
                     
                      </td>
                      <td className="product-name">
                        <h3>{items.name}</h3>
                      </td> 
                      <td className="price">
                          ${items.price}
                      </td>
                      {/* <td className="quantity">
                        <p>1</p>
                      </td> */}
                      <td className="total">
                      <span style={{fontSize:'24px',cursor:'pointer',color:'#f1e407',marginRight:'.5em'}}
                      onClick={() => handleShow(items._id)} 
                      className="ion-md-create "></span>
                      <span style={{fontSize:'24px',cursor:'pointer',color:'red'}} onClick={() => deleteProduct(items._id)} 
                      className="ion-ios-trash "></span>
                      </td>
                    </tr>


                  )}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <Confirm isShow={isShow} handleShow={handleShow}/> */}
      {/* form edit */}
      <Modal
                 show={show} 
                 onHide={handleClose}
                 size="lg"
                 >
                    <Modal.Header >
                    <Modal.Title>Edit Product</Modal.Title>
                    <button className="btn"  style={{cursor:'pointer',fontSize:'16px'}} onClick={handleClose}>
                       <span className="ion-ios-close success"></span>
                    </button>
                    </Modal.Header>
                    <Modal.Body>
                    <form  className="bg-white p-5 contact-form">
                        <div className="form-group">
                            <input type="text" name="name" 
                           
                            className="form-control" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="price" 
                           
                            className="form-control" placeholder="Price"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="imgUrl" 
                         
                            className="form-control" placeholder="ImgUrl"/>
                        </div>
                        <div className="form-group">
                            <textarea name="description" 
                           
                            cols="30" rows="5" className="form-control" placeholder="description"></textarea>
                        </div>
                         
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>


                {/* from confirm */}
                <Modal show={showConfirm} onHide={handleCloseConfirm}>
                  <Modal.Header >
                    
                  <Modal.Title>Delete Product</Modal.Title>
                  <button className="btn"  style={{cursor:'pointer',fontSize:'16px'}} onClick={handleCloseConfirm}>
                       <span className="ion-ios-close success"></span>
                    </button>
                  </Modal.Header>
                  <Modal.Body>Do you want to delete this product !!!</Modal.Body>
                  <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseConfirm}>
                      Close
                  </Button>
                  <Button variant="danger" onClick={handleSubmitConfirm}>
                      Delete
                  </Button>
                  </Modal.Footer>
              </Modal>
    </section>
  )
}

export default ProductsManage
