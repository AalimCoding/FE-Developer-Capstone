import React, { useState } from "react";
import { datesForBooking } from './mockAPI'
import { Routes, Link, Route, useNavigate } from 'react-router-dom';
import ConfirmedBooking from "./ConfirmedBooking";


function BookingForm({ availableTimes, dispatch, submitForm }) {
    // Jest can't handle window.alert() so instead we create an alert via alertMessage
    const [alertMessage, setAlertMessage] = useState("");
    const navigate = useNavigate(); // Add this line to get the navigate function

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Guests:", guests);
        console.log("Time:", time);
        console.log("Date:", date);

        // Validate and process form data
        if (!date || date === "") {
            setAlertMessage("Date is a required field!");
            return;
        }
        if (!time) {
            setAlertMessage("Time is a required field!");
            return;
        }
        if (!guests) {
            setAlertMessage("Number of guests is a required field!");
            return;
        }
        if (guests < 1) {
            setAlertMessage("Oops! We need at least one guest to serve!");
            return;
        }
        if (guests > 8) {
            setAlertMessage("Oops! We can't seat that many guests!");
            return;
        }

        dispatch({ type: "removeTime", time: time });
        if (submitForm(date, time, guests, occasion)) {
            navigate("/ConfirmedBooking");
        }

    };

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const availableOccasions = ["", "Birthday", "Anniversary"];

    // Question marks make sure that the values aren't undefined before they are mapped.

    const timeOptions = availableTimes?.map((item) => (
        <option key={item} value={item}>
            {item}
        </option>
    ));

    const occasionOptions = availableOccasions?.map((item) => (
        <option key={item} value={item}>
            {item}
        </option>
    ));


    return (
        <form
            onSubmit={handleSubmit}
            style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        >
            <label htmlFor="res-date">*Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />

            <label htmlFor="res-time">*Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            >
                {timeOptions}
            </select>

            <label htmlFor="guests">*Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                {occasionOptions}
            </select>

            {alertMessage && <div data-testid="alert">{alertMessage}</div>}
            <button type="submit" aria-label="On Click">Make Your Reservation</button>
        </form>
    );
}

export default BookingForm;