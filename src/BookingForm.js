import React, { useState } from "react";
import Main from "./Main.js";

function BookingForm({
    availableTimes,
    onSubmit, // Add onSubmit as a prop
    dispatch,
}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "removeTime", time: time})


        // Create an object with form data
        const formData = {
            date,
            time,
            guests,
            occasion,
        };

        // Pass the form data to the parent component's onSubmit function
        onSubmit(formData);
    };

    const availableOccasions = ["Birthday", "Anniversary"];

    const timeOptions = availableTimes.map((item) => (
        <option key={item} value={item}>
            {item}
        </option>
    ));

    const occasionOptions = availableOccasions.map((item) => (
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

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;
