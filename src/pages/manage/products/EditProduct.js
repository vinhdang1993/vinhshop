import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
function EditProduct() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
               <Button variant="primary" style={{marginBottom:'50px'}} onClick={handleShow}>
                    Launch demo modal
                </Button>

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
                            // onChange={(e) => setName(e.target.value)} 
                            className="form-control" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="price" 
                            // onChange={(e) => setPrice(e.target.value)} 
                            className="form-control" placeholder="Price"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="imgUrl" 
                            // onChange={(e) => setImgUrl(e.target.value)} 
                            className="form-control" placeholder="ImgUrl"/>
                        </div>
                        <div className="form-group">
                            <textarea name="description" 
                            // onChange={(e) => setDescription(e.target.value)}
                            cols="30" rows="5" className="form-control" placeholder="description"></textarea>
                        </div>
                            {/* <div className="form-group">
                                <input type="submit"  value="Create" className="btn btn-primary py-3 px-5"/>
                            </div> */}
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
        </>
    )
}

export default EditProduct
