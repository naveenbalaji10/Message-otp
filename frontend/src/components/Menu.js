import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'
const Menu = () => {
  return (
    <div className='container'>
        <div className='header'>
        <i className='fa fa-user icon' ></i>
        <h2>Contacts App</h2>
        </div>

        <ul>
           <li className='list-item'>    
           <a href='/'>
             <i className='fa fa-phone listicon'></i>
             <h3 className='itemname'>Contacts</h3>
           </a>
          </li>
        
          
       <li className='list-item'>
       <a href='/messages'>
             <i className="fa fa-comments listicon"></i>
             <h3 className='itemname'>Messages</h3>
       </a>
          </li>
       
        </ul>
    </div>
  )
}

export default Menu