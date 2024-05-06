import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
function Searchbox(props) {
  return (
    <div className='col col-10'>
        <input type="text" className='form-control ' placeholder='Type to search'
        value={props.value}
        onChange={(event)=>props.setSearchValue(event.target.value)}

        
        >
        </input>
      
    </div>
  )
}
 
export default Searchbox
