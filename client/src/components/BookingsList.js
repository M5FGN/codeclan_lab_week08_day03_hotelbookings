import React from 'react';
import BookingDetail from './BookingDetail'

const BookingsList = ({bookings}) => {

    // This will take in the bookings prop

    const allBookings = bookings.map((booking, index) => {
        return <li><BookingDetail booking={booking} key={index}/> </li>
    });

    return(
        <div>
            <ul>
                {allBookings}
            </ul>
        </div>
        
    )

}

export default BookingsList;