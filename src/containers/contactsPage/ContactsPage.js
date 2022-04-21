import React, {useState} from "react";

export const ContactsPage = (props) => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [mail, setMail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if(contacts.every(element => element.name !== name)) {
      addContact(name, phone, mail)  
    } else {
      alert("no duplicates allowed")
    }

    setName("")
    setPhone("")
    setMail("")
  };

  const {contacts, addContact} = props
  const isDuplicate = contacts.every(element => element.name !== name)
  
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <label for="name">Name:  
          <input
            style={isDuplicate ? {backgroundColor: "rgba(3, 168, 216,0.2)"} : {backgroundColor: "salmon"}}
            name="name"
            type="text"
            value={name} 
            onChange={(event) => setName(event.target.value)}  
            placeholder="Your Name"
            required
          />
        </label>
        
        <label for="phone">Phone:
          <input 
            name="phone" 
            type="number"
            value={phone} 
            onChange={(event) => setPhone(event.target.value)}  
            placeholder="123456"
          />
        </label>

        <label for="email">Email:
          <input 
            name="email"
            type="email" 
            value={mail} 
            onChange={(event) => setMail(event.target.value)}  
            placeholder="you@somemail.com"
          />
        </label> 

          <input 
            name="submit"
            type="submit" 
            value="Add" 
          />
      </form>
      
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {contacts.map(contact => {
          return(
            <div key={contact.name + contact.phone} className="card">
              <h3>{contact.name}</h3>
              <h4>{contact.phone}</h4>
              <h4>{contact.email}</h4>
              <br />
            </div>
          )
        })}
      </section>
    </div>
  );
};
