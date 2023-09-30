import './App.css';
import React, { useReducer, useState, useEffect } from "react";
import { Routes, Route,useNavigate } from 'react-router-dom';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import CallToAction from "./CallToAction.js";
import BookingPage from "./BookingPage.js";
import CustomersSay from "./CustomersSay.js";
import Chicago from "./Chicago.js";
import ConfirmedBooking from "./ConfirmedBooking";
import { fetchAPI, submitAPI } from "./mockAPI";

function App() {

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
  
  function submitForm(formData) {
    if (submitAPI(formData) != undefined) { navigate("/ConfirmedBooking"); }
}
  const [state, dispatch] = useReducer(updateTimesReducer, initializeTimes)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<CallToAction />} />
        <Route path="/ReserveATable" element={<BookingPage availableTimes={state.availableTimes} submitForm={submitForm} dispatch={dispatch} handleSubmit={handleSubmit}/>} />
        <Route path="/Testimonials" element={<CustomersSay />} />
        <Route path="/Backstory" element={<Chicago />} />
        <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
