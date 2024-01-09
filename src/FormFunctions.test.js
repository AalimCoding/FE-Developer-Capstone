import { fireEvent, render, screen } from "@testing-library/react";
import Main, { initializeTimes, updateTimesReducer } from "./Main";



describe("Check availableTimes reducer works", () => {


    test("Check initializeTimes works", () => {
        const initialState = initializeTimes;
        const expectedInitialState = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00",];
        expect(initialState.availableTimes).toEqual(expectedInitialState)

    });




    test("Check updateTimes works, i.e removes the selected time from availableTimes", () => {


        const initialState = {
            availableDate: '2023-09-09',
            availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        };
        const action = { type: "removeTime", time: "19:00" };

        const nextState = updateTimesReducer(initialState, action);

        expect(nextState.availableTimes).not.toContain("19:00");



    })
});
