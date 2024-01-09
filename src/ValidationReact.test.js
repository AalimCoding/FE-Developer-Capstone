import { fireEvent, render, screen, act, waitFor } from "@testing-library/react";
import BookingForm from './BookingForm';
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

// Thanks to Brian Adamas on stackoverflow: 'jest tests in an environment provided by jsdom but this doesn't implement window.alert so we must provide empty implementation to prevent an error when window.alert is called.
window.alert = () => { };

function dispatch() { console.log('Dispatch') }



describe('Test the React validation works.', () => {

    test('Check that the form is successfullly submmitted if fields are correctly filled in.', async () => {
        const mockSubmitForm = jest.fn(() => true);
        const { getByLabelText, getByRole, getByText, getByTestId } = render(<BrowserRouter><BookingForm submitForm={mockSubmitForm} dispatch={dispatch} availableTimes={['10:00', '11:00', '12:00', '14:00', '15:00', '16:00']} /></BrowserRouter>);

        const chooseDate = screen.getByLabelText("*Choose date");
        const chooseTime = screen.getByLabelText("*Choose time");
        const chooseGuests = screen.getByLabelText("*Number of guests");
        const submitButton = screen.getByRole('button');

        await act(async () => {
            fireEvent.change(chooseDate, { target: { value: '2023-10-14' } });
            await waitFor(() => {
                expect(chooseDate.value).toBe('2023-10-14');
            });
        })


        await act(async () => {
            userEvent.selectOptions(chooseTime, ['12:00']);
            await waitFor(() => {
                expect(chooseTime.value).toBe('12:00');
            });
        });


        fireEvent.change(chooseGuests, { target: { value: "2" } });
        fireEvent.click(submitButton);

        expect(mockSubmitForm).toHaveBeenCalledWith("2023-10-14", "12:00", "2", "");
;
    });

    test('Forms display alert if no data is supplied', () => {
        const mockSubmitForm = jest.fn(() => false);
        const { getByLabelText, getByRole, getByTestId } = render(<BrowserRouter><BookingForm submitForm={mockSubmitForm} dispatch={dispatch} availableTimes={['10:00', '11:00', '12:00', '14:00', '15:00', '16:00']} /></BrowserRouter>);

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        const alertElement = getByTestId("alert");
        expect(alertElement).toBeInTheDocument();
        expect(alertElement).toHaveTextContent("Date is a required field!");
    });


    test('Form needs at least one guest', async () => {
        const mockSubmitForm = jest.fn(() => false);
        const { getByLabelText, getByRole, getByText, getByTestId } = render(<BrowserRouter><BookingForm submitForm={mockSubmitForm} dispatch={dispatch} availableTimes={['10:00', '11:00', '12:00', '14:00', '15:00', '16:00']} /></BrowserRouter>);

        const chooseGuests = screen.getByLabelText("*Number of guests");
        const chooseDate = screen.getByLabelText("*Choose date");
        const chooseTime = screen.getByLabelText("*Choose time");
        const submitButton = screen.getByRole('button');

        await act(async () => {
            fireEvent.change(chooseDate, { target: { value: '2023-10-14' } });
            await waitFor(() => {
                expect(chooseDate.value).toBe('2023-10-14');
            });
        })

        await act(async () => {
            userEvent.selectOptions(chooseTime, ['12:00']);
            await waitFor(() => {
                expect(chooseTime.value).toBe('12:00');
            });
        });



        fireEvent.change(chooseGuests, { target: { value: "0" } });
        fireEvent.click(submitButton);

        const alertElement = getByTestId("alert");
        expect(alertElement).toBeInTheDocument();
        expect(alertElement).toHaveTextContent("Oops! We need at least one guest to serve!");
    });

    test('Form needs less than 9 guests', async () => {
        const mockSubmitForm = jest.fn(() => false);
        const { getByLabelText, getByRole, getByText, getByTestId } = render(<BrowserRouter><BookingForm submitForm={mockSubmitForm} dispatch={dispatch} availableTimes={['10:00', '11:00', '12:00', '14:00', '15:00', '16:00']} /></BrowserRouter>);

        const chooseGuests = screen.getByLabelText("*Number of guests");
        const chooseDate = screen.getByLabelText("*Choose date");
        const chooseTime = screen.getByLabelText("*Choose time");
        const submitButton = screen.getByRole('button');

        await act(async () => {
            fireEvent.change(chooseDate, { target: { value: '2023-10-14' } });
            await waitFor(() => {
                expect(chooseDate.value).toBe('2023-10-14');
            });
        })

        await act(async () => {
            userEvent.selectOptions(chooseTime, ['12:00']);
            await waitFor(() => {
                expect(chooseTime.value).toBe('12:00');
            });
        });


        fireEvent.change(chooseGuests, { target: { value: "9" } });
        fireEvent.click(submitButton);
        const alertElement = getByTestId("alert");
        expect(alertElement).toBeInTheDocument();
        expect(alertElement).toHaveTextContent("Oops! We can't seat that many guests!");


    });
});

