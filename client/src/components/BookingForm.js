import React, {useState} from 'react';
// import {postBooking} '


const BookingForm = ({addBooking, postBooking}) => {

    const [formData, setFormData] = useState({});

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        })
    }

    return(
    //    <form  id='bookings-form'>
        <form onSubmit={onSubmit} id='bookings-form'>
           <h3>Add a new Booking</h3>
           <label>Guest Name:</label>
           <input onChange={onChange} type='text' id='guest_name' required></input>

            <label>Guest Email:</label>
            <input onChange={onChange} type='text' id='guest_email'></input>

            <label>Checked in?</label>

            <label>Checked in</label>
            <input onChange={onChange} type='radio' id='checkedin' name='checkInStatus' value='true'></input>

            <label>Checked out</label>
            <input onChange={onChange} type='radio' id='checkedout' name='checkInStatus' value='false' checked></input>

            <input type='submit' value='Save' id='save'></input>
       </form>
    )

}

export default BookingForm;