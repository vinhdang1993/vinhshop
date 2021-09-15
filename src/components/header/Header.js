import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import HomePage from '../../pages/home'
import Contact from '../../pages/other/Contact'
import Login from '../../pages/other/Login'
import NoContent from '../../pages/other/NoContent'
import ProductDetail from '../../pages/other/ProductDetail'
import Shop from '../../pages/shop/Shop'
import NavDropdown from 'react-bootstrap/NavDropdown'
import ProductsManage from '../../pages/manage/products/ProductsManage'
import CreateProduct from '../../pages/manage/products/CreateProduct'
import EditProduct from '../../pages/manage/products/EditProduct'
import Cart from '../../pages/cart/Cart'
function Header() {
  
const checkUser = localStorage.getItem('user')
    // console.log(checkUser)
      const handleLogout = (e)=>{
        e.preventDefault();
        localStorage.removeItem('user');
        window.location=('/login')
        
      }
    return (
        <>
           <div className="py-1 bg-primary">
                <div className="container">
                    <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                        <div className="col-lg-12 d-block">
                            <div className="row d-flex">
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon mr-2 d-flex justify-content-center align-items-center">
                                      <span className="icon-phone2"></span></div>
                                    <span className="text">+ 1235 2355 98</span>
                                </div>
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon mr-2 d-flex justify-content-center align-items-center">
                                      <span className="icon-paper-plane"></span></div>
                                    <span className="text">youremail@email.com</span>
                                </div>
                                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                                    <span className="text">3-5 Business days delivery &amp; Free Returns</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>

    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <Link className="navbar-brand" to="/">Food Delivery</Link>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
	          <li className="nav-item"><Link to="/"  className="nav-link">About</Link></li>
	          <li className="nav-item"><Link to={`/shop`} name='shop' className="nav-link">Shop</Link></li>
	          <li className="nav-item"><Link to="/contact" name='contact' className="nav-link">Contact</Link></li>

     

              {checkUser === null ?  
              <li className="nav-item"><Link to="/login" name='login' className="nav-link">Login</Link></li> :
              <NavDropdown title="hi you"   id="nav-dropdown" style={{cursor: 'pointer'}} >
              
                <Link className="dropdown-item" to="/manage/products">Product Manager</Link>
                <Link className="dropdown-item" to="/wishlist.html">Wishlist</Link>
                <Link className="dropdown-item" to="/product-single.html">Single Product</Link>
                <Link className="dropdown-item" to="/cart">Cart</Link>
                <Link className="dropdown-item" to="/checkout.html">Checkout</Link>
                <span className="dropdown-item"  onClick={handleLogout}>Log out</span>
              </NavDropdown>
            }




              
	          <li className="nav-item cta cta-colored">
              <Link to="/cart"  className="nav-link">
                <span className="ion-ios-cart"></span>[0]</Link></li>

	        </ul>
	      </div>
	    </div>
	  </nav>
    

        <Switch>
            <Route path="/contact">
            
                <Contact />
            </Route>
            <Route path="/product/id=:productId">
                <ProductDetail />
            </Route>
            <Route path="/product/*">
                <NoContent />
            </Route>
            <Route path="/shop/category=:category">
                <Shop />
            </Route>
            <Route path="/shop/page=:page">
                <Shop />
            </Route>
            <Route path="/shop">
                <Shop />
            </Route>
            <Route path="/manage/products">
                <ProductsManage />
            </Route>
            
            <Route path="/manage/createProduct">
                <CreateProduct />
            </Route>
            <Route path="/manage/editproduct">
                <EditProduct />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                <HomePage />
            </Route>
              
        </Switch>
        </>
    )
}

export default Header
