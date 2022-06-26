import React from 'react'
import { useLocation } from 'react-router-dom'
import './contactinfo.scss'
import { Link } from 'react-router-dom'
const ContactinfoPage = () => {
  const location = useLocation()
  const { item} = location.state

  console.log(item)
  return (
    <div className='infocontainer'>
        <h1 className='modalheader'>Contact Detail</h1>
        <div className='modalcontainer'>
          <div className='contactdata'>
          <h3 className='contactheader'>Full Name</h3>:
          <h3 className='contactdetail'>{item.firstName}{item.lastName}</h3>
          </div>

          <div className='contactdata'>
          <h3 className='contactheader'>FirstName </h3>:
          <h3 className='contactdetail'>{item.firstName}</h3>
          </div>

          <div className='contactdata'>
          <h3 className='contactheader'>LastName</h3>:
          <h3 className='contactdetail'>{item.lastName}</h3>
          </div>

          <div className='contactdata'>
          <h3 className='contactheader'>PhoneNumber </h3>:
          <h3 className='contactdetail'>{item.phoneNumber}</h3>
          </div>
          <Link to='/message' state={{item}}>
          <button className='sendbutton'>Send Message</button>
          </Link>
        </div>
    </div>
  )
}

export default ContactinfoPage