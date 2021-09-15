import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Form} from 'react-bootstrap'
function CreateProduct() {
  const [cate, setCate] = useState([])
   const [name, setName] = useState('')
   const [price, setPrice] = useState('')
   const [imgUrl, setImgUrl] = useState('')
   const [description, setDescription] = useState('')
   const [categoryId, setCategoryId] = useState('')
  const postRequest = (e) =>{
    e.preventDefault()
    const data = {
      name:name,
      price:price,
      img:imgUrl,
      description:description,
      // categoryId:'61277d933c6582b718e619a2',
      categoryId:categoryId
    }
    
    axios.post('/api/products/createProduct',data)
      .then(res => console.log(res.data));
  }
  useEffect(() => {
    const getData = async()=>{
      try {
        const {data} = await axios.get('https://vinhshop.herokuapp.com/api/categories')
        setCate(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  const handleSelectValue = (e) =>{
    const file = e.target.files[0].name
    setImgUrl(file)
    // const file = e.target.value
    // console.log(file)
  }
    return (
        <div className="container">
                <form  className="bg-white p-5 contact-form">
              <div className="form-group">
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} 
                className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="text" name="price" onChange={(e) => setPrice(e.target.value)} 
                className="form-control" placeholder="Price"/>
              </div>
              {/* <div className="form-group">
                <input type="text" name="imgUrl" onChange={(e) => setImgUrl(e.target.value)} 
                className="form-control" placeholder="ImgUrl"/>
              </div> */}
              <div className="form-group">
                <input type="file" name="imgUrl" onChange={handleSelectValue}
                //   (e) => console.log(Array.from(e.target.files)
                // )} 
                className="form-control" placeholder="ImgUrl"/>
              </div>
              <div className=" col-md-3 px-0">
                <div className="form-group">
                <Form.Select name="category" onChange={(e) => setCategoryId(e.target.value)} required  className='form-control'>
                  <option value="">Categories</option>
                  {cate.map((items,index) =>
                    <option key={index} value={items._id}> {items.name} </option>  
                  )}
                 
                </Form.Select>
                </div>
              </div>
              <div className="form-group">
                <textarea name="description" onChange={(e) => setDescription(e.target.value)}
                 cols="30" rows="7" className="form-control" placeholder="Description"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" onClick={postRequest} value="Create" className="btn btn-primary py-3 px-5"/>
              </div>
            </form>
        </div>
    )
}

export default CreateProduct
