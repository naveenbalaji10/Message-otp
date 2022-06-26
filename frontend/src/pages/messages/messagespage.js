import React from 'react'
import './messagespage.scss'
import axios from 'axios'
import { useState } from 'react'
import moment from 'moment'
import { useEffect } from 'react'

const Messagespage = () => {

    const [messages,setMessages]=useState([])

    const getMessges=async()=>{
        try {
            await axios.get('http://localhost:3001/sms').then((res)=>{
              console.log(res.data)
              setMessages(res.data)
            })
          } catch (error) {
            console.log(error)
          }
    }

  useEffect(()=>{
      getMessges()
  },[])

  return (
    <div className='messagescontainer'>
        <h2>Messages sent</h2>
        <table>
            <tbody>
              <tr className='header'>
                 <th className='head1'>Name</th>
                 <th className='head2'>Messages</th>
                 <th className='head3'>Otp</th>
                 <th className='head4'>Time</th>
              </tr>

              {messages.length >0 ?  messages.map((item)=>(
                  <tr key={item._id} className='datas'>
                   <td className='head1'>{item.name}</td>
                   <td className='head2'>{item.text}</td>
                   <td className='head3'>{item.otp}</td>
                   <td className='head4'>{moment().format('MMMM Do YYYY, h:mm:ss a' )}</td>

                  </tr>
              ))
              :
              <p style={{fontWeight:'500'}}>You have no sent messages !</p>
              
              }


          
            </tbody>
          </table>
    </div>
  )
}

export default Messagespage