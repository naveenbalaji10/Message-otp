import React,{useState} from 'react'
import './contactpage.scss'
import {Link} from 'react-router-dom'
import { mod } from 'synonyms/dictionary'
import axios from 'axios'
import { useEffect } from 'react'


const Contactpage = ({contacts}) => {
  
  const [modal,setModal]=useState(false)
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('+91')
  const [error,setError]=useState('')

const savecontact=async()=>{
  if(firstName !=="" && firstName.length< 5){
    setError('Please enter a valid firstname')
    return;
  }
  if(lastName !=="" && lastName.length < 5){
    setError('Please enter a valid lastname')
    return;
  }
  if(phoneNumber.length !== 13){
    setError('Please enter a valid number')
    return;
  }
     
  const data={firstName,lastName,phoneNumber}

  try {
     await axios.post('http://localhost:3001/contact/add',data).then((res)=>{
       console.log(res.data)
     })
  } catch (error) {
    setError(error.response.data.message)
  }

}

useEffect(()=>{
  if(error.length >0){
    setTimeout(()=>{
   setError('')
    },4000)
  }
 
},[error])


  return (

    <div className="outercontainer">
     <div className='innerContainer'>
         <h2 >Contacts</h2>
         <button className='addbutton' onClick={()=>{setModal(!modal)}}>Add Contact</button>
       </div>

       <div className={modal ? "listContainer modal" : "listContainer"}>
          <table>
            <tbody>
              <tr className='head'>
                 <th className='sno'>S NO </th>
                 <th className='names'>Names</th>
              </tr>
         
               {contacts.length > 0 && contacts.map((item,index)=>(
               
                 <tr className='datas' key={item._id}>
                   <td className='index'>  <Link className='link' to="/info" state={{item}} >{index +1}</Link></td>
                   <td className='data' >  <Link className='link' to="/info" state={{item}} >{item.firstName}{item.lastName}</Link></td>
                  </tr>
               ))
               }
          
            </tbody>
          </table>
       </div>

<div className={modal ? 'modalContainer' : 'modalContainer hidden'}>
  <h3 className='header'>Add new Contact</h3>
<div className='inputContainer'>
  <h3>FirstName</h3>
  <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
</div>
<div className='inputContainer'>
  <h3>LastName</h3>
  <input value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
</div>
<div className='inputContainer'>
  <h3>FirstName</h3>
  <input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
</div>

{error.length >0 &&<p className='error'>{error}</p>}

<button className='save' onClick={savecontact}>Save</button>

<button className='close' onClick={()=>{setModal(!modal)}}><i className='fa fa-close' color='white'/></button>
</div>


    </div>


  )
}

export default Contactpage