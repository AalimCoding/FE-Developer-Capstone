import React, { useReducer, useState, useEffect } from "react";
import Nav from "./Nav";
import { fetchAPI, submitAPI } from "./mockAPI";
import { Routes, Link, Route, useNavigate } from 'react-router-dom';
import ConfirmedBooking from "./ConfirmedBooking";

function Main() {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");



    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate and process form data
        if (date && time && guests && occasion) {
            dispatch({ type: "removeTime", time: time });
            if (submitForm(date, time, guests, occasion)) {
                navigate("/ConfirmedBooking");
            }
        } else {
            // Handle form validation errors, e.g., show error messages
            console.log("All fields are required.");
        }
    };

    const updateTimesReducer = (state, action) => {

        if (action.type === "removeTime") {
            const updatedTimes = (fetchAPI(state.availableDate)).filter(time => time !== action.time);
            return { ...state, availableTimes: updatedTimes };
        }
        return state;
    }

    const today = '2023-09-09';

    const initializeTimes = {
        availableDate: today,
        availableTimes: fetchAPI(today),
    };

    const [state, dispatch] = useReducer(updateTimesReducer, initializeTimes)

    function submitForm(formData) {
        if (submitAPI(formData) != undefined) { navigate("/ConfirmedBooking"); }
    }

    return (
        <div>
            <Nav availableTimes={state.availableTimes} dispatch={dispatch} handleSubmit={handleSubmit} submitForm={submitForm} />
        </div>
    );
};

export const initializeTimes = {
    availableDate: '2023-09-09',
    availableTimes: fetchAPI('2023-09-09'),
};

export const updateTimesReducer = (state, action) => {

    if (action.type === "removeTime") {
        console.log(state.availableDate)

        var updatedTimes = (fetchAPI(state.availableDate))
        console.log(updatedTimes)

        updatedTimes = updatedTimes.filter(time => time !== action.time);
        return { ...state, availableTimes: updatedTimes };
    }
    return state;
}

export default Main;