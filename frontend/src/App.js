import './App.css';
import { useEffect,useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ContactinfoPage from './pages/contactsinfo/contactinfoPage';
import Contactpage from './pages/contactpage/contactpage';
import Smspage from './pages/smspage/smspage';
import Menu from './components/Menu';
import axios from 'axios'
import Messagespage from './pages/messages/messagespage';

function App() {


  const [contacts,setContacts]=useState([])

  const getContacts=async()=>{
    try {
      await axios.get('http://localhost:3001/contact').then((res)=>{
        console.log(res.data)
        setContacts(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  
  }
  
  useEffect(()=>{
    getContacts()
  },[])

  return (
    <div className="App">
    <Menu />
    <BrowserRouter>
    <Routes>
    <Route index element={<Contactpage contacts={contacts}/>}/>
    <Route path='/info' element={<ContactinfoPage />}/>
    <Route path='/message' element={<Smspage/>}/>
    <Route path='/messages' element={<Messagespage />}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
