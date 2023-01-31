import '../App.css';

function Contact({contact, deleteHandlerProps}) {
  const deleteHandlerFunc = () => {
    deleteHandlerProps(contact.id)
  } 

    return  <tr>
              <td className="ImgDel">
                <img className='picture' src={contact.pictureUrl} alt=""/>
                <button onClick={deleteHandlerFunc}>Delete</button></td>
              <td>{contact.name}</td>
              <td>{Math.round((contact.popularity) * 100) / 100}</td>
              <td>{contact.wonOscar? <img className='pictureAward' src="/oscar_icon.png" alt="" /> : ""}</td>
              <td>{contact.wonEmmy? <img  className='pictureAward' src="/emmy_icon.png" alt="" /> : ""}</td>
            </tr>
}

export default Contact;