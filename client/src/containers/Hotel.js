import React, {useState, useEffect} from 'react';
import BookingForm from '../components/BookingForm';
import BookingsList from '../components/BookingsList';
// import BookingDetail from '../compo'

const Hotel = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings().then((allBookings) => {
            setBookings(allBookings);
        })
    }, []);

    const getBookings = () => {
        return fetch('http://localhost:5000/api/bookings/')
        .then(res => res.json())
    }

  const postBooking = (payload) => {
        return fetch('http://localhost:5000/api/bookings/', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    }
    
    const addBooking = (booking) =>{
        const temp = bookings.map(s =>s);
        temp.push(booking);
        setBookings(temp);
      }

    return (
        <div>
            <p>This is our container</p>
            <BookingForm addBooking={addBooking} postBooking={postBooking} />
            <BookingsList bookings={bookings}/>
        </div>
    )

}

export default Hotel;