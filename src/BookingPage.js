import React, { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage(props) {
    // Define state for form data
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
    });

    // Handle form submission
    const handleSubmit = (data) => {
        // You can access form data here
        console.log("Form submitted with data:", data);
    };

    return (
        <div>
            <h1>Book A Table Here</h1>
            <p>Text goes here</p>

            <BookingForm
                availableTimes={props.availableTimes}
                onSubmit={handleSubmit} // Pass the submit handler as a prop
                formData={formData} // Pass the form data as a prop
                setFormData={setFormData} // Pass the setter for form data as a prop
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default BookingPage;
