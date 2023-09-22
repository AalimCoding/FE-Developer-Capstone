import React, { useReducer, useState } from "react";
import Nav from "./Nav";


function Main() {

    const updateTimesReducer = (state, action) => {
        if (action.type == "removeTime") {
            const updatedTimes = state.availableTimes.filter(time => time !== action.time);
            return { ...state, availableTimes: updatedTimes };
        }
        return state;
    };


    const initializeTimes = {

        availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    };


    const [state, dispatch] = useReducer(updateTimesReducer, initializeTimes)

    return (
        <div>
            <Nav availableTimes={state.availableTimes} dispatch={dispatch}/>
        </div>
    );
}

export default Main;
