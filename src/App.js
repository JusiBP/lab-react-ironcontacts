import './App.css';
import dataContacts from "./contacts.json";

const contacts = dataContacts.slice(0,10)


function App() {
  return (
    <div className="App">
      <table className='table'>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscars</th>
            <th>Emmys</th>
          </tr>
          {contacts.map((contact) => {
            return<tr>
              <td><img className='picture' src={contact.pictureUrl} alt=""/></td>
              <td>{contact.name}</td>
              <td>{Math.round((contact.popularity) * 100) / 100}</td>
              <td>{contact.wonOscar? <img className='picture' src="/oscar_icon.png" alt="" /> : ""}</td>
              <td>{contact.wonEmmy? <img  className='picture' src="/emmy_icon.png" alt="" /> : ""}</td>
            </tr>
          })}
          
      </table>
    </div>
  );
}

export default App;
