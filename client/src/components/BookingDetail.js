import React from 'react';

const BookingDetail = ({booking}) => {

    return(
        <div>
            <h4> {booking.guest_name} </h4>
            <h5> {booking.guest_email}</h5>
            <p> {booking.check_in_status.toString()}</p>
        </div>
    )

}

export default BookingDetail;