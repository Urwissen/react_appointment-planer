import React, { useState } from "react"
import { Switch, Route, Redirect, NavLink } from "react-router-dom"

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage"
import { ContactsPage } from "./containers/contactsPage/ContactsPage"

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([])
  const [appointments, setAppointments] = useState([])

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    class Contact {
      constructor(name, phone, email) {
        this.name = name
        this.phone = phone
        this.email = email
      }
    }
    setContacts(prev => [...prev, new Contact(name, phone, email)])  
  }

  const addAppointment = (title, contact, date, time) => {
    class Appointment {
      constructor(title, contact, date, time) {
        this.title = title
        this.contact = contact
        this.date = date
        this.time = time
      }
    }
    setAppointments(prev => [...prev, new Appointment(title, contact, date, time)])
  }

  console.log(contacts)

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
              contacts={contacts} 
              addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
              appointments={appointments} 
              addAppointment={addAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
