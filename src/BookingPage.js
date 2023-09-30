import React, { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage(props) {

    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
    });



    return (
        <div>
            <h1>Book A Table Here</h1>
            <p>Text goes here</p>

            <BookingForm
                availableTimes={props.availableTimes}
                handleSubmit={props.handleSubmit}
                formData={formData}
                setFormData={setFormData}
                dispatch={props.dispatch}
                submitForm={props.submitForm}

            />
        </div>
    );
}

export default BookingPage;