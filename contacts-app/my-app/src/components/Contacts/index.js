import {useState,useEffect} from 'react'
import './List/styles.css'

import List from './List'
import Form from './Form'

function Contacts() {
    const [Contacts, setContacts]=useState([
        {
            fullname: "Meryem",
            phone_number:"123123"
        },
        {
            fullname: "Mira",
            phone_number: "456456"
        },
        {
            fullname:"Melek",
            phone_number:"789789"
        },

    ]);

    useEffect(() =>{
        console.log(Contacts)
    },[Contacts])

  return (
    <div id="contanier">
        <h1>Contacts</h1>
        <List Contacts={Contacts}/>
        <Form addContact={setContacts} Contacts ={Contacts}/>
    </div>
  );
}

export default Contacts;
