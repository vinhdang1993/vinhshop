import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BreadCrumbs from '../../components/breadcrumb/BreadCrumbs';
import Categories from '../category/Categories'
import { getProduct } from '../../features/product/ProductSlice';
import Items from './Items'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ItemsCategory from './ItemsCategory';
import Load from '../../components/load/Load';
import Pag from '../../components/pagination/Pag';


function Shop() {

  const productsList = useSelector(state => state.ProductSlice.Products);
  const load = useSelector(state => state.ProductSlice.load);
  const dispatch = useDispatch()
  const {category} = useParams();
  const {page} = useParams()
  
  // pagination
  const [currentPage]= useState(page!== undefined ? parseInt(page) : 1)  
  const pageCount = useSelector(state => state.ProductSlice.page)
  const limit = 8
  const begin = (currentPage -1) * limit
  const end = currentPage * limit
  const newProductList = productsList.slice(begin,end)


  useEffect(() => {
   const getAll = async()=>{
     try {
     
       const { data } = await axios.get('https://vinhshop.herokuapp.com/api/products')
      //  const { data } = await axios.get(`/api/products`)
       const action = getProduct(data)
       dispatch(action)
     } catch (error) {    
     }
   }
   getAll()
  }, [dispatch])


  
  // console.log('pages: ',page)
  return (
    <>
      <BreadCrumbs title='shop' />
      
      <section className="ftco-section ftco-degree-bg bg-light">
        <div className="container">
          <div className="row">
            {/* Left */}

            <div className="col-lg-3 sidebar ftco-animate fadeInUp ftco-animated">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon ion-ios-search"></span>
                  <input type="text" className="form-control" placeholder="Search..." />
                </div>
              </form>

              <Categories />
            </div>



            {/* Right */}
            <div className="col-lg-9 ftco-animate fadeInUp ftco-animated">
             
              <div className="row">
             
                {category === undefined ? 
                (load === false ? <Load/> :<Items newProductList={newProductList} /> ) : 
                 <ItemsCategory category={category} /> 
                }
                
               
              </div>
              {pageCount > 1 ? 
              category === undefined ? <Pag currentPage={currentPage} pageCount={pageCount}/> :
              <></>
              
              : <></>}
              
            </div>



          </div>
        </div>
      </section>
      
    </>
  )
}

export default Shop
