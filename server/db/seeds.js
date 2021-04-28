use hotel;

db.dropDatabase();

db.bookings.insertMany ([
    {
        guest_name: "Colin Morrison",
        guest_email: "colin@gmail.com",
        check_in_status: false
    },
    {
        guest_name: "Iain McDulling",
        guest_email: "iain@gmail.com",
        check_in_status: false
    },
    {
        guest_name: "Mary Fagan",
        guest_email: "mary@gmail.com",
        check_in_status: false
    }
]);