import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { setTextRange } from 'typescript'
import './smspage.scss'

const Smspage = () => {
    const location = useLocation()
    const { item} = location.state
    const [otp,setOtp]=useState('')
    const [inputtext,setinputText]=useState('')
    const [result,setResult]=useState('')

    function randomNumberInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const sendSms=async(e)=>{
      e.preventDefault();
      if(inputtext.length >0){

      setOtp(randomNumberInRange(100000,999999));
      const text=`${inputtext} Hi Your OTP is:${otp}`
      const name=`${item.firstName}${item.lastName}`
      const phoneNumber=item.phoneNumber;
      const data={text,otp,name,phoneNumber}
      console.log(data)
      await axios.post('http://localhost:3001/sms/send',data).then((res)=>{
        console.log(res)
        if(res.status==200){
            setinputText('')
            setResult("Sms has been sent successfully")
            setTimeout(()=>{
              setResult('')
            },4000)
        }
      })
    
      .catch((err)=>{
        console.log(err)
        setResult(err.message)
        setTimeout(()=>{
          setResult('')
         },4000)
      })}else{
        setResult("Text should not be empty !")
        setTimeout(()=>{
          setResult('')
         },4000)
              }
    }

  return (
    <div className='smsContainer'>
      <h4>Send Message to {item.firstName}{item.lastName}</h4>
      <form onSubmit={sendSms}>
      <input type='text' name='sms' value={inputtext} onChange={(e)=>{setinputText(e.target.value)}}/> 
      {result.length > 0 && <p >{result}</p>}
      <button className='buttonsend' type='submit'>Send</button>
      </form>
      
    </div>
  )
}

export default Smspage