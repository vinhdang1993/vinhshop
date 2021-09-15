import React from 'react'
// import Pagination from 'react-bootstrap/Pagination'
import {PropTypes} from 'prop-types'
// import { Link } from 'react-router-dom';
Pag.propTypes = {
    currentPage: PropTypes.number,
    pageCount :PropTypes.number,
};
// import { useState } from 'react'
function Pag(props) {

    const {currentPage, pageCount} = props
    const items= []
    for (let number = 1; number <= pageCount; number++) {
        items.push(
            <li  
              className={number === currentPage ? 'active' : ''} key={number}>
              <a href={`/shop/page=${number}`} >{number} </a>
            </li>
          
        );
      }
  
    return (
          <div className="col text-center">
            <div className="block-27">
              <ul>
                {items}
              </ul>
            </div>
          </div>
    )
}

export default Pag
