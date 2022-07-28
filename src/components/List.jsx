import React from 'react'
import  './search.css';

const List = ({value}) => {
  return (
    
        <li className="list-group-item">
            <input className="form-control" type="text" value={value.text} aria-label="readonly input example" readOnly></input>
            {value.palindrome&&<div className="bandera">Palindrome</div>}
        </li>
      
    
  )
}

export default List
