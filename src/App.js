import './App.css';
import { useState } from 'react';
import dataContacts from "./contacts.json";
import Contact from "./components/contact.jsx"

const shallowContactsIni = dataContacts.slice(0,10)

function App() {
  
  const [contactsList, setContactsList] = useState(shallowContactsIni);

  const deleteHandlerProps = (contactId) => {
    let shallowContacts = contactsList.filter(contact => {
      return contact.id !== contactId;
    })
    setContactsList(shallowContacts)
  }
  const addRandomHandler = () => {
    let randomContact = dataContacts[Math.floor(Math.random() * dataContacts.length)]
    let shallowContactsmod = contactsList.map(a=> a)
    shallowContactsmod.push(randomContact)
    setContactsList(shallowContactsmod)
  }

  return (
    <div className="App">
    <button onClick={addRandomHandler}>Add Random Contact</button>
      <table className='table'>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscars</th>
            <th>Emmys</th>
          </tr>
          {contactsList.map((contact) => {
            return <Contact key = {contact.id} contact={contact} deleteHandlerProps={deleteHandlerProps}/>
          })}
          
      </table>
    </div>
  );
}

export default App;
