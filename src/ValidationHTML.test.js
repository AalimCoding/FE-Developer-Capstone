import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { BrowserRouter } from "react-router-dom";


test('Check each form input HTML element renders with the correct attributes.', () => {
    //I render the BookingForm inside a BrowserRouter component otherwise the useNavigate hook causes an error
    render(<BrowserRouter>
        <BookingForm />
    </BrowserRouter>);

    const chooseDate = screen.getByLabelText("*Choose date");
    expect(chooseDate).toHaveAttribute('required');

    const chooseTime = screen.getByLabelText("*Choose time");
    expect(chooseTime).toHaveAttribute('required');

    const chooseGuests = screen.getByLabelText("*Number of guests");
    expect(chooseGuests).toHaveAttribute('required');
    expect(chooseGuests).toHaveAttribute('min', '1');
    expect(chooseGuests).toHaveAttribute('max', '10');


})