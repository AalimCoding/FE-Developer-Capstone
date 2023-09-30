import React, { useState } from "react";
import { datesForBooking } from './mockAPI'
import { Routes, Link, Route, useNavigate } from 'react-router-dom';
import ConfirmedBooking from "./ConfirmedBooking";


function BookingForm({ availableTimes, dispatch, submitForm }) {
    const navigate = useNavigate(); // Add this line to get the navigate function

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "removeTime", time: time })

        if (submitForm(date, time, guests, occasion)) {
            navigate("/ConfirmedBooking");
        }

    };
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const availableOccasions = ["Birthday", "Anniversary"];

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
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
                {timeOptions}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                {occasionOptions}
            </select>

            <button type="submit">Make Your Reservation</button>
        </form>
    );
}

export default BookingForm;