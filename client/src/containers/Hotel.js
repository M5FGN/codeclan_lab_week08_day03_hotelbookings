import React, {useState, useEffect} from 'react';
import BookingForm from '../components/BookingForm';
import BookingsList from '../components/BookingsList';
// import BookingDetail from '../compo'

const Hotel = () => {

    const [bookings, setBookings] = useState([]);

    // useEffect(() => {
    //     getBookings().then((allBookings) => {
    //         setBookings(allBookings);
    //     })
    // }, []);

    return (
        <div>
            <p>This is our container</p>
            <BookingForm />
            <BookingsList bookings={bookings}/>
        </div>
    )

}

export default Hotel;