import React, {useState} from "react";

export const AppointmentsPage = (props) => {

  const [title, setTitle] = useState("")
  const [contact, setContact] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if(appointments.every(element => element.title !== title)) {
      addAppointment(title, contact, date, time)  
    }

    setTitle("")
    setContact("")
    setDate("")
    setTime("")
  };

  const {appointments, addAppointment} = props
  return (
    
    <div>
      <section>
        <h2>Add Appointment</h2>
        <form onSubmit={handleSubmit}>
        <label for="title">Title:  
          <input 
            name="title"
            type="text"
            value={title} 
            onChange={(event) => setTitle(event.target.value)}  
            placeholder="Event Title"
            required
          />
        </label>
        
        <label for="contact">Contact:
          <input 
            name="contact" 
            type="text"
            value={contact} 
            onChange={(event) => setContact(event.target.value)}  
            placeholder="Contact Name"
            required
          />
        </label>

        <label for="date">Date:
          <input 
            name="date"
            type="date" 
            value={date} 
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </label> 

        <label for="time">Time:
          <input 
            name="time"
            type="time" 
            value={time} 
            onChange={(event) => setTime(event.target.value)}
            required 
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
        <h2>Appointments</h2>
        {appointments.map(appointment => {
          return(
            <div key={appointment.title + appointment.date} className="card">
              <h3>{appointment.title}</h3>
              <h4>{appointment.contact}</h4>
              <h4>{appointment.date}</h4>
              <h4>{appointment.time}</h4>
              <br />
            </div>
          )
        })}
      </section>
    </div>
  );
};
