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
  const sortByNameHandler = () => {
    let shallowContactsName = contactsList.map(a=> a).sort(function(a,b){
      if(a.name< b.name) return -1;
      if(a.name >b.name) return 1;
    });
    setContactsList(shallowContactsName)
  }
  const sortByPopHandler = () => {
    let shallowContactsPop = contactsList.map(a=> a).sort(function(a,b){
      if(a.popularity < b.popularity ) return 1;
      if(a.popularity > b.popularity) return -1;
    });
    setContactsList(shallowContactsPop)
  }


  return (
    <div className="App">
    <button onClick={addRandomHandler}>Add Random Contact</button>
    <button onClick={sortByNameHandler}>Sort by Name</button>
    <button onClick={sortByPopHandler}>Sort by Popularity</button>
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
