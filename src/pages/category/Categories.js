import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Categories() {
  const [category, setCategory] = useState([])
  useEffect(() => {
    const getData = async()=>{
      try {
        const { data } = await axios.get('https://vinhshop.herokuapp.com/api/categories')
        setCategory(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
    return (
        <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
        <h3 className="heading">Categories</h3>
      <ul className="categories">
      <li ><Link to='/shop' > All </Link></li>
      {category.map((item, index) =><li key={index}><Link to={`/shop/category=${item._id}`} >{item.name}
      {/* <span>(12)</span> */}
      </Link></li>)}

      </ul>
    </div>
    )
}

export default Categories
