import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmittedForm from "./SubmittedForm";
function RegistrationForm() {
    const history = useNavigate();
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      passport: "",
      travelDate: "",
      returnDate: "",
      destination: "",
      reasonForTravel: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData); // Do something with the form data
      <SubmittedForm/>// Navigate to the SubmittedForm component
    };
  
    return (
      <div>
        <center>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Phone:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Passport:
            <input type="text" name="passport" value={formData.passport} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Travel Date:
            <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Return Date:
            <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Destination:
            <input type="text" name="destination" value={formData.destination} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Reason for Travel:
            <textarea name="reasonForTravel" value={formData.reasonForTravel} onChange={handleChange} required />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        </center>
      </div>
    );
  }
  export default RegistrationForm;
  
  