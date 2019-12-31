import React from 'react'
import _ from 'lodash'
import './Pagination.css';
 function Pagination({totalItems, pageSize, currentPage, onPageChange}) {
    
    const items = Math.ceil(totalItems/pageSize)
    const pages = _.range(1,items+1)
  
    if (items === 1) return null
    return (
        <nav>
            <ul className="pagination">
                {pages.map(page =>( 
                             <li key ={page} className={ currentPage === page ? 'page-item active' : 'page-item'} >
                                <button className ='page-link' onClick ={() => onPageChange(page)} >{page}</button>
                            </li>
                ))}
               
            </ul>
        </nav>
    )
}

export default Pagination
